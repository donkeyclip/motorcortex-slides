'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var motorcortex = _interopDefault(require('@kissmybutton/motorcortex'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*
 * anime.js v3.1.0
 * (c) 2019 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */
// Defaults
var defaultInstanceSettings = {};
var defaultTweenSettings = {
  duration: 1000,
  round: 0
};
var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective']; // Caching

var cache = {
  CSS: {}
}; // Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

var is = {
  arr: function (a) {
    return Array.isArray(a);
  },
  obj: function (a) {
    return stringContains(Object.prototype.toString.call(a), 'Object');
  },
  pth: function (a) {
    return is.obj(a) && a.hasOwnProperty('totalLength');
  },
  svg: function (a) {
    return a instanceof SVGElement;
  },
  inp: function (a) {
    return a instanceof HTMLInputElement;
  },
  dom: function (a) {
    return a.nodeType || is.svg(a);
  },
  str: function (a) {
    return typeof a === 'string';
  },
  fnc: function (a) {
    return typeof a === 'function';
  },
  und: function (a) {
    return typeof a === 'undefined';
  },
  hex: function (a) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
  },
  rgb: function (a) {
    return /^rgb/.test(a);
  },
  hsl: function (a) {
    return /^hsl/.test(a);
  },
  col: function (a) {
    return is.hex(a) || is.rgb(a) || is.hsl(a);
  },
  key: function (a) {
    return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes';
  }
};

var penner = function () {
  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)
  var eases = {
    linear: function () {
      return function (t) {
        return t;
      };
    }
  };
  return eases;
}(); // Strings


function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch (e) {
    return;
  }
} // Arrays


function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];

  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];

      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }

  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) {
    return a.concat(is.arr(b) ? flattenArray(b) : b);
  }, []);
}

function toArray(o) {
  if (is.arr(o)) {
    return o;
  }

  if (is.str(o)) {
    o = selectString(o) || o;
  }

  if (o instanceof NodeList || o instanceof HTMLCollection) {
    return [].slice.call(o);
  }

  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) {
    return a === val;
  });
} // Objects


function cloneObject(o) {
  var clone = {};

  for (var p in o) {
    clone[p] = o[p];
  }

  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o1) {
    o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
  }

  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o2) {
    o[p] = is.und(o1[p]) ? o2[p] : o1[p];
  }

  return o;
} // Colors


function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return "rgba(" + r + "," + g + "," + b + ",1)";
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;

  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }

    if (t > 1) {
      t -= 1;
    }

    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }

    if (t < 1 / 2) {
      return q;
    }

    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }

    return p;
  }

  var r, g, b;

  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
}

function colorToRgb(val) {
  if (is.rgb(val)) {
    return rgbToRgba(val);
  }

  if (is.hex(val)) {
    return hexToRgba(val);
  }

  if (is.hsl(val)) {
    return hslToRgba(val);
  }
} // Units


function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);

  if (split) {
    return split[1];
  }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') {
    return 'px';
  }

  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) {
    return 'deg';
  }
} // Values


function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) {
    return val;
  }

  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);

  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) {
    return value;
  }

  var cached = cache.CSS[value + unit];

  if (!is.und(cached)) {
    return cached;
  }

  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (getAttribute(el, prop) || is.svg(el) && el[prop])) {
    return 'attribute';
  }

  if (is.dom(el) && arrayContains(validTransforms, prop)) {
    return 'transform';
  }

  if (is.dom(el) && prop !== 'transform' && getCSSValue(el, prop)) {
    return 'css';
  }

  if (el[prop] != null) {
    return 'object';
  }
}

function getElementTransforms(el) {
  if (!is.dom(el)) {
    return;
  }

  var str = el.style.transform || '';
  var reg = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m;

  while (m = reg.exec(str)) {
    transforms.set(m[1], m[2]);
  }

  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;

  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }

  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform':
      return getTransformValue(target, propName, animatable, unit);

    case 'css':
      return getCSSValue(target, propName, unit);

    case 'attribute':
      return getAttribute(target, propName);

    default:
      return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);

  if (!operator) {
    return to;
  }

  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));

  switch (operator[0][0]) {
    case '+':
      return x + y + u;

    case '-':
      return x - y + u;

    case '*':
      return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) {
    return colorToRgb(val);
  }

  if (/\s/g.test(val)) {
    return val;
  }

  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;

  if (unit) {
    return unitLess + unit;
  }

  return unitLess;
} // Decompose value


function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation

  var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: is.str(val) || unit ? value.split(rgx) : []
  };
} // Animatables


function parseTargets(targets) {
  var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
  return filterArray(targetsArray, function (item, pos, self) {
    return self.indexOf(item) === pos;
  });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {
      target: t,
      id: i,
      total: parsed.length,
      transforms: {
        list: getElementTransforms(t)
      }
    };
  });
} // Properties


function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);

  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = l === 2 && !is.obj(prop[0]);

    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) {
        settings.duration = tweenSettings.duration / l;
      }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {
        value: prop
      };
    }
  }

  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = is.obj(v) && !is.pth(v) ? v : {
      value: v
    };
    return obj;
  }).map(function (k) {
    return mergeObjects(k, settings);
  });
}

function getProperties(tweenSettings, params) {
  var properties = [];

  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }

  return properties;
} // Tweens


function normalizeTweenValues(tween, animatable) {
  var t = {};

  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);

    if (is.arr(value)) {
      value = value.map(function (v) {
        return getFunctionValue(v, animatable);
      });

      if (value.length === 1) {
        value = value[0];
      }
    }

    t[p] = value;
  }

  t.duration = parseFloat(t.duration);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;

    if (is.und(to)) {
      to = previousValue;
    }

    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.duration;
    tween.isPath = false;
    tween.isColor = is.col(tween.from.original);

    if (tween.isColor) {
      tween.round = 1;
    }

    previousTween = tween;
    return tween;
  });
} // Tween progress


var setProgressValue = {
  css: function (t, p, v) {
    return t.style[p] = v;
  },
  attribute: function (t, p, v) {
    return t.setAttribute(p, v);
  },
  object: function (t, p, v) {
    return t[p] = v;
  },
  transform: function (t, p, v, transforms, manual) {
    transforms.list.set(p, v);

    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) {
        str += prop + "(" + value + ") ";
      });
      t.style.transform = str;
    }
  }
}; // Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
} // Animations


function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);

  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end
    };
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) {
    return !is.und(a);
  });
} // Create Instance


function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;
  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) {
    return anim.duration;
  })) : tweenSettings.duration;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration
  });
} // Public Instance


function anime(params) {
  if (params === void 0) params = {};
  var children,
      childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) {
      return resolve = _resolve;
    });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  var promise = makePromise(instance);

  function seekChild(time, child) {
    if (child) {
      child.seek(time);
    }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) {
        seekChild(time, children[i]);
      }
    } else {
      for (var i$1 = childrenLength; i$1--;) {
        seekChild(time, children[i$1]);
      }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;

    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength]; // Only check for keyframes if there is more than one tween

      if (tweenLength) {
        tween = filterArray(tweens, function (t) {
          return insTime < t.end;
        })[0] || tween;
      }

      var elapsed = minMax(insTime - tween.start, 0, tween.duration) / tween.duration;
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = void 0;

      for (var n = 0; n < toNumbersLength; n++) {
        var value = void 0;
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;
        value = fromNumber + elapsed * (toNumber - fromNumber);

        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }

        numbers.push(value);
      } // Manual Array.reduce for better performances


      var stringsLength = strings.length;

      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];

        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];

          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }

      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insTime = engineTime;
    instance.progress = minMax(insTime / insDuration * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;

    if (children) {
      syncInstanceChildren(insTime);
    }

    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
    }

    setAnimationsProgress(insTime);
    instance.currentTime = minMax(insTime, 0, insDuration);

    if (engineTime >= insDuration) {
      instance.paused = true;

      if (!instance.completed) {
        instance.completed = true;

        if (!instance.passThrough && 'Promise' in window) {
          resolve();
          promise = makePromise(instance);
        }
      }
    }
  }

  instance.reset = function () {
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.completed = false;
    instance.reversePlayback = false;
    children = instance.children;
    childrenLength = children.length;

    for (var i = childrenLength; i--;) {
      instance.children[i].reset();
    }
  }; // Set Value helper


  instance.set = function (targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.seek = function (time) {
    setInstanceProgress(time);
  };

  instance.reset();
  return instance;
}

