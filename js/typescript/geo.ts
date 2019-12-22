import map from "./map";

export default class Geographie{


    getMap(){
        var params =
        $.ajax({
                type: "POST",
                url: "core/back/script/getQuestionGeo.php",
                success: function(data: any) {
                    $("#question").empty()
                    $("#question").append(data[0])
                    
                    var _map = new map()
                    let bool = parseInt(data[2])
                    let notOnlyOne = undefined
                    if( bool == 1){
                        notOnlyOne = true
                    }
                    let france = _map.france_map(data[1], notOnlyOne);
                    _map.getCodeDepartement(france, data[4], data[5]);
                            },
                    });
        return params
    }

    
    
}
