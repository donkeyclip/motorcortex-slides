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

var Scrolslide =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(Scrolslide, _MotorCortex$API$Clip);

  function Scrolslide() {
    _classCallCheck(this, Scrolslide);

    return _possibleConstructorReturn(this, _getPrototypeOf(Scrolslide).apply(this, arguments));
  }

  _createClass(Scrolslide, [{
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
      var moveThird = new Anime.Anime({
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
        duration: 1000 * this.attrs.speed,
        selector: ".third-holder",
        easing: "easeOutQuad"
      });
      var thirdScaleUp = new Anime.Anime({
        animatedAttrs: {
          transform: {
            scale: "1"
          }
        },
        initialValues: {
          transform: {
            scale: "0.5"
          }
        },
        attrs: {}
      }, {
        duration: 1500 * this.attrs.speed,
        selector: ".third-holder",
        easing: "easeOutQuad"
      });
      var moveThirdIner = new Anime.Anime({
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
        duration: 1500 * this.attrs.speed,
        selector: ".bg",
        easing: "easeOutQuad"
      });
      var movePresenter = new Anime.Anime({
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
        duration: 800 * this.attrs.speed,
        selector: ".presenter",
        easing: "easeOutQuad"
      });
      var bgOut = new Anime.Anime({
        animatedAttrs: {
          left: "100%"
        },
        initialValues: {
          left: "0%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".third-holder",
        easing: "easeOutQuad"
      });
      this.addIncident(moveThird, 0);
      this.addIncident(thirdScaleUp, 0);
      this.addIncident(moveThirdIner, 0);
      this.addIncident(movePresenter, 700 * this.attrs.speed);
      this.addIncident(bgOut, this.calculatedDuration + 1000 * this.attrs.speed);
    }
  }, {
    key: "html",
    get: function get() {
      this.attrs.bgUrl = !this.attrs.bgUrl ? this.attrs.bgUrl = "./bg3.jpg" : this.attrs.bgUrl;
      this.attrs.overlayColor = !this.attrs.overlayColor ? this.attrs.overlayColor = "#ff00b34d" : this.attrs.overlayColor;
      this.attrs.mainColor = !this.attrs.mainColor ? this.attrs.mainColor = "#00ff40" : this.attrs.mainColor;
      this.attrs.speed = !this.attrs.speed ? this.attrs.speed = 2 : this.attrs.speed;
      return "\n    <div class=\"third-holder \">\n    <div class=\"bg\">\n      <div class=\"bg-third-slide\">\n        <div class=\"third-first-presenter-slide\">\n          <div class=\"third-presenter-container\">\n            <div class=\"third-presenter presenter\">".concat(this.attrs.title, "</div>\n          </div>\n          <div class=\"name-container\">").concat(this.attrs.name, "</div>\n          <div class=\"position-container\">").concat(this.attrs.position, "</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"bg\">\n      <div class=\"bg-third-slide\">\n        <div class=\"third-first-presenter-slide\">\n          <div class=\"third-presenter-container\">\n            <div class=\"third-presenter presenter\">").concat(this.attrs.title, "</div>\n          </div>\n          <div class=\"name-container\">").concat(this.attrs.name, "</div>\n          <div class=\"position-container\">").concat(this.attrs.position, "</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"bg\">\n      <div class=\"bg-third-slide\">\n        <div class=\"third-first-presenter-slide\">\n          <div class=\"third-presenter-container\">\n            <div class=\"third-presenter presenter\">").concat(this.attrs.title, "</div>\n          </div>\n          <div class=\"name-container\">").concat(this.attrs.name, "</div>\n          <div class=\"position-container\">").concat(this.attrs.position, "</div>\n        </div>\n      </div>\n    </div>\n  </div>\n    \n\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .bg {\n      width: 100%;\n      height: 100%;\n      background-image: url(".concat(this.attrs.bgUrl, ");\n      background-size: 1920px;\n      background-position: center;\n      transform: scale(1);\n      display: flex;\n      position: relative;\n      align-items: center;\n      flex-wrap: wrap;\n      flex: 1 0 auto;\n\n      margin-top: 10%;\n      margin-bottom: 10%;\n      \n    }\n    .bg:after {\n      content: \"\";\n      display: block;\n      background: linear-gradient(").concat(this.attrs.overlayColor, ");\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      z-index: -1;\n    }\n  \n   .bg-third-slide{\n      height: 1080px;\n      width: 1920px;\n      display: flex;\n      align-items: center;\n      margin-left: 5%;\n    }\n\n    .third-first-presenter-slide{\n      position : relative;\n    }\n    .third-presenter-container{\n      overflow: hidden;\n      border-top: 15px solid ").concat(this.attrs.mainColor, ";\n    \n    }\n\n    .presenter,.big-title{\n      font-weight: 700;\n      font-family: 'Roboto Mono', monospace;\n      text-transform: uppercase;\n      color: ").concat(this.attrs.mainColor, ";\n    }\n\n    .third-presenter{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 720), "px;\n      transform: translateY(-100%);\n    }\n\n    .name-container,.position-container{\n      font-weight: 700;\n      font-family: 'Roboto Mono', monospace;\n      text-transform: uppercase;\n      color: #fff;\n    }\n  \n    .name-container{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.name.length, 360), "px;\n    }\n    .position-container{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.position.length, 360), "px;\n    }\n    .third-holder{\n      left: 100%;\n      position: relative;\n      top : 0%;\n    }\n\n  ");
    }
  }]);

  return Scrolslide;
}(MotorCortex.API.Clip);

module.exports = Scrolslide;