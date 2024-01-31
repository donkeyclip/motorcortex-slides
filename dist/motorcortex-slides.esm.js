import { HTMLClip, CSSEffect, BrowserClip, MediaPlayback, loadPlugin } from '@donkeyclip/motorcortex';

class Intro extends HTMLClip {
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
        background-image: url(${this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/kissmybutonbg.jpg"});
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
        background: linear-gradient(${this.attrs.overlayColor || "#101820D7,#101820FF"});
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
        left:0px;
      }
      
      .title {
        color: ${this.attrs.mainColor || "#00ff40"};
        font-size: ${this.dinamicFontSize(this.attrs.title.length, 864 * 2)}px;
        font-weight: 700;
        font-family: 'Roboto Mono', monospace;
        text-transform: uppercase;
        margin-top:-${this.dinamicFontSize(this.attrs.title.length, 864 * 2) / 2.6}px;
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
    const titleanime = new CSSEffect({
      animatedAttrs: {
        width: "100%"
      },
      initialValues: {
        width: "0%"
      }
    }, {
      duration: 2000,
      selector: ".title-text",
      easing: "easeOutQuad"
    });
    const bg = new CSSEffect({
      animatedAttrs: {
        backgroundSize: "3000px"
      },
      initialValues: {
        backgroundSize: "1980px"
      }
    }, {
      duration: 5600,
      selector: ".bg",
      easing: "easeOutCubic"
    });
    const subtextRight = new CSSEffect({
      animatedAttrs: {
        right: "0%"
      },
      initialValues: {
        right: "100%"
      }
    }, {
      duration: 2000,
      selector: ".subtitle-text",
      easing: "easeOutQuad"
    });
    const subholderRight = new CSSEffect({
      animatedAttrs: {
        right: "0%"
      },
      initialValues: {
        right: "-100%"
      }
    }, {
      duration: 2000,
      selector: ".subtitle-holder",
      easing: "easeOutQuad"
    });
    const subtitleRight = new CSSEffect({
      animatedAttrs: {
        left: `${1728 - (this.dinamicFontSize(this.attrs.subtitle.length, 864) * 0.6 * this.attrs.subtitle.length, 864)}px`
      }
    }, {
      duration: 2000,
      selector: ".sub",
      easing: "easeOutQuad"
    });
    const datespan = new CSSEffect({
      animatedAttrs: {
        transform: {
          translateX: "0%"
        }
      },
      initialValues: {
        transform: {
          translateX: "200%"
        }
      }
    }, {
      duration: 2000,
      selector: ".date span",
      easing: "easeOutQuad"
    });
    const dateHolderWidth = new CSSEffect({
      animatedAttrs: {
        width: "45%"
      },
      initialValues: {
        width: "28%"
      }
    }, {
      duration: 10,
      selector: ".date-holder"
    });
    const scaleFirstSlide = new CSSEffect({
      animatedAttrs: {
        transform: {
          scale: 0.5
        }
      },
      initialValues: {
        transform: {
          scale: 1
        }
      }
    }, {
      duration: 2000,
      selector: ".first-slide",
      easing: "easeOutQuad"
    });
    const description = new CSSEffect({
      animatedAttrs: {
        transform: {
          translateY: "0%"
        }
      },
      initialValues: {
        transform: {
          translateY: "200%"
        }
      }
    }, {
      duration: 2000,
      selector: ".description",
      easing: "easeOutQuad"
    });
    const descriptiontext = new CSSEffect({
      animatedAttrs: {
        transform: {
          translateY: "0%"
        }
      },
      initialValues: {
        transform: {
          translateY: "-200%"
        }
      }
    }, {
      duration: 600,
      selector: ".description-text",
      easing: "easeOutQuad"
    });
    const bgQut = new CSSEffect({
      animatedAttrs: {
        transform: {
          translateX: "100%"
        }
      },
      initialValues: {
        transform: {
          translateX: "0%"
        }
      }
    }, {
      duration: 2000,
      selector: ".bg",
      easing: "easeOutQuad"
    });
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

class Transition extends HTMLClip {
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
    const transitionText = new CSSEffect({
      animatedAttrs: {
        left: "-100%"
      },
      initialValues: {
        left: "0%"
      },
      attrs: {
        easing: "linear"
      }
    }, {
      duration: 2000,
      selector: ".transition-text"
    });
    const transitionContainer = new CSSEffect({
      animatedAttrs: {
        left: "100%"
      },
      initialValues: {
        left: "-20%"
      },
      attrs: {
        easing: "linear"
      }
    }, {
      duration: 2000,
      selector: ".transition-container"
    });
    this.addIncident(transitionText, 0);
    this.addIncident(transitionContainer, 0);
  }
}

class SlideDateOne extends HTMLClip {
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
      <div class="bg ">
        <div class="second-slide">
          <div class="second-slide-titleOne">${this.attrs.title[0]}</div>
          <div class="second-slide-titleTwo">${this.attrs.title[1]}</div>
          <div class="word-bg">
            <div class="word"></div>
          </div>
          <div class="short-description">
            <p>${this.attrs.description}</p>
          </div>
        </div>
      </div>
      <div class="bg-second ">
        <div class="bg-second-slide">
            <div class="second-date-container">
            <div class="second-date"><span> ${this.attrs.day || ""} ${this.attrs.dayNumber || ""} </span>${this.attrs.month || ""} ${this.attrs.year || ""}</div>
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
        background-image: url(${this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg3.jpg"});
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
        background: linear-gradient(${this.attrs.overlayColor || "#101820D7,#101820FF"});
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: -1;
      }

      .bg-second{
        left:100%;
        background-image: url(${this.attrs.bgUrl2 || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg2.jpg"});
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
        font-size: ${this.dinamicFontSize(this.attrs.titleone.length, 360)}px;
        font-weight: 700;
        font-family: 'Roboto Mono', monospace;
        text-transform: uppercase;
        color: #fff;
        position: relative;
        left : -50%;
      }

      .second-slide-titleTwo{
        font-size: ${this.dinamicFontSize(this.attrs.subtitle.length, 720)}px;
      }

      .second-slide-titleOne{
        color :${this.attrs.mainColor || "#00ff40"}
      }

      .second-slide{
        position : absolute;
        left : 0%;
        display: flex;
        align-content: center;
        justify-content: center;
        flex-direction: column;
        margin-left: 10%;
      }

      .letter{
        font-size: ${this.dinamicFontSize(this.attrs.str.length, 720)}px;
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
    const array = this.attrs.title[2].split("");
    let html3;
    const containerParams = {
      width: "100%",
      height: "100%"
    };
    for (let i = 0; i < array.length; i++) {
      const html = `<span class='letter letter${i + 1}'>${array[i]}</span>`;
      html3 = html3 + html;
    }
    const word = new HTMLClip({
      css: this.css,
      html: ` <div class="conttitle" >${html3.split("undefined")[1]} </div>`,
      selector: ".word",
      containerParams
    });
    this.addIncident(word, 0);
    for (let i = 0; i < array.length; i++) {
      const textAnimation = new CSSEffect({
        animatedAttrs: {
          top: "0px",
          opacity: 1
        },
        attrs: {}
      }, {
        duration: 500,
        selector: ".letter" + (i + 1),
        easing: "easeOutQuad"
      });
      word.addIncident(textAnimation, (2000 + 100 * (i + 1)) * 2);
    }
    const bgMove = new CSSEffect({
      animatedAttrs: {
        left: "0%"
      },
      initialValues: {
        left: "-100%"
      },
      attrs: {}
    }, {
      duration: 1000,
      selector: ".bg",
      easing: "easeOutQuad"
    });
    const secondSlideTitleOne = new CSSEffect({
      animatedAttrs: {
        left: "0%"
      },
      initialValues: {
        left: "-50%"
      },
      attrs: {}
    }, {
      duration: 1000,
      selector: ".second-slide-titleOne",
      easing: "easeOutQuad"
    });
    const secondSlideTitleTwo = new CSSEffect({
      animatedAttrs: {
        left: "0%"
      },
      initialValues: {
        left: "-50%"
      },
      attrs: {}
    }, {
      duration: 1000,
      selector: ".second-slide-titleTwo",
      easing: "easeOutQuad"
    });
    const wordBg = new CSSEffect({
      animatedAttrs: {
        left: "0%"
      },
      initialValues: {
        left: "-50%"
      },
      attrs: {}
    }, {
      duration: 2400,
      selector: ".word-bg",
      easing: "easeOutQuad"
    });
    const shortDescription = new CSSEffect({
      animatedAttrs: {
        left: "0%"
      },
      initialValues: {
        left: "-50%"
      },
      attrs: {}
    }, {
      duration: 1000,
      selector: ".short-description",
      easing: "easeOutQuad"
    });
    const bgscaledown = new CSSEffect({
      animatedAttrs: {
        transform: {
          scale: 0.5
        }
      },
      initialValues: {
        transform: {
          scale: 1
        }
      },
      attrs: {}
    }, {
      duration: 1000,
      selector: ".bg,.bg-second",
      easing: "easeOutQuad"
    });
    const bgscaledownMove = new CSSEffect({
      animatedAttrs: {
        left: "-25%"
      },
      initialValues: {
        left: "0%"
      },
      attrs: {}
    }, {
      duration: 1000,
      selector: ".bg",
      easing: "easeOutQuad"
    });
    const bgsecondscaledownMove = new CSSEffect({
      animatedAttrs: {
        left: "25%"
      },
      initialValues: {
        left: "100%"
      },
      attrs: {}
    }, {
      duration: 1000,
      selector: ".bg-second",
      easing: "easeOutQuad"
    });
    const secondBgDate = new CSSEffect({
      animatedAttrs: {
        left: "5%"
      },
      initialValues: {
        left: "-100%"
      },
      attrs: {}
    }, {
      duration: 1000,
      selector: ".second-date",
      easing: "easeOutQuad"
    });
    const moveSecond = new CSSEffect({
      animatedAttrs: {
        left: "-76%"
      },
      initialValues: {},
      attrs: {}
    }, {
      duration: 16000,
      selector: ".bg",
      easing: "easeOutQuad"
    });
    const moveSecondS = new CSSEffect({
      animatedAttrs: {
        left: "-76%"
      },
      initialValues: {},
      attrs: {}
    }, {
      duration: 3000,
      selector: ".bg-second",
      easing: "easeOutQuad"
    });
    this.addIncident(bgMove, 0);
    this.addIncident(secondSlideTitleOne, 600);
    this.addIncident(secondSlideTitleTwo, 1000);
    this.addIncident(wordBg, 1000);
    this.addIncident(shortDescription, 1800);
    this.addIncident(bgscaledown, 7400);
    this.addIncident(bgscaledownMove, 7400);
    this.addIncident(bgsecondscaledownMove, 7400);
    this.addIncident(secondBgDate, 7400);
    this.addIncident(moveSecond, 12000);
    this.addIncident(moveSecondS, this.calculatedDuration + 1000);
  }
}

class Scrollslide extends HTMLClip {
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
      <div class="third-holder ">
        <div class="bg">
          <div class="bg-third-slide">
            <div class="third-first-presenter-slide">
              <div class="third-presenter-container">
                <div class="third-presenter presenter">${this.attrs.title}</div>
              </div>
              <div class="name-container">${this.attrs.name}</div>
              <div class="position-container">${this.attrs.position}</div>
            </div>
          </div>
        </div>
        <div class="bg">
          <div class="bg-third-slide">
            <div class="third-first-presenter-slide">
              <div class="third-presenter-container">
                <div class="third-presenter presenter">${this.attrs.title}</div>
              </div>
              <div class="name-container">${this.attrs.name}</div>
              <div class="position-container">${this.attrs.position}</div>
            </div>
          </div>
        </div>
        <div class="bg">
          <div class="bg-third-slide">
            <div class="third-first-presenter-slide">
              <div class="third-presenter-container">
                <div class="third-presenter presenter">${this.attrs.title}</div>
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
        background-image: url(${this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg3.jpg"});
        background-size: 1920px;
        background-position: center;
        transform: scale(1);
        display: flex;
        position: relative;
        align-items: center;
        flex-wrap: wrap;
        flex: 1 0 auto;
        margin-top: 10%;
        margin-bottom: 10%;
      }

      .bg:after {
        content: "";
        display: block;
        background: linear-gradient(${this.attrs.overlayColor || "#101820D7,#101820FF"});
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: -1;
      }
    
     .bg-third-slide{
        height: 1080px;
        width: 1920px;
        display: flex;
        align-items: center;
        margin-left: 5%;
      }

      .third-first-presenter-slide{
        position : relative;
      }

      .third-presenter-container{
        overflow: hidden;
        border-top: 15px solid ${this.attrs.mainColor || "#00ff40"};
      }

      .presenter,.big-title{
        font-weight: 700;
        font-family: 'Roboto Mono', monospace;
        text-transform: uppercase;
        color: ${this.attrs.mainColor || "#00ff40"};
      }

      .third-presenter{
        font-size: ${this.dinamicFontSize(this.attrs.title.length, 720)}px;
        transform: translateY(-100%);
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

      .third-holder{
        left: 100%;
        position: relative;
        top : 0%;
      }
    `;
  }
  buildTree() {
    const moveThird = new CSSEffect({
      animatedAttrs: {
        left: "0%",
        top: "-200%"
      },
      initialValues: {
        left: "100%",
        top: "-100%"
      },
      attrs: {}
    }, {
      duration: 2000,
      selector: ".third-holder",
      easing: "easeOutQuad"
    });
    const thirdScaleUp = new CSSEffect({
      animatedAttrs: {
        transform: {
          scale: 1
        }
      },
      initialValues: {
        transform: {
          scale: 0.5
        }
      },
      attrs: {}
    }, {
      duration: 3000,
      selector: ".third-holder",
      easing: "easeOutQuad"
    });
    const moveThirdIner = new CSSEffect({
      animatedAttrs: {
        marginTop: "0%",
        marginBottom: "0%"
      },
      initialValues: {
        marginTop: "10%",
        marginBottom: "10%"
      },
      attrs: {}
    }, {
      duration: 3000,
      selector: ".bg",
      easing: "easeOutQuad"
    });
    const movePresenter = new CSSEffect({
      animatedAttrs: {
        transform: {
          translateY: "0%"
        }
      },
      initialValues: {
        transform: {
          translateY: "-100%"
        }
      },
      attrs: {}
    }, {
      duration: 1600,
      selector: ".presenter",
      easing: "easeOutQuad"
    });
    const bgOut = new CSSEffect({
      animatedAttrs: {
        left: "100%"
      },
      initialValues: {
        left: "0%"
      },
      attrs: {}
    }, {
      duration: 2000,
      selector: ".third-holder",
      easing: "easeOutQuad"
    });
    this.addIncident(moveThird, 0);
    this.addIncident(thirdScaleUp, 0);
    this.addIncident(moveThirdIner, 0);
    this.addIncident(movePresenter, 1400);
    this.addIncident(bgOut, this.calculatedDuration + 2000);
  }
}

class LtRslide extends HTMLClip {
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
        background-image: url(${this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg4.jpg"});
        background-size: 1920px;
        background-position: center;
        transform: scale(1);
        display: flex;
        position: relative;
        align-items: center;
        flex-wrap: wrap;
        flex: 1 0 auto;
        left : -100%;
      }

      .bg:after {
        content: "";
        display: block;
        background: linear-gradient(${this.attrs.overlayColor || "#101820D7,#101820FF"});
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
        border-right: 15px solid ${this.attrs.mainColor || "#00ff40"};
      }

      .quarter-left{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        position : relative;
        left: -50%;
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

      .presenter,.big-title{
        font-weight: 700;
        font-family: 'Roboto Mono', monospace;
        text-transform: uppercase;
        color: ${this.attrs.mainColor || "#00ff40"};
      }
    `;
  }
  buildTree() {
    const personConMove = new CSSEffect({
      animatedAttrs: {
        left: "50%"
      },
      initialValues: {
        left: "0%"
      }
    }, {
      duration: 2000,
      selector: ".quarter-first-presenter-slide",
      easing: "easeInSine"
    });
    const quarterLeft = new CSSEffect({
      animatedAttrs: {
        left: "-20%"
      },
      initialValues: {
        left: "-50%"
      }
    }, {
      duration: 3000,
      selector: ".quarter-left",
      easing: "easeOutQuad"
    });
    const bg = new CSSEffect({
      animatedAttrs: {
        left: "0%"
      },
      initialValues: {
        left: "-100%"
      }
    }, {
      duration: 2000,
      selector: ".bg",
      easing: "easeOutQuad"
    });
    const bgOut = new CSSEffect({
      animatedAttrs: {
        left: "100%"
      },
      initialValues: {
        left: "0%"
      }
    }, {
      duration: 2000,
      selector: ".bg",
      easing: "easeOutQuad"
    });
    this.addIncident(bg, 0);
    this.addIncident(personConMove, 0);
    this.addIncident(quarterLeft, 0);
    this.addIncident(bgOut, this.calculatedDuration + 2000);
  }
}

class SlideDateTwo extends HTMLClip {
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
              <div class="defter-date"><span> ${this.attrs.day || ""} ${this.attrs.dayNumber} </span>${this.attrs.month || ""} ${this.attrs.year || ""}</div>
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
        background-image: url(${this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg5.jpg"});
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
        background: linear-gradient(${this.attrs.overlayColor || "#101820D7,#101820FF"});
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: -1;
      }

      .bg-second{
        left:100%;
        background-image: url(${this.attrs.bgUrl2 || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg2.jpg"});
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
        background-image: url(${this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg5.jpg"});
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
        background: linear-gradient(${this.attrs.overlayColor || "#101820D7,#101820FF"});
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
        background-image: url(${this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg5.jpg"});
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
    const bgMove = new CSSEffect({
      animatedAttrs: {
        left: "0%"
      },
      initialValues: {
        left: "-100%"
      },
      attrs: {}
    }, {
      duration: 2000,
      selector: ".bg",
      easing: "easeOutCubic"
    });
    const secondSlide = new CSSEffect({
      animatedAttrs: {
        left: "0%"
      },
      initialValues: {
        left: "-100%"
      },
      attrs: {}
    }, {
      duration: 2000,
      selector: ".second-slide",
      easing: "easeOutCubic"
    });
    const bigTitle = new CSSEffect({
      animatedAttrs: {
        left: "-1500px"
      },
      initialValues: {
        left: "0px"
      }
    }, {
      duration: 14800,
      selector: ".big-title",
      easing: "easeOutCubic"
    });
    const bgscaledown = new CSSEffect({
      animatedAttrs: {
        transform: {
          scale: 0.5
        }
      },
      initialValues: {
        transform: {
          scale: 1
        }
      },
      attrs: {}
    }, {
      duration: 1000,
      selector: ".bg,.bg-small",
      easing: "easeOutCubic"
    });
    const bgscaledownMove = new CSSEffect({
      animatedAttrs: {
        left: "-25%"
      },
      initialValues: {
        left: "0%"
      },
      attrs: {}
    }, {
      duration: 500,
      selector: ".bg",
      easing: "easeOutCubic"
    });
    const bgsecondscaledownMove = new CSSEffect({
      animatedAttrs: {
        left: "25%"
      },
      initialValues: {
        left: "100%"
      },
      attrs: {}
    }, {
      duration: 1000,
      selector: ".bg-small",
      easing: "easeOutCubic"
    });
    const secondBgDate = new CSSEffect({
      animatedAttrs: {
        left: "5%"
      },
      initialValues: {
        left: "-100%"
      },
      attrs: {}
    }, {
      duration: 2000,
      selector: ".second-date",
      easing: "easeOutCubic"
    });
    const moveSecond = new CSSEffect({
      animatedAttrs: {
        left: "-175%"
      },
      initialValues: {},
      attrs: {}
    }, {
      duration: 2000,
      selector: ".bg-small,.bg",
      easing: "easeOutCubic"
    });
    const movePresenterSlide = new CSSEffect({
      animatedAttrs: {
        top: "0%"
      },
      initialValues: {
        top: "90%"
      },
      attrs: {}
    }, {
      duration: 3000,
      selector: ".quarter-first-presenter-slide",
      easing: "easeOutCubic"
    });
    const movePresenterSlideLeft = new CSSEffect({
      animatedAttrs: {
        top: "0%"
      },
      initialValues: {
        top: "90%"
      },
      attrs: {}
    }, {
      duration: 3000,
      selector: ".quarter-left",
      easing: "easeOutCubic"
    });
    const moveBig = new CSSEffect({
      animatedAttrs: {
        left: "0%"
      },
      initialValues: {
        left: "100%"
      },
      attrs: {}
    }, {
      duration: 2000,
      selector: ".bg-big",
      easing: "easeOutCubic"
    });
    const moveBigOut = new CSSEffect({
      animatedAttrs: {
        top: "-100%"
      },
      initialValues: {
        top: "0%"
      }
    }, {
      duration: 2000,
      selector: ".bg-big",
      easing: "easeOutQuad"
    });
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

class BtTslide extends HTMLClip {
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
        background-image: url(${this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg4.jpg"});
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
        background: linear-gradient(${this.attrs.overlayColor || "#101820D7,#101820FF"});
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
    const personConMove = new CSSEffect({
      animatedAttrs: {
        top: "0%"
      },
      initialValues: {
        top: "90%"
      },
      attrs: {
        easing: "linear"
      }
    }, {
      duration: 3000,
      selector: ".quarter-first-presenter-slide"
    });
    const quarterLeft = new CSSEffect({
      animatedAttrs: {
        top: "0%"
      },
      initialValues: {
        top: "90%"
      },
      attrs: {
        easing: "linear"
      }
    }, {
      duration: 4000,
      selector: ".quarter-left"
    });
    const bg = new CSSEffect({
      animatedAttrs: {
        top: "0%"
      },
      initialValues: {
        top: "100%"
      },
      attrs: {
        easing: "linear"
      }
    }, {
      duration: 2000,
      selector: ".bg",
      easing: "easeOutQuad"
    });
    const bgOut = new CSSEffect({
      animatedAttrs: {
        top: "-100%"
      },
      initialValues: {
        top: "0%"
      },
      attrs: {
        easing: "linear"
      }
    }, {
      duration: 2000,
      selector: ".bg",
      easing: "easeOutQuad"
    });
    this.addIncident(bg, 0);
    this.addIncident(personConMove, 0);
    this.addIncident(quarterLeft, 0);
    this.addIncident(bgOut, this.calculatedDuration + 2000);
  }
}

class BtTslideDate extends HTMLClip {
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
                <div class="quarter-presenter presenter">${this.attrs.title}</div>
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
              <div class="defter-date"><span> ${this.attrs.day || ""} ${this.attrs.dayNumber || ""} </span>${this.attrs.month || ""} ${this.attrs.year || ""}</div>
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
        background-image: url(${this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg3.jpg"});
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
        background: linear-gradient(${this.attrs.overlayColor || "#101820D7,#101820FF"});
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
        background-image: url(${this.attrs.bgUrl2 || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg2.jpg"});
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
    const personConMove = new CSSEffect({
      animatedAttrs: {
        top: "0%"
      },
      initialValues: {
        top: "90%"
      },
      attrs: {}
    }, {
      duration: 3000,
      selector: ".quarter-first-presenter-slide",
      easing: "easeOutCubic"
    });
    const quarterLeft = new CSSEffect({
      animatedAttrs: {
        top: "0%"
      },
      initialValues: {
        top: "90%"
      },
      attrs: {}
    }, {
      duration: 4000,
      selector: ".quarter-left",
      easing: "easeOutCubic"
    });
    const bg = new CSSEffect({
      animatedAttrs: {
        top: "0%"
      },
      initialValues: {
        top: "100%"
      },
      attrs: {}
    }, {
      duration: 2000,
      selector: ".bg,.fragment",
      easing: "easeOutQuad"
    });
    const bgscaledown = new CSSEffect({
      animatedAttrs: {
        transform: {
          scale: 0.5
        }
      },
      initialValues: {
        transform: {
          scale: 1
        }
      },
      attrs: {}
    }, {
      duration: 1000,
      selector: ".bg,.bg-next",
      easing: "easeOutCubic"
    });
    const bgscaledownMove = new CSSEffect({
      animatedAttrs: {
        left: "25%"
      },
      initialValues: {
        left: "0%"
      },
      attrs: {}
    }, {
      duration: 1000,
      selector: ".bg",
      easing: "easeOutCubic"
    });
    const bgsecondscaledownMove = new CSSEffect({
      animatedAttrs: {
        left: "-25%"
      },
      initialValues: {
        left: "-100%"
      },
      attrs: {}
    }, {
      duration: 1000,
      selector: ".bg-next",
      easing: "easeOutCubic"
    });
    const bgscaleup = new CSSEffect({
      animatedAttrs: {
        transform: {
          scale: 1
        }
      },
      initialValues: {
        transform: {
          scale: 0.5
        }
      },
      attrs: {}
    }, {
      duration: 1000,
      selector: ".bg,.bg-next",
      easing: "easeOutCubic"
    });
    const bgscaledownMoveOut = new CSSEffect({
      animatedAttrs: {
        left: "100%"
      },
      initialValues: {
        left: "25%"
      },
      attrs: {}
    }, {
      duration: 1000,
      selector: ".bg",
      easing: "easeOutCubic"
    });
    const bgsecondscaledownMoveOut = new CSSEffect({
      animatedAttrs: {
        left: "0%"
      },
      initialValues: {
        left: "-25%"
      },
      attrs: {}
    }, {
      duration: 1000,
      selector: ".bg-next",
      easing: "easeOutCubic"
    });
    const bgMoveOut = new CSSEffect({
      animatedAttrs: {
        left: "100%"
      },
      initialValues: {
        left: "0%"
      },
      attrs: {}
    }, {
      duration: 2000,
      selector: ".bg-next",
      easing: "easeOutQuad"
    });
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

class LtRslideTop extends HTMLClip {
  dinamicFontSize(lc, width) {
    let fontsize;
    fontsize = width / 0.6 / lc;
    if (fontsize >= 200 && width === 720) {
      fontsize = 200;
    }
    if (fontsize >= 100 && width === 360) {
      fontsize = 100;
    }
    return Math.round(fontsize);
  }
  get html() {
    return `
      <div class="bg">
        <div class="bg-quarter-slide">
            <div class="quarter-left">
              <div class="quarter-presenter-container">
                <div class="quarter-presenter presenter">${this.attrs.title}</div>
              </div>
              <div class="name-container">${this.attrs.name}</div>
              <div class="position-container">${this.attrs.position}</div>
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
        background-image: url(${this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg2.jpg"});
        background-size: 1920px;
        background-position: center;
        transform: scale(1);
        display: flex;
        position: relative;
        align-items: center;
        flex-wrap: wrap;
        flex: 1 0 auto;
        left : -100%;
      }

      .bg:after {
        content: "";
        display: block;
        background: linear-gradient(${this.attrs.overlayColor || "#101820D7,#101820FF"});
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: -1;
      }

      .quarter-left{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        position : relative;
        top: -100%;
        border-top: 15px solid ${this.attrs.mainColor || "#00ff40"};
        padding-top: 25%;
        margin-left: 4%;
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
    const personConMove = new CSSEffect({
      animatedAttrs: {
        paddingTop: "0%"
      },
      initialValues: {
        paddingTop: "40%"
      },
      attrs: {}
    }, {
      duration: 2000,
      selector: ".quarter-left",
      easing: "easeOutCubic"
    });
    const quarterLeft = new CSSEffect({
      animatedAttrs: {
        top: "25%"
      },
      initialValues: {
        top: "-100%"
      },
      attrs: {}
    }, {
      duration: 2000,
      selector: ".quarter-left",
      easing: "easeOutCubic"
    });
    const bg = new CSSEffect({
      animatedAttrs: {
        left: "0%"
      },
      initialValues: {
        left: "-100%"
      },
      attrs: {}
    }, {
      duration: 2000,
      selector: ".bg",
      easing: "easeOutCubic"
    });
    const bgOut = new CSSEffect({
      animatedAttrs: {
        left: "100%"
      },
      initialValues: {
        left: "0%"
      },
      attrs: {}
    }, {
      duration: 2000,
      selector: ".bg",
      easing: "easeOutCubic"
    });
    this.addIncident(bg, 0);
    this.addIncident(personConMove, 0);
    this.addIncident(quarterLeft, 0);
    this.addIncident(bgOut, this.calculatedDuration + 2000);
  }
}

class RtLslide extends HTMLClip {
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
            <div class="quarter-left">
              <div class="quarter-presenter-container">
                <div class="quarter-presenter presenter">${this.attrs.title}</div>
              </div>
              <div class="name-container">${this.attrs.name}</div>
              <div class="position-container">${this.attrs.position}</div>
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
        background-image: url(${this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg4.jpg"});
        background-size: 1920px;
        background-position: center;
        transform: scale(1);
        display: flex;
        position: relative;
        align-items: center;
        flex-wrap: wrap;
        flex: 1 0 auto;
        right: -100%;
      }

      .bg:after {
        content: "";
        display: block;
        background: linear-gradient(${this.attrs.overlayColor || "#101820D7,#101820FF"});
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: -1;
      }

      .quarter-left{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        position : relative;
        top: 100%;
        border-bottom: 15px solid ${this.attrs.mainColor || "#00ff40"};
        padding-bottom: 25%;
        margin-right: 4%;
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
        justify-content: flex-end;
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
    const personConMove = new CSSEffect({
      animatedAttrs: {
        paddingBottom: "0%"
      },
      initialValues: {
        paddingBottom: "40%"
      },
      attrs: {
        easing: "linear"
      }
    }, {
      duration: 2000,
      selector: ".quarter-left"
    });
    const quarterLeft = new CSSEffect({
      animatedAttrs: {
        top: "25%"
      },
      initialValues: {
        top: "100%"
      },
      attrs: {
        easing: "linear"
      }
    }, {
      duration: 2000,
      selector: ".quarter-left"
    });
    const bg = new CSSEffect({
      animatedAttrs: {
        right: "0%"
      },
      initialValues: {
        right: "-100%"
      },
      attrs: {
        easing: "linear"
      }
    }, {
      duration: 2000,
      selector: ".bg",
      easing: "easeOutQuad"
    });
    const bgOut = new CSSEffect({
      animatedAttrs: {
        right: "100%"
      },
      initialValues: {
        right: "0%"
      },
      attrs: {
        easing: "linear"
      }
    }, {
      duration: 2000,
      selector: ".bg",
      easing: "easeOutQuad"
    });
    this.addIncident(bg, 0);
    this.addIncident(personConMove, 0);
    this.addIncident(quarterLeft, 0);
    this.addIncident(bgOut, this.calculatedDuration + 2000);
  }
}

class VideoClip extends BrowserClip {
  get html() {
    this.width = this.attrs.width || 640;
    this.height = this.attrs.height || 360;
    this.startFrom = this.attrs.startFrom || 0;
    const videoStyle = "width:".concat(this.width, "px;height:").concat(this.height, "px;");
    const videoSources = this.attrs.sources.map(item => "<source src=\"".concat(item, "#t=").concat(this.startFrom, "\"></source>")).join("\n");
    return "\n      <div>\n        <video id=\"video\" style=\"".concat(videoStyle, "\" preload=\"metadata\" ").concat(this.attrs.audio !== true ? "muted" : "", " playsinline>\n          ").concat(videoSources, "\n        </video>\n      </div>\n    ");
  }
  get css() {
    return "";
  }
  setVolume(volume) {
    this.video.volume = volume;
  }
  onAfterRender() {
    const video = this.context.getElements("video")[0];
    this.video = video;
    this.setCustomEntity("video", {
      video,
      startFrom: this.startFrom
    }); // Audio

    if (this.attrs.audio !== true) {
      video.muted = true;
    } else {
      const that = this;
      /*
        The execution of this code occurs moments before the DescriptiveClip of this RealClip actually gets accepted and attached to the Descriptive Tree it tries to enter.
        It occurs on the Descriptive Incident of the Root Clip of the tree it tries to enter.
        We don’t want to move the responsibility of the execution of the actual clips rendering anywhere else for the time being but we prefer keeping it to the Descriptive Clip Root level, as it is right now. For this the setTimeout(funct, 0) ensures that this block of code will be executed RIGHT after the Descriptive Clip gets accepted and attached to the Descriptive Tree. Sorry about that :slightly_smiling_face:
      */

      setTimeout(() => {
        video.crossOrigin = "anonymous";
        const res = that.DescriptiveIncident.volumeChangeSubscribe(that.id, that.setVolume.bind(that));
        that.setVolume(res);
      }, 0);
    }
  }
}
class VideoPlay extends MediaPlayback {
  play() {
    const video = this.element.entity.video; // If the video is ready to play we don't need to block again

    if (video.readyState < 3) {
      this.waitingHandler();
    }
    this.playPromise = video.play();
    if (this.hasSetWaitingListener !== true) {
      video.addEventListener("waiting", this.waitingHandler.bind(this));
      this.hasSetWaitingListener = true;
    }
    if (this.hasSetCanplayListener !== true) {
      video.addEventListener("canplay", this.canplayHandler.bind(this));
      video.addEventListener('canplaythrough', this.canplayHandler.bind(this));
      video.addEventListener('playing', this.canplayHandler.bind(this));
      video.addEventListener('ready', this.canplayHandler.bind(this));
      this.hasSetCanplayListener = true;
    }
    return true;
  }
  waitingHandler() {
    this.setBlock("Video loading");
  }
  canplayHandler() {
    setTimeout(() => this.unblock());
  }
  stop() {
    if (this.playPromise) {
      this.playPromise.then(() => {
        this.element.entity.video.pause();
      });
    }
  }
  onProgress(millisecond) {
    this.unblock();
    const startFrom = millisecond + this.element.entity.startFrom;
    this.element.entity.video.currentTime = (startFrom + millisecond) / 1000;
  }
}
var name$1 = "@kissmybutton/motorcortex-video";
var version$1 = "2.2.2";
var main = "dist/motorcortex-video.cjs.js";
var module = "dist/motorcortex-video.esm.js";
var browser = "dist/motorcortex-video.umd.js";
var repository = "https://github.com/kissmybutton/motorcortex-video";
var author = "KissMyButton PC (kissmybutton.gr) <opensource@kissmybutton.gr>";
var license = "MIT";
var engines = {
  node: ">=10"
};
var scripts = {
  "update:packages": "npm update --save/--save-dev",
  concurrently: "concurrently -c \"cyan.bold,magenta.bold\" --names \"JS,Styles\"",
  lint: "eslint -c .eslintrc src/**/*.js",
  "lint:fix": "npm:lint -- --fix",
  build: "npm run build:lib && npm run build:demo",
  "build:lib": "rollup -c",
  start: "npm run build:lib && concurrently -c \"cyan.bold,magenta.bold\" \"npm:build:lib -- -w\"  \"npm:start:demo\" ",
  "start:demo": "webpack serve --config ./demo/webpack.config.js --mode=development --progress ",
  "build:demo": "webpack --mode=production --config ./demo/webpack.config.js",
  "test:prod": "npm run lint",
  "report-coverage": "cat ./coverage/lcov.info | coveralls",
  prebuild: "rimraf dist",
  prepare: "husky install"
};
var keywords = ["motorcortex", "video", "motorcortex-plugin"];
var devDependencies = {
  "@babel/cli": "7.17.10",
  "@babel/core": "7.17.10",
  "@babel/preset-env": "7.17.10",
  "@donkeyclip/motorcortex": "9.1.5",
  "@donkeyclip/motorcortex-player": "2.9.7",
  "@rollup/plugin-json": "4.1.0",
  "babel-eslint": "10.1.0",
  "babel-loader": "8.2.5",
  browserslist: "4.20.3",
  "caniuse-lite": "1.0.30001338",
  concurrently: "7.1.0",
  coveralls: "3.1.1",
  "css-loader": "6.7.1",
  "es6-promise": "4.2.8",
  eslint: "8.15.0",
  "eslint-config-prettier": "8.5.0",
  "eslint-plugin-babel": "5.3.1",
  "eslint-plugin-import": "2.26.0",
  "eslint-plugin-node": "11.1.0",
  "eslint-plugin-prettier": "4.0.0",
  "eslint-plugin-standard": "5.0.0",
  "exports-loader": "3.1.0",
  husky: "7.0.4",
  "imports-loader": "3.1.1",
  "json-stringify-safe": "5.0.1",
  "lint-staged": "12.4.1",
  npx: "10.2.2",
  prettier: "2.6.2",
  rimraf: "3.0.2",
  rollup: "2.72.1",
  "rollup-plugin-babel": "4.4.0",
  "rollup-plugin-commonjs": "10.1.0",
  "rollup-plugin-node-resolve": "5.2.0",
  "rollup-plugin-terser": "7.0.2",
  shelljs: "0.8.5",
  webpack: "5.72.0",
  "webpack-cli": "4.9.2",
  "webpack-dev-server": "4.9.0",
  "whatwg-fetch": "3.6.2"
};
var peerDependencies = {
  "@donkeyclip/motorcortex": "^9.1.5"
};
var pkg = {
  name: name$1,
  version: version$1,
  main: main,
  module: module,
  browser: browser,
  repository: repository,
  author: author,
  license: license,
  engines: engines,
  scripts: scripts,
  keywords: keywords,
  "lint-staged": {
    "*.{json,md,yml,yaml,css}": ["prettier --write"],
    "*.{js,jsx}": ["prettier --write", "eslint --fix"]
  },
  devDependencies: devDependencies,
  peerDependencies: peerDependencies
};
var index$1 = {
  npm_name: pkg.name,
  version: pkg.version,
  incidents: [{
    exportable: VideoPlay,
    name: "Playback"
  }],
  Clip: {
    exportable: VideoClip,
    attributesValidationRules: {
      sources: {
        optional: false,
        type: "array",
        min: 1,
        items: {
          type: "string"
        }
      },
      width: {
        optional: true,
        type: "number",
        integer: true,
        positive: true
      },
      height: {
        optional: true,
        type: "number",
        integer: true,
        positive: true
      },
      startFrom: {
        optional: true,
        type: "number",
        integer: true,
        min: 0
      },
      audio: {
        optional: true,
        type: "boolean",
        default: true
      }
    }
  },
  capabilities: {
    speed: false,
    preview: false
  },
  audio: "on"
};

const VideoPlugin = loadPlugin(index$1);
class SlideDateOneVid extends HTMLClip {
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
                  <div class="second-date"><span> ${this.attrs.day || ""} ${this.attrs.dayNumber || ""} </span>${this.attrs.month || ""} ${this.attrs.year || ""}</div>
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
        background-image: url(${this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg3.jpg"});
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
        background: linear-gradient(${this.attrs.overlayColor || "#101820D7,#101820FF"});
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: -1;
      }

      .bg-second{
        left:100%;
        background-image: url(${this.attrs.bgUrl2 || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg2.jpg"});
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
    const VideoClip = new VideoPlugin.Clip({
      sources: this.attrs.vidLink,
      width: 1920,
      height: 1080,
      startFrom: 0
    }, {
      selector: ".vid" // or host: your-host
    });
    const Playback = new VideoPlugin.Playback({
      selector: "!#video",
      duration: this.attrs.vidDuration || 6000
    });
    this.addIncident(VideoClip, 0);
    VideoClip.addIncident(Playback, 0);
    const delay = (this.attrs.vidDuration || 6000) - 3000 * 2;
    const array = this.attrs.title[2].split("");
    let html3;
    const containerParams = {
      width: "100%",
      height: "100%"
    };
    for (let i = 0; i < array.length; i++) {
      const html = `<span class='letter letter${i + 1}'>${array[i]}</span>`;
      html3 = html3 + html;
    }
    const word = new HTMLClip({
      css: this.css,
      html: ` <div class="conttitle" >${html3.split("undefined")[1]} </div>`,
      selector: ".word",
      containerParams
    });
    this.addIncident(word, 0);
    for (let i = 0; i < array.length; i++) {
      const textAnimation = new CSSEffect({
        animatedAttrs: {
          top: "0px",
          opacity: 1
        },
        attrs: {}
      }, {
        duration: 500,
        selector: ".letter" + (i + 1),
        easing: "easeOutQuad"
      });
      word.addIncident(textAnimation, (2000 + 100 * (i + 1)) * 2);
    }
    const bgMove = new CSSEffect({
      animatedAttrs: {
        left: "0%"
      },
      initialValues: {
        left: "-100%"
      },
      attrs: {}
    }, {
      duration: 2000,
      selector: ".bg",
      easing: "easeOutQuad"
    });
    const secondSlideTitleOne = new CSSEffect({
      animatedAttrs: {
        left: "0%"
      },
      initialValues: {
        left: "-50%"
      },
      attrs: {}
    }, {
      duration: 2000,
      selector: ".second-slide-titleOne",
      easing: "easeOutQuad"
    });
    const secondSlideTitleTwo = new CSSEffect({
      animatedAttrs: {
        left: "0%"
      },
      initialValues: {
        left: "-50%"
      },
      attrs: {}
    }, {
      duration: 2000,
      selector: ".second-slide-titleTwo",
      easing: "easeOutQuad"
    });
    const wordBg = new CSSEffect({
      animatedAttrs: {
        left: "0%"
      },
      initialValues: {
        left: "-50%"
      },
      attrs: {}
    }, {
      duration: 2400,
      selector: ".word-bg",
      easing: "easeOutQuad"
    });
    const shortDescription = new CSSEffect({
      animatedAttrs: {
        left: "0%"
      },
      initialValues: {
        left: "-50%"
      },
      attrs: {}
    }, {
      duration: 2000,
      selector: ".short-description",
      easing: "easeOutQuad"
    });
    const bgscaledown = new CSSEffect({
      animatedAttrs: {
        transform: {
          scale: 0.5
        }
      },
      initialValues: {
        transform: {
          scale: 1
        }
      },
      attrs: {}
    }, {
      duration: 1000,
      selector: ".bg,.bg-second",
      easing: "easeOutQuad"
    });
    const bgscaledownMove = new CSSEffect({
      animatedAttrs: {
        left: "-25%"
      },
      initialValues: {
        left: "0%"
      },
      attrs: {}
    }, {
      duration: 1000,
      selector: ".bg",
      easing: "easeOutQuad"
    });
    const bgsecondscaledownMove = new CSSEffect({
      animatedAttrs: {
        left: "25%"
      },
      initialValues: {
        left: "100%"
      },
      attrs: {}
    }, {
      duration: 1000,
      selector: ".bg-second",
      easing: "easeOutQuad"
    });
    const secondBgDate = new CSSEffect({
      animatedAttrs: {
        left: "5%"
      },
      initialValues: {
        left: "-100%"
      },
      attrs: {}
    }, {
      duration: 2000,
      selector: ".second-date",
      easing: "easeOutQuad"
    });
    const moveSecondS = new CSSEffect({
      animatedAttrs: {
        left: "-100%"
      },
      initialValues: {
        left: "0%"
      },
      attrs: {}
    }, {
      duration: 2000,
      selector: ".parent",
      easing: "easeOutQuad"
    });
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

const _COLOR = "color";
const introintroVal = {
  title: {
    optional: false,
    type: "string"
  },
  subtitle: {
    optional: false,
    type: "string"
  },
  month: {
    optional: false,
    type: "string"
  },
  bgUrl: {
    optional: true,
    type: "string"
  },
  mainColor: {
    optional: true,
    type: _COLOR
  },
  description: {
    optional: false,
    type: "string"
  },
  overlayColor: {
    optional: true,
    type: "array",
    min: 2,
    items: {
      optional: true,
      type: _COLOR
    }
  }
};
const SlideDateOneVidintroVal = {
  title: {
    optional: false,
    type: "array",
    min: 3,
    max: 3,
    items: {
      optional: false,
      type: "string"
    }
  },
  description: {
    optional: false,
    type: "string"
  },
  month: {
    optional: true,
    type: "string"
  },
  day: {
    optional: true,
    type: "string"
  },
  dayNumber: {
    optional: true,
    type: "number"
  },
  year: {
    optional: true,
    type: "number"
  },
  vidDuration: {
    optional: true,
    type: "number"
  },
  vidLink: {
    optional: true,
    type: "array",
    min: 1,
    items: {
      optional: true,
      type: "string"
    }
  },
  bgUrl: {
    optional: true,
    type: "string"
  },
  bgUrl2: {
    optional: true,
    type: "string"
  },
  overlayColor: {
    optional: true,
    type: "array",
    min: 2,
    items: {
      optional: true,
      type: _COLOR
    }
  },
  mainColor: {
    optional: true,
    type: _COLOR
  }
};
const SlideDateOneintroVal = {
  title: {
    optional: false,
    type: "array",
    min: 3,
    max: 3,
    items: {
      optional: false,
      type: "string"
    }
  },
  description: {
    optional: false,
    type: "string"
  },
  month: {
    optional: true,
    type: "string"
  },
  day: {
    optional: true,
    type: "string"
  },
  dayNumber: {
    optional: true,
    type: "number"
  },
  year: {
    optional: true,
    type: "number"
  },
  bgUrl: {
    optional: true,
    type: "string"
  },
  bgUrl2: {
    optional: true,
    type: "string"
  },
  overlayColor: {
    optional: true,
    type: "array",
    min: 2,
    items: {
      optional: true,
      type: _COLOR
    }
  },
  mainColor: {
    optional: true,
    type: _COLOR
  }
};
const prisenterintroVal = {
  title: {
    optional: false,
    type: "string"
  },
  name: {
    optional: false,
    type: "string"
  },
  position: {
    optional: false,
    type: "string"
  },
  bgUrl: {
    optional: true,
    type: "string"
  },
  overlayColor: {
    optional: true,
    type: "array",
    min: 2,
    items: {
      optional: true,
      type: _COLOR
    }
  },
  mainColor: {
    optional: true,
    type: _COLOR
  }
};
const SlideDateTwointroVal = {
  title: {
    optional: false,
    type: "string"
  },
  bigTitle: {
    optional: false,
    type: "string"
  },
  name: {
    optional: false,
    type: "string"
  },
  position: {
    optional: false,
    type: "string"
  },
  month: {
    optional: true,
    type: "string"
  },
  day: {
    optional: true,
    type: "string"
  },
  dayNumber: {
    optional: true,
    type: "number"
  },
  year: {
    optional: true,
    type: "number"
  },
  bgUrl: {
    optional: true,
    type: "string"
  },
  bgUrl2: {
    optional: true,
    type: "string"
  },
  overlayColor: {
    optional: true,
    type: "array",
    min: 2,
    items: {
      optional: true,
      type: _COLOR
    }
  },
  mainColor: {
    optional: true,
    type: _COLOR
  },
  dateOverlay: {
    optional: true,
    type: _COLOR
  }
};
const BtTslideDateintroVal = {
  title: {
    optional: false,
    type: "string"
  },
  name: {
    optional: false,
    type: "string"
  },
  position: {
    optional: false,
    type: "string"
  },
  month: {
    optional: true,
    type: "string"
  },
  day: {
    optional: true,
    type: "string"
  },
  dayNumber: {
    optional: true,
    type: "number"
  },
  year: {
    optional: true,
    type: "number"
  },
  bgUrl: {
    optional: true,
    type: "string"
  },
  bgUrl2: {
    optional: true,
    type: "string"
  },
  overlayColor: {
    optional: true,
    type: "array",
    min: 2,
    items: {
      optional: true,
      type: _COLOR
    }
  },
  mainColor: {
    optional: true,
    type: _COLOR
  },
  dateOverlay: {
    optional: true,
    type: _COLOR
  }
};
const transitionintroVal = {
  title: {
    optional: true,
    type: "string"
  }
};

var name = "@donkeyclip/motorcortex-slides";
var version = "2.0.2";

var index = {
  npm_name: name,
  version: version,
  incidents: [{
    exportable: Intro,
    name: "Intro",
    attributesValidationRules: introintroVal,
    originalDims: {
      width: "1920px",
      height: "1080px"
    }
  }, {
    exportable: Transition,
    name: "Transition",
    attributesValidationRules: transitionintroVal,
    originalDims: {
      width: "1920px",
      height: "1080px"
    }
  }, {
    exportable: SlideDateOne,
    name: "SlideDateOne",
    attributesValidationRules: SlideDateOneintroVal,
    originalDims: {
      width: "1920px",
      height: "1080px"
    }
  }, {
    exportable: SlideDateOneVid,
    name: "SlideDateOneVid",
    attributesValidationRules: SlideDateOneVidintroVal,
    originalDims: {
      width: "1920px",
      height: "1080px"
    }
  }, {
    exportable: SlideDateTwo,
    name: "SlideDateTwo",
    attributesValidationRules: SlideDateTwointroVal,
    originalDims: {
      width: "1920px",
      height: "1080px"
    }
  }, {
    exportable: Scrollslide,
    name: "Scrollslide",
    attributesValidationRules: prisenterintroVal,
    originalDims: {
      width: "1920px",
      height: "1080px"
    }
  }, {
    exportable: LtRslide,
    name: "LtRslide",
    attributesValidationRules: prisenterintroVal,
    originalDims: {
      width: "1920px",
      height: "1080px"
    }
  }, {
    exportable: BtTslide,
    name: "BtTslide",
    attributesValidationRules: prisenterintroVal,
    originalDims: {
      width: "1920px",
      height: "1080px"
    }
  }, {
    exportable: BtTslideDate,
    name: "BtTslideDate",
    attributesValidationRules: BtTslideDateintroVal,
    originalDims: {
      width: "1920px",
      height: "1080px"
    }
  }, {
    exportable: LtRslideTop,
    name: "LtRslideTop",
    attributesValidationRules: prisenterintroVal,
    originalDims: {
      width: "1920px",
      height: "1080px"
    }
  }, {
    exportable: RtLslide,
    name: "RtLslide",
    attributesValidationRules: prisenterintroVal,
    originalDims: {
      width: "1920px",
      height: "1080px"
    }
  }]
};

export { index as default };
