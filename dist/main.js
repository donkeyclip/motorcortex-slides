"use strict";

var Intro = require("./Intro");

var Transition = require("./Transition");

var SlideDateOne = require("./SlideDateOne");

var Scrolslide = require("./Scrolslide");

var LtRslide = require("./LtRslide");

var SlideDateTwo = require("./SlideDateTwo");

var BtTslide = require("./BtTslide");

var BtTslideDate = require("./BtTslideDate");

var LtRslideTop = require("./LtRslideTop");

var RtLslide = require("./RtLslide");

var SlideDateOneVid = require("./SlideDateOneVid");

module.exports = {
  npm_name: "@kissmybutton/motorcortex-ClipPromo",
  incidents: [{
    exportable: Intro,
    name: "Intro"
  }, {
    exportable: Transition,
    name: "Transition"
  }, {
    exportable: SlideDateOne,
    name: "SlideDateOne"
  }, {
    exportable: SlideDateOneVid,
    name: "SlideDateOneVid"
  }, {
    exportable: SlideDateTwo,
    name: "SlideDateTwo"
  }, {
    exportable: Scrolslide,
    name: "Scrolslide"
  }, {
    exportable: LtRslide,
    name: "LtRslide"
  }, {
    exportable: BtTslide,
    name: "BtTslide"
  }, {
    exportable: BtTslideDate,
    name: "BtTslideDate"
  }, {
    exportable: LtRslideTop,
    name: "LtRslideTop"
  }, {
    exportable: RtLslide,
    name: "RtLslide"
  }]
};