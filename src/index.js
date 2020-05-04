const Intro = require("./Intro");
const Transition = require("./Transition");
const SlideDateOne = require("./SlideDateOne");
const Scrolslide = require("./Scrolslide");
const LtRslide = require("./LtRslide");
const SlideDateTwo = require("./SlideDateTwo");
const BtTslide = require("./BtTslide");
const BtTslideDate = require("./BtTslideDate");
const LtRslideTop = require("./LtRslideTop");
const RtLslide = require("./RtLslide");
const SlideDateOneVid = require("./SlideDateOneVid");
const attrs = require("./validation");
// import {attrs} from "./validation"

console.log(attrs.attrs, "AATTRS");
module.exports = {
  npm_name: "@kissmybutton/motorcortex-slides",
  incidents: [
    {
      exportable: Intro,
      name: "Intro",
      attributesValidationRules: attrs.attrs
    },
    {
      exportable: Transition,
      name: "Transition",
      attributesValidationRules: attrs.attrs
    },
    {
      exportable: SlideDateOne,
      name: "SlideDateOne",
      attributesValidationRules: attrs.attrs
    },
    {
      exportable: SlideDateOneVid,
      name: "SlideDateOneVid",
      attributesValidationRules: attrs.attrs
    },
    {
      exportable: SlideDateTwo,
      name: "SlideDateTwo",
      attributesValidationRules: attrs.attrs
    },
    {
      exportable: Scrolslide,
      name: "Scrolslide",
      attributesValidationRules: attrs.attrs
    },
    {
      exportable: LtRslide,
      name: "LtRslide",
      attributesValidationRules: attrs.attrs
    },
    {
      exportable: BtTslide,
      name: "BtTslide",
      attributesValidationRules: attrs.attrs
    },
    {
      exportable: BtTslideDate,
      name: "BtTslideDate",
      attributesValidationRules: attrs.attrs
    },
    {
      exportable: LtRslideTop,
      name: "LtRslideTop",
      attributesValidationRules: attrs.attrs
    },
    {
      exportable: RtLslide,
      name: "RtLslide",
      attributesValidationRules: attrs.attrs
    }
  ]
};
