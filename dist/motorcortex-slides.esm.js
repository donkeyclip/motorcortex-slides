import MotorCortex, { CSSEffect, BrowserClip, MediaPlayback, Effect } from '@donkeyclip/motorcortex';

class Intro extends MotorCortex.HTMLClip {
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
    return "\n      <div class=\"bg\"> \n        <div class=\"first-slide\">\n          <div class=\"testdiv\">\n            <div class=\"sub\">\n              <div class=\"subtitle\">\n                <div class=\"subtitle-holder\">\n                  <div class=\"subtitle-text\">".concat(this.attrs.subtitle, "</div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"title\">\n            <div class=\"date-holder\">\n              <div class=\"date\">\n                <span> ").concat(this.attrs.month, "</span>\n              </div>\n            </div>\n            <div class=\"holder-title\">\n              <div class=\"title-text\">").concat(this.attrs.title, "</div>\n            </div>\n          </div>\n          <div class=\"description\">\n            <div class=\"description-text\">\n              <p>").concat(this.attrs.description, "</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    ");
  }

  get css() {
    return "\n      .bg {\n        height: 1080px;\n        width: 1920px;\n        position: relative;\n        background-image: url(".concat(this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/kissmybutonbg.jpg", ");\n        background-size: 1920px;\n        background-position: center;\n        transform: scale(1);\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n        flex: 1 0 auto;\n      }\n\n      .bg:after {\n        content: \"\";\n        display: block;\n        background: linear-gradient(").concat(this.attrs.overlayColor || "#101820D7,#101820FF", ");\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        z-index: -1;\n      }\n\n      .first-slide {\n        display: flex;\n        width: 90%;\n        white-space: nowrap;\n        overflow: hidden;\n        flex-direction: column;\n        position: relative;\n      }\n\n      .sub {\n        display: flex;\n        overflow: hidden;\n        position: relative;\n        width: 50%;\n        left:0px;\n      }\n      \n      .title {\n        color: ").concat(this.attrs.mainColor || "#00ff40", ";\n        font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 864 * 2), "px;\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        margin-top:-").concat(this.dinamicFontSize(this.attrs.title.length, 864 * 2) / 2.6, "px;\n        overflow: hidden;\n        display: flex;\n        width: 100%;\n      }\n\n      .subtitle {\n        color: ").concat(this.attrs.mainColor || "#00ff40", ";\n        font-size: ").concat(this.dinamicFontSize(this.attrs.subtitle.length, 864), "px;\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        overflow: hidden;\n      }\n\n      .description-text {\n        position: relative;\n        transform: translateY(-200%);\n      }\n\n      .description {\n        border-top: 15px solid ").concat(this.attrs.mainColor || "#00ff40", ";\n        overflow: hidden;\n        transform: translateY(200%);\n        font-size: 30px;\n        color: #fff;\n        position: relative;\n        white-space: normal;\n        text-align: left;\n        text-transform: uppercase;\n        font-family: 'Roboto Mono', monospace;\n      }\n\n      .testdiv{\n        width:100%;\n        padding-bottom: 2%;\n      }\n\n      .date-holder{\n        width: 28%;\n        position: absolute;\n        justify-self: center;\n        top: 8%;\n        display: flex;\n        justify-content: flex-end;\n      }\n\n      .date {\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .date span {\n        position: relative;\n        overflow: hidden;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        font-size: 50px;\n        color: #fff ;\n        transform: translateX(200%);\n      }\n\n      .title-text{\n        overflow: hidden;\n        width : 0%;\n      }\n\n      .subtitle-text{\n        overflow: hidden;\n        right: 100%;\n        position: relative;\n      }\n\n      .subtitle-holder{\n        overflow: hidden;\n        position : relative;\n        right: -100%;\n      }\n    ");
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
        left: "".concat(1728 - (this.dinamicFontSize(this.attrs.subtitle.length, 864) * 0.6 * this.attrs.subtitle.length, 864), "px")
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

class Transition extends MotorCortex.HTMLClip {
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
    return "\n      <div class=\"transition-container\">\n        <p class=\"transition-text\">".concat(this.attrs.title, "</p>\n      </div>\n    ");
  }

  get css() {
    return "\n      .transition-container {\n        color:white; \n        background:rgb(0, 0, 0);\n        mix-blend-mode: multiply;\n        font: bolder 400px \"Roboto Mono\";\n        text-align: center;\n        position: relative;\n        left: -100%;\n        width: 20%;\n        height: 100%;\n        position: absolute;\n        display: flex;\n        align-content: center;\n        align-items: center;\n        overflow: hidden;\n      }\n\n      .transition-text {\n        position: relative;\n        left: -0%;\n      }\n    ";
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

class SlideDateOne extends MotorCortex.HTMLClip {
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
    return "\n    <div>\n      <div class=\"bg \">\n        <div class=\"second-slide\">\n          <div class=\"second-slide-titleOne\">".concat(this.attrs.title[0], "</div>\n          <div class=\"second-slide-titleTwo\">").concat(this.attrs.title[1], "</div>\n          <div class=\"word-bg\">\n            <div class=\"word\"></div>\n          </div>\n          <div class=\"short-description\">\n            <p>").concat(this.attrs.description, "</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"bg-second \">\n        <div class=\"bg-second-slide\">\n            <div class=\"second-date-container\">\n            <div class=\"second-date\"><span> ").concat(this.attrs.day || "", " ").concat(this.attrs.dayNumber || "", " </span>").concat(this.attrs.month || "", " ").concat(this.attrs.year || "", "</div>\n            </div>\n        </div>\n      </div>\n    </div>\n    ");
  }

  get css() {
    return "\n      .bg,.bg-second {\n        width: 1920px;\n        height: 1080px;\n        background-image: url(".concat(this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg3.jpg", ");\n        background-size: 1920px;\n        background-position: center;\n        transform: scale(1);\n        display: flex;\n        position: absolute;\n        align-items: center;\n        flex-wrap: wrap;\n        flex: 1 0 auto;\n        left: -100%\n      }\n\n      .bg:after,.bg-second:after {\n        content: \"\";\n        display: block;\n        background: linear-gradient(").concat(this.attrs.overlayColor || "#101820D7,#101820FF", ");\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        z-index: -1;\n      }\n\n      .bg-second{\n        left:100%;\n        background-image: url(").concat(this.attrs.bgUrl2 || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg2.jpg", ");\n      }\n\n      .short-description{\n        font-size: 20px;\n        color: #fff;\n        position: relative;\n        white-space: normal;\n        text-align: left;\n        text-transform: uppercase;\n        font-family: 'Roboto Mono', monospace;\n        width: 720px;\n        left: -50%;\n      }\n\n      .word-bg{\n        background-color:").concat(this.attrs.mainColor || "#00ff40", ";\n        width: 720px;\n        position: relative;\n        left: -50%\n      }\n\n      .word{\n        overflow: hidden;\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 720px\n      }\n\n      .second-slide-titleTwo,.second-slide-titleOne{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.titleone.length, 360), "px;\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n        position: relative;\n        left : -50%;\n      }\n\n      .second-slide-titleTwo{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.subtitle.length, 720), "px;\n      }\n\n      .second-slide-titleOne{\n        color :").concat(this.attrs.mainColor || "#00ff40", "\n      }\n\n      .second-slide{\n        position : absolute;\n        left : 0%;\n        display: flex;\n        align-content: center;\n        justify-content: center;\n        flex-direction: column;\n        margin-left: 10%;\n      }\n\n      .letter{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.str.length, 720), "px;\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n        position: relative;\n        position: relative;\n        text-align: center;\n        top : 300px;\n        width: 100%;\n      }\n\n      .second-date-container{\n        border-left: 100px solid ").concat(this.attrs.mainColor || "#00ff40", ";\n        overflow: hidden;\n        width: 200%;\n      }\n\n      .second-date{\n        font-size: 100px;\n        color: #fff;\n        position: relative;\n        white-space: nowrap;\n        text-align: left;\n        text-transform: uppercase;\n        font-family: 'Roboto Mono', monospace;\n        width: 720px;\n        left:-100%;\n      }\n      \n      .second-date span{\n        color: ").concat(this.attrs.mainColor, ";\n      }\n    ");
  }

  buildTree() {
    const array = this.attrs.title[2].split("");
    let html3;
    const containerParams = {
      width: "100%",
      height: "100%"
    };

    for (let i = 0; i < array.length; i++) {
      const html = "<span class='letter letter".concat(i + 1, "'>").concat(array[i], "</span>");
      html3 = html3 + html;
    }

    const word = new MotorCortex.HTMLClip({
      css: this.css,
      html: " <div class=\"conttitle\" >".concat(html3.split("undefined")[1], " </div>"),
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

class Scrollslide extends MotorCortex.HTMLClip {
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
    return "\n      <div class=\"third-holder \">\n        <div class=\"bg\">\n          <div class=\"bg-third-slide\">\n            <div class=\"third-first-presenter-slide\">\n              <div class=\"third-presenter-container\">\n                <div class=\"third-presenter presenter\">".concat(this.attrs.title, "</div>\n              </div>\n              <div class=\"name-container\">").concat(this.attrs.name, "</div>\n              <div class=\"position-container\">").concat(this.attrs.position, "</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"bg\">\n          <div class=\"bg-third-slide\">\n            <div class=\"third-first-presenter-slide\">\n              <div class=\"third-presenter-container\">\n                <div class=\"third-presenter presenter\">").concat(this.attrs.title, "</div>\n              </div>\n              <div class=\"name-container\">").concat(this.attrs.name, "</div>\n              <div class=\"position-container\">").concat(this.attrs.position, "</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"bg\">\n          <div class=\"bg-third-slide\">\n            <div class=\"third-first-presenter-slide\">\n              <div class=\"third-presenter-container\">\n                <div class=\"third-presenter presenter\">").concat(this.attrs.title, "</div>\n              </div>\n              <div class=\"name-container\">").concat(this.attrs.name, "</div>\n              <div class=\"position-container\">").concat(this.attrs.position, "</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    ");
  }

  get css() {
    return "\n      .bg {\n        width: 100%;\n        height: 100%;\n        background-image: url(".concat(this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg3.jpg", ");\n        background-size: 1920px;\n        background-position: center;\n        transform: scale(1);\n        display: flex;\n        position: relative;\n        align-items: center;\n        flex-wrap: wrap;\n        flex: 1 0 auto;\n        margin-top: 10%;\n        margin-bottom: 10%;\n      }\n\n      .bg:after {\n        content: \"\";\n        display: block;\n        background: linear-gradient(").concat(this.attrs.overlayColor || "#101820D7,#101820FF", ");\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        z-index: -1;\n      }\n    \n     .bg-third-slide{\n        height: 1080px;\n        width: 1920px;\n        display: flex;\n        align-items: center;\n        margin-left: 5%;\n      }\n\n      .third-first-presenter-slide{\n        position : relative;\n      }\n\n      .third-presenter-container{\n        overflow: hidden;\n        border-top: 15px solid ").concat(this.attrs.mainColor || "#00ff40", ";\n      }\n\n      .presenter,.big-title{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: ").concat(this.attrs.mainColor || "#00ff40", ";\n      }\n\n      .third-presenter{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 720), "px;\n        transform: translateY(-100%);\n      }\n\n      .name-container,.position-container{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n      }\n    \n      .name-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.name.length, 360), "px;\n      }\n\n      .position-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.position.length, 360), "px;\n      }\n\n      .third-holder{\n        left: 100%;\n        position: relative;\n        top : 0%;\n      }\n    ");
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

class LtRslide extends MotorCortex.HTMLClip {
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
    return "\n      <div class=\"bg\">\n        <div class=\"bg-quarter-slide\">\n          <div class=\"quarter-first-presenter-slide\">\n            <div class=\"quarter-left\">\n              <div class=\"quarter-presenter-container\">\n                <div class=\"quarter-presenter presenter\">".concat(this.attrs.title, "</div>\n              </div>\n              <div class=\"name-container\">").concat(this.attrs.name, "</div>\n              <div class=\"position-container\">").concat(this.attrs.position, "</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    ");
  }

  get css() {
    return "\n      .bg {\n        width: 100%;\n        height: 100%;\n        background-image: url(".concat(this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg4.jpg", ");\n        background-size: 1920px;\n        background-position: center;\n        transform: scale(1);\n        display: flex;\n        position: relative;\n        align-items: center;\n        flex-wrap: wrap;\n        flex: 1 0 auto;\n        left : -100%;\n      }\n\n      .bg:after {\n        content: \"\";\n        display: block;\n        background: linear-gradient(").concat(this.attrs.overlayColor || "#101820D7,#101820FF", ");\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        z-index: -1;\n      }\n\n      .third-first-presenter-slide,.quarter-first-presenter-slide{\n        position : relative;\n      }\n    \n      .quarter-first-presenter-slide{\n        margin-bottom: 15%;\n        border-right: 15px solid ").concat(this.attrs.mainColor || "#00ff40", ";\n      }\n\n      .quarter-left{\n        display: flex;\n        flex-direction: column;\n        align-items: flex-end;\n        position : relative;\n        left: -50%;\n      }\n\n      .name-container,.position-container{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n      }\n    \n      .name-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.name.length, 360), "px;\n      }\n\n      .position-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.position.length, 360), "px;\n      }\n\n      .bg-quarter-slide{\n        height: 1080px;\n        width: 1920px;\n        display: flex;\n        align-items: center;\n      }\n\n      .bg-quarter-slide{\n        align-items: flex-end;\n      }\n\n      .quarter-presenter{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 720), "px;\n      }\n\n      .presenter,.big-title{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: ").concat(this.attrs.mainColor || "#00ff40", ";\n      }\n    ");
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

class SlideDateTwo extends MotorCortex.HTMLClip {
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
    return "\n    <div>\n      <div class=\"bg\">\n        <div class=\"bg-deferi-day-slide\">\n          <div class=\"big-title\">".concat(this.attrs.bigTitle, "</div>\n          <div class=\"test-mask \">\n            <div class=\"defter-date-container\">\n              <div class=\"defter-date\"><span> ").concat(this.attrs.day || "", " ").concat(this.attrs.dayNumber, " </span>").concat(this.attrs.month || "", " ").concat(this.attrs.year || "", "</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"bg-second bg-small\">\n        <div class=\"bg-second-slide\">\n          <div class=\"quarter-first-presenter-slide\">\n          <div class=\"quarter-left\">\n            <div class=\"quarter-presenter-container\">\n              <div class=\"quarter-presenter presenter\">").concat(this.attrs.title, "</div>\n            </div>\n            <div class=\"name-container\">").concat(this.attrs.name, "</div>\n            <div class=\"position-container\">").concat(this.attrs.position, "</div>\n          </div>\n        </div>\n        </div>\n      </div>\n      <div class=\"bg-second bg-big \">\n        <div class=\"bg-second-slide\">\n          <div class=\"quarter-first-presenter-slide\">\n          <div class=\"quarter-left\">\n            <div class=\"quarter-presenter-container\">\n              <div class=\"quarter-presenter presenter\">").concat(this.attrs.title, "</div>\n            </div>\n            <div class=\"name-container\">").concat(this.attrs.name, "</div>\n            <div class=\"position-container\">").concat(this.attrs.position, "</div>\n          </div>\n        </div>\n        </div>\n      </div>\n    </div>\n    ");
  }

  get css() {
    return "\n      .bg,.bg-second {\n        width: 1920px;\n        height: 1080px;\n        background-image: url(".concat(this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg5.jpg", ");\n        background-size: 1920px;\n        background-position: center;\n        transform: scale(1);\n        display: flex;\n        position: absolute;\n        align-items: center;\n        flex-wrap: wrap;\n        flex: 1 0 auto;\n        left: -100%\n      }\n\n      .bg:after,.bg-second:after {\n        content: \"\";\n        display: block;\n        background: linear-gradient(").concat(this.attrs.overlayColor || "#101820D7,#101820FF", ");\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        z-index: -1;\n      }\n\n      .bg-second{\n        left:100%;\n        background-image: url(").concat(this.attrs.bgUrl2 || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg2.jpg", ");\n      }\n\n      .bg-big{\n        left: 100%;\n      }\n\n      .bg-second-slide,.bg-third-slide,.bg-quarter-slide,.bg-deferi-day-slide{\n        height: 1080px;\n        width: 1920px;\n        display: flex;\n        align-items: center;\n        overflow: hidden;\n      }\n\n      .bg-deferi-day-slide{\n        overflow: hidden;\n      }\n\n      .bg-second-slide{\n        justify-content: center;\n      }\n\n      .presenter,.big-title{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: ").concat(this.attrs.mainColor || "#00ff40", ";\n      }\n    \n      .big-title{\n        font-size: 1700px;\n        position: relative;\n      }\n\n      .test-mask{\n        position: absolute;\n        left: 0;\n        height: 132.5px;\n        background-size: 1920px;\n        position: absolute;\n        left: 0\n      }\n    \n      .test-mask{\n        height: 132.5px;\n        width: 50%;\n        background-image: url(").concat(this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg5.jpg", ");\n        background-size: 1920px;\n        background-position: center;\n        background-position-x: center;\n        transform: scale(1);\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n        overflow: hidden;\n        left: 25%;\n        background-position-x: center;  \n      }\n\n      .test-mask:after{ \n        content: \"\";\n        display: block;\n        background: #4e070799;\n        width: 1920px;\n        height: 1080px;\n        position: absolute;\n        top: -458px;\n        left: 0;\n        z-index: -2;\n        background: linear-gradient(").concat(this.attrs.overlayColor || "#101820D7,#101820FF", ");\n        top: -345%;\n      }\n\n      .defter-date-container{\n        position: absolute;\n        font-size: 60px;\n        color: #fff;\n        white-space: nowrap;\n        text-transform: uppercase;\n        font-family: 'Roboto Mono', monospace;\n        background:").concat(this.attrs.dateOverlay || "#ff00b3", ";   \n        padding: 2% 6%;\n        background-blend-mode: multiply;\n        background-image: url(").concat(this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg5.jpg", ");\n        background-size: 1920px;\n        background-position: center;\n        transform: scale(1);\n      }\n\n      .quarter-presenter-container{\n        overflow: hidden;\n      }\n\n      .quarter-first-presenter-slide{\n        margin-bottom: 15%;\n        border-top: 15px solid ").concat(this.attrs.mainColor || "#00ff40", ";\n        position: relative;\n        top: 90%;\n        overflow: hidden;\n      }\n\n      .quarter-left{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        position : relative;\n        top: 90%;\n      }\n\n      .name-container,.position-container{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n      }\n\n      .name-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.name.length, 360), "px;\n      }\n\n      .position-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.position.length, 360), "px;\n      }\n\n      .bg-quarter-slide{\n        height: 1080px;\n        width: 1920px;\n        display: flex;\n        align-items: center;\n      }\n\n      .bg-quarter-slide{\n        align-items: flex-end;\n      }\n\n      .quarter-presenter{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 720), "px;\n      }\n    ");
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

class BtTslide extends MotorCortex.HTMLClip {
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
    return "\n      <div class=\"bg\">\n        <div class=\"bg-quarter-slide\">\n          <div class=\"quarter-first-presenter-slide\">\n            <div class=\"quarter-left\">\n              <div class=\"quarter-presenter-container\">\n                <div class=\"quarter-presenter presenter\">".concat(this.attrs.title, "</div>\n              </div>\n              <div class=\"name-container\">").concat(this.attrs.name, "</div>\n              <div class=\"position-container\">").concat(this.attrs.position, "</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    ");
  }

  get css() {
    return "\n      .bg {\n        width: 100%;\n        height: 100%;\n        background-image: url(".concat(this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg4.jpg", ");\n        background-size: 1920px;\n        background-position: center;\n        transform: scale(1);\n        display: flex;\n        position: relative;\n        align-items: center;\n        flex-wrap: wrap;\n        flex: 1 0 auto;\n      \n        top : 100%;\n        \n      }\n      .bg:after {\n        content: \"\";\n        display: block;\n        background: linear-gradient(").concat(this.attrs.overlayColor || "#101820D7,#101820FF", ");\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        z-index: -1;\n      }\n      .third-first-presenter-slide,.quarter-first-presenter-slide{\n        position : relative;\n      }\n    \n      .quarter-first-presenter-slide{\n        margin-bottom: 15%;\n        border-top: 15px solid ").concat(this.attrs.mainColor || "#00ff40", ";\n        align-items: center;\n        justify-content: center;\n        \n      }\n\n      .quarter-left{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        position : relative;\n        top: 90%;\n        \n      }\n      .name-container,.position-container{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n      }\n    \n      .name-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.name.length, 360), "px;\n      }\n      .position-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.position.length, 360), "px;\n      }\n      .bg-quarter-slide{\n        height: 1080px;\n        width: 1920px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n      .quarter-presenter{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 720), "px;\n      }\n      .presenter,.big-title{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: ").concat(this.attrs.mainColor || "#00ff40", ";\n      }\n    ");
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

class BtTslideDate extends MotorCortex.HTMLClip {
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
    return "\n    <div class=\"fragment\">\n      <div class=\"bg\">\n        <div class=\"bg-quarter-slide\">\n          <div class=\"quarter-first-presenter-slide\">\n            <div class=\"quarter-left\">\n              <div class=\"quarter-presenter-container\">\n                <div class=\"quarter-presenter presenter\">".concat(this.attrs.title, "</div>\n              </div>\n              <div class=\"name-container\">").concat(this.attrs.name, "</div>\n              <div class=\"position-container\">").concat(this.attrs.position, "</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"bg-next\">\n        <div class=\"bg-quarter-slide\">\n          <div class=\"test-mask\">\n            <div class=\"defter-date-container\">\n              <div class=\"defter-date\"><span> ").concat(this.attrs.day || "", " ").concat(this.attrs.dayNumber || "", " </span>").concat(this.attrs.month || "", " ").concat(this.attrs.year || "", "</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      </div>\n    ");
  }

  get css() {
    return "\n      .fragment{\n        position: relative\n      }\n      .bg {\n        width: 100%;\n        height: 100%;\n        background-image: url(".concat(this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg3.jpg", ");\n        background-size: 1920px;\n        background-position: center;\n        transform: scale(1);\n        display: flex;\n        position: relative;\n        align-items: center;\n        flex-wrap: wrap;\n        flex: 1 0 auto;\n        top : 100%; \n      }\n\n      .bg:after,.bg-next {\n        content: \"\";\n        display: block;\n        background: linear-gradient(").concat(this.attrs.overlayColor || "#101820D7,#101820FF", ");\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        z-index: -1;\n      }\n\n      .bg-next {\n        width: 100%;\n        height: 100%;\n        background-size: 1920px;\n        background-position: center;\n        transform: scale(1);\n        display: flex;\n        position: absolute;\n        align-items: center;\n        flex-wrap: wrap;\n        flex: 1 0 auto;\n        left : -100%\n      }\n\n      .bg-next,.defter-date-container{\n        background-image: url(").concat(this.attrs.bgUrl2 || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg2.jpg", ");\n      }\n\n      .defter-date-container{\n        position: absolute;\n        font-size: 60px;\n        color:#fff;\n        white-space: nowrap;\n        text-transform: uppercase;\n        font-family: 'Roboto Mono', monospace;\n        background: ").concat(this.attrs.dateOverlay || "#ff00b3", ";\n        padding: 2% 6%;\n        background-blend-mode: multiply;\n        background-size: 1920px;\n        background-position: center;\n        transform: scale(1);\n      }\n\n      .defter-date span{\n        color: ").concat(this.attrs.mainColor || "#00ff40", ";\n      }\n\n      .third-first-presenter-slide,.quarter-first-presenter-slide{\n        position : relative;\n      }\n    \n      .quarter-first-presenter-slide{\n        margin-bottom: 15%;\n        border-top: 15px solid ").concat(this.attrs.mainColor || "#00ff40", ";\n        align-items: center;\n        justify-content: center;\n      }\n\n      .quarter-left{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        position : relative;\n        top: 90%;\n      }\n\n      .name-container,.position-container{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n      }\n    \n      .name-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.name.length, 360), "px;\n      }\n\n      .position-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.position.length, 360), "px;\n      }\n\n      .bg-quarter-slide{\n        height: 1080px;\n        width: 1920px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n      .quarter-presenter{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 720), "px;\n      }\n\n      .presenter,.big-title{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: ").concat(this.attrs.mainColor || "#00ff40", ";\n      }\n\n      .test-mask{\n        position: absolute;\n        left: 0;\n        height: 132.5px;\n        background-size: 1920px;\n        position: absolute;\n        left: 0;\n        display: flex;\n        justify-content: center;\n        align-content: center;\n        width: 100%;\n      }\n    ");
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

class LtRslideTop extends MotorCortex.HTMLClip {
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
    return "\n      <div class=\"bg\">\n        <div class=\"bg-quarter-slide\">\n            <div class=\"quarter-left\">\n              <div class=\"quarter-presenter-container\">\n                <div class=\"quarter-presenter presenter\">".concat(this.attrs.title, "</div>\n              </div>\n              <div class=\"name-container\">").concat(this.attrs.name, "</div>\n              <div class=\"position-container\">").concat(this.attrs.position, "</div>\n            </div>\n        </div>\n      </div>\n    ");
  }

  get css() {
    return "\n      .bg {\n        width: 100%;\n        height: 100%;\n        background-image: url(".concat(this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg2.jpg", ");\n        background-size: 1920px;\n        background-position: center;\n        transform: scale(1);\n        display: flex;\n        position: relative;\n        align-items: center;\n        flex-wrap: wrap;\n        flex: 1 0 auto;\n        left : -100%;\n      }\n\n      .bg:after {\n        content: \"\";\n        display: block;\n        background: linear-gradient(").concat(this.attrs.overlayColor || "#101820D7,#101820FF", ");\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        z-index: -1;\n      }\n\n      .quarter-left{\n        display: flex;\n        flex-direction: column;\n        align-items: flex-end;\n        position : relative;\n        top: -100%;\n        border-top: 15px solid ").concat(this.attrs.mainColor || "#00ff40", ";\n        padding-top: 25%;\n        margin-left: 4%;\n      }\n\n      .name-container,.position-container{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n      }\n    \n      .name-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.name.length, 360), "px;\n      }\n\n      .position-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.position.length, 360), "px;\n      }\n\n      .bg-quarter-slide{\n        height: 1080px;\n        width: 1920px;\n        display: flex;\n        align-items: center;\n      }\n\n      .quarter-presenter{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 720), "px;\n      }\n\n      .presenter,.big-title{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: ").concat(this.attrs.mainColor || "#00ff40", ";\n      }\n    ");
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

class RtLslide extends MotorCortex.HTMLClip {
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
    return "\n      <div class=\"bg\">\n        <div class=\"bg-quarter-slide\">\n            <div class=\"quarter-left\">\n              <div class=\"quarter-presenter-container\">\n                <div class=\"quarter-presenter presenter\">".concat(this.attrs.title, "</div>\n              </div>\n              <div class=\"name-container\">").concat(this.attrs.name, "</div>\n              <div class=\"position-container\">").concat(this.attrs.position, "</div>\n            </div>\n        </div>\n      </div>\n    ");
  }

  get css() {
    return "\n      .bg {\n        width: 100%;\n        height: 100%;\n        background-image: url(".concat(this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg4.jpg", ");\n        background-size: 1920px;\n        background-position: center;\n        transform: scale(1);\n        display: flex;\n        position: relative;\n        align-items: center;\n        flex-wrap: wrap;\n        flex: 1 0 auto;\n        right: -100%;\n      }\n\n      .bg:after {\n        content: \"\";\n        display: block;\n        background: linear-gradient(").concat(this.attrs.overlayColor || "#101820D7,#101820FF", ");\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        z-index: -1;\n      }\n\n      .quarter-left{\n        display: flex;\n        flex-direction: column;\n        align-items: flex-end;\n        position : relative;\n        top: 100%;\n        border-bottom: 15px solid ").concat(this.attrs.mainColor || "#00ff40", ";\n        padding-bottom: 25%;\n        margin-right: 4%;\n      }\n\n      .name-container,.position-container{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n      }\n    \n      .name-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.name.length, 360), "px;\n      }\n\n      .position-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.position.length, 360), "px;\n      }\n\n      .bg-quarter-slide{\n        height: 1080px;\n        width: 1920px;\n        display: flex;\n        align-items: center;\n        justify-content: flex-end;\n      }\n\n      .quarter-presenter{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 720), "px;\n      }\n\n      .presenter,.big-title{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: ").concat(this.attrs.mainColor || "#00ff40", ";\n      }\n    ");
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
    return "\n      <div>\n          <video id=\"video\" style=\"".concat(videoStyle, "\" preload=\"auto\">\n              ").concat(videoSources, "\n          </video>\n          <canvas id=\"canvas\"></canvas>\n      </div>\n    ");
  }

  get css() {
    return "\n      #video{\n        display:none;\n      }\n    ";
  }

  setVolume(volume) {
    this.video.volume = volume;
  }

  onAfterRender() {
    const video = this.context.getElements("video")[0];
    this.video = video;
    const canvas = this.context.getElements("canvas")[0];
    const ctx = canvas.getContext("2d");

    const loadedmetadataListener = () => {
      const scaleX = this.width / video.videoWidth;
      const scaleY = this.width / video.videoWidth;
      canvas.style.transform = "scale(".concat(scaleX, ", ").concat(scaleY, ")");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
    };

    video.addEventListener("loadedmetadata", loadedmetadataListener, {
      once: true
    });
    this.setCustomEntity("video", {
      video,
      canvas,
      ctx,
      startFrom: this.startFrom
    }); // Audio

    if (this.attrs.audio === false) {
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
    const video = this.element.entity.video;
    video.play();

    if (this.hasSetWaitingListener !== true) {
      video.addEventListener("waiting", this.waitingHandler.bind(this));
      this.hasSetWaitingListener = true;
    }

    if (this.hasSetCanplayListener !== true) {
      video.addEventListener("canplay", this.canplayHandler.bind(this));
      this.hasSetCanplayListener = true;
    }

    this.drawFrame(video);
    return true;
  }

  drawFrame(video) {
    const ctx = this.element.entity.ctx;
    ctx.drawImage(video, 0, 0);
    this.timeout = setTimeout(() => {
      this.drawFrame(video);
    }, 10);
  }

  waitingHandler() {
    this.setBlock("Video loading");
  }

  canplayHandler() {
    this.unblock();
  }

  stop() {
    this.element.entity.video.pause();
    clearTimeout(this.timeout);
  }

  onProgress(millisecond) {
    const startFrom = millisecond + this.element.entity.startFrom;
    this.element.entity.video.currentTime = (startFrom + millisecond) / 1000;
    this.element.entity.ctx.drawImage(this.element.entity.video, 0, 0);
  }

}