anime.version = '3.1.0';
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.penner = penner;

var compoAttributes = {
  transform: ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skewX", "skewY", "perspective"]
};

function getMatrix2D(win, element) {
  var transform = win.getComputedStyle(element).transform;

  if (transform === "" || transform === "none") {
    return {};
  }

  var values = transform.split("(")[1].split(")")[0].split(",");

  var qrDecompone = function qrDecompone(a) {
    var angle = Math.atan2(a[1], a[0]),
        denom = Math.pow(a[0], 2) + Math.pow(a[1], 2),
        denom2 = Math.pow(a[2], 2) + Math.pow(a[3], 2),
        scaleX = Math.sqrt(denom),
        scaleY = (a[0] * a[3] - a[2] * a[1]) / scaleX,
        skewX = Math.atan2(a[0] * a[2] + a[1] * a[3], denom),
        skewY = Math.atan2(a[1] * a[3] + a[0] * a[2], denom2);
    return {
      rotate: angle / (Math.PI / 180) + "deg",
      // this is rotation angle in degrees
      scaleX: scaleX,
      // scaleX factor
      scaleY: scaleY,
      // scaleY factor
      skewX: (denom === 1 ? skewX / (Math.PI / 180) : 0) + "deg",
      // skewX angle degrees
      skewY: (denom2 === 1 ? skewY / (Math.PI / 180) : 0) + "deg",
      // skewY angle degrees
      translateX: a[4] + "px",
      // translation point  x
      translateY: a[5] + "px" // translation point  y

    };
  };

  return qrDecompone(values);
}

var matrix2d = getMatrix2D;

var Anime_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _animeEs = _interopRequireDefault(anime);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  var Anime =
  /*#__PURE__*/
  function (_MC$API$MonoIncident) {
    _inherits(Anime, _MC$API$MonoIncident);

    function Anime() {
      _classCallCheck(this, Anime);

      return _possibleConstructorReturn(this, _getPrototypeOf(Anime).apply(this, arguments));
    }

    _createClass(Anime, [{
      key: "onGetContext",
      value: function onGetContext() {
        var options = {};
        var initialize = {};

        if (compoAttributes.hasOwnProperty(this.attributeKey)) {
          var compoAttribute = compoAttributes[this.attributeKey];

          for (var i = 0; i < compoAttribute.length; i++) {
            if (!this.targetValue.hasOwnProperty(compoAttribute[i])) {
              continue;
            }

            options[compoAttribute[i]] = [this.getInitialValue()[compoAttribute[i]], this.targetValue[compoAttribute[i]]];
            initialize[compoAttribute[i]] = [this.getScratchValue(), this.targetValue[compoAttribute[i]]];
          }
        } else {
          options[this.attributeKey] = [this.getInitialValue(), this.targetValue];
          initialize[this.targetValue] = [this.getScratchValue(), this.targetValue];
        }

        this.target = (0, _animeEs.default)(_objectSpread({
          autoplay: false,
          duration: this.props.duration,
          easing: "linear",
          targets: this.element
        }, (this.attrs || {}).attrs || {}, options)); // handle first render initial values
      }
    }, {
      key: "getScratchValue",
      value: function getScratchValue() {
        if (this.attributeKey === "transform") {
          var obj = {};
          var transform = compoAttributes[this.attributeKey];
          var currentTransform = matrix2d(this.context.window, this.element);

          for (var i = 0; i < transform.length; i++) {
            if (currentTransform.hasOwnProperty(transform[i])) {
              obj[transform[i]] = currentTransform[transform[i]];
            } else {
              obj[transform[i]] = _animeEs.default.get(this.element, transform[i]);
            }
          }

          return obj;
        }

        return _animeEs.default.get(this.element, this.attributeKey);
      }
    }, {
      key: "onProgress",
      value: function onProgress(f) {
        return this.target.seek(this.target.duration * f);
      }
    }]);

    return Anime;
  }(motorcortex.API.MonoIncident);

  exports.default = Anime;
});
unwrapExports(Anime_1);

var main = {
  npm_name: "@kissmybutton/motorcortex-anime",
  incidents: [{
    exportable: Anime_1,
    name: "Anime"
  }],
  compositeAttributes: compoAttributes
};

var Anime = motorcortex.loadPlugin(main);

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
        duration: 1000 * this.attrs.speed,
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
        duration: 2800 * this.attrs.speed,
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
        duration: 1000 * this.attrs.speed,
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
        duration: 1000 * this.attrs.speed,
        selector: ".subtitle-holder",
        easing: "easeOutQuad"
      });
      var subtitleRight = new Anime.Anime({
        animatedAttrs: {
          left: "".concat(864 * this.attrs.speed - (this.dinamicFontSize(this.attrs.subtitle.length, 864) * 0.6 * this.attrs.subtitle.length, 864), "px")
        },
        initialValues: {},
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
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
        duration: 1000 * this.attrs.speed,
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
        duration: 1000 * this.attrs.speed,
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
        duration: 1000 * this.attrs.speed,
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
        duration: 300 * this.attrs.speed,
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
        duration: 1000 * this.attrs.speed,
        selector: ".bg",
        easing: "easeOutQuad"
      });
      this.addIncident(bg, 0);
      this.addIncident(titleanime, 0);
      this.addIncident(subtextRight, 0);
      this.addIncident(subholderRight, 0);
      this.addIncident(subtitleRight, 1500 * this.attrs.speed);
      this.addIncident(scaleFirstSlide, 1500 * this.attrs.speed);
      this.addIncident(description, 1500 * this.attrs.speed);
      this.addIncident(datespan, 1800 * this.attrs.speed);
      this.addIncident(dateHolderWidth, 2050 * this.attrs.speed);
      this.addIncident(descriptiontext, 2500 * this.attrs.speed);
      this.addIncident(bgQut, this.calculatedDuration + 1000 * this.attrs.speed);
    }
  }, {
    key: "html",
    get: function get() {
      this.attrs.bgUrl = !this.attrs.bgUrl ? this.attrs.bgUrl = "./kissmybutonbg.jpg" : this.attrs.bgUrl;
      this.attrs.overlayColor = !this.attrs.overlayColor ? this.attrs.overlayColor = "#ff00b34d" : this.attrs.overlayColor;
      this.attrs.mainColor = !this.attrs.mainColor ? this.attrs.mainColor = "#00ff40" : this.attrs.mainColor;
      this.attrs.speed = !this.attrs.speed ? this.attrs.speed = 2 : this.attrs.speed;
      return "\n    <div class=\"bg\"> \n    <div class=\"first-slide\">\n      <div class=\"testdiv\">\n        \n        <div class=\"sub\">\n          <div class=\"subtitle\">\n            <div class=\"subtitle-holder\">\n              <div class=\"subtitle-text\">".concat(this.attrs.subtitle, "</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"title\">\n      <div class=\"date-holder\">\n      <div class=\"date\"><span> ").concat(this.attrs.month, "</span></div>\n    </div>\n        <div class=\"holder-title\">\n          <div class=\"title-text\">").concat(this.attrs.title, "</div>\n        </div>\n      </div>\n      <div class=\"description\">\n        <div class=\"description-text\">\n          <p>\n            ").concat(this.attrs.description, "\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .bg {\n      height: 1080px;\n      width: 1920px;\n      position: relative;\n      background-image: url(".concat(this.attrs.bgUrl, ");\n      background-size: 1920px;\n      background-position: center;\n      transform: scale(1);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-wrap: wrap;\n      flex: 1 0 auto;\n    }\n    .bg:after {\n      content: \"\";\n      display: block;\n      background: linear-gradient(").concat(this.attrs.overlayColor, ");\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      z-index: -1;\n    }\n\n    .first-slide {\n      display: flex;\n      width: 90%;\n      white-space: nowrap;\n      overflow: hidden;\n      flex-direction: column;\n      position: relative;\n    }\n    .sub {\n      display: flex;\n      overflow: hidden;\n      position: relative;\n      width: 50%;\n    }\n    \n    \n    .title {\n      color: ").concat(this.attrs.mainColor, ";\n      font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 864 * this.attrs.speed), "px;\n      font-weight: 700;\n      font-family: 'Roboto Mono', monospace;\n      text-transform: uppercase;\n      margin-top:-").concat(this.dinamicFontSize(this.attrs.title.length, 864 * this.attrs.speed) / 2.6, "px;\n      overflow: hidden;\n      display: flex;\n      width: 100%;\n      \n    }\n    .subtitle {\n      color: ").concat(this.attrs.mainColor, ";\n      font-size: ").concat(this.dinamicFontSize(this.attrs.subtitle.length, 864), "px;\n      font-weight: 700;\n      font-family: 'Roboto Mono', monospace;\n      text-transform: uppercase;\n      overflow: hidden;\n      \n    }\n\n\n    .description-text {\n      position: relative;\n      transform: translateY(-200%);\n    }\n    .description {\n      border-top: 15px solid ").concat(this.attrs.mainColor, ";\n      overflow: hidden;\n      transform: translateY(200%);\n      font-size: 30px;\n      color: #fff;\n      position: relative;\n      white-space: normal;\n      text-align: left;\n      text-transform: uppercase;\n      font-family: 'Roboto Mono', monospace;\n    }\n\n    .testdiv{\n      width:100%;\n      padding-bottom: 2%;\n    }\n\n    .date-holder{\n      width: 28%;\n      position: absolute;\n      justify-self: center;\n      top: 8%;\n      display: flex;\n      justify-content: flex-end;\n    }\n\n    .date {\n      overflow: hidden;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    .date span {\n      position: relative;\n      overflow: hidden;\n      font-family: 'Roboto Mono', monospace;\n      text-transform: uppercase;\n      font-size: 50px;\n      color: #fff ;\n      transform: translateX(200%);\n    }\n\n    .title-text{\n      overflow: hidden;\n      width : 0%;\n    }\n\n    .subtitle-text{\n      overflow: hidden;\n      right: 100%;\n      position: relative;\n      \n    }\n\n    .subtitle-holder{\n      overflow: hidden;\n      position : relative;\n      right: -100%;\n    }\n\n  \n  ");
    }
  }]);

  return Intro;
}(motorcortex.API.Clip);

