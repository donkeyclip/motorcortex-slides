import MotorCortex, { CSSEffect } from "@donkeyclip/motorcortex";

export default class BtTslideDate extends MotorCortex.HTMLClip {
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
    <div class="fragment">
      <div class="bg">
        <div class="bg-quarter-slide">
          <div class="quarter-first-presenter-slide">
            <div class="quarter-left">
              <div class="quarter-presenter-container">
                <div class="quarter-presenter presenter">${
                  this.attrs.title
                }</div>
              </div>
              <div class="name-container">${this.attrs.name}</div>
              <div class="position-container">${this.attrs.position}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-next">
        <div class="bg-quarter-slide">
          <div class="test-mask">
            <div class="defter-date-container">
              <div class="defter-date"><span> ${this.attrs.day || ""} ${
      this.attrs.dayNumber || ""
    } </span>${this.attrs.month || ""} ${this.attrs.year || ""}</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    `;
  }

  get css() {
    return `
      .fragment{
        position: relative
      }
      .bg {
        width: 100%;
        height: 100%;
        background-image: url(${
          this.attrs.bgUrl ||
          "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg3.jpg"
        });
        background-size: 1920px;
        background-position: center;
        transform: scale(1);
        display: flex;
        position: relative;
        align-items: center;
        flex-wrap: wrap;
        flex: 1 0 auto;
        top : 100%; 
      }

      .bg:after,.bg-next {
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

      .bg-next {
        width: 100%;
        height: 100%;
        background-size: 1920px;
        background-position: center;
        transform: scale(1);
        display: flex;
        position: absolute;
        align-items: center;
        flex-wrap: wrap;
        flex: 1 0 auto;
        left : -100%
      }

      .bg-next,.defter-date-container{
        background-image: url(${
          this.attrs.bgUrl2 ||
          "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg2.jpg"
        });
      }

      .defter-date-container{
        position: absolute;
        font-size: 60px;
        color:#fff;
        white-space: nowrap;
        text-transform: uppercase;
        font-family: 'Roboto Mono', monospace;
        background: ${this.attrs.dateOverlay || "#ff00b3"};
        padding: 2% 6%;
        background-blend-mode: multiply;
        background-size: 1920px;
        background-position: center;
        transform: scale(1);
      }

      .defter-date span{
        color: ${this.attrs.mainColor || "#00ff40"};
      }

      .third-first-presenter-slide,.quarter-first-presenter-slide{
        position : relative;
      }
    
      .quarter-first-presenter-slide{
        margin-bottom: 15%;
        border-top: 15px solid ${this.attrs.mainColor || "#00ff40"};
        align-items: center;
        justify-content: center;
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
        justify-content: center;
      }

      .quarter-presenter{
        font-size: ${this.dinamicFontSize(this.attrs.title.length, 720)}px;
      }

      .presenter,.big-title{
        font-weight: 700;
        font-family: 'Roboto Mono', monospace;
        text-transform: uppercase;
        color: ${this.attrs.mainColor || "#00ff40"};
      }

      .test-mask{
        position: absolute;
        left: 0;
        height: 132.5px;
        background-size: 1920px;
        position: absolute;
        left: 0;
        display: flex;
        justify-content: center;
        align-content: center;
        width: 100%;
      }
    `;
  }

  buildTree() {
    const personConMove = new CSSEffect(
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

    const quarterLeft = new CSSEffect(
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
        duration: 4000,
        selector: ".quarter-left",
        easing: "easeOutCubic",
      }
    );

    const bg = new CSSEffect(
      {
        animatedAttrs: {
          top: "0%",
        },
        initialValues: {
          top: "100%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".bg,.fragment",
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
        selector: ".bg,.bg-next",
        easing: "easeOutCubic",
      }
    );

    const bgscaledownMove = new CSSEffect(
      {
        animatedAttrs: {
          left: "25%",
        },
        initialValues: {
          left: "0%",
        },
        attrs: {},
      },
      {
        duration: 1000,
        selector: ".bg",
        easing: "easeOutCubic",
      }
    );

    const bgsecondscaledownMove = new CSSEffect(
      {
        animatedAttrs: {
          left: "-25%",
        },
        initialValues: {
          left: "-100%",
        },
        attrs: {},
      },
      {
        duration: 1000,
        selector: ".bg-next",
        easing: "easeOutCubic",
      }
    );

    const bgscaleup = new CSSEffect(
      {
        animatedAttrs: {
          transform: {
            scale: 1,
          },
        },
        initialValues: {
          transform: {
            scale: 0.5,
          },
        },
        attrs: {},
      },
      {
        duration: 1000,
        selector: ".bg,.bg-next",
        easing: "easeOutCubic",
      }
    );

    const bgscaledownMoveOut = new CSSEffect(
      {
        animatedAttrs: {
          left: "100%",
        },
        initialValues: {
          left: "25%",
        },
        attrs: {},
      },
      {
        duration: 1000,
        selector: ".bg",
        easing: "easeOutCubic",
      }
    );

    const bgsecondscaledownMoveOut = new CSSEffect(
      {
        animatedAttrs: {
          left: "0%",
        },
        initialValues: {
          left: "-25%",
        },
        attrs: {},
      },
      {
        duration: 1000,
        selector: ".bg-next",
        easing: "easeOutCubic",
      }
    );

    const bgMoveOut = new CSSEffect(
      {
        animatedAttrs: {
          left: "100%",
        },
        initialValues: {
          left: "0%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".bg-next",
        easing: "easeOutQuad",
      }
    );

    this.addIncident(bg, 0);
    this.addIncident(personConMove, 0);
    this.addIncident(quarterLeft, 0);
    this.addIncident(bgscaledown, 6000);
    this.addIncident(bgsecondscaledownMove, 6000);
    this.addIncident(bgscaledownMove, 6000);
    this.addIncident(bgscaleup, 8000);
    this.addIncident(bgscaledownMoveOut, 8000);
    this.addIncident(bgsecondscaledownMoveOut, 8000);
    this.addIncident(bgMoveOut, this.calculatedDuration + 2000);
  }
}
