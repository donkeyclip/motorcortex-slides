import MotorCortex from "@kissmybutton/motorcortex";
import Player from "@kissmybutton/motorcortex-player";
const PromoPlugin = require("../src/");
const Clip = MotorCortex.loadPlugin(PromoPlugin);

const css = `
  body { 
    background-color : white; 
  }              
  .container,.container2,.container3,.container4 {
    width: 1920px;
    height: 1080px;
    overflow: hidden;
    display: flex;
    position: absolute;
  }
`;

const html = ` 
  <div>
    <div class="container container1"></div>
    <div class="container container3"></div>
    <div class="container container2"></div>
    <div class="container container4"></div>
    <div class="container container6"></div>
    <div class="container container5"></div>
    <div class="container container7"></div>
    <div class="container container8"></div>
    <div class="container container9"></div>
    <div class="container container10"></div>
    <div class="container container11"></div>
    <div class="container container12"></div>
    <div class="container container13"></div>
    <div class="container container14"></div>
    <div class="container container15"></div>
    <div class="container container16"></div>
  </div>
`;

const host = document.getElementById("clip");

const containerParams = {
  width: "1920px",
  height: "1080px"
};

const overlay = ["#101820D7", "#101820FF"];
const main = "#FEE715FF";

const clip = new MotorCortex.HTMLClip({
  css,
  html,
  host,
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css?family=Roboto+Mono:100,300,400,500,700&display=swap`
    }
  ],
  containerParams,
  id: "root"
});

const introClip = new Clip.Intro(
  {
    title: "Demo",
    subtitle: "Promo Plugin",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
    eveniet eosdsdawdw numquam facilis libero iure natus, voluptatibus
    deserunt laboriosam, perspiciatis consequatur nostrum.`,
    month: "December",
    bgUrl:
      "https://kissmybutton.github.io/motorcortex-slides/demo/assets/kissmybutonbg.jpg",
    overlayColor: overlay,
    mainColor: main,
    speed: 2
  },
  {
    selector: ".container1"
  }
);

const dayOne = new Clip.SlideDateOneVid(
  {
    title: ["the", "MOTORCORTEX TEAM", "Presents"],
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
    eveniet eosdsdawdw numquam facilis libero iure natus, voluptatibus
    deserunt laboriosam, perspiciatis consequatur nostrum.`,
    bgUrl:
      "https://kissmybutton.github.io/motorcortex-slides/demo/assets/kissmybutonbg.jpg",
    overlayColor: overlay,
    mainColor: main,
    bgUrl2:
      "https://kissmybutton.github.io/motorcortex-slides/demo/assets/bg2.jpg",
    month: "December",
    day: `monday`,
    dayNumber: 20,
    year: 2019,
    speed: 2,
    vidDuration: 6000,
    vidLink: [
      "https://kissmybutton.github.io/motorcortex-slides/demo/assets/vid.mp4"
    ]
  },
  {
    selector: ".container3"
  }
);

const scrolPresenter = new Clip.Scrolslide(
  {
    title: "Presenter",
    name: "name surname",
    position: "Web developer at kissmybuton",
    bgUrl:
      "https://kissmybutton.github.io/motorcortex-slides/demo/assets/bg3.jpg",
    overlayColor: overlay,
    mainColor: main,
    speed: 2
  },
  {
    selector: ".container4"
  }
);

const ltrPresenter = new Clip.LtRslide(
  {
    title: "Presenter",
    name: "name surname",
    position: "Web developer at kissmybuton",
    bgUrl:
      "https://kissmybutton.github.io/motorcortex-slides/demo/assets/bg4.jpg",
    overlayColor: overlay,
    mainColor: main,
    speed: 2
  },
  {
    selector: ".container6"
  }
);

const dayTwo = new Clip.SlideDateTwo(
  {
    title: "Presenter",
    name: "name surname",
    position: "Web developer at kissmybuton",
    bigTitle: "Event",
    bgUrl:
      "https://kissmybutton.github.io/motorcortex-slides/demo/assets/bg5.jpg",
    overlayColor: overlay,
    dateOverlay: "#ff00b3",
    mainColor: "#00ff40",
    bgUrl2:
      "https://kissmybutton.github.io/motorcortex-slides/demo/assets/bg2.jpg",
    month: "December",
    day: `monday`,
    dayNumber: 22,
    year: 2019,
    speed: 2
  },
  {
    selector: ".container7"
  }
);

const bttPresenter = new Clip.BtTslide(
  {
    title: "Presenter",
    name: "name surname",
    position: "Web developer at kissmybuton",
    bgUrl:
      "https://kissmybutton.github.io/motorcortex-slides/demo/assets/bg4.jpg",
    overlayColor: overlay,
    mainColor: main,
    speed: 2
  },
  {
    selector: ".container10"
  }
);

const bttDay = new Clip.BtTslideDate(
  {
    title: "PresenterTEST",
    name: "name surname",
    position: "Web developer at kissmybuton",
    bgUrl:
      "https://kissmybutton.github.io/motorcortex-slides/demo/assets/bg3.jpg",
    overlayColor: overlay,
    dateOverlay: "#ff00b3",
    mainColor: "#00ff40",
    bgUrl2:
      "https://kissmybutton.github.io/motorcortex-slides/demo/assets/bg2.jpg",
    month: "December",
    day: `monday`,
    dayNumber: 21,
    year: 2019,
    speed: 2
  },
  {
    selector: ".container16"
  }
);

clip.addIncident(introClip, 0);
clip.addIncident(dayOne, clip.calculatedDuration - 2000);
clip.addIncident(scrolPresenter, clip.calculatedDuration - 2000);
clip.addIncident(ltrPresenter, clip.calculatedDuration - 2000);
clip.addIncident(dayTwo, clip.calculatedDuration - 2000);
clip.addIncident(bttDay, clip.calculatedDuration - 2000);
clip.addIncident(bttPresenter, clip.calculatedDuration - 2000);

new Player({ clip });
