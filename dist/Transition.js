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

var Transition =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(Transition, _MotorCortex$API$Clip);

  function Transition() {
    _classCallCheck(this, Transition);

    return _possibleConstructorReturn(this, _getPrototypeOf(Transition).apply(this, arguments));
  }

  _createClass(Transition, [{
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
      var transitionText = new Anime.Anime({
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
      var transitionContainer = new Anime.Anime({
        animatedAttrs: {
          left: "100%"
        },
        initialValues: {
          left: "-120%"
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
  }, {
    key: "html",
    get: function get() {
      return "\n    <div class=\"transition-container\">\n    <p class=\"transition-text\">".concat(this.attrs.title, "</p>\n    </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .transition-container {\n      color:white; \n      background:rgb(0, 0, 0);\n      mix-blend-mode: multiply;\n      font: bolder 400px \"Roboto Mono\";\n      text-align: center;\n      position: relative;\n      left: -100%;\n      width: 20%;\n      height: 100%;\n      position: absolute;\n      display: flex;\n      align-content: center;\n      align-items: center;\n      overflow: hidden;\n    }\n\n    .transition-text {\n      position: relative;\n      left: -0%;\n    }\n  \n  ";
    }
  }]);

  return Transition;
}(MotorCortex.API.Clip);

module.exports = Transition;