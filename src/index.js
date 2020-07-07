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
      attributesValidationRules: attrs.intro,
      originalDims: {
        width: "1920px",
        height: "1080px"
      }
    },
    {
      exportable: Transition,
      name: "Transition",
      attributesValidationRules: attrs.transition,
      originalDims: {
        width: "1920px",
        height: "1080px"
      }
    },
    {
      exportable: SlideDateOne,
      name: "SlideDateOne",
      attributesValidationRules: attrs.SlideDateOne,
      originalDims: {
        width: "1920px",
        height: "1080px"
      }
    },
    {
      exportable: SlideDateOneVid,
      name: "SlideDateOneVid",
      attributesValidationRules: attrs.SlideDateOneVid,
      originalDims: {
        width: "1920px",
        height: "1080px"
      }
    },
    {
      exportable: SlideDateTwo,
      name: "SlideDateTwo",
      attributesValidationRules: attrs.SlideDateTwo,
      originalDims: {
        width: "1920px",
        height: "1080px"
      }
    },
    {
      exportable: Scrolslide,
      name: "Scrolslide",
      attributesValidationRules: attrs.prisenter,
      originalDims: {
        width: "1920px",
        height: "1080px"
      }
    },
    {
      exportable: LtRslide,
      name: "LtRslide",
      attributesValidationRules: attrs.prisenter,
      originalDims: {
        width: "1920px",
        height: "1080px"
      }
    },
    {
      exportable: BtTslide,
      name: "BtTslide",
      attributesValidationRules: attrs.prisenter,
      originalDims: {
        width: "1920px",
        height: "1080px"
      }
    },
    {
      exportable: BtTslideDate,
      name: "BtTslideDate",
      attributesValidationRules: attrs.BtTslideDate,
      originalDims: {
        width: "1920px",
        height: "1080px"
      }
    },
    {
      exportable: LtRslideTop,
      name: "LtRslideTop",
      attributesValidationRules: attrs.prisenter,
      originalDims: {
        width: "1920px",
        height: "1080px"
      }
    },
    {
      exportable: RtLslide,
      name: "RtLslide",
      attributesValidationRules: attrs.prisenter,
      originalDims: {
        width: "1920px",
        height: "1080px"
      }
    }
  ]
};
