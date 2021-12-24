import MotorCortex, { CSSEffect } from "@donkeyclip/motorcortex";

export default class Transition extends MotorCortex.HTMLClip {
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
      <div class="transition-container">
        <p class="transition-text">${this.attrs.title}</p>
      </div>
    `;
  }

  get css() {
    return `
      .transition-container {
        color:white; 
        background:rgb(0, 0, 0);
        mix-blend-mode: multiply;
        font: bolder 400px "Roboto Mono";
        text-align: center;
        position: relative;
        left: -100%;
        width: 20%;
        height: 100%;
        position: absolute;
        display: flex;
        align-content: center;
        align-items: center;
        overflow: hidden;
      }

      .transition-text {
        position: relative;
        left: -0%;
      }
    `;
  }

  buildTree() {
    const transitionText = new CSSEffect(
      {
        animatedAttrs: {
          left: "-100%",
        },
        initialValues: {
          left: "0%",
        },
        attrs: {
          easing: "linear",
        },
      },
      {
        duration: 2000,
        selector: ".transition-text",
      }
    );

    const transitionContainer = new CSSEffect(
      {
        animatedAttrs: {
          left: "100%",
        },
        initialValues: {
          left: "-20%",
        },
        attrs: {
          easing: "linear",
        },
      },
      {
        duration: 2000,
        selector: ".transition-container",
      }
    );

    this.addIncident(transitionText, 0);
    this.addIncident(transitionContainer, 0);
  }
}
