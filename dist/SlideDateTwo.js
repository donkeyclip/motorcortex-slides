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

var SlideDateTwo =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(SlideDateTwo, _MotorCortex$API$Clip);

  function SlideDateTwo() {
    _classCallCheck(this, SlideDateTwo);

    return _possibleConstructorReturn(this, _getPrototypeOf(SlideDateTwo).apply(this, arguments));
  }

  _createClass(SlideDateTwo, [{
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
        easing: "easeOutCubic"
      });
      var secondSlide = new Anime.Anime({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".second-slide",
        easing: "easeOutCubic"
      });
      var bigTitle = new Anime.Anime({
        animatedAttrs: {
          left: "-1500px"
        },
        initialValues: {},
        attrs: {}
      }, {
        duration: 7400 * this.attrs.speed,
        selector: ".big-title",
        easing: "easeOutCubic"
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
        selector: ".bg,.bg-small",
        easing: "easeOutCubic"
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
        duration: 500,
        selector: ".bg",
        easing: "easeOutCubic"
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
        selector: ".bg-small",
        easing: "easeOutCubic"
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
        easing: "easeOutCubic"
      });
      var moveSecond = new Anime.Anime({
        animatedAttrs: {
          left: "-175%"
        },
        initialValues: {},
        attrs: {}
      }, {
        duration: 1500 * this.attrs.speed,
        selector: ".bg-small,.bg",
        easing: "easeOutCubic"
      });
      var movePresenterSlide = new Anime.Anime({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "90%"
        },
        attrs: {}
      }, {
        duration: 1500 * this.attrs.speed,
        selector: ".quarter-first-presenter-slide",
        easing: "easeOutCubic"
      });
      var movePresenterSlideLeft = new Anime.Anime({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "90%"
        },
        attrs: {}
      }, {
        duration: 1500 * this.attrs.speed,
        selector: ".quarter-left",
        easing: "easeOutCubic"
      });
      var moveBig = new Anime.Anime({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "100%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".bg-big",
        easing: "easeOutCubic"
      });
      var moveBigOut = new Anime.Anime({
        animatedAttrs: {
          top: "-100%"
        },
        initialValues: {
          left: "0%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".bg-big",
        easing: "easeOutCubic"
      });
      this.addIncident(bgMove, 0);
      this.addIncident(secondSlide, 500 * this.attrs.speed);
      this.addIncident(bigTitle, 0);
      this.addIncident(bgscaledown, 3700 * this.attrs.speed);
      this.addIncident(bgscaledownMove, 3700 * this.attrs.speed);
      this.addIncident(bgsecondscaledownMove, 3700 * this.attrs.speed);
      this.addIncident(secondBgDate, 3700 * this.attrs.speed);
      this.addIncident(movePresenterSlide, 3700 * this.attrs.speed);
      this.addIncident(movePresenterSlideLeft, 4000 * this.attrs.speed);
      this.addIncident(moveSecond, 4300 * this.attrs.speed);
      this.addIncident(moveBig, 4200 * this.attrs.speed);
      this.addIncident(moveBigOut, 8000 * this.attrs.speed);
    }
  }, {
    key: "html",
    get: function get() {
      this.attrs.bgUrl = !this.attrs.bgUrl ? this.attrs.bgUrl = "./bg5.jpg" : this.attrs.bgUrl;
      this.attrs.overlayColor = !this.attrs.overlayColor ? this.attrs.overlayColor = "#ff00b34d" : this.attrs.overlayColor;
      this.attrs.bgUrl2 = !this.attrs.bgUrl2 ? this.attrs.bgUrl2 = "./bg2.jpg" : this.attrs.bgUrl2;
      this.attrs.dateOverlay = !this.attrs.dateOverlay ? this.attrs.dateOverlay = "#ff00b3" : this.attrs.dateOverlay;
      this.attrs.mainColor = !this.attrs.mainColor ? this.attrs.mainColor = "#00ff40" : this.attrs.mainColor;
      this.attrs.speed = !this.attrs.speed ? this.attrs.speed = 2 : this.attrs.speed;
      return "\n    <div class=\"bg\">\n    <div class=\"bg-deferi-day-slide\">\n      <div class=\"big-title\">".concat(this.attrs.bigTitle, "</div>\n      <div class=\"test-mask \">\n        <div class=\"defter-date-container\">\n          <div class=\"defter-date\"><span> ").concat(this.attrs.day, " ").concat(this.attrs.number, " </span>").concat(this.attrs.month, " ").concat(this.attrs.year, "</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n    <div class=\"bg-second bg-small\">\n      <div class=\"bg-second-slide\">\n        <div class=\"quarter-first-presenter-slide\">\n        <div class=\"quarter-left\">\n          <div class=\"quarter-presenter-container\">\n            <div class=\"quarter-presenter presenter\">").concat(this.attrs.title, "</div>\n          </div>\n          <div class=\"name-container\">").concat(this.attrs.name, "</div>\n          <div class=\"position-container\">").concat(this.attrs.position, "</div>\n        </div>\n      </div>\n      </div>\n    </div>\n    <div class=\"bg-second bg-big \">\n      <div class=\"bg-second-slide\">\n        <div class=\"quarter-first-presenter-slide\">\n        <div class=\"quarter-left\">\n          <div class=\"quarter-presenter-container\">\n            <div class=\"quarter-presenter presenter\">").concat(this.attrs.title, "</div>\n          </div>\n          <div class=\"name-container\">").concat(this.attrs.name, "</div>\n          <div class=\"position-container\">").concat(this.attrs.position, "</div>\n        </div>\n      </div>\n      </div>\n    </div>\n    \n\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .bg,.bg-second {\n      width: 1920px;\n      height: 1080px;\n      background-image: url(".concat(this.attrs.bgUrl, ");\n      background-size: 1920px;\n      background-position: center;\n      transform: scale(1);\n      display: flex;\n      position: absolute;\n      align-items: center;\n      flex-wrap: wrap;\n      flex: 1 0 auto;\n      left: -100%\n    }\n    .bg:after,.bg-second:after {\n      content: \"\";\n      display: block;\n      background: linear-gradient(").concat(this.attrs.overlayColor, ");\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      z-index: -1;\n    }\n    .bg-second{\n      left:100%;\n      background-image: url(").concat(this.attrs.bgUrl2, ")\n    }\n    .bg-big{\n      left: 100%\n    }\n\n    .bg-second-slide,.bg-third-slide,.bg-quarter-slide,.bg-deferi-day-slide{\n      height: 1080px;\n      width: 1920px;\n      display: flex;\n      align-items: center;\n      overflow: hidden;\n    }\n    .bg-deferi-day-slide{\n      overflow: hidden;\n    }\n\n    .bg-second-slide{\n      justify-content: center;\n    }\n\n    .presenter,.big-title{\n      font-weight: 700;\n      font-family: 'Roboto Mono', monospace;\n      text-transform: uppercase;\n      color: ").concat(this.attrs.mainColor, ";\n    }\n  \n    .big-title{\n      font-size: 1700px;\n      position: relative;\n    }\n\n    .test-mask{\n      position: absolute;\n      left: 0;\n      height: 132.5px;\n      background-size: 1920px;\n      position: absolute;\n      left: 0\n    }\n  \n  .test-mask{\n    \n    height: 132.5px;\n    width: 50%;\n    background-image: url(").concat(this.attrs.bgUrl, ");\n    background-size: 1920px;\n    background-position: center;\n    background-position-x: center;\n    transform: scale(1);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    overflow: hidden;\n    left: 25%;\n    background-position-x: center;  \n  }\n  .test-mask:after{ \n    content: \"\";\n    display: block;\n    background: #4e070799;\n    width: 1920px;\n    height: 1080px;\n    position: absolute;\n    top: -458px;\n    /* bottom: 0; */\n    /* right: 0; */\n    left: 0;\n    z-index: -2;\n    background: linear-gradient(").concat(this.attrs.overlayColor, ");\n    top: -345%;\n  }\n  .defter-date-container{\n    position: absolute;\n    font-size: 60px;\n    color: #fff;\n    white-space: nowrap;\n    text-transform: uppercase;\n    font-family: 'Roboto Mono', monospace;\n    background:").concat(this.attrs.dateOverlay, ";   \n    padding: 2% 6%;\n    background-blend-mode: multiply;\n    background-image: url(").concat(this.attrs.bgUrl, ");\n    background-size: 1920px;\n    background-position: center;\n    transform: scale(1);\n\n  }\n.quarter-presenter-container{\n  overflow: hidden;\n}\n\n\n\n  .quarter-first-presenter-slide{\n    margin-bottom: 15%;\n    border-top: 15px solid ").concat(this.attrs.mainColor, ";\n    position: relative;\n    top: 90%;\n    overflow: hidden;\n    \n  }\n\n  .quarter-left{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position : relative;\n    top: 90%;\n  \n  }\n  .name-container,.position-container{\n    font-weight: 700;\n    font-family: 'Roboto Mono', monospace;\n    text-transform: uppercase;\n    color: #fff;\n  }\n\n  .name-container{\n    font-size: ").concat(this.dinamicFontSize(this.attrs.name.length, 360), "px;\n  }\n  .position-container{\n    font-size: ").concat(this.dinamicFontSize(this.attrs.position.length, 360), "px;\n  }\n  .bg-quarter-slide{\n    height: 1080px;\n    width: 1920px;\n    display: flex;\n    align-items: center;\n  }\n\n\n  .bg-quarter-slide{\n    align-items: flex-end;\n  }\n\n  .quarter-presenter{\n    font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 720), "px;\n  }\n\n\n  ");
    }
  }]);

  return SlideDateTwo;
}(MotorCortex.API.Clip);

module.exports = SlideDateTwo;