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
module.exports = {
  npm_name: "@kissmybutton/motorcortex-ClipPromo",
  incidents: [
    {
      exportable: Intro,
      name: "Intro"
    },
    {
      exportable: Transition,
      name: "Transition"
    },
    {
      exportable: SlideDateOne,
      name: "SlideDateOne"
    },
    {
      exportable: SlideDateOneVid,
      name: "SlideDateOneVid"
    },
    {
      exportable: SlideDateTwo,
      name: "SlideDateTwo"
    },
    {
      exportable: Scrolslide,
      name: "Scrolslide"
    },
    {
      exportable: LtRslide,
      name: "LtRslide"
    },
    {
      exportable: BtTslide,
      name: "BtTslide"
    },
    {
      exportable: BtTslideDate,
      name: "BtTslideDate"
    },
    {
      exportable: LtRslideTop,
      name: "LtRslideTop"
    },
    {
      exportable: RtLslide,
      name: "RtLslide"
    }
  ]
};