var compositeAttributes = {
  filter: ["blur", "brightness", "contrast", "drop-shadow", "grayscale", "hue-rotate", "invert", "opacity", "saturate", "sepia"]
};
const effects = compositeAttributes.filter;
const effectsUnits = {
  opacity: "",
  contrast: "",
  saturate: "",
  brightness: "",
  blur: "px",
  sepia: "",
  invert: "",
  grayscale: "",
  "hue-rotate": "deg"
};

class VideoEffect extends Effect {
  getScratchValue() {
    return {
      opacity: 1,
      contrast: 1,
      saturate: 1,
      brightness: 1,
      blur: 0,
      sepia: 0,
      invert: 0,
      grayscale: 0,
      "hue-rotate": 0
    };
  }

  objToFilterValue(obj) {
    let string = "";

    for (const filter in obj) {
      string += "".concat(filter, "(").concat(obj[filter]).concat(effectsUnits[filter], ") ");
    }

    return string;
  }

  onProgress(ms) {
    const fraction = this.getFraction(ms);
    const targetValues = Object.assign({}, this.initialValue);

    for (const i in effects) {
      const effect = effects[i];

      if (this.initialValue[effect] !== this.targetValue[effect]) {
        targetValues[effect] = fraction * (this.targetValue[effect] - this.initialValue[effect]) + this.initialValue[effect];
      }
    }

    this.element.entity.ctx.filter = this.objToFilterValue(targetValues);
  }

}

