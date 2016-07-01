(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = require("./index.js");

},{"./index.js":2}],2:[function(require,module,exports){
module.exports = spinner = require("./src/spinner.js");

},{"./src/spinner.js":3}],3:[function(require,module,exports){
var spinner = function () {
   "use strict";
    var conf = {
        size: 50,
        stroke: 3,
        cssClass: "cttv-spinner-component",
        angle: Math.PI
    };


    var render = function (div) {

        var offset = ~~(conf.size/2);

    	var container = d3.select(div);
    	container.selectAll("*").remove();


    	var svg = container.append("svg")
    	    .attr("width", conf.size)
    	    .attr("height", conf.size)
            .attr("class", conf.cssClass)
    	    .append("g");


        var arc = d3.svg.arc()
            .innerRadius(offset - conf.stroke)
            .outerRadius(offset)
            .startAngle(0) //converting from degs to radians
            .endAngle(conf.angle)  // 180deg


        svg.append("path")
            .attr("d", arc)
            .attr("transform", "translate("+offset+","+offset+")")


    };

    render.size = function(s){
        if (!arguments.length) {
            return conf.size;
        }
        conf.size = s;
        return this;
    }

    render.stroke = function(s){
        if (!arguments.length) {
            return conf.stroke;
        }
        conf.stroke = s;
        return this;
    }

    // angle in radians (PI = 180deg)
    render.angle = function(s){
        if (!arguments.length) {
            return conf.angle;
        }
        conf.angle = s;
        return this;
    }

    return render;
};

module.exports = exports = spinner;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWduYXRlbGxpL3NyYy9yZXBvcy9jdHR2LnNwaW5uZXIvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL3BpZ25hdGVsbGkvc3JjL3JlcG9zL2N0dHYuc3Bpbm5lci9mYWtlXzZkMGI3MzEwLmpzIiwiL1VzZXJzL3BpZ25hdGVsbGkvc3JjL3JlcG9zL2N0dHYuc3Bpbm5lci9pbmRleC5qcyIsIi9Vc2Vycy9waWduYXRlbGxpL3NyYy9yZXBvcy9jdHR2LnNwaW5uZXIvc3JjL3NwaW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHNwaW5uZXIgPSByZXF1aXJlKFwiLi9zcmMvc3Bpbm5lci5qc1wiKTtcbiIsInZhciBzcGlubmVyID0gZnVuY3Rpb24gKCkge1xuICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgdmFyIGNvbmYgPSB7XG4gICAgICAgIHNpemU6IDUwLFxuICAgICAgICBzdHJva2U6IDMsXG4gICAgICAgIGNzc0NsYXNzOiBcImN0dHYtc3Bpbm5lci1jb21wb25lbnRcIixcbiAgICAgICAgYW5nbGU6IE1hdGguUElcbiAgICB9O1xuXG5cbiAgICB2YXIgcmVuZGVyID0gZnVuY3Rpb24gKGRpdikge1xuXG4gICAgICAgIHZhciBvZmZzZXQgPSB+fihjb25mLnNpemUvMik7XG5cbiAgICBcdHZhciBjb250YWluZXIgPSBkMy5zZWxlY3QoZGl2KTtcbiAgICBcdGNvbnRhaW5lci5zZWxlY3RBbGwoXCIqXCIpLnJlbW92ZSgpO1xuXG5cbiAgICBcdHZhciBzdmcgPSBjb250YWluZXIuYXBwZW5kKFwic3ZnXCIpXG4gICAgXHQgICAgLmF0dHIoXCJ3aWR0aFwiLCBjb25mLnNpemUpXG4gICAgXHQgICAgLmF0dHIoXCJoZWlnaHRcIiwgY29uZi5zaXplKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBjb25mLmNzc0NsYXNzKVxuICAgIFx0ICAgIC5hcHBlbmQoXCJnXCIpO1xuXG5cbiAgICAgICAgdmFyIGFyYyA9IGQzLnN2Zy5hcmMoKVxuICAgICAgICAgICAgLmlubmVyUmFkaXVzKG9mZnNldCAtIGNvbmYuc3Ryb2tlKVxuICAgICAgICAgICAgLm91dGVyUmFkaXVzKG9mZnNldClcbiAgICAgICAgICAgIC5zdGFydEFuZ2xlKDApIC8vY29udmVydGluZyBmcm9tIGRlZ3MgdG8gcmFkaWFuc1xuICAgICAgICAgICAgLmVuZEFuZ2xlKGNvbmYuYW5nbGUpICAvLyAxODBkZWdcblxuXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgYXJjKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIrb2Zmc2V0K1wiLFwiK29mZnNldCtcIilcIilcblxuXG4gICAgfTtcblxuICAgIHJlbmRlci5zaXplID0gZnVuY3Rpb24ocyl7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmYuc2l6ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25mLnNpemUgPSBzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZW5kZXIuc3Ryb2tlID0gZnVuY3Rpb24ocyl7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmYuc3Ryb2tlO1xuICAgICAgICB9XG4gICAgICAgIGNvbmYuc3Ryb2tlID0gcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gYW5nbGUgaW4gcmFkaWFucyAoUEkgPSAxODBkZWcpXG4gICAgcmVuZGVyLmFuZ2xlID0gZnVuY3Rpb24ocyl7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmYuYW5nbGU7XG4gICAgICAgIH1cbiAgICAgICAgY29uZi5hbmdsZSA9IHM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiByZW5kZXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBzcGlubmVyO1xuIl19
