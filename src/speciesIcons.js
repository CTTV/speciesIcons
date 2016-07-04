var iconPaths = require("./icons.js");
var api = require("tnt.api");

var speciesIcons = function () {

    var conf = {
        species: "human",
        size: 30,
        color: "black"
    };

    var render = function (container) {
        d3.select(container)
            .append("g")
            .attr("transform", "scale(" + (conf.size/1000) + ") rotate(180, 500, 500)")
            .append("path")
            .attr("d", iconPaths[conf.species])
            .attr("fill", conf.color);
    };

    var apijs = api(render)
        .getset(conf)
        .get("supported", Object.keys(iconPaths));

    return render;
};

module.exports = exports = speciesIcons;
