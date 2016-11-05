"use strict";

var React = require("react"),
    _     = require("lodash"),
    $     = require("jquery");

var VisualizationTemplate = require("../templates/components/visualization.jsx");

var Visualization = React.createClass({

  getInitialState: function () {
    var width = $(".mk-viz").width();
    var height = $(".mk-viz").height();
    return {
      selectedStates   : [],
      selectedIndicator: {},
      containerWidth: width || 800,
      containerHeight: height || 400
    };
  },
  handleResize: function(e) {
    var width = $(".mk-viz").width();
    var height = $(".mk-viz").height();
    this.setState({
      containerWidth: width,
      containerHeight: height
    });
  },

  componentWillUnmount: function() {
    window.removeEventListener("resize", this.handleResize);
  },
  componentDidMount: function () {
    window.addEventListener("resize", this.handleResize);
  
  },
  render: function () {
    return VisualizationTemplate(this);
  }

});

module.exports = Visualization;
