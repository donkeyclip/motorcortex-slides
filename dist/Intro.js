"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MotorCortex = require("@kissmybutton/motorcortex/");

var AnimeDefinition = require("@kissmybutton/motorcortex-anime/dist/main");

var Anime = MotorCortex.loadPlugin(AnimeDefinition);

var Intro =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(Intro, _MotorCortex$API$Clip);

  function Intro() {
    _classCallCheck(this, Intro);

    return _possibleConstructorReturn(this, _getPrototypeOf(Intro).apply(this, arguments));
  }

  _createClass(Intro, [{
    key: "dinamicFontSize",
    value: function dinamicFontSize(lc, width) {
      var fontsize;
      fontsize = width / 0.6 / lc;

      if (fontsize >= 200 && width === 720) {
        fontsize = 200;
      }

      if (fontsize >= 100 && width === 360) {
        fontsize = 100;
      }

      return fontsize;
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var titleanime = new Anime.Anime({
        animatedAttrs: {
          width: "100%"
        },
        initialValues: {
          width: "0%"
        },
        attrs: {}
      }, {
        duration: 1000,
        selector: ".title-text",
        easing: "easeOutQuad"
      });
      var bg = new Anime.Anime({
        animatedAttrs: {
          backgroundSize: "3000px"
        },
        initialValues: {
          backgroundSize: "1980px"
        },
        attrs: {}
      }, {
        duration: 2800,
        selector: ".bg",
        easing: "easeOutCubic"
      });
      var subtextRight = new Anime.Anime({
        animatedAttrs: {
          right: "0%"
        },
        initialValues: {
          right: "100%"
        },
        attrs: {}
      }, {
        duration: 1000,
        selector: ".subtitle-text",
        easing: "easeOutQuad"
      });
      var subholderRight = new Anime.Anime({
        animatedAttrs: {
          right: "0%"
        },
        initialValues: {
          right: "-100%"
        },
        attrs: {}
      }, {
        duration: 1000,
        selector: ".subtitle-holder",
        easing: "easeOutQuad"
      });
      var subtitleRight = new Anime.Anime({
        animatedAttrs: {
          left: "".concat(864 * 2 - (this.dinamicFontSize(this.attrs.subtitle.length, 864) * 0.6 * this.attrs.subtitle.length, 864), "px")
        },
        initialValues: {},
        attrs: {}
      }, {
        duration: 1000,
        selector: ".sub",
        easing: "easeOutQuad"
      });
      var datespan = new Anime.Anime({
        animatedAttrs: {
          transform: {
            translateX: "0%"
          }
        },
        initialValues: {
          transform: {
            translateX: "200%"
          }
        },
        attrs: {}
      }, {
        duration: 1000,
        selector: ".date span",
        easing: "easeOutQuad"
      });
      var dateHolderWidth = new Anime.Anime({
        animatedAttrs: {
          width: "45%"
        },
        initialValues: {
          width: "28%"
        },
        attrs: {}
      }, {
        duration: 10,
        selector: ".date-holder"
      });
      var scaleFirstSlide = new Anime.Anime({
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
        selector: ".first-slide",
        easing: "easeOutQuad"
      });
      var description = new Anime.Anime({
        animatedAttrs: {
          transform: {
            translateY: "0%"
          }
        },
        initialValues: {
          transform: {
            translateY: "200%"
          }
        },
        attrs: {}
      }, {
        duration: 1000,
        selector: ".description",
        easing: "easeOutQuad"
      });
      var descriptiontext = new Anime.Anime({
        animatedAttrs: {
          transform: {
            translateY: "0%"
          }
        },
        initialValues: {
          transform: {
            translateY: "-200%"
          }
        },
        attrs: {}
      }, {
        duration: 300,
        selector: ".description-text",
        easing: "easeOutQuad"
      });
      var bgQut = new Anime.Anime({
        animatedAttrs: {
          transform: {
            translateX: "100%"
          }
        },
        initialValues: {
          transform: {
            translateX: "0"
          }
        },
        attrs: {}
      }, {
        duration: 1000,
        selector: ".bg",
        easing: "easeOutQuad"
      });
      this.addIncident(titleanime, 0);
      this.addIncident(subtextRight, 0);
      this.addIncident(bg, 0);
      this.addIncident(subholderRight, 0);
      this.addIncident(subtitleRight, 1500);
      this.addIncident(scaleFirstSlide, 1500);
      this.addIncident(description, 1500);
      this.addIncident(datespan, 1800);
      this.addIncident(dateHolderWidth, 2050);
      this.addIncident(descriptiontext, 2500);
      this.addIncident(bgQut, 3800);
    }
  }, {
    key: "html",
    get: function get() {
      this.attrs.bgUrl = !this.attrs.bgUrl ? this.attrs.bgUrl = "./kissmybutonbg.jpg" : this.attrs.bgUrl;
      this.attrs.overlayColor = !this.attrs.overlayColor ? this.attrs.overlayColor = "#ff00b34d" : this.attrs.overlayColor;
      this.attrs.mainColor = !this.attrs.mainColor ? this.attrs.mainColor = "#00ff40" : this.attrs.mainColor;
      return "\n    <div class=\"bg\"> \n    <div class=\"first-slide\">\n      <div class=\"testdiv\">\n        \n        <div class=\"sub\">\n          <div class=\"subtitle\">\n            <div class=\"subtitle-holder\">\n              <div class=\"subtitle-text\">".concat(this.attrs.subtitle, "</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"title\">\n      <div class=\"date-holder\">\n      <div class=\"date\"><span> ").concat(this.attrs.month, "</span></div>\n    </div>\n        <div class=\"holder-title\">\n          <div class=\"title-text\">").concat(this.attrs.title, "</div>\n        </div>\n      </div>\n      <div class=\"description\">\n        <div class=\"description-text\">\n          <p>\n            ").concat(this.attrs.description, "\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .bg {\n      height: 100%;\n      width: 100%;\n      position: relative;\n      background-image: url(".concat(this.attrs.bgUrl, ");\n      background-size: 1920px;\n      background-position: center;\n      transform: scale(1);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-wrap: wrap;\n      flex: 1 0 auto;\n    }\n    .bg:after {\n      content: \"\";\n      display: block;\n      background: linear-gradient(").concat(this.attrs.overlayColor, ");\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      z-index: -1;\n    }\n\n    .first-slide {\n      display: flex;\n      width: 90%;\n      white-space: nowrap;\n      overflow: hidden;\n      flex-direction: column;\n      position: relative;\n    }\n    .sub {\n      display: flex;\n      overflow: hidden;\n      position: relative;\n      width: 50%;\n    }\n    \n    \n    .title {\n      color: ").concat(this.attrs.mainColor, ";\n      font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 864 * 2), "px;\n      font-weight: 700;\n      font-family: 'Roboto Mono', monospace;\n      text-transform: uppercase;\n      margin-top:-").concat(this.dinamicFontSize(this.attrs.title.length, 864 * 2) / 2.6, "px;\n      overflow: hidden;\n      display: flex;\n      width: 100%;\n      \n    }\n    .subtitle {\n      color: ").concat(this.attrs.mainColor, ";\n      font-size: ").concat(this.dinamicFontSize(this.attrs.subtitle.length, 864), "px;\n      font-weight: 700;\n      font-family: 'Roboto Mono', monospace;\n      text-transform: uppercase;\n      overflow: hidden;\n      \n    }\n\n\n    .description-text {\n      position: relative;\n      transform: translateY(-200%);\n    }\n    .description {\n      border-top: 15px solid ").concat(this.attrs.mainColor, ";\n      overflow: hidden;\n      transform: translateY(200%);\n      font-size: 30px;\n      color: #fff;\n      position: relative;\n      white-space: normal;\n      text-align: left;\n      text-transform: uppercase;\n      font-family: 'Roboto Mono', monospace;\n    }\n\n    .testdiv{\n      width:100%;\n      padding-bottom: 2%;\n    }\n\n    .date-holder{\n      width: 28%;\n      position: absolute;\n      justify-self: center;\n      top: 8%;\n      display: flex;\n      justify-content: flex-end;\n    }\n\n    .date {\n      overflow: hidden;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    .date span {\n      position: relative;\n      overflow: hidden;\n      font-family: 'Roboto Mono', monospace;\n      text-transform: uppercase;\n      font-size: 50px;\n      color: #fff ;\n      transform: translateX(200%);\n    }\n\n    .title-text{\n      overflow: hidden;\n      width : 0%;\n    }\n\n    .subtitle-text{\n      overflow: hidden;\n      right: 100%;\n      position: relative;\n      \n    }\n\n    .subtitle-holder{\n      overflow: hidden;\n      position : relative;\n      right: -100%;\n    }\n\n  \n  ");
    }
  }]);

  return Intro;
}(MotorCortex.API.Clip);

module.exports = Intro;