//import map from "./map";

import Geographie from "./geo";

$(document).ready(function () {
    $( "#gen" ).click(function() {
        $("#container-map-selector").empty();
        var x = new Geographie;
        x.getMap();
    });
});