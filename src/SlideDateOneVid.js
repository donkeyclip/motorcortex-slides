import { CSSEffect, HTMLClip, loadPlugin } from "@donkeyclip/motorcortex";
import MCVideo from "@kissmybutton/motorcortex-video";
const VideoPlugin = loadPlugin(MCVideo);

export default class SlideDateOneVid extends HTMLClip {
  dinamicFontSize(lc, width) {
    let fontsize;
    fontsize = width / 0.6 / lc;
    if (fontsize >= 200 && width === 720) {
      fontsize = 200;
    }
    if (fontsize >= 100 && width === 360) {
      fontsize = 100;
    }
    return fontsize;
  }

  get html() {
    return `
      <div class="parent">
        <div class="bg ">
          <div class ="vid"></div>
          <div class="second-slide">
            <div class="second-slide-titleOne">${this.attrs.title[0]}</div>
            <div class="second-slide-titleTwo">${this.attrs.title[1]}</div>
            <div class="second-slide-titleTwo">${this.attrs.title[2]}</div>
            <div class="word-bg">
              <div class="word"></div>
            </div>
            <div class="short-description">
              <p>
               ${this.attrs.description}
              </p>
            </div>
          </div>
        </div>
        <div class="bg-second ">
          <div class="bg-second-slide">
              <div class="second-date-container">
                  <div class="second-date"><span> ${this.attrs.day || ""} ${
      this.attrs.dayNumber || ""
    } </span>${this.attrs.month || ""} ${this.attrs.year || ""}</div>
              </div>
          </div>
        </div>
      </div>
    `;
  }

  get css() {
    return `
      .bg,.bg-second {
        width: 1920px;
        height: 1080px;
        background-image: url(${
          this.attrs.bgUrl ||
          "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg3.jpg"
        });
        background-size: 1920px;
        background-position: center;
        transform: scale(1);
        display: flex;
        position: absolute;
        align-items: center;
        flex-wrap: wrap;
        flex: 1 0 auto;
        left: -100%
      }

      .parent{
        position:relative;
        width: 1920px;
        height: 1080px;
        left:0%;
      }

      .bg:after,.bg-second:after {
        content: "";
        display: block;
        background: linear-gradient(${
          this.attrs.overlayColor || "#101820D7,#101820FF"
        });
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: -1;
      }

      .bg-second{
        left:100%;
        background-image: url(${
          this.attrs.bgUrl2 ||
          "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg2.jpg"
        });
      }

      .vid{
        position: absolute;
        top: 0;
        left: 0;
        width: 1920px;
        height: 1080px;
      }

      .short-description{
        font-size: 20px;
        color: #fff;
        position: relative;
        white-space: normal;
        text-align: left;
        text-transform: uppercase;
        font-family: 'Roboto Mono', monospace;
        width: 720px;
        left: -50%;
      }

      .word-bg{
        background-color:${this.attrs.mainColor || "#00ff40"};
        width: 720px;
        position: relative;
        left: -50%
      }

      .word{
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 720px
      }

      .second-slide-titleTwo,.second-slide-titleOne{
        font-size: ${this.dinamicFontSize(this.attrs.title[0].length, 360)}px;
        font-weight: 700;
        font-family: 'Roboto Mono', monospace;
        text-transform: uppercase;
        color: #fff;
        position: relative;
        left : -50%;
      }

      .second-slide-titleTwo{
        font-size: ${this.dinamicFontSize(this.attrs.title[1].length, 720)}px;
      }

      .second-slide-titleOne{
        color :${this.attrs.mainColor || "#00ff40"}
      }

      .second-slide{
        position: absolute;
        left: 10%;
        display: flex;
        align-content: center;
        justify-content: center;
        flex-direction: column;
        top: 20%;
        transform: scale(1);
      }

      .letter{
        font-size: ${this.dinamicFontSize(this.attrs.title[2].length, 720)}px;
        font-weight: 700;
        font-family: 'Roboto Mono', monospace;
        text-transform: uppercase;
        color: #fff;
        position: relative;
        position: relative;
        text-align: center;
        top : 300px;
        width: 100%;
      }

      .second-date-container{
        border-left: 100px solid ${this.attrs.mainColor || "#00ff40"};
        overflow: hidden;
        width: 200%;
      }

      .second-date{
        font-size: 100px;
        color: #fff;
        position: relative;
        white-space: nowrap;
        text-align: left;
        text-transform: uppercase;
        font-family: 'Roboto Mono', monospace;
        width: 720px;
        left:-100%;
      }
    
      .second-date span{
        color: ${this.attrs.mainColor};
      }
    `;
  }