var name$1 = "@kissmybutton/motorcortex-video";
var version$1 = "2.1.0";
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
  "lint:styles": "stylelint  --allow-empty-input \"src/**.css\" \"src/**/*.scss\" --config .stylelintrc.json",
  "lint:js": "eslint -c .eslintrc src/**/*.js",
  lint: "npm run concurrently \"npm:lint:js\" \"npm:lint:styles\"",
  "lint:fix": "npm run concurrently  \"npm:lint:js -- --fix\" \"npm:lint:styles -- --fix\"",
  build: "npm run build:lib && npm run build:demo",
  "build:lib": "rollup -c",
  start: "npm run build:lib && concurrently -c \"cyan.bold,magenta.bold\" \"npm:build:lib -- -w\"  \"npm:start:demo\" ",
  "start:demo": "webpack serve --config ./demo/webpack.config.js --mode=development --progress ",
  "build:demo": "webpack --mode=production --config ./demo/webpack.config.js",
  "test:prod": "npm run lint",
  "report-coverage": "cat ./coverage/lcov.info | coveralls",
  commit: "git-cz",
  prebuild: "rimraf dist",
  prepare: "husky install"
};
var keywords = ["motorcortex", "animation"];
var release = {
  verifyConditions: ["@semantic-release/changelog", "@semantic-release/npm", "@semantic-release/github", "@semantic-release/git"],
  prepare: ["@semantic-release/changelog", "@semantic-release/npm", "@semantic-release/git"]
};
var config = {
  commitizen: {
    path: "cz-conventional-changelog"
  }
};
var devDependencies = {
  "@babel/cli": "7.16.0",
  "@babel/core": "7.16.0",
  "@babel/preset-env": "7.16.0",
  "@commitlint/cli": "14.1.0",
  "@commitlint/config-conventional": "14.1.0",
  "@donkeyclip/motorcortex": "^8.0.2",
  "@donkeyclip/motorcortex-player": "^2.5.2",
  "@rollup/plugin-json": "4.1.0",
  "@semantic-release/changelog": "6.0.1",
  "@semantic-release/git": "10.0.1",
  "@semantic-release/github": "8.0.1",
  "@semantic-release/npm": "8.0.2",
  "@size-limit/preset-big-lib": "6.0.4",
  "babel-eslint": "10.1.0",
  "babel-loader": "8.2.3",
  browserslist: "4.17.5",
  "caniuse-lite": "1.0.30001274",
  commitizen: "4.2.4",
  concurrently: "6.3.0",
  coveralls: "3.1.1",
  "css-loader": "6.5.0",
  "cz-conventional-changelog": "3.3.0",
  "es6-promise": "4.2.8",
  eslint: "7.32.0",
  "eslint-config-prettier": "8.3.0",
  "eslint-config-standard": "16.0.3",
  "eslint-plugin-babel": "5.3.1",
  "eslint-plugin-import": "2.25.2",
  "eslint-plugin-node": "11.1.0",
  "eslint-plugin-prettier": "4.0.0",
  "eslint-plugin-standard": "5.0.0",
  "exports-loader": "3.1.0",
  husky: "^7.0.0",
  "imports-loader": "3.1.1",
  "json-stringify-safe": "5.0.1",
  "lint-staged": "11.2.6",
  npx: "10.2.2",
  prettier: "2.4.1",
  rimraf: "3.0.2",
  rollup: "2.59.0",
  "rollup-plugin-babel": "4.4.0",
  "rollup-plugin-commonjs": "10.1.0",
  "rollup-plugin-node-resolve": "5.2.0",
  "rollup-plugin-terser": "7.0.2",
  "semantic-release": "18.0.0",
  shelljs: "0.8.4",
  "size-limit": "6.0.4",
  webpack: "5.61.0",
  "webpack-cli": "4.9.1",
  "webpack-dev-server": "4.4.0",
  "whatwg-fetch": "3.6.2"
};
var peerDependencies = {
  "@donkeyclip/motorcortex": ">=8 <10"
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
    "*.{json,md,yml,yaml}": ["prettier --write"],
    "*.css": ["prettier --write", "stylelint  \"src/**.css\" --config .stylelintrc.json --fix"],
    "*.{js,jsx}": ["prettier --write", "eslint --fix"]
  },
  release: release,
  config: config,
  devDependencies: devDependencies,
  peerDependencies: peerDependencies
};
var index$1 = {
  npm_name: pkg.name,
  version: pkg.version,
  incidents: [{
    exportable: VideoPlay,
    name: "Playback"
  }, {
    exportable: VideoEffect,
    name: "VideoEffect",
    attributesValidationRules: {
      animatedAttrs: {
        type: "object",
        props: {
          filter: {
            type: "object",
            props: {
              blur: {
                type: "number",
                min: 0,
                optional: true
              },
              brightness: {
                type: "number",
                min: 0,
                max: 1,
                optional: true
              },
              contrast: {
                type: "number",
                min: 0,
                optional: true
              },
              grayscale: {
                type: "number",
                min: 0,
                max: 1,
                optional: true
              },
              "hue-rotate": {
                type: "number",
                optional: true
              },
              invert: {
                type: "number",
                min: 0,
                max: 1,
                optional: true
              },
              opacity: {
                type: "number",
                min: 0,
                max: 1,
                optional: true
              },
              saturate: {
                type: "number",
                min: 0,
                optional: true
              },
              sepia: {
                type: "number",
                min: 0,
                max: 1,
                optional: true
              }
            }
          }
        }
      }
    }
  }],
  compositeAttributes,
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

const VideoPlugin = MotorCortex.loadPlugin(index$1);
class SlideDateOneVid extends MotorCortex.HTMLClip {
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
    return "\n      <div class=\"parent\">\n        <div class=\"bg \">\n          <div class =\"vid\"></div>\n          <div class=\"second-slide\">\n            <div class=\"second-slide-titleOne\">".concat(this.attrs.title[0], "</div>\n            <div class=\"second-slide-titleTwo\">").concat(this.attrs.title[1], "</div>\n            <div class=\"second-slide-titleTwo\">").concat(this.attrs.title[2], "</div>\n            <div class=\"word-bg\">\n              <div class=\"word\"></div>\n            </div>\n            <div class=\"short-description\">\n              <p>\n               ").concat(this.attrs.description, "\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"bg-second \">\n          <div class=\"bg-second-slide\">\n              <div class=\"second-date-container\">\n                  <div class=\"second-date\"><span> ").concat(this.attrs.day || "", " ").concat(this.attrs.dayNumber || "", " </span>").concat(this.attrs.month || "", " ").concat(this.attrs.year || "", "</div>\n              </div>\n          </div>\n        </div>\n      </div>\n    ");
  }

  get css() {
    return "\n      .bg,.bg-second {\n        width: 1920px;\n        height: 1080px;\n        background-image: url(".concat(this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg3.jpg", ");\n        background-size: 1920px;\n        background-position: center;\n        transform: scale(1);\n        display: flex;\n        position: absolute;\n        align-items: center;\n        flex-wrap: wrap;\n        flex: 1 0 auto;\n        left: -100%\n      }\n\n      .parent{\n        position:relative;\n        width: 1920px;\n        height: 1080px;\n        left:0%;\n      }\n\n      .bg:after,.bg-second:after {\n        content: \"\";\n        display: block;\n        background: linear-gradient(").concat(this.attrs.overlayColor || "#101820D7,#101820FF", ");\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        z-index: -1;\n      }\n\n      .bg-second{\n        left:100%;\n        background-image: url(").concat(this.attrs.bgUrl2 || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg2.jpg", ");\n      }\n\n      .vid{\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 1920px;\n        height: 1080px;\n      }\n\n      .short-description{\n        font-size: 20px;\n        color: #fff;\n        position: relative;\n        white-space: normal;\n        text-align: left;\n        text-transform: uppercase;\n        font-family: 'Roboto Mono', monospace;\n        width: 720px;\n        left: -50%;\n      }\n\n      .word-bg{\n        background-color:").concat(this.attrs.mainColor || "#00ff40", ";\n        width: 720px;\n        position: relative;\n        left: -50%\n      }\n\n      .word{\n        overflow: hidden;\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 720px\n      }\n\n      .second-slide-titleTwo,.second-slide-titleOne{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.title[0].length, 360), "px;\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n        position: relative;\n        left : -50%;\n      }\n\n      .second-slide-titleTwo{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.title[1].length, 720), "px;\n      }\n\n      .second-slide-titleOne{\n        color :").concat(this.attrs.mainColor || "#00ff40", "\n      }\n\n      .second-slide{\n        position: absolute;\n        left: 10%;\n        display: flex;\n        align-content: center;\n        justify-content: center;\n        flex-direction: column;\n        top: 20%;\n        transform: scale(1);\n      }\n\n      .letter{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.title[2].length, 720), "px;\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n        position: relative;\n        position: relative;\n        text-align: center;\n        top : 300px;\n        width: 100%;\n      }\n\n      .second-date-container{\n        border-left: 100px solid ").concat(this.attrs.mainColor || "#00ff40", ";\n        overflow: hidden;\n        width: 200%;\n      }\n\n      .second-date{\n        font-size: 100px;\n        color: #fff;\n        position: relative;\n        white-space: nowrap;\n        text-align: left;\n        text-transform: uppercase;\n        font-family: 'Roboto Mono', monospace;\n        width: 720px;\n        left:-100%;\n      }\n    \n      .second-date span{\n        color: ").concat(this.attrs.mainColor, ";\n      }\n    ");
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
      const html = "<span class='letter letter".concat(i + 1, "'>").concat(array[i], "</span>");
      html3 = html3 + html;
    }

    const word = new MotorCortex.HTMLClip({
      css: this.css,
      html: " <div class=\"conttitle\" >".concat(html3.split("undefined")[1], " </div>"),
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
var version = "1.3.1";

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
