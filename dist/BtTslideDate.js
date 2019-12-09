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

var BtTslideDate =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(BtTslideDate, _MotorCortex$API$Clip);

  function BtTslideDate() {
    _classCallCheck(this, BtTslideDate);

    return _possibleConstructorReturn(this, _getPrototypeOf(BtTslideDate).apply(this, arguments));
  }

  _createClass(BtTslideDate, [{
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
      var personConMove = new Anime.Anime({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "90%"
        },
        attrs: {}
      }, {
        duration: 1500,
        selector: ".quarter-first-presenter-slide",
        easing: "easeOutCubic"
      });
      var quarterLeft = new Anime.Anime({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "90%"
        },
        attrs: {}
      }, {
        duration: 2000,
        selector: ".quarter-left",
        easing: "easeOutCubic"
      });
      var bg = new Anime.Anime({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "100%"
        },
        attrs: {}
      }, {
        duration: 1000,
        selector: ".bg",
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
        duration: 500,
        selector: ".bg,.bg-next",
        easing: "easeOutCubic"
      });
      var bgscaledownMove = new Anime.Anime({
        animatedAttrs: {
          left: "25%"
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
          left: "-25%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      }, {
        duration: 500,
        selector: ".bg-next",
        easing: "easeOutCubic"
      });
      var bgscaleup = new Anime.Anime({
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
        duration: 500,
        selector: ".bg,.bg-next",
        easing: "easeOutCubic"
      });
      var bgscaledownMoveOut = new Anime.Anime({
        animatedAttrs: {
          left: "100%"
        },
        initialValues: {
          left: "25%"
        },
        attrs: {}
      }, {
        duration: 500,
        selector: ".bg",
        easing: "easeOutCubic"
      });
      var bgsecondscaledownMoveOut = new Anime.Anime({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "-25%"
        },
        attrs: {}
      }, {
        duration: 500,
        selector: ".bg-next",
        easing: "easeOutCubic"
      });
      var bgMoveOut = new Anime.Anime({
        animatedAttrs: {
          left: "100%"
        },
        initialValues: {
          left: "0%"
        },
        attrs: {}
      }, {
        duration: 1000,
        selector: ".bg-next",
        easing: "easeOutCubic"
      });
      this.addIncident(bg, 0);
      this.addIncident(personConMove, 0);
      this.addIncident(quarterLeft, 0);
      this.addIncident(bgscaledown, 3000);
      this.addIncident(bgsecondscaledownMove, 3000);
      this.addIncident(bgscaledownMove, 3000);
      this.addIncident(bgscaleup, 4000);
      this.addIncident(bgscaledownMoveOut, 4000);
      this.addIncident(bgsecondscaledownMoveOut, 4000);
      this.addIncident(bgMoveOut, 5500);
    }
  }, {
    key: "html",
    get: function get() {
      this.attrs.bgUrl = !this.attrs.bgUrl ? this.attrs.bgUrl = "./bg3.jpg" : this.attrs.bgUrl;
      this.attrs.overlayColor = !this.attrs.overlayColor ? this.attrs.overlayColor = "#ff00b34d" : this.attrs.overlayColor;
      this.attrs.bgUrl2 = !this.attrs.bgUrl2 ? this.attrs.bgUrl2 = "./bg2.jpg" : this.attrs.bgUrl2;
      this.attrs.dateOverlay = !this.attrs.dateOverlay ? this.attrs.dateOverlay = "#ff00b3" : this.attrs.dateOverlay;
      this.attrs.mainColor = !this.attrs.mainColor ? this.attrs.mainColor = "#00ff40" : this.attrs.mainColor;
      return "\n   <div class=\"bg\">\n    <div class=\"bg-quarter-slide\">\n      <div class=\"quarter-first-presenter-slide\">\n        <div class=\"quarter-left\">\n          <div class=\"quarter-presenter-container\">\n            <div class=\"quarter-presenter presenter\">".concat(this.attrs.title, "</div>\n          </div>\n          <div class=\"name-container\">").concat(this.attrs.name, "</div>\n          <div class=\"position-container\">").concat(this.attrs.position, "</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"bg-next\">\n  <div class=\"bg-quarter-slide\">\n    <div class=\"test-mask\">\n      <div class=\"defter-date-container\">\n        <div class=\"defter-date\"><span> ").concat(this.attrs.day, " ").concat(this.attrs.number, " </span>").concat(this.attrs.month, " ").concat(this.attrs.year, "</div>\n      </div>\n    </div>\n  </div>\n</div>\n\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .bg {\n      width: 100%;\n      height: 100%;\n      background-image: url(".concat(this.attrs.bgUrl, ");\n      background-size: 1920px;\n      background-position: center;\n      transform: scale(1);\n      display: flex;\n      position: relative;\n      align-items: center;\n      flex-wrap: wrap;\n      flex: 1 0 auto;\n      top : 100%; \n    }\n\n\n    .bg:after,.bg-next {\n      content: \"\";\n      display: block;\n      background: linear-gradient(").concat(this.attrs.overlayColor, ");\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      z-index: -1;\n    }\n    .bg-next {\n      width: 100%;\n      height: 100%;\n      background-image: url(").concat(this.attrs.bgUrl2, ");\n      background-size: 1920px;\n      background-position: center;\n      transform: scale(1);\n      display: flex;\n      position: relative;\n      align-items: center;\n      flex-wrap: wrap;\n      flex: 1 0 auto;\n      top : -100%;\n      left : -100%\n     \n    }\n    .defter-date-container{\n      position: absolute;\n      font-size: 60px;\n      color:#fff;\n      white-space: nowrap;\n      text-transform: uppercase;\n      font-family: 'Roboto Mono', monospace;\n      background: ").concat(this.attrs.dateOverlay, ";\n      padding: 2% 6%;\n      background-blend-mode: multiply;\n      background-image: url(").concat(this.attrs.bgUrl2, ");\n      background-size: 1920px;\n      background-position: center;\n      transform: scale(1);\n    }\n\n    .defter-date span{\n      color: ").concat(this.attrs.mainColor, ";\n    }\n\n\n    .third-first-presenter-slide,.quarter-first-presenter-slide{\n      position : relative;\n    }\n  \n    .quarter-first-presenter-slide{\n      margin-bottom: 15%;\n      border-top: 15px solid ").concat(this.attrs.mainColor, ";\n      align-items: center;\n      justify-content: center;\n      \n    }\n\n    .quarter-left{\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      position : relative;\n      top: 90%;\n      \n    }\n    .name-container,.position-container{\n      font-weight: 700;\n      font-family: 'Roboto Mono', monospace;\n      text-transform: uppercase;\n      color: #fff;\n    }\n  \n    .name-container{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.name.length, 360), "px;\n    }\n    .position-container{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.position.length, 360), "px;\n    }\n    .bg-quarter-slide{\n      height: 1080px;\n      width: 1920px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .quarter-presenter{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 720), "px;\n    }\n    .presenter,.big-title{\n      font-weight: 700;\n      font-family: 'Roboto Mono', monospace;\n      text-transform: uppercase;\n      color: ").concat(this.attrs.mainColor, ";\n    }\n\n    .test-mask{\n      position: absolute;\n      left: 0;\n      height: 132.5px;\n      background-size: 1920px;\n      position: absolute;\n      left: 0;\n      display: flex;\n      justify-content: center;\n      align-content: center;\n      width: 100%;\n    }\n\n\n  ");
    }
  }]);

  return BtTslideDate;
}(MotorCortex.API.Clip);

module.exports = BtTslideDate;