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

module.exports = {
  npm_name: "@kissmybutton/motorcortex-slides",
  incidents: [
    {
      exportable: Intro,
      name: "Intro",
      attributesValidationRules: attrs.intro
    },
    {
      exportable: Transition,
      name: "Transition",
      attributesValidationRules: attrs.transition
    },
    {
      exportable: SlideDateOne,
      name: "SlideDateOne",
      attributesValidationRules: attrs.SlideDateOne
    },
    {
      exportable: SlideDateOneVid,
      name: "SlideDateOneVid",
      attributesValidationRules: attrs.SlideDateOneVid
    },
    {
      exportable: SlideDateTwo,
      name: "SlideDateTwo",
      attributesValidationRules: attrs.SlideDateTwo
    },
    {
      exportable: Scrolslide,
      name: "Scrolslide",
      attributesValidationRules: attrs.prisenter
    },
    {
      exportable: LtRslide,
      name: "LtRslide",
      attributesValidationRules: attrs.prisenter
    },
    {
      exportable: BtTslide,
      name: "BtTslide",
      attributesValidationRules: attrs.prisenter
    },
    {
      exportable: BtTslideDate,
      name: "BtTslideDate",
      attributesValidationRules: attrs.BtTslideDate
    },
    {
      exportable: LtRslideTop,
      name: "LtRslideTop",
      attributesValidationRules: attrs.prisenter
    },
    {
      exportable: RtLslide,
      name: "RtLslide",
      attributesValidationRules: attrs.prisenter
    }
  ]
};