  buildTree() {
    const VideoClip = new VideoPlugin.Clip(
      {
        sources: this.attrs.vidLink,
        width: 1920,
        height: 1080,
        startFrom: 0,
      },
      {
        selector: ".vid", // or host: your-host
      }
    );

    const Playback = new VideoPlugin.Playback({
      selector: "!#video",
      duration: this.attrs.vidDuration || 6000,
    });

    this.addIncident(VideoClip, 0);
    VideoClip.addIncident(Playback, 0);

    const delay = (this.attrs.vidDuration || 6000) - 3000 * 2;

    const array = this.attrs.title[2].split("");

    let html3;

    const containerParams = {
      width: "100%",
      height: "100%",
    };

    for (let i = 0; i < array.length; i++) {
      const html = `<span class='letter letter${i + 1}'>${array[i]}</span>`;
      html3 = html3 + html;
    }

    const word = new HTMLClip({
      css: this.css,
      html: ` <div class="conttitle" >${html3.split("undefined")[1]} </div>`,
      selector: ".word",
      containerParams,
    });

    this.addIncident(word, 0);

    for (let i = 0; i < array.length; i++) {
      const textAnimation = new CSSEffect(
        {
          animatedAttrs: {
            top: "0px",
            opacity: 1,
          },
          attrs: {},
        },
        {
          duration: 500,
          selector: ".letter" + (i + 1),
          easing: "easeOutQuad",
        }
      );

      word.addIncident(textAnimation, (2000 + 100 * (i + 1)) * 2);
    }

    const bgMove = new CSSEffect(
      {
        animatedAttrs: {
          left: "0%",
        },
        initialValues: {
          left: "-100%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".bg",
        easing: "easeOutQuad",
      }
    );

    const secondSlideTitleOne = new CSSEffect(
      {
        animatedAttrs: {
          left: "0%",
        },
        initialValues: {
          left: "-50%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".second-slide-titleOne",
        easing: "easeOutQuad",
      }
    );

    const secondSlideTitleTwo = new CSSEffect(
      {
        animatedAttrs: {
          left: "0%",
        },
        initialValues: {
          left: "-50%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".second-slide-titleTwo",
        easing: "easeOutQuad",
      }
    );

    const wordBg = new CSSEffect(
      {
        animatedAttrs: {
          left: "0%",
        },
        initialValues: {
          left: "-50%",
        },
        attrs: {},
      },
      {
        duration: 2400,
        selector: ".word-bg",
        easing: "easeOutQuad",
      }
    );

    const shortDescription = new CSSEffect(
      {
        animatedAttrs: {
          left: "0%",
        },
        initialValues: {
          left: "-50%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".short-description",
        easing: "easeOutQuad",
      }
    );

    const bgscaledown = new CSSEffect(
      {
        animatedAttrs: {
          transform: {
            scale: 0.5,
          },
        },
        initialValues: {
          transform: {
            scale: 1,
          },
        },
        attrs: {},
      },
      {
        duration: 1000,
        selector: ".bg,.bg-second",
        easing: "easeOutQuad",
      }
    );

    const bgscaledownMove = new CSSEffect(
      {
        animatedAttrs: {
          left: "-25%",
        },
        initialValues: {
          left: "0%",
        },
        attrs: {},
      },
      {
        duration: 1000,
        selector: ".bg",
        easing: "easeOutQuad",
      }
    );

    const bgsecondscaledownMove = new CSSEffect(
      {
        animatedAttrs: {
          left: "25%",
        },
        initialValues: {
          left: "100%",
        },
        attrs: {},
      },
      {
        duration: 1000,
        selector: ".bg-second",
        easing: "easeOutQuad",
      }
    );

    const secondBgDate = new CSSEffect(
      {
        animatedAttrs: {
          left: "5%",
        },
        initialValues: {
          left: "-100%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".second-date",
        easing: "easeOutQuad",
      }
    );

    const moveSecondS = new CSSEffect(
      {
        animatedAttrs: {
          left: "-100%",
        },
        initialValues: {
          left: "0%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".parent",
        easing: "easeOutQuad",
      }
    );

    this.addIncident(bgMove, 0);
    this.addIncident(secondSlideTitleOne, 600);
    this.addIncident(secondSlideTitleTwo, 1000);
    this.addIncident(wordBg, 1000);
    this.addIncident(shortDescription, 1800);
    this.addIncident(bgscaledown, 7400 + delay);
    this.addIncident(bgscaledownMove, 7400 + delay);
    this.addIncident(bgsecondscaledownMove, 7400 + delay);
    this.addIncident(secondBgDate, 7400 + delay);
    this.addIncident(moveSecondS, this.calculatedDuration + 2000);
  }
}
