var $ = require("jquery");
require('jvectormap-next')($);
require("../../core/front/jqueryvectormap/jquery-jvectormap-fr-merc");
require("../../core/front/jqueryvectormap/jquery-jvectormap-fr_regions-merc");

require("../../node_modules/jvectormap-next/jquery-jvectormap.css");

export default class map{
    france_map(mapType : string, notOnlyOne?: boolean){
        var mapParam = {
            map : "",
            regionsSelectable: true,
            regionsSelectableOne: true,
            onRegionTipShow: function () {
                return false;
            },
        };
        if (mapType == "fr_dep"){ 
            mapParam.map = "fr_merc";
        }
        if (mapType == "fr_reg"){ 
            mapParam.map = "fr_regions_2016_merc";
        }
        if (notOnlyOne){ 
            mapParam.regionsSelectableOne = false
        }

        $("#container-map-selector").vectorMap(mapParam);
        var map = $('#container-map-selector').vectorMap('get', 'mapObject');
        return map
    }

    getResult(map: any, responseType: string, notOnlyOne?: boolean){
        $("#test").click(function () {
            if(map){
                var region = map.getSelectedRegions()
                console.log("region", region)
                let data = region
                if(!notOnlyOne){
                    data = region[0]
                }
                $.ajax({
                    type: "POST",
                    url: "core/back/script/departement.php",
                    data: {
                        d: data, 
                        t: responseType
                    },
                    success: function(data: string) {
                        $("#result").empty()
                        if(data){
                            if(notOnlyOne){
                                for (var i = 0; i < data.length; i++) {
                                    $("#result").append(data)
                                }
                                
                            }
                            $("#result").append(data)
                        }
                    },
                });
            }
        });
    }
}

