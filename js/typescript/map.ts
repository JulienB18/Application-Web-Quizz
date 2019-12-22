var $ = require("jquery");
require('jvectormap-next')($);
require("../../core/front/jqueryvectormap/jquery-jvectormap-fr-merc");
require("../../core/front/jqueryvectormap/jquery-jvectormap-fr_regions-merc");

require("../../node_modules/jvectormap-next/jquery-jvectormap.css");

export default class map{
    france_map(mapType : string, notOnlyOne?: boolean){
        var dep_fr = {
            map : "",
            regionsSelectable: true,
            regionsSelectableOne: true,
            onRegionTipShow: function () {
                return false;
            },
        };
        if (mapType == "fr_dep"){ 
            dep_fr.map = "fr_merc";
        }
        if (mapType == "fr_reg"){ 
            dep_fr.map = "fr_regions_2016_merc";
        }
        if (notOnlyOne){ 
            dep_fr.regionsSelectableOne = false
        }

        $("#container-map-selector").vectorMap(dep_fr);
        var map = $('#container-map-selector').vectorMap('get', 'mapObject');
        return map
    }

    getCodeDepartement(map: any, responseType: string, reponse: string){
        $("#test").click(function () {
            //console.log(map.getSelectedRegions())
            if(map){
                var region = map.getSelectedRegions()
                console.log("region", region)
                console.log("reponse", reponse)
                $.ajax({
                    type: "POST",
                    url: "core/back/script/departement.php",
                    data: {d: region[0], t: responseType},
                    success: function(data: string) {
                        $("#result").empty()
                        if(data)
                        $("#result").append(data)
                    },
                });
            }
        });
    }
}

