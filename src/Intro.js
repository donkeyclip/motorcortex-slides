import MotorCortex, { CSSEffect } from "@donkeyclip/motorcortex";

export default class Intro extends MotorCortex.HTMLClip {
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
        <div class="first-slide">
          <div class="testdiv">
            <div class="sub">
              <div class="subtitle">
                <div class="subtitle-holder">
                  <div class="subtitle-text">${this.attrs.subtitle}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="title">
            <div class="date-holder">
              <div class="date">
                <span> ${this.attrs.month}</span>
              </div>
            </div>
            <div class="holder-title">
              <div class="title-text">${this.attrs.title}</div>
            </div>
          </div>
          <div class="description">
            <div class="description-text">
              <p>${this.attrs.description}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  get css() {
    return `
      .bg {
        height: 1080px;
        width: 1920px;
        position: relative;
        background-image: url(${
          this.attrs.bgUrl ||
          "https://donkeyclip.github.io/motorcortex-slides/demo/assets/kissmybutonbg.jpg"
        });
        background-size: 1920px;
        background-position: center;
        transform: scale(1);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex: 1 0 auto;
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

      .first-slide {
        display: flex;
        width: 90%;
        white-space: nowrap;
        overflow: hidden;
        flex-direction: column;
        position: relative;
      }

      .sub {
        display: flex;
        overflow: hidden;
        position: relative;
        width: 50%;
      }
      
      .title {
        color: ${this.attrs.mainColor || "#00ff40"};
        font-size: ${this.dinamicFontSize(this.attrs.title.length, 864 * 2)}px;
        font-weight: 700;
        font-family: 'Roboto Mono', monospace;
        text-transform: uppercase;
        margin-top:-${
          this.dinamicFontSize(this.attrs.title.length, 864 * 2) / 2.6
        }px;
        overflow: hidden;
        display: flex;
        width: 100%;
      }

      .subtitle {
        color: ${this.attrs.mainColor || "#00ff40"};
        font-size: ${this.dinamicFontSize(this.attrs.subtitle.length, 864)}px;
        font-weight: 700;
        font-family: 'Roboto Mono', monospace;
        text-transform: uppercase;
        overflow: hidden;
      }

      .description-text {
        position: relative;
        transform: translateY(-200%);
      }

      .description {
        border-top: 15px solid ${this.attrs.mainColor || "#00ff40"};
        overflow: hidden;
        transform: translateY(200%);
        font-size: 30px;
        color: #fff;
        position: relative;
        white-space: normal;
        text-align: left;
        text-transform: uppercase;
        font-family: 'Roboto Mono', monospace;
      }

      .testdiv{
        width:100%;
        padding-bottom: 2%;
      }

      .date-holder{
        width: 28%;
        position: absolute;
        justify-self: center;
        top: 8%;
        display: flex;
        justify-content: flex-end;
      }

      .date {
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .date span {
        position: relative;
        overflow: hidden;
        font-family: 'Roboto Mono', monospace;
        text-transform: uppercase;
        font-size: 50px;
        color: #fff ;
        transform: translateX(200%);
      }

      .title-text{
        overflow: hidden;
        width : 0%;
      }

      .subtitle-text{
        overflow: hidden;
        right: 100%;
        position: relative;
      }

      .subtitle-holder{
        overflow: hidden;
        position : relative;
        right: -100%;
      }
    `;
  }

  buildTree() {
    const titleanime = new CSSEffect(
      {
        animatedAttrs: {
          width: "100%",
        },
        initialValues: {
          width: "0%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".title-text",
        easing: "easeOutQuad",
      }
    );

    const bg = new CSSEffect(
      {
        animatedAttrs: {
          backgroundSize: "3000px",
        },
        initialValues: {
          backgroundSize: "1980px",
        },
        attrs: {},
      },
      {
        duration: 5600,
        selector: ".bg",
        easing: "easeOutCubic",
      }
    );

    const subtextRight = new CSSEffect(
      {
        animatedAttrs: {
          right: "0%",
        },
        initialValues: {
          right: "100%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".subtitle-text",
        easing: "easeOutQuad",
      }
    );

    const subholderRight = new CSSEffect(
      {
        animatedAttrs: {
          right: "0%",
        },
        initialValues: {
          right: "-100%",
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".subtitle-holder",
        easing: "easeOutQuad",
      }
    );

    const subtitleRight = new CSSEffect(
      {
        animatedAttrs: {
          left: `${
            1728 -
            (this.dinamicFontSize(this.attrs.subtitle.length, 864) *
              0.6 *
              this.attrs.subtitle.length,
            864)
          }px`,
        },
        initialValues: {},
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".sub",
        easing: "easeOutQuad",
      }
    );

    const datespan = new CSSEffect(
      {
        animatedAttrs: {
          transform: {
            translateX: "0%",
          },
        },
        initialValues: {
          transform: {
            translateX: "200%",
          },
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".date span",
        easing: "easeOutQuad",
      }
    );

    const dateHolderWidth = new CSSEffect(
      {
        animatedAttrs: {
          width: "45%",
        },
        initialValues: {
          width: "28%",
        },
        attrs: {},
      },
      {
        duration: 10,
        selector: ".date-holder",
      }
    );

    const scaleFirstSlide = new CSSEffect(
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
        duration: 2000,
        selector: ".first-slide",
        easing: "easeOutQuad",
      }
    );

    const description = new CSSEffect(
      {
        animatedAttrs: {
          transform: {
            translateY: "0%",
          },
        },
        initialValues: {
          transform: {
            translateY: "200%",
          },
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".description",
        easing: "easeOutQuad",
      }
    );

    const descriptiontext = new CSSEffect(
      {
        animatedAttrs: {
          transform: {
            translateY: "0%",
          },
        },
        initialValues: {
          transform: {
            translateY: "-200%",
          },
        },
        attrs: {},
      },
      {
        duration: 600,
        selector: ".description-text",
        easing: "easeOutQuad",
      }
    );

    const bgQut = new CSSEffect(
      {
        animatedAttrs: {
          transform: {
            translateX: "100%",
          },
        },
        initialValues: {
          transform: {
            translateX: "0%",
          },
        },
        attrs: {},
      },
      {
        duration: 2000,
        selector: ".bg",
        easing: "easeOutQuad",
      }
    );

    this.addIncident(bg, 0);
    this.addIncident(titleanime, 0);
    this.addIncident(subtextRight, 0);
    this.addIncident(subholderRight, 0);
    this.addIncident(subtitleRight, 3000);
    this.addIncident(scaleFirstSlide, 3000);
    this.addIncident(description, 3000);
    this.addIncident(datespan, 3600);
    this.addIncident(dateHolderWidth, 4100);
    this.addIncident(descriptiontext, 5000);
    this.addIncident(bgQut, this.calculatedDuration + 2000);
  }
}