var Intro_1 = Intro;

var Anime$1 = motorcortex.loadPlugin(main);

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
      var transitionText = new Anime$1.Anime({
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
        duration: 1000 * this.attrs.speed,
        selector: ".transition-text"
      });
      var transitionContainer = new Anime$1.Anime({
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
        duration: 1000 * this.attrs.speed,
        selector: ".transition-container"
      });
      this.addIncident(transitionText, 0);
      this.addIncident(transitionContainer, 0);
    }
  }, {
    key: "html",
    get: function get() {
      this.attrs.speed = !this.attrs.speed ? this.attrs.speed = 2 : this.attrs.speed;
      return "\n    <div class=\"transition-container\">\n    <p class=\"transition-text\">".concat(this.attrs.title, "</p>\n    </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .transition-container {\n      color:white; \n      background:rgb(0, 0, 0);\n      mix-blend-mode: multiply;\n      font: bolder 400px \"Roboto Mono\";\n      text-align: center;\n      position: relative;\n      left: -100%;\n      width: 20%;\n      height: 100%;\n      position: absolute;\n      display: flex;\n      align-content: center;\n      align-items: center;\n      overflow: hidden;\n    }\n\n    .transition-text {\n      position: relative;\n      left: -0%;\n    }\n  \n  ";
    }
  }]);

  return Transition;
}(motorcortex.API.Clip);

var Transition_1 = Transition;

