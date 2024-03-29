import { CSSEffect, HTMLClip } from "@donkeyclip/motorcortex";

export default class SlideDateTwo extends HTMLClip {
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
    <div>
      <div class="bg">
        <div class="bg-deferi-day-slide">
          <div class="big-title">${this.attrs.bigTitle}</div>
          <div class="test-mask ">
            <div class="defter-date-container">
              <div class="defter-date"><span> ${this.attrs.day || ""} ${
      this.attrs.dayNumber
    } </span>${this.attrs.month || ""} ${this.attrs.year || ""}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-second bg-small">
        <div class="bg-second-slide">
          <div class="quarter-first-presenter-slide">
          <div class="quarter-left">
            <div class="quarter-presenter-container">
              <div class="quarter-presenter presenter">${this.attrs.title}</div>
            </div>
            <div class="name-container">${this.attrs.name}</div>
            <div class="position-container">${this.attrs.position}</div>
          </div>
        </div>
        </div>
      </div>
      <div class="bg-second bg-big ">
        <div class="bg-second-slide">
          <div class="quarter-first-presenter-slide">
          <div class="quarter-left">
            <div class="quarter-presenter-container">
              <div class="quarter-presenter presenter">${this.attrs.title}</div>
            </div>
            <div class="name-container">${this.attrs.name}</div>
            <div class="position-container">${this.attrs.position}</div>
          </div>
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
          "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg5.jpg"
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

      .bg-big{
        left: 100%;
      }

      .bg-second-slide,.bg-third-slide,.bg-quarter-slide,.bg-deferi-day-slide{
        height: 1080px;
        width: 1920px;
        display: flex;
        align-items: center;
        overflow: hidden;
      }

      .bg-deferi-day-slide{
        overflow: hidden;
      }

      .bg-second-slide{
        justify-content: center;
      }

      .presenter,.big-title{
        font-weight: 700;
        font-family: 'Roboto Mono', monospace;
        text-transform: uppercase;
        color: ${this.attrs.mainColor || "#00ff40"};
      }
    
      .big-title{
        font-size: 1700px;
        position: relative;
      }

      .test-mask{
        position: absolute;
        left: 0;
        height: 132.5px;
        background-size: 1920px;
        position: absolute;
        left: 0
      }
    
      .test-mask{
        height: 132.5px;
        width: 50%;
        background-image: url(${
          this.attrs.bgUrl ||
          "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg5.jpg"
        });
        background-size: 1920px;
        background-position: center;
        background-position-x: center;
        transform: scale(1);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        overflow: hidden;
        left: 25%;
        background-position-x: center;  
      }

      .test-mask:after{ 
        content: "";
        display: block;
        background: #4e070799;
        width: 1920px;
        height: 1080px;
        position: absolute;
        top: -458px;
        left: 0;
        z-index: -2;
        background: linear-gradient(${
          this.attrs.overlayColor || "#101820D7,#101820FF"
        });
        top: -345%;
      }

      .defter-date-container{
        position: absolute;
        font-size: 60px;
        color: #fff;
        white-space: nowrap;
        text-transform: uppercase;
        font-family: 'Roboto Mono', monospace;
        background:${this.attrs.dateOverlay || "#ff00b3"};   
        padding: 2% 6%;
        background-blend-mode: multiply;
        background-image: url(${
          this.attrs.bgUrl ||
          "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg5.jpg"
        });
        background-size: 1920px;
        background-position: center;
        transform: scale(1);
      }

      .quarter-presenter-container{
        overflow: hidden;
      }

      .quarter-first-presenter-slide{
        margin-bottom: 15%;
        border-top: 15px solid ${this.attrs.mainColor || "#00ff40"};
        position: relative;
        top: 90%;
        overflow: hidden;
      }

      .quarter-left{
        display: flex;
        flex-direction: column;
        align-items: center;
        position : relative;
        top: 90%;
      }

      .name-container,.position-container{
        font-weight: 700;
        font-family: 'Roboto Mono', monospace;
        text-transform: uppercase;
        color: #fff;
      }

      .name-container{
        font-size: ${this.dinamicFontSize(this.attrs.name.length, 360)}px;
      }

      .position-container{
        font-size: ${this.dinamicFontSize(this.attrs.position.length, 360)}px;
      }

      .bg-quarter-slide{
        height: 1080px;
        width: 1920px;
        display: flex;
        align-items: center;
      }

      .bg-quarter-slide{
        align-items: flex-end;
      }

      .quarter-presenter{
        font-size: ${this.dinamicFontSize(this.attrs.title.length, 720)}px;
      }
    `;
  }

  buildTree() {
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
        easing: "easeOutCubic",
      }
    );

    const secondSlide = new CSSEffect(
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
        selector: ".second-slide",
        easing: "easeOutCubic",
      }
    );

    const bigTitle = new CSSEffect(
      {
        animatedAttrs: {
          left: "-1500px",
        },
        initialValues: {
          left: "0px",
        },
      },
      {
        duration: 14800,
        selector: ".big-title",
        easing: "easeOutCubic",
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
        selector: ".bg,.bg-small",
        easing: "easeOutCubic",
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
        duration: 500,
        selector: ".bg",
        easing: "easeOutCubic",
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
        selector: ".bg-small",
        easing: "easeOutCubic",
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
        easing: "easeOutCubic",
      }
    );

    const moveSecond = new CSSEffect(
      {
        animatedAttrs: {
          left: "-175%",
        },
        initialValues: {},
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".bg-small,.bg",
        easing: "easeOutCubic",
      }
    );

    const movePresenterSlide = new CSSEffect(
      {
        animatedAttrs: {
          top: "0%",
        },
        initialValues: {
          top: "90%",
        },
        attrs: {},
      },
      {
        duration: 3000,
        selector: ".quarter-first-presenter-slide",
        easing: "easeOutCubic",
      }
    );

    const movePresenterSlideLeft = new CSSEffect(
      {
        animatedAttrs: {
          top: "0%",
        },
        initialValues: {
          top: "90%",
        },
        attrs: {},
      },
      {
        duration: 3000,
        selector: ".quarter-left",
        easing: "easeOutCubic",
      }
    );

    const moveBig = new CSSEffect(
      {
        animatedAttrs: {
          left: "0%",
        },
        initialValues: {
          left: "100%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".bg-big",
        easing: "easeOutCubic",
      }
    );

    const moveBigOut = new CSSEffect(
      {
        animatedAttrs: {
          top: "-100%",
        },
        initialValues: {
          top: "0%",
        },
      },
      {
        duration: 2000,
        selector: ".bg-big",
        easing: "easeOutQuad",
      }
    );

    this.addIncident(bgMove, 0);
    this.addIncident(secondSlide, 1000);
    this.addIncident(bigTitle, 0);
    this.addIncident(bgscaledown, 7400);
    this.addIncident(bgscaledownMove, 7400);
    this.addIncident(bgsecondscaledownMove, 7400);
    this.addIncident(secondBgDate, 7400);
    this.addIncident(movePresenterSlide, 7400);
    this.addIncident(movePresenterSlideLeft, 8000);
    this.addIncident(moveSecond, this.calculatedDuration - 6000);
    this.addIncident(moveBig, this.calculatedDuration - 6400);
    this.addIncident(moveBigOut, this.calculatedDuration + 2000);
  }
}
