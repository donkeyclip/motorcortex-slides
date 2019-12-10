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

var SlideDateOne =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(SlideDateOne, _MotorCortex$API$Clip);

  function SlideDateOne() {
    _classCallCheck(this, SlideDateOne);

    return _possibleConstructorReturn(this, _getPrototypeOf(SlideDateOne).apply(this, arguments));
  }

  _createClass(SlideDateOne, [{
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
      var array = this.attrs.str.split("");
      var html3;
      var containerParams = {
        width: "100%",
        height: "100%"
      };

      for (var i = 0; i < array.length; i++) {
        var html = "<span class='letter letter".concat(i + 1, "'>").concat(array[i], "</span>");
        html3 = html3 + html;
      }

      var word = new MotorCortex.Clip({
        css: this.css,
        html: " <div class=\"conttitle\" >".concat(html3.split("undefined")[1], " </div>"),
        selector: ".word",
        containerParams: containerParams
      });
      this.addIncident(word, 0);

      for (var _i = 0; _i < array.length; _i++) {
        var textAnimation = new Anime.Anime({
          animatedAttrs: {
            top: "0px",
            opacity: 1
          },
          attrs: {}
        }, {
          duration: 500,
          selector: ".letter" + (_i + 1),
          easing: "easeOutQuad"
        });
        word.addIncident(textAnimation, (2000 + 100 * (_i + 1)) * this.attrs.speed);
      }

      var bgMove = new Anime.Anime({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".bg",
        easing: "easeOutQuad"
      });
      var secondSlideTitleOne = new Anime.Anime({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "-50%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".second-slide-titleOne",
        easing: "easeOutQuad"
      });
      var secondSlideTitleTwo = new Anime.Anime({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "-50%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".second-slide-titleTwo",
        easing: "easeOutQuad"
      });
      var wordBg = new Anime.Anime({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "-50%"
        },
        attrs: {}
      }, {
        duration: 1200 * this.attrs.speed,
        selector: ".word-bg",
        easing: "easeOutQuad"
      });
      var shortDescription = new Anime.Anime({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "-50%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".short-description",
        easing: "easeOutQuad"
      });
      var bgscaledown = new Anime.Anime({
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
        duration: 500 * this.attrs.speed,
        selector: ".bg,.bg-second",
        easing: "easeOutQuad"
      });
      var bgscaledownMove = new Anime.Anime({
        animatedAttrs: {
          left: "-25%"
        },
        initialValues: {
          left: "0%"
        },
        attrs: {}
      }, {
        duration: 500 * this.attrs.speed,
        selector: ".bg",
        easing: "easeOutQuad"
      });
      var bgsecondscaledownMove = new Anime.Anime({
        animatedAttrs: {
          left: "25%"
        },
        initialValues: {
          left: "100%"
        },
        attrs: {}
      }, {
        duration: 500 * this.attrs.speed,
        selector: ".bg-second",
        easing: "easeOutQuad"
      });
      var secondBgDate = new Anime.Anime({
        animatedAttrs: {
          left: "5%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".second-date",
        easing: "easeOutQuad"
      });
      var moveSecond = new Anime.Anime({
        animatedAttrs: {
          left: "-76%"
        },
        initialValues: {},
        attrs: {}
      }, {
        duration: 800 * this.attrs.speed,
        selector: ".bg",
        easing: "easeOutQuad"
      });
      var moveSecondS = new Anime.Anime({
        animatedAttrs: {
          left: "-76%"
        },
        initialValues: {},
        attrs: {}
      }, {
        duration: 1500 * this.attrs.speed,
        selector: ".bg-second",
        easing: "easeOutQuad"
      });
      this.addIncident(bgMove, 0);
      this.addIncident(secondSlideTitleOne, 300 * this.attrs.speed);
      this.addIncident(secondSlideTitleTwo, 500 * this.attrs.speed);
      this.addIncident(wordBg, 500 * this.attrs.speed);
      this.addIncident(shortDescription, 900 * this.attrs.speed);
      this.addIncident(bgscaledown, 3700 * this.attrs.speed);
      this.addIncident(bgscaledownMove, 3700 * this.attrs.speed);
      this.addIncident(bgsecondscaledownMove, 3700 * this.attrs.speed);
      this.addIncident(secondBgDate, 3700 * this.attrs.speed);
      this.addIncident(moveSecond, 6000 * this.attrs.speed);
      this.addIncident(moveSecondS, 6000 * this.attrs.speed);
    }
  }, {
    key: "html",
    get: function get() {
      this.attrs.bgUrl = !this.attrs.bgUrl ? this.attrs.bgUrl = "./bg3.jpg" : this.attrs.bgUrl;
      this.attrs.overlayColor = !this.attrs.overlayColor ? this.attrs.overlayColor = "#ff00b34d" : this.attrs.overlayColor;
      this.attrs.bgUrl2 = !this.attrs.bgUrl2 ? this.attrs.bgUrl2 = "./bg2.jpg" : this.attrs.bgUrl2;
      this.attrs.mainColor = !this.attrs.mainColor ? this.attrs.mainColor = "#00ff40" : this.attrs.mainColor;
      this.attrs.speed = !this.attrs.speed ? this.attrs.speed = 2 : this.attrs.speed;
      return "\n    <div class=\"bg \">\n    <div class=\"second-slide\">\n      <div class=\"second-slide-titleOne\">".concat(this.attrs.titleone, "</div>\n      <div class=\"second-slide-titleTwo\">").concat(this.attrs.subtitle, "</div>\n      <div class=\"word-bg\">\n        <div class=\"word\"></div>\n      </div>\n      <div class=\"short-description\">\n        <p>\n         ").concat(this.attrs.description, "\n        </p>\n      </div>\n    </div>\n    </div>\n\n    <div class=\"bg-second \">\n      <div class=\"bg-second-slide\">\n          <div class=\"second-date-container\">\n              <div class=\"second-date\"><span> ").concat(this.attrs.day, " ").concat(this.attrs.number, " </span>").concat(this.attrs.month, " ").concat(this.attrs.year, "</div>\n          </div>\n      </div>\n    </div>\n    \n\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .bg,.bg-second {\n      width: 1920px;\n      height: 1080px;\n      background-image: url(".concat(this.attrs.bgUrl, ");\n      background-size: 1920px;\n      background-position: center;\n      transform: scale(1);\n      display: flex;\n      position: absolute;\n      align-items: center;\n      flex-wrap: wrap;\n      flex: 1 0 auto;\n      left: -100%\n    }\n    .bg:after,.bg-second:after {\n      content: \"\";\n      display: block;\n      background: linear-gradient(").concat(this.attrs.overlayColor, ");\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      z-index: -1;\n    }\n    .bg-second{\n      left:100%;\n      background-image: url(").concat(this.attrs.bgUrl2, ");\n    }\n\n    .short-description{\n      font-size: 20px;\n      color: #fff;\n      position: relative;\n      white-space: normal;\n      text-align: left;\n      text-transform: uppercase;\n      font-family: 'Roboto Mono', monospace;\n      width: 720px;\n      left: -50%;\n      }\n\n      .word-bg{\n        background-color:").concat(this.attrs.mainColor, ";\n        width: 720px;\n        position: relative;\n        left: -50%\n      }\n\n      .word{\n        overflow: hidden;\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 720px\n      }\n\n      .second-slide-titleTwo,.second-slide-titleOne{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.titleone.length, 360), "px;\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n        position: relative;\n        left : -50%;\n      }\n\n      .second-slide-titleTwo{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.subtitle.length, 720), "px;\n      }\n\n      .second-slide-titleOne{\n        color :").concat(this.attrs.mainColor, "\n      }\n\n      .second-slide{\n        position : absolute;\n        left : 0%;\n        display: flex;\n        align-content: center;\n        justify-content: center;\n        flex-direction: column;\n        margin-left: 10%;\n      }\n      .letter{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.str.length, 720), "px;\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n        position: relative;\n        position: relative;\n        text-align: center;\n        top : 300px;\n        width: 100%;\n        \n      }\n      .second-date-container{\n        border-left: 100px solid ").concat(this.attrs.mainColor, ";\n        overflow: hidden;\n        width: 200%;\n        \n      }\n\n      .second-date{\n        font-size: 100px;\n        color: #fff;\n        position: relative;\n        white-space: nowrap;\n        text-align: left;\n        text-transform: uppercase;\n        font-family: 'Roboto Mono', monospace;\n        width: 720px;\n        left:-100%;\n      }\n    \n      \n      .second-date span{\n        color: ").concat(this.attrs.mainColor, ";\n      }\n\n  ");
    }
  }]);

  return SlideDateOne;
}(MotorCortex.API.Clip);

module.exports = SlideDateOne;