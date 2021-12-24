import MotorCortex, { CSSEffect } from "@donkeyclip/motorcortex";

export default class BtTslide extends MotorCortex.HTMLClip {
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
      <div class="bg">
        <div class="bg-quarter-slide">
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
    `;
  }

  get css() {
    return `
      .bg {
        width: 100%;
        height: 100%;
        background-image: url(${
          this.attrs.bgUrl ||
          "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg4.jpg"
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
      .bg:after {
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
        attrs: {
          easing: "linear",
        },
      },
      {
        duration: 3000,
        selector: ".quarter-first-presenter-slide",
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
        attrs: {
          easing: "linear",
        },
      },
      {
        duration: 4000,
        selector: ".quarter-left",
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
        attrs: {
          easing: "linear",
        },
      },
      {
        duration: 2000,
        selector: ".bg",
        easing: "easeOutQuad",
      }
    );

    const bgOut = new CSSEffect(
      {
        animatedAttrs: {
          top: "-100%",
        },
        initialValues: {
          top: "0%",
        },
        attrs: {
          easing: "linear",
        },
      },
      {
        duration: 2000,
        selector: ".bg",
        easing: "easeOutQuad",
      }
    );

    this.addIncident(bg, 0);
    this.addIncident(personConMove, 0);
    this.addIncident(quarterLeft, 0);
    this.addIncident(bgOut, this.calculatedDuration + 2000);
  }
}