var Anime$2 = motorcortex.loadPlugin(main);

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

      var word = new motorcortex.Clip({
        css: this.css,
        html: " <div class=\"conttitle\" >".concat(html3.split("undefined")[1], " </div>"),
        selector: ".word",
        containerParams: containerParams
      });
      this.addIncident(word, 0);

      for (var _i = 0; _i < array.length; _i++) {
        var textAnimation = new Anime$2.Anime({
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

      var bgMove = new Anime$2.Anime({
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
      var secondSlideTitleOne = new Anime$2.Anime({
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
      var secondSlideTitleTwo = new Anime$2.Anime({
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
      var wordBg = new Anime$2.Anime({
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
      var shortDescription = new Anime$2.Anime({
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
      var bgscaledown = new Anime$2.Anime({
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
      var bgscaledownMove = new Anime$2.Anime({
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
      var bgsecondscaledownMove = new Anime$2.Anime({
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
      var secondBgDate = new Anime$2.Anime({
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
      var moveSecond = new Anime$2.Anime({
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
      var moveSecondS = new Anime$2.Anime({
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
      this.addIncident(moveSecondS, this.calculatedDuration + 1000 * this.attrs.speed);
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
}(motorcortex.API.Clip);

var SlideDateOne_1 = SlideDateOne;

var Anime$3 = motorcortex.loadPlugin(main);

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
      var moveThird = new Anime$3.Anime({
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
      var thirdScaleUp = new Anime$3.Anime({
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
      var moveThirdIner = new Anime$3.Anime({
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
      var movePresenter = new Anime$3.Anime({
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
      var bgOut = new Anime$3.Anime({
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
}(motorcortex.API.Clip);

var Scrolslide_1 = Scrolslide;

var Anime$4 = motorcortex.loadPlugin(main);

var LtRslide =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(LtRslide, _MotorCortex$API$Clip);

  function LtRslide() {
    _classCallCheck(this, LtRslide);

    return _possibleConstructorReturn(this, _getPrototypeOf(LtRslide).apply(this, arguments));
  }

  _createClass(LtRslide, [{
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
      var personConMove = new Anime$4.Anime({
        animatedAttrs: {
          left: "50%"
        },
        initialValues: {},
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".quarter-first-presenter-slide",
        easing: "easeInSine"
      });
      var quarterLeft = new Anime$4.Anime({
        animatedAttrs: {
          left: "-20%"
        },
        initialValues: {
          left: "-50%"
        },
        attrs: {}
      }, {
        duration: 1500 * this.attrs.speed,
        selector: ".quarter-left",
        easing: "easeOutQuad"
      });
      var bg = new Anime$4.Anime({
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
      var bgOut = new Anime$4.Anime({
        animatedAttrs: {
          left: "100%"
        },
        initialValues: {
          left: "0%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".bg",
        easing: "easeOutQuad"
      });
      this.addIncident(bg, 0);
      this.addIncident(personConMove, 0);
      this.addIncident(quarterLeft, 0);
      this.addIncident(bgOut, this.calculatedDuration + 1000 * this.attrs.speed);
    }
  }, {
    key: "html",
    get: function get() {
      this.attrs.bgUrl = !this.attrs.bgUrl ? this.attrs.bgUrl = "./bg4.jpg" : this.attrs.bgUrl;
      this.attrs.overlayColor = !this.attrs.overlayColor ? this.attrs.overlayColor = "#ff00b34d" : this.attrs.overlayColor;
      this.attrs.mainColor = !this.attrs.mainColor ? this.attrs.mainColor = "#00ff40" : this.attrs.mainColor;
      this.attrs.speed = !this.attrs.speed ? this.attrs.speed = 2 : this.attrs.speed;
      return "\n    <div class=\"bg\">\n    <div class=\"bg-quarter-slide\">\n      <div class=\"quarter-first-presenter-slide\">\n        <div class=\"quarter-left\">\n          <div class=\"quarter-presenter-container\">\n            <div class=\"quarter-presenter presenter\">".concat(this.attrs.title, "</div>\n          </div>\n          <div class=\"name-container\">").concat(this.attrs.name, "</div>\n          <div class=\"position-container\">").concat(this.attrs.position, "</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .bg {\n      width: 100%;\n      height: 100%;\n      background-image: url(".concat(this.attrs.bgUrl, ");\n      background-size: 1920px;\n      background-position: center;\n      transform: scale(1);\n      display: flex;\n      position: relative;\n      align-items: center;\n      flex-wrap: wrap;\n      flex: 1 0 auto;\n      left : -100%;\n      \n    }\n    .bg:after {\n      content: \"\";\n      display: block;\n      background: linear-gradient(").concat(this.attrs.overlayColor, ");\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      z-index: -1;\n    }\n    .third-first-presenter-slide,.quarter-first-presenter-slide{\n      position : relative;\n    }\n  \n    .quarter-first-presenter-slide{\n      margin-bottom: 15%;\n      border-right: 15px solid ").concat(this.attrs.mainColor, ";\n      \n    }\n\n    .quarter-left{\n      display: flex;\n      flex-direction: column;\n      align-items: flex-end;\n      position : relative;\n      left: -50%;\n    }\n    .name-container,.position-container{\n      font-weight: 700;\n      font-family: 'Roboto Mono', monospace;\n      text-transform: uppercase;\n      color: #fff;\n    }\n  \n    .name-container{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.name.length, 360), "px;\n    }\n    .position-container{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.position.length, 360), "px;\n    }\n    .bg-quarter-slide{\n      height: 1080px;\n      width: 1920px;\n      display: flex;\n      align-items: center;\n    }\n\n\n    .bg-quarter-slide{\n      align-items: flex-end;\n    }\n\n    .quarter-presenter{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 720), "px;\n    }\n    .presenter,.big-title{\n      font-weight: 700;\n      font-family: 'Roboto Mono', monospace;\n      text-transform: uppercase;\n      color: ").concat(this.attrs.mainColor, ";\n    }\n\n  ");
    }
  }]);

  return LtRslide;
}(motorcortex.API.Clip);

var LtRslide_1 = LtRslide;

var Anime$5 = motorcortex.loadPlugin(main);

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
      var bgMove = new Anime$5.Anime({
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
      var secondSlide = new Anime$5.Anime({
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
      var bigTitle = new Anime$5.Anime({
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
      var bgscaledown = new Anime$5.Anime({
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
      var bgscaledownMove = new Anime$5.Anime({
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
      var bgsecondscaledownMove = new Anime$5.Anime({
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
      var secondBgDate = new Anime$5.Anime({
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
      var moveSecond = new Anime$5.Anime({
        animatedAttrs: {
          left: "-175%"
        },
        initialValues: {},
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".bg-small,.bg",
        easing: "easeOutCubic"
      });
      var movePresenterSlide = new Anime$5.Anime({
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
      var movePresenterSlideLeft = new Anime$5.Anime({
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
      var moveBig = new Anime$5.Anime({
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
      var moveBigOut = new Anime$5.Anime({
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
        easing: "easeOutQuad"
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
      this.addIncident(moveSecond, this.calculatedDuration - 3000 * this.attrs.speed);
      this.addIncident(moveBig, this.calculatedDuration - 3200 * this.attrs.speed);
      this.addIncident(moveBigOut, this.calculatedDuration + 1000 * this.attrs.speed);
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
}(motorcortex.API.Clip);

var SlideDateTwo_1 = SlideDateTwo;

var Anime$6 = motorcortex.loadPlugin(main);

var BtTslide =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(BtTslide, _MotorCortex$API$Clip);

  function BtTslide() {
    _classCallCheck(this, BtTslide);

    return _possibleConstructorReturn(this, _getPrototypeOf(BtTslide).apply(this, arguments));
  }

  _createClass(BtTslide, [{
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
      var personConMove = new Anime$6.Anime({
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
        duration: 1500 * this.attrs.speed,
        selector: ".quarter-first-presenter-slide"
      });
      var quarterLeft = new Anime$6.Anime({
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
        duration: 2000 * this.attrs.speed,
        selector: ".quarter-left"
      });
      var bg = new Anime$6.Anime({
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
        duration: 1000 * this.attrs.speed,
        selector: ".bg",
        easing: "easeOutQuad"
      });
      var bgOut = new Anime$6.Anime({
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
        duration: 1000 * this.attrs.speed,
        selector: ".bg",
        easing: "easeOutQuad"
      });
      this.addIncident(bg, 0);
      this.addIncident(personConMove, 0);
      this.addIncident(quarterLeft, 0);
      this.addIncident(bgOut, this.calculatedDuration + 1000 * this.attrs.speed);
    }
  }, {
    key: "html",
    get: function get() {
      this.attrs.bgUrl = !this.attrs.bgUrl ? this.attrs.bgUrl = "./bg3.jpg" : this.attrs.bgUrl;
      this.attrs.overlayColor = !this.attrs.overlayColor ? this.attrs.overlayColor = "#ff00b34d" : this.attrs.overlayColor;
      this.attrs.mainColor = !this.attrs.mainColor ? this.attrs.mainColor = "#00ff40" : this.attrs.mainColor;
      this.attrs.speed = !this.attrs.speed ? this.attrs.speed = 2 : this.attrs.speed;
      return "\n    <div class=\"bg\">\n    <div class=\"bg-quarter-slide\">\n      <div class=\"quarter-first-presenter-slide\">\n        <div class=\"quarter-left\">\n          <div class=\"quarter-presenter-container\">\n            <div class=\"quarter-presenter presenter\">".concat(this.attrs.title, "</div>\n          </div>\n          <div class=\"name-container\">").concat(this.attrs.name, "</div>\n          <div class=\"position-container\">").concat(this.attrs.position, "</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .bg {\n      width: 100%;\n      height: 100%;\n      background-image: url(".concat(this.attrs.bgUrl, ");\n      background-size: 1920px;\n      background-position: center;\n      transform: scale(1);\n      display: flex;\n      position: relative;\n      align-items: center;\n      flex-wrap: wrap;\n      flex: 1 0 auto;\n    \n      top : 100%;\n      \n    }\n    .bg:after {\n      content: \"\";\n      display: block;\n      background: linear-gradient(").concat(this.attrs.overlayColor, ");\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      z-index: -1;\n    }\n    .third-first-presenter-slide,.quarter-first-presenter-slide{\n      position : relative;\n    }\n  \n    .quarter-first-presenter-slide{\n      margin-bottom: 15%;\n      border-top: 15px solid ").concat(this.attrs.mainColor, ";\n      align-items: center;\n      justify-content: center;\n      \n    }\n\n    .quarter-left{\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      position : relative;\n      top: 90%;\n      \n    }\n    .name-container,.position-container{\n      font-weight: 700;\n      font-family: 'Roboto Mono', monospace;\n      text-transform: uppercase;\n      color: #fff;\n    }\n  \n    .name-container{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.name.length, 360), "px;\n    }\n    .position-container{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.position.length, 360), "px;\n    }\n    .bg-quarter-slide{\n      height: 1080px;\n      width: 1920px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .quarter-presenter{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 720), "px;\n    }\n    .presenter,.big-title{\n      font-weight: 700;\n      font-family: 'Roboto Mono', monospace;\n      text-transform: uppercase;\n      color: ").concat(this.attrs.mainColor, ";\n    }\n\n\n  ");
    }
  }]);

  return BtTslide;
}(motorcortex.API.Clip);

var BtTslide_1 = BtTslide;

var Anime$7 = motorcortex.loadPlugin(main);

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
      var personConMove = new Anime$7.Anime({
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
      var quarterLeft = new Anime$7.Anime({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "90%"
        },
        attrs: {}
      }, {
        duration: 2000 * this.attrs.speed,
        selector: ".quarter-left",
        easing: "easeOutCubic"
      });
      var bg = new Anime$7.Anime({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "100%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".bg",
        easing: "easeOutQuad"
      });
      var bgscaledown = new Anime$7.Anime({
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
        selector: ".bg,.bg-next",
        easing: "easeOutCubic"
      });
      var bgscaledownMove = new Anime$7.Anime({
        animatedAttrs: {
          left: "25%"
        },
        initialValues: {
          left: "0%"
        },
        attrs: {}
      }, {
        duration: 500 * this.attrs.speed,
        selector: ".bg",
        easing: "easeOutCubic"
      });
      var bgsecondscaledownMove = new Anime$7.Anime({
        animatedAttrs: {
          left: "-25%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      }, {
        duration: 500 * this.attrs.speed,
        selector: ".bg-next",
        easing: "easeOutCubic"
      });
      var bgscaleup = new Anime$7.Anime({
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
        duration: 500 * this.attrs.speed,
        selector: ".bg,.bg-next",
        easing: "easeOutCubic"
      });
      var bgscaledownMoveOut = new Anime$7.Anime({
        animatedAttrs: {
          left: "100%"
        },
        initialValues: {
          left: "25%"
        },
        attrs: {}
      }, {
        duration: 500 * this.attrs.speed,
        selector: ".bg",
        easing: "easeOutCubic"
      });
      var bgsecondscaledownMoveOut = new Anime$7.Anime({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "-25%"
        },
        attrs: {}
      }, {
        duration: 500 * this.attrs.speed,
        selector: ".bg-next",
        easing: "easeOutCubic"
      });
      var bgMoveOut = new Anime$7.Anime({
        animatedAttrs: {
          left: "100%"
        },
        initialValues: {
          left: "0%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".bg-next",
        easing: "easeOutQuad"
      });
      this.addIncident(bg, 0);
      this.addIncident(personConMove, 0);
      this.addIncident(quarterLeft, 0);
      this.addIncident(bgscaledown, 3000 * this.attrs.speed);
      this.addIncident(bgsecondscaledownMove, 3000 * this.attrs.speed);
      this.addIncident(bgscaledownMove, 3000 * this.attrs.speed);
      this.addIncident(bgscaleup, 4000 * this.attrs.speed);
      this.addIncident(bgscaledownMoveOut, 4000 * this.attrs.speed);
      this.addIncident(bgsecondscaledownMoveOut, 4000 * this.attrs.speed);
      this.addIncident(bgMoveOut, this.calculatedDuration + 1000 * this.attrs.speed);
    }
  }, {
    key: "html",
    get: function get() {
      this.attrs.bgUrl = !this.attrs.bgUrl ? this.attrs.bgUrl = "./bg3.jpg" : this.attrs.bgUrl;
      this.attrs.overlayColor = !this.attrs.overlayColor ? this.attrs.overlayColor = "#ff00b34d" : this.attrs.overlayColor;
      this.attrs.bgUrl2 = !this.attrs.bgUrl2 ? this.attrs.bgUrl2 = "./bg2.jpg" : this.attrs.bgUrl2;
      this.attrs.dateOverlay = !this.attrs.dateOverlay ? this.attrs.dateOverlay = "#ff00b3" : this.attrs.dateOverlay;
      this.attrs.mainColor = !this.attrs.mainColor ? this.attrs.mainColor = "#00ff40" : this.attrs.mainColor;
      this.attrs.speed = !this.attrs.speed ? this.attrs.speed = 2 : this.attrs.speed;
      return "\n   <div class=\"bg\">\n    <div class=\"bg-quarter-slide\">\n      <div class=\"quarter-first-presenter-slide\">\n        <div class=\"quarter-left\">\n          <div class=\"quarter-presenter-container\">\n            <div class=\"quarter-presenter presenter\">".concat(this.attrs.title, "</div>\n          </div>\n          <div class=\"name-container\">").concat(this.attrs.name, "</div>\n          <div class=\"position-container\">").concat(this.attrs.position, "</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"bg-next\">\n  <div class=\"bg-quarter-slide\">\n    <div class=\"test-mask\">\n      <div class=\"defter-date-container\">\n        <div class=\"defter-date\"><span> ").concat(this.attrs.day, " ").concat(this.attrs.number, " </span>").concat(this.attrs.month, " ").concat(this.attrs.year, "</div>\n      </div>\n    </div>\n  </div>\n</div>\n\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .bg {\n      width: 100%;\n      height: 100%;\n      background-image: url(".concat(this.attrs.bgUrl, ");\n      background-size: 1920px;\n      background-position: center;\n      transform: scale(1);\n      display: flex;\n      position: relative;\n      align-items: center;\n      flex-wrap: wrap;\n      flex: 1 0 auto;\n      top : 100%; \n    }\n\n\n    .bg:after,.bg-next {\n      content: \"\";\n      display: block;\n      background: linear-gradient(").concat(this.attrs.overlayColor, ");\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      z-index: -1;\n    }\n    .bg-next {\n      width: 100%;\n      height: 100%;\n      background-image: url(").concat(this.attrs.bgUrl2, ");\n      background-size: 1920px;\n      background-position: center;\n      transform: scale(1);\n      display: flex;\n      position: relative;\n      align-items: center;\n      flex-wrap: wrap;\n      flex: 1 0 auto;\n      top : -100%;\n      left : -100%\n     \n    }\n    .defter-date-container{\n      position: absolute;\n      font-size: 60px;\n      color:#fff;\n      white-space: nowrap;\n      text-transform: uppercase;\n      font-family: 'Roboto Mono', monospace;\n      background: ").concat(this.attrs.dateOverlay, ";\n      padding: 2% 6%;\n      background-blend-mode: multiply;\n      background-image: url(").concat(this.attrs.bgUrl2, ");\n      background-size: 1920px;\n      background-position: center;\n      transform: scale(1);\n    }\n\n    .defter-date span{\n      color: ").concat(this.attrs.mainColor, ";\n    }\n\n\n    .third-first-presenter-slide,.quarter-first-presenter-slide{\n      position : relative;\n    }\n  \n    .quarter-first-presenter-slide{\n      margin-bottom: 15%;\n      border-top: 15px solid ").concat(this.attrs.mainColor, ";\n      align-items: center;\n      justify-content: center;\n      \n    }\n\n    .quarter-left{\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      position : relative;\n      top: 90%;\n      \n    }\n    .name-container,.position-container{\n      font-weight: 700;\n      font-family: 'Roboto Mono', monospace;\n      text-transform: uppercase;\n      color: #fff;\n    }\n  \n    .name-container{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.name.length, 360), "px;\n    }\n    .position-container{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.position.length, 360), "px;\n    }\n    .bg-quarter-slide{\n      height: 1080px;\n      width: 1920px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .quarter-presenter{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 720), "px;\n    }\n    .presenter,.big-title{\n      font-weight: 700;\n      font-family: 'Roboto Mono', monospace;\n      text-transform: uppercase;\n      color: ").concat(this.attrs.mainColor, ";\n    }\n\n    .test-mask{\n      position: absolute;\n      left: 0;\n      height: 132.5px;\n      background-size: 1920px;\n      position: absolute;\n      left: 0;\n      display: flex;\n      justify-content: center;\n      align-content: center;\n      width: 100%;\n    }\n\n\n  ");
    }
  }]);

  return BtTslideDate;
}(motorcortex.API.Clip);

var BtTslideDate_1 = BtTslideDate;

var Anime$8 = motorcortex.loadPlugin(main);

var LtRslideTop =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(LtRslideTop, _MotorCortex$API$Clip);

  function LtRslideTop() {
    _classCallCheck(this, LtRslideTop);

    return _possibleConstructorReturn(this, _getPrototypeOf(LtRslideTop).apply(this, arguments));
  }

  _createClass(LtRslideTop, [{
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

      return Math.round(fontsize);
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var personConMove = new Anime$8.Anime({
        animatedAttrs: {
          paddingTop: "0%"
        },
        initialValues: {
          paddingTop: "40%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".quarter-left",
        easing: "easeOutCubic"
      });
      var quarterLeft = new Anime$8.Anime({
        animatedAttrs: {
          top: "25%"
        },
        initialValues: {
          top: "-100%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".quarter-left",
        easing: "easeOutCubic"
      });
      var bg = new Anime$8.Anime({
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
      var bgOut = new Anime$8.Anime({
        animatedAttrs: {
          left: "100%"
        },
        initialValues: {
          left: "0%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".bg",
        easing: "easeOutCubic"
      });
      this.addIncident(bg, 0);
      this.addIncident(personConMove, 0);
      this.addIncident(quarterLeft, 0);
      this.addIncident(bgOut, this.calculatedDuration + 1000 * this.attrs.speed);
    }
  }, {
    key: "html",
    get: function get() {
      this.attrs.bgUrl = !this.attrs.bgUrl ? this.attrs.bgUrl = "./bg2.jpg" : this.attrs.bgUrl;
      this.attrs.overlayColor = !this.attrs.overlayColor ? this.attrs.overlayColor = "#ff00b34d" : this.attrs.overlayColor;
      this.attrs.mainColor = !this.attrs.mainColor ? this.attrs.mainColor = "#00ff40" : this.attrs.mainColor;
      this.attrs.speed = !this.attrs.speed ? this.attrs.speed = 2 : this.attrs.speed;
      return "\n    <div class=\"bg\">\n    <div class=\"bg-quarter-slide\">\n      \n        <div class=\"quarter-left\">\n          <div class=\"quarter-presenter-container\">\n            <div class=\"quarter-presenter presenter\">".concat(this.attrs.title, "</div>\n          </div>\n          <div class=\"name-container\">").concat(this.attrs.name, "</div>\n          <div class=\"position-container\">").concat(this.attrs.position, "</div>\n        </div>\n    \n    </div>\n  </div>\n\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .bg {\n      width: 100%;\n      height: 100%;\n      background-image: url(".concat(this.attrs.bgUrl, ");\n      background-size: 1920px;\n      background-position: center;\n      transform: scale(1);\n      display: flex;\n      position: relative;\n      align-items: center;\n      flex-wrap: wrap;\n      flex: 1 0 auto;\n      left : -100%;\n      \n    }\n    .bg:after {\n      content: \"\";\n      display: block;\n      background: linear-gradient(").concat(this.attrs.overlayColor, ");\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      z-index: -1;\n    }\n  \n\n    .quarter-left{\n      display: flex;\n      flex-direction: column;\n      align-items: flex-end;\n      position : relative;\n      top: -100%;\n      border-top: 15px solid ").concat(this.attrs.mainColor, ";\n      padding-top: 25%;\n      margin-left: 4%;\n     \n    }\n    .name-container,.position-container{\n      font-weight: 700;\n      font-family: 'Roboto Mono', monospace;\n      text-transform: uppercase;\n      color: #fff;\n    }\n  \n    .name-container{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.name.length, 360), "px;\n    }\n    .position-container{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.position.length, 360), "px;\n    }\n    .bg-quarter-slide{\n      height: 1080px;\n      width: 1920px;\n      display: flex;\n      align-items: center;\n    }\n\n    .quarter-presenter{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 720), "px;\n    }\n    .presenter,.big-title{\n      font-weight: 700;\n      font-family: 'Roboto Mono', monospace;\n      text-transform: uppercase;\n      color: ").concat(this.attrs.mainColor, ";\n    }\n\n  ");
    }
  }]);

  return LtRslideTop;
}(motorcortex.API.Clip);

var LtRslideTop_1 = LtRslideTop;

var Anime$9 = motorcortex.loadPlugin(main);

var RtLslide =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(RtLslide, _MotorCortex$API$Clip);

  function RtLslide() {
    _classCallCheck(this, RtLslide);

    return _possibleConstructorReturn(this, _getPrototypeOf(RtLslide).apply(this, arguments));
  }

  _createClass(RtLslide, [{
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
      var personConMove = new Anime$9.Anime({
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
        duration: 1000 * this.attrs.speed,
        selector: ".quarter-left"
      });
      var quarterLeft = new Anime$9.Anime({
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
        duration: 1000 * this.attrs.speed,
        selector: ".quarter-left"
      });
      var bg = new Anime$9.Anime({
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
        duration: 1000 * this.attrs.speed,
        selector: ".bg",
        easing: "easeOutQuad"
      });
      var bgOut = new Anime$9.Anime({
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
        duration: 1000 * this.attrs.speed,
        selector: ".bg",
        easing: "easeOutQuad"
      });
      this.addIncident(bg, 0);
      this.addIncident(personConMove, 0);
      this.addIncident(quarterLeft, 0);
      this.addIncident(bgOut, this.calculatedDuration + 1000 * this.attrs.speed);
    }
  }, {
    key: "html",
    get: function get() {
      this.attrs.bgUrl = !this.attrs.bgUrl ? this.attrs.bgUrl = "./bg4.jpg" : this.attrs.bgUrl;
      this.attrs.overlayColor = !this.attrs.overlayColor ? this.attrs.overlayColor = "#ff00b34d" : this.attrs.overlayColor;
      this.attrs.mainColor = !this.attrs.mainColor ? this.attrs.mainColor = "#00ff40" : this.attrs.mainColor;
      this.attrs.speed = !this.attrs.speed ? this.attrs.speed = 2 : this.attrs.speed;
      return "\n    <div class=\"bg\">\n    <div class=\"bg-quarter-slide\">\n      \n        <div class=\"quarter-left\">\n          <div class=\"quarter-presenter-container\">\n            <div class=\"quarter-presenter presenter\">".concat(this.attrs.title, "</div>\n          </div>\n          <div class=\"name-container\">").concat(this.attrs.name, "</div>\n          <div class=\"position-container\">").concat(this.attrs.position, "</div>\n        </div>\n    \n    </div>\n  </div>\n\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .bg {\n      width: 100%;\n      height: 100%;\n      background-image: url(".concat(this.attrs.bgUrl, ");\n      background-size: 1920px;\n      background-position: center;\n      transform: scale(1);\n      display: flex;\n      position: relative;\n      align-items: center;\n      flex-wrap: wrap;\n      flex: 1 0 auto;\n      right: -100%;\n      \n    }\n    .bg:after {\n      content: \"\";\n      display: block;\n      background: linear-gradient(").concat(this.attrs.overlayColor, ");\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      z-index: -1;\n    }\n  \n\n    .quarter-left{\n      display: flex;\n      flex-direction: column;\n      align-items: flex-end;\n      position : relative;\n      top: 100%;\n      border-bottom: 15px solid ").concat(this.attrs.mainColor, ";\n      padding-bottom: 25%;\n      margin-right: 4%;\n     \n    }\n    .name-container,.position-container{\n      font-weight: 700;\n      font-family: 'Roboto Mono', monospace;\n      text-transform: uppercase;\n      color: #fff;\n    }\n  \n    .name-container{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.name.length, 360), "px;\n    }\n    .position-container{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.position.length, 360), "px;\n    }\n    .bg-quarter-slide{\n      height: 1080px;\n      width: 1920px;\n      display: flex;\n      align-items: center;\n      justify-content: flex-end;\n    }\n\n    .quarter-presenter{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 720), "px;\n    }\n    .presenter,.big-title{\n      font-weight: 700;\n      font-family: 'Roboto Mono', monospace;\n      text-transform: uppercase;\n      color: ").concat(this.attrs.mainColor, ";\n    }\n\n  ");
    }
  }]);

  return RtLslide;
}(motorcortex.API.Clip);

var RtLslide_1 = RtLslide;

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn$1(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized$1(self);
}

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1(o);
}

function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$1(o, p);
}

var VideoClip =
/*#__PURE__*/
function (_MC$API$DOMClip) {
  _inherits$1(VideoClip, _MC$API$DOMClip);

  function VideoClip() {
    _classCallCheck$1(this, VideoClip);

    return _possibleConstructorReturn$1(this, _getPrototypeOf$1(VideoClip).apply(this, arguments));
  }

  _createClass$1(VideoClip, [{
    key: "onAfterRender",
    value: function onAfterRender() {
      var _this = this;

      var video = this.context.getElements("video")[0];
      video.muted = true;
      var canvas = this.context.getElements("canvas")[0];
      var ctx = canvas.getContext('2d');
      video.addEventListener("loadedmetadata", function (e) {
        var canvasWidth = _this.attrs.width || 640;
        var canvasHeight = _this.attrs.height || 360; // console.log(canvasWidth / video.videoWidth, canvasHeight / video.videoHeight)

        canvas.style.transform = "scale(".concat(canvasWidth / video.videoWidth, ", ").concat(canvasHeight / video.videoHeight, ")");
        canvas.style['transform-origin'] = "top left";
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
      }, false);
      this.setCustomEntity("video", {
        video: video,
        canvas: canvas,
        ctx: ctx,
        startFrom: this.attrs.startFrom * 1000 || 0
      });
    }
  }, {
    key: "html",
    get: function get() {
      var _this2 = this;

      return "\n        <div>\n            <video id=\"video\" style=\"width:".concat(this.attrs.width || 640, "px;height:").concat(this.attrs.height || 360, "px;\" preload=\"auto\">\n                ").concat(this.attrs.sources.map(function (item, i) {
        return "\n                    <source src=\"".concat(item, "#t=").concat(_this2.attrs.startFrom || 0, "\"></source>\n                ");
      }).join(''), "\n            </video>\n            <canvas id=\"canvas\"></canvas>\n        </div>\n        ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n            #video{\n                display:none;\n            }\n        ";
    }
  }]);

  return VideoClip;
}(motorcortex.API.DOMClip);

var VideoClip_1 = VideoClip;

function _typeof$1(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$1 = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$1(obj);
}

function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$2(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn$2(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized$2(self);
}

function _assertThisInitialized$2(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf$2(o) {
  _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$2(o);
}

function _inherits$2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf$2(subClass, superClass);
}

function _setPrototypeOf$2(o, p) {
  _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$2(o, p);
}

var VideoPlay =
/*#__PURE__*/
function (_MC$API$MediaPlayback) {
  _inherits$2(VideoPlay, _MC$API$MediaPlayback);

  function VideoPlay() {
    _classCallCheck$2(this, VideoPlay);

    return _possibleConstructorReturn$2(this, _getPrototypeOf$2(VideoPlay).apply(this, arguments));
  }

  _createClass$2(VideoPlay, [{
    key: "play",
    value: function play(millisecond) {
      var _this = this;

      var video = this.element.entity.video;
      var ctx = this.element.entity.ctx;
      var playPromise = video.play();

      if (this.hasSetWaitingListener !== true) {
        video.addEventListener('waiting', this._waitingHandler.bind(this));
        this.hasSetWaitingListener = true;
      }

      if (this.hasSetCanplayListener !== true) {
        video.addEventListener('canplay', this._canplayHandler.bind(this));
        this.hasSetCanplayListener = true;
      }

      var drawFrame = function drawFrame(video) {
        ctx.drawImage(video, 0, 0);
        _this.timeout = setTimeout(function () {
          drawFrame(video);
        }, 10);
      };

      drawFrame(video);
      return true;
    }
  }, {
    key: "_waitingHandler",
    value: function _waitingHandler() {
      console.log('waiting');
      console.log('and blocking');
      this.setBlock('Video loading');
    }
  }, {
    key: "_canplayHandler",
    value: function _canplayHandler() {
      console.log('unblocking');
      this.unblock();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.element.entity.video.pause();
      clearTimeout(this.timeout);
    }
  }, {
    key: "onProgress",
    value: function onProgress(f, millisecond) {
      var startFrom = millisecond + this.element.entity.startFrom;
      this.element.entity.video.currentTime = (startFrom + millisecond) / 1000;
      this.element.entity.ctx.drawImage(this.element.entity.video, 0, 0);
    }
  }]);

  return VideoPlay;
}(motorcortex.API.MediaPlayback);

var VideoPlay_1 = VideoPlay;

var compositeAttributes = {
  filter: ["blur", "brightness", "contrast", "drop-shadow", "grayscale", "hue-rotate", "invert", "opacity", "saturate", "sepia"]
};

function _typeof$2(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$2 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$2 = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$2(obj);
}

function _classCallCheck$3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$3(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$3(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$3(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn$3(self, call) {
  if (call && (_typeof$2(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized$3(self);
}

function _assertThisInitialized$3(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf$3(o) {
  _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$3(o);
}

function _inherits$3(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf$3(subClass, superClass);
}

function _setPrototypeOf$3(o, p) {
  _setPrototypeOf$3 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$3(o, p);
}

var effects = compositeAttributes.filter;

var VideoEffect =
/*#__PURE__*/
function (_MotorCortex$API$Mono) {
  _inherits$3(VideoEffect, _MotorCortex$API$Mono);

  function VideoEffect() {
    _classCallCheck$3(this, VideoEffect);

    return _possibleConstructorReturn$3(this, _getPrototypeOf$3(VideoEffect).apply(this, arguments));
  }

  _createClass$3(VideoEffect, [{
    key: "getScratchValue",
    value: function getScratchValue() {
      return {
        blur: 0,
        brightness: 1,
        contrast: 1,
        grayscale: 0,
        'hue-rotate': 0,
        invert: 0,
        opacity: 1,
        saturate: 1,
        sepia: 0
      };
    }
  }, {
    key: "_objToFilterValue",
    value: function _objToFilterValue(obj) {
      var string = "";

      for (var filter in obj) {
        string += "".concat(filter, "(").concat(obj[filter]).concat(this._effectsUnits[filter], ") ");
      }

      return string;
    }
  }, {
    key: "onProgress",
    value: function onProgress(f, m) {
      var targetValues = Object.assign({}, this.initialValue);

      for (var i = 0; i < effects.length; i++) {
        var effect = effects[i];

        if (this.initialValue[effect] !== this.targetValue[effect]) {
          targetValues[effect] = f * (this.targetValue[effect] - this.initialValue[effect]) + this.initialValue[effect];
        }
      }

      this.element.entity.ctx.filter = this._objToFilterValue(targetValues);
    }
  }, {
    key: "_effectsUnits",
    get: function get() {
      return {
        blur: 'px',
        brightness: '',
        contrast: '',
        grayscale: '',
        'hue-rotate': 'deg',
        invert: '',
        opacity: '',
        saturate: '',
        sepia: ''
      };
    }
  }]);

  return VideoEffect;
}(motorcortex.API.MonoIncident);

var Effect = VideoEffect;

var main$1 = {
  npm_name: "@kissmybutton/motorcortex-video",
  incidents: [{
    exportable: VideoPlay_1,
    name: "Playback"
  }, {
    exportable: Effect,
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
              'hue-rotate': {
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
  compositeAttributes: compositeAttributes,
  Clip: VideoClip_1,
  capabilities: {
    speed: false,
    preview: false
  }
};

var Anime$a = motorcortex.loadPlugin(main);
var VideoPlugin = motorcortex.loadPlugin(main$1);

var SlideDateOneVid =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(SlideDateOneVid, _MotorCortex$API$Clip);

  function SlideDateOneVid() {
    _classCallCheck(this, SlideDateOneVid);

    return _possibleConstructorReturn(this, _getPrototypeOf(SlideDateOneVid).apply(this, arguments));
  }

  _createClass(SlideDateOneVid, [{
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
      var VideoClip = new VideoPlugin.Clip({
        sources: this.attrs.vidLink,
        width: 1920,
        height: 1080,
        startFrom: 0
      }, {
        selector: ".vid" // or host: your-host

      });
      var Playback = new VideoPlugin.Playback({
        selector: "!#video",
        duration: this.attrs.vidDuration
      });
      this.addIncident(VideoClip, 0);
      VideoClip.addIncident(Playback, 0);
      var delay = this.attrs.vidDuration - 3000 * this.attrs.speed;
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

      var word = new motorcortex.Clip({
        css: this.css,
        html: " <div class=\"conttitle\" >".concat(html3.split("undefined")[1], " </div>"),
        selector: ".word",
        containerParams: containerParams
      });
      this.addIncident(word, 0);

      for (var _i = 0; _i < array.length; _i++) {
        var textAnimation = new Anime$a.Anime({
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

      var bgMove = new Anime$a.Anime({
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
      var secondSlideTitleOne = new Anime$a.Anime({
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
      var secondSlideTitleTwo = new Anime$a.Anime({
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
      var wordBg = new Anime$a.Anime({
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
      var shortDescription = new Anime$a.Anime({
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
      var bgscaledown = new Anime$a.Anime({
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
      var bgscaledownMove = new Anime$a.Anime({
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
      var bgsecondscaledownMove = new Anime$a.Anime({
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
      var secondBgDate = new Anime$a.Anime({
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
      }); // const moveSecond = new Anime.Anime(
      //   {
      //     animatedAttrs: {
      //       left: "-76%"
      //     },
      //     initialValues: {},
      //     attrs: {}
      //   },
      //   {
      //     duration: 1000 * this.attrs.speed,
      //     selector: ".bg",
      //     easing: "easeOutQuad"
      //   }
      // );

      var moveSecondS = new Anime$a.Anime({
        animatedAttrs: {
          left: "-100%"
        },
        initialValues: {
          left: "0%"
        },
        attrs: {}
      }, {
        duration: 1000 * this.attrs.speed,
        selector: ".parent",
        easing: "easeOutQuad"
      });
      this.addIncident(bgMove, 0);
      this.addIncident(secondSlideTitleOne, 300 * this.attrs.speed);
      this.addIncident(secondSlideTitleTwo, 500 * this.attrs.speed);
      this.addIncident(wordBg, 500 * this.attrs.speed);
      this.addIncident(shortDescription, 900 * this.attrs.speed);
      this.addIncident(bgscaledown, 3700 * this.attrs.speed + delay);
      this.addIncident(bgscaledownMove, 3700 * this.attrs.speed + delay);
      this.addIncident(bgsecondscaledownMove, 3700 * this.attrs.speed + delay);
      this.addIncident(secondBgDate, 3700 * this.attrs.speed + delay);
      this.addIncident(moveSecondS, this.calculatedDuration + 1000 * this.attrs.speed);
    }
  }, {
    key: "html",
    get: function get() {
      this.attrs.bgUrl = !this.attrs.bgUrl ? this.attrs.bgUrl = "./bg3.jpg" : this.attrs.bgUrl;
      this.attrs.overlayColor = !this.attrs.overlayColor ? this.attrs.overlayColor = "#ff00b34d" : this.attrs.overlayColor;
      this.attrs.bgUrl2 = !this.attrs.bgUrl2 ? this.attrs.bgUrl2 = "./bg2.jpg" : this.attrs.bgUrl2;
      this.attrs.mainColor = !this.attrs.mainColor ? this.attrs.mainColor = "#00ff40" : this.attrs.mainColor;
      this.attrs.speed = !this.attrs.speed ? this.attrs.speed = 2 : this.attrs.speed;
      this.attrs.vidDuration = !this.attrs.vidDuration ? this.attrs.vidDuration = 6000 : this.attrs.vidDuration;
      return "\n    <div class=\"parent\">\n    <div class=\"bg \">\n    <div class =\"vid\"></div>\n    <div class=\"second-slide\">\n      <div class=\"second-slide-titleOne\">".concat(this.attrs.titleone, "</div>\n      <div class=\"second-slide-titleTwo\">").concat(this.attrs.subtitle, "</div>\n      <div class=\"word-bg\">\n        <div class=\"word\"></div>\n      </div>\n      <div class=\"short-description\">\n        <p>\n         ").concat(this.attrs.description, "\n        </p>\n      </div>\n    </div>\n    </div>\n\n    <div class=\"bg-second \">\n      <div class=\"bg-second-slide\">\n          <div class=\"second-date-container\">\n              <div class=\"second-date\"><span> ").concat(this.attrs.day, " ").concat(this.attrs.number, " </span>").concat(this.attrs.month, " ").concat(this.attrs.year, "</div>\n          </div>\n      </div>\n    </div>\n    </div>\n\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .bg,.bg-second {\n      width: 1920px;\n      height: 1080px;\n      background-image: url(".concat(this.attrs.bgUrl, ");\n      background-size: 1920px;\n      background-position: center;\n      transform: scale(1);\n      display: flex;\n      position: absolute;\n      align-items: center;\n      flex-wrap: wrap;\n      flex: 1 0 auto;\n      left: -100%\n    }\n    .parent{\n      position:relative;\n      width: 1920px;\n      height: 1080px;\n      left:0%;\n    }\n    .bg:after,.bg-second:after {\n      content: \"\";\n      display: block;\n      background: linear-gradient(").concat(this.attrs.overlayColor, ");\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      z-index: -1;\n    }\n    .bg-second{\n      left:100%;\n      background-image: url(").concat(this.attrs.bgUrl2, ");\n    }\n    .vid{\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 1920px;\n      height: 1080px;\n    }\n\n    .short-description{\n      font-size: 20px;\n      color: #fff;\n      position: relative;\n      white-space: normal;\n      text-align: left;\n      text-transform: uppercase;\n      font-family: 'Roboto Mono', monospace;\n      width: 720px;\n      left: -50%;\n      }\n\n      .word-bg{\n        background-color:").concat(this.attrs.mainColor, ";\n        width: 720px;\n        position: relative;\n        left: -50%\n      }\n\n      .word{\n        overflow: hidden;\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 720px\n      }\n\n      .second-slide-titleTwo,.second-slide-titleOne{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.titleone.length, 360), "px;\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n        position: relative;\n        left : -50%;\n      }\n\n      .second-slide-titleTwo{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.subtitle.length, 720), "px;\n      }\n\n      .second-slide-titleOne{\n        color :").concat(this.attrs.mainColor, "\n      }\n\n      .second-slide{\n        position: absolute;\n        left: 10%;\n        display: flex;\n        align-content: center;\n        justify-content: center;\n        flex-direction: column;\n        top: 20%;\n        transform: scale(1);\n      }\n      .letter{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.str.length, 720), "px;\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n        position: relative;\n        position: relative;\n        text-align: center;\n        top : 300px;\n        width: 100%;\n        \n      }\n      .second-date-container{\n        border-left: 100px solid ").concat(this.attrs.mainColor, ";\n        overflow: hidden;\n        width: 200%;\n        \n      }\n\n      .second-date{\n        font-size: 100px;\n        color: #fff;\n        position: relative;\n        white-space: nowrap;\n        text-align: left;\n        text-transform: uppercase;\n        font-family: 'Roboto Mono', monospace;\n        width: 720px;\n        left:-100%;\n      }\n    \n      \n      .second-date span{\n        color: ").concat(this.attrs.mainColor, ";\n      }\n\n  ");
    }
  }]);

  return SlideDateOneVid;
}(motorcortex.API.Clip);

var SlideDateOneVid_1 = SlideDateOneVid;

var src = {
  npm_name: "@kissmybutton/motorcortex-ClipPromo",
  incidents: [{
    exportable: Intro_1,
    name: "Intro"
  }, {
    exportable: Transition_1,
    name: "Transition"
  }, {
    exportable: SlideDateOne_1,
    name: "SlideDateOne"
  }, {
    exportable: SlideDateOneVid_1,
    name: "SlideDateOneVid"
  }, {
    exportable: SlideDateTwo_1,
    name: "SlideDateTwo"
  }, {
    exportable: Scrolslide_1,
    name: "Scrolslide"
  }, {
    exportable: LtRslide_1,
    name: "LtRslide"
  }, {
    exportable: BtTslide_1,
    name: "BtTslide"
  }, {
    exportable: BtTslideDate_1,
    name: "BtTslideDate"
  }, {
    exportable: LtRslideTop_1,
    name: "LtRslideTop"
  }, {
    exportable: RtLslide_1,
    name: "RtLslide"
  }]
};
var src_1 = src.npm_name;
var src_2 = src.incidents;

exports.default = src;
exports.incidents = src_2;
exports.npm_name = src_1;
