import Intro from "./Intro"
import Transition from "./Transition"
import SlideDateOne from "./SlideDateOne"
import Scrolslide from "./Scrolslide"
import LtRslide from "./LtRslide"
import SlideDateTwo from "./SlideDateTwo"
import BtTslide from "./BtTslide"
import BtTslideDate from "./BtTslideDate"
import LtRslideTop from "./LtRslideTop"
import RtLslide from "./RtLslide"
import SlideDateOneVid from "./SlideDateOneVid"
import {BtTslideDateintroVal,SlideDateOneVidintroVal,SlideDateOneintroVal,SlideDateTwointroVal,introintroVal,prisenterintroVal,transitionintroVal} from "./validation"

import {name,version}  from '../package.json'

export default {
  npm_name: name,
  version: version,
  incidents: [
    {
      exportable: Intro,
      name: "Intro",
      attributesValidationRules: introintroVal,
      originalDims: {
        width: "1920px",
        height: "1080px"
      }
    },
    {
      exportable: Transition,
      name: "Transition",
      attributesValidationRules: transitionintroVal,
      originalDims: {
        width: "1920px",
        height: "1080px"
      }
    },
    {
      exportable: SlideDateOne,
      name: "SlideDateOne",
      attributesValidationRules: SlideDateOneintroVal,
      originalDims: {
        width: "1920px",
        height: "1080px"
      }
    },
    {
      exportable: SlideDateOneVid,
      name: "SlideDateOneVid",
      attributesValidationRules: SlideDateOneVidintroVal,
      originalDims: {
        width: "1920px",
        height: "1080px"
      }
    },
    {
      exportable: SlideDateTwo,
      name: "SlideDateTwo",
      attributesValidationRules: SlideDateTwointroVal,
      originalDims: {
        width: "1920px",
        height: "1080px"
      }
    },
    {
      exportable: Scrolslide,
      name: "Scrolslide",
      attributesValidationRules: prisenterintroVal,
      originalDims: {
        width: "1920px",
        height: "1080px"
      }
    },
    {
      exportable: LtRslide,
      name: "LtRslide",
      attributesValidationRules: prisenterintroVal,
      originalDims: {
        width: "1920px",
        height: "1080px"
      }
    },
    {
      exportable: BtTslide,
      name: "BtTslide",
      attributesValidationRules: prisenterintroVal,
      originalDims: {
        width: "1920px",
        height: "1080px"
      }
    },
    {
      exportable: BtTslideDate,
      name: "BtTslideDate",
      attributesValidationRules: BtTslideDateintroVal,
      originalDims: {
        width: "1920px",
        height: "1080px"
      }
    },
    {
      exportable: LtRslideTop,
      name: "LtRslideTop",
      attributesValidationRules: prisenterintroVal,
      originalDims: {
        width: "1920px",
        height: "1080px"
      }
    },
    {
      exportable: RtLslide,
      name: "RtLslide",
      attributesValidationRules: prisenterintroVal,
      originalDims: {
        width: "1920px",
        height: "1080px"
      }
    }
  ]
};
