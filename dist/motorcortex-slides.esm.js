import motorcortex from '@kissmybutton/motorcortex';

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

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
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

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
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

function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1(o);
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$1(o, p);
}

function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$1(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized$1(self);
}

function _createSuper$1(Derived) {
  return function () {
    var Super = _getPrototypeOf$1(Derived),
        result;

    if (_isNativeReflectConstruct$1()) {
      var NewTarget = _getPrototypeOf$1(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn$1(this, result);
  };
}
/*
 * anime.js v3.1.4
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

/*
 * anime.js v3.1.2
 * (c) 2020 Julian Garnier
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
  if (params === void 0) {
    params = {};
  }

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
} // getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744


function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return getAttribute(el, 'width') * 2 + getAttribute(el, 'height') * 2;
}

function getLineLength(el) {
  return getDistance({
    x: getAttribute(el, 'x1'),
    y: getAttribute(el, 'y1')
  }, {
    x: getAttribute(el, 'x2'),
    y: getAttribute(el, 'y2')
  });
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;

  for (var i = 0; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);

    if (i > 0) {
      totalLength += getDistance(previousPos, currentPos);
    }

    previousPos = currentPos;
  }

  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
} // Path animation


function getTotalLength(el) {
  if (el.getTotalLength) {
    return el.getTotalLength();
  }

  switch (el.tagName.toLowerCase()) {
    case 'circle':
      return getCircleLength(el);

    case 'rect':
      return getRectLength(el);

    case 'line':
      return getLineLength(el);

    case 'polyline':
      return getPolylineLength(el);

    case 'polygon':
      return getPolygonLength(el);
  }
} // Motion path


function getParentSvgEl(el) {
  var parentEl = el.parentNode;

  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) {
      break;
    }

    parentEl = parentEl.parentNode;
  }

  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width,
    h: height,
    vW: viewBox[2],
    vH: viewBox[3]
  };
}

function getPath(path) {
  return {
    el: path,
    svg: getParentSvg(path),
    totalLength: getTotalLength(path),
    deltaCorrections: {
      x: 4,
      y: 5
    }
  };
}

function getPathProgress(path, progress, isPathTargetInsideSVG) {
  function point(offset) {
    if (offset === void 0) offset = 0;

    var _progress = progress * path.totalLength;

    var l = _progress + offset >= 1 ? _progress + offset : 0;
    return path.el.getPointAtLength(l);
  }

  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);
  var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
  var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;
  return {
    x: (p.x - svg.x) * scaleX,
    y: (p.y - svg.y) * scaleY,
    angle: Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI
  };
}

anime.version = '3.1.0';
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.penner = penner;
anime.path = getPath;
anime.getPathProgress = getPathProgress;
var anime_es = anime;
var transform = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skewX", "skewY", "perspective"];
var compositeAttributes = {
  transform: transform
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

var Anime = /*#__PURE__*/function (_MotorCortex$Effect) {
  _inherits$1(Anime, _MotorCortex$Effect);

  var _super = _createSuper$1(Anime);

  function Anime() {
    _classCallCheck$1(this, Anime);

    return _super.apply(this, arguments);
  }

  _createClass$1(Anime, [{
    key: "onGetContext",
    value: function onGetContext() {
      var options = {};

      if (Object.prototype.hasOwnProperty.call(compositeAttributes, this.attributeKey)) {
        var compoAttribute = compositeAttributes[this.attributeKey];

        for (var i = 0; i < compoAttribute.length; i++) {
          if (!Object.prototype.hasOwnProperty.call(this.targetValue, compoAttribute[i])) {
            continue;
          }

          options[compoAttribute[i]] = [this.getInitialValue()[compoAttribute[i]], this.targetValue[compoAttribute[i]]];
        }
      } else {
        options[this.attributeKey] = [this.getInitialValue(), this.targetValue];
      }

      this.target = anime_es(_objectSpread2({
        autoplay: false,
        duration: this.props.duration,
        easing: "linear",
        targets: this.element
      }, (this.attrs || {}).attrs || {}, {}, options)); // handle first render initial values
    }
  }, {
    key: "getScratchValue",
    value: function getScratchValue() {
      if (this.attributeKey === "transform") {
        var obj = {};
        var transform = compositeAttributes[this.attributeKey];
        var currentTransform = getMatrix2D(this.context.window, this.element);

        for (var i = 0; i < transform.length; i++) {
          if (Object.prototype.hasOwnProperty.call(currentTransform, transform[i])) {
            obj[transform[i]] = currentTransform[transform[i]];
          } else {
            obj[transform[i]] = anime_es.get(this.element, transform[i]);
          }
        }

        return obj;
      }

      return anime_es.get(this.element, this.attributeKey);
    }
    /**
     * @param {number} f
     */

  }, {
    key: "onProgress",
    value: function onProgress(f) {
      return this.target.seek(this.target.duration * f);
    }
  }]);

  return Anime;
}(motorcortex.Effect);
/**
 * Takes as attributes:
 * {
 *  animatedAttrs: {
 *      positionOn: {
 *          pathElement: "selector of the path element"
 *      }
 *  }
 * }
 }
**/


var MotionPath = /*#__PURE__*/function (_MotorCortex$Effect) {
  _inherits$1(MotionPath, _MotorCortex$Effect);

  var _super = _createSuper$1(MotionPath);

  function MotionPath() {
    _classCallCheck$1(this, MotionPath);

    return _super.apply(this, arguments);
  }

  _createClass$1(MotionPath, [{
    key: "onGetContext",
    value: function onGetContext() {
      var svgEl = this.context.getElements(this.targetValue.pathElement)[0];
      this.path = anime_es.path(svgEl);
      this.isPathTargetInsideSVG = this.element instanceof SVGElement;
    }
  }, {
    key: "onProgress",
    value: function onProgress(f) {
      var position = anime_es.getPathProgress(this.path, f, this.isPathTargetInsideSVG); // console.log(position);

      var toSet = "\n            translateX(".concat(position.x, "px) \n            translateY(").concat(position.y, "px) \n            rotate(").concat(position.angle, "deg)\n        ");
      this.element.style.transform = toSet;
    }
  }]);

  return MotionPath;
}(motorcortex.Effect);

var nu = ["cm", "mm", "in", "px", "pt", "pc", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "%"];
var ru = ["deg", "rad", "grad", "turn"];
var _MEASUREMENT = "measurement";
var _COLOR = "color";
var animatedAttrs = {
  type: "object",
  // strict : true,
  props: {
    background: {
      optional: true,
      type: _COLOR
    },
    backgroundColor: {
      optional: true,
      type: _COLOR
    },
    backgroundPosition: {
      optional: true,
      type: "string"
    },
    backgroundSize: {
      optional: true,
      type: "string"
    },
    border: {
      optional: true,
      type: "string"
    },
    borderBottom: {
      optional: true,
      type: "string"
    },
    borderBottomColor: {
      optional: true,
      type: _COLOR
    },
    borderBottomLeftRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderBottomRightRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderBottomWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderColor: {
      optional: true,
      type: _COLOR
    },
    borderEndEndRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderEndStartRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderImageOutset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    borderImageSlice: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    borderImageWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    borderLeft: {
      optional: true,
      type: "string"
    },
    borderLeftColor: {
      optional: true,
      type: _COLOR
    },
    borderLeftWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderRight: {
      optional: true,
      type: "string"
    },
    borderRightColor: {
      optional: true,
      type: _COLOR
    },
    borderRightWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderStartEndRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderStartStartRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderTop: {
      optional: true,
      type: "string"
    },
    borderTopColor: {
      optional: true,
      type: _COLOR
    },
    borderTopLeftRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderTopRightRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderTopWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    bottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    boxShadow: {
      optional: true,
      type: "string"
    },
    caretColor: {
      optional: true,
      type: _COLOR
    },
    color: {
      optional: true,
      type: _COLOR
    },
    columnCount: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    columnGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    columnRule: {
      optional: true,
      type: "string"
    },
    columnRuleColor: {
      optional: true,
      type: _COLOR
    },
    columnRuleWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    columns: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    columnWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    flex: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    flexBasis: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    flexGrow: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    flexShrink: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    font: {
      optional: true,
      type: "string"
    },
    fontSize: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    fontSizeAdjust: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    fontStretch: {
      optional: true,
      type: _MEASUREMENT,
      units: ["%"]
    },
    fontWeight: {
      optional: true,
      type: "string"
    },
    gap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    gridColumnGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    gridGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    gridRowGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    gridTemplateColumns: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    gridTemplateRows: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    height: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    inset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    insetBlock: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    insetBlockEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    insetBlockStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    insetInline: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    insetInlineEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    insetInlineStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    left: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    letterSpacing: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    lineClamp: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    lineHeight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    margin: {
      optional: true,
      type: "string"
    },
    marginBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    marginLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    marginRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    marginTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    maskBorder: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    maskPosition: {
      optional: true,
      type: "string"
    },
    maskSize: {
      optional: true,
      type: "string"
    },
    maxHeight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    maxWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    objectPosition: {
      optional: true,
      type: "string"
    },
    offset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    offsetAnchor: {
      optional: true,
      type: "string"
    },
    offsetDistance: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    offsetPath: {
      optional: true,
      type: "string"
    },
    offsetPosition: {
      optional: true,
      type: "string"
    },
    offsetRotate: {
      optional: true,
      type: _MEASUREMENT,
      units: ru
    },
    opacity: {
      optional: true,
      type: "number",
      min: 0,
      max: 1
    },
    order: {
      optional: true,
      type: "number",
      integer: true
    },
    outline: {
      optional: true,
      type: "string"
    },
    outlineColor: {
      optional: true,
      type: _COLOR
    },
    outlineOffset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineRadiusBottomleft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineRadiusBottomright: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineRadiusTopleft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineRadiusTopright: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    padding: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    paddingBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    paddingLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    paddingRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    paddingTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    perspective: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    perspectiveOrigin: {
      optional: true,
      type: "string"
    },
    right: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    rotate: {
      optional: true,
      type: _MEASUREMENT,
      units: ru
    },
    rowGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scale: {
      optional: true,
      type: "number",
      min: 0
    },
    scrollbarColor: {
      optional: true,
      type: _COLOR
    },
    scrollMargin: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginBlock: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginBlockEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginBlockStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginInline: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginInlineEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginInlineStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPadding: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingBlock: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingBlockEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingBlockStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingInline: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingInlineEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingInlineStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollSnapCoordinate: {
      optional: true,
      type: "string"
    },
    scrollSnapDestination: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    shapeImageThreshold: {
      optional: true,
      type: "string"
    },
    shapeMargin: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    shapeOutside: {
      optional: true,
      type: "string"
    },
    tabSize: {
      optional: true,
      type: "string"
    },
    textDecoration: {
      optional: true,
      type: "string"
    },
    textDecorationColor: {
      optional: true,
      type: _COLOR
    },
    textDecorationThickness: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    textEmphasis: {
      optional: true,
      type: "string"
    },
    textEmphasisColor: {
      optional: true,
      type: _COLOR
    },
    textFillColor: {
      optional: true,
      type: _COLOR
    },
    textIndent: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    textShadow: {
      optional: true,
      type: "string"
    },
    textStroke: {
      optional: true,
      type: "string"
    },
    textStrokeColor: {
      optional: true,
      type: _COLOR
    },
    textUnderlineOffset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    top: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    transform: {
      optional: true,
      type: "object",
      props: {
        translateX: {
          type: _MEASUREMENT,
          units: nu,
          optional: true
        },
        translateY: {
          type: _MEASUREMENT,
          units: nu,
          optional: true
        },
        translateZ: {
          type: _MEASUREMENT,
          units: nu,
          optional: true
        },
        rotate: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        rotateX: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        rotateY: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        rotateZ: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        scale: {
          type: "number",
          min: 0,
          optional: true
        },
        scaleX: {
          type: "number",
          min: 0,
          optional: true
        },
        scaleY: {
          type: "number",
          min: 0,
          optional: true
        },
        scaleZ: {
          type: "number",
          min: 0,
          optional: true
        },
        skewX: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        skewY: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        perspective: {
          type: _MEASUREMENT,
          units: nu,
          optional: true
        }
      }
    },
    transformOrigin: {
      optional: true,
      type: "string"
    },
    verticalAlign: {
      optional: true,
      type: "string"
    },
    visibility: {
      optional: true,
      type: "string"
    },
    width: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    wordSpacing: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    zIndex: {
      optional: true,
      type: "number",
      integer: true
    },
    zoom: {
      optional: true,
      type: _MEASUREMENT,
      units: ["%"],
      min: 0
    }
  },
  transformOrigin: {
    type: "string"
  },
  verticalAlign: {
    type: "string"
  },
  visibility: {
    type: "string"
  },
  width: {
    type: _MEASUREMENT,
    units: nu
  },
  wordSpacing: {
    type: _MEASUREMENT,
    units: nu
  },
  zIndex: {
    type: "number",
    integer: true
  },
  zoom: {
    type: _MEASUREMENT,
    units: ["%"],
    min: 0
  }
};
var index = {
  npm_name: "@kissmybutton/motorcortex-anime",
  incidents: [{
    exportable: Anime,
    name: "Anime",
    attributesValidationRules: {
      animatedAttrs: animatedAttrs
    }
  }, {
    exportable: MotionPath,
    name: "MotionPath",
    attributesValidationRules: {
      animatedAttrs: {
        type: "object",
        props: {
          positionOn: {
            type: "object",
            props: {
              pathElement: {
                type: "string"
              }
            }
          }
        }
      }
    }
  }],
  compositeAttributes: compositeAttributes
};

var Anime$1 = motorcortex.loadPlugin(index);

var Intro = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(Intro, _MotorCortex$HTMLClip);

  var _super = _createSuper(Intro);

  function Intro() {
    _classCallCheck(this, Intro);

    return _super.apply(this, arguments);
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
      var titleanime = new Anime$1.Anime({
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
      var bg = new Anime$1.Anime({
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
      var subtextRight = new Anime$1.Anime({
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
      var subholderRight = new Anime$1.Anime({
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
      var subtitleRight = new Anime$1.Anime({
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
      var datespan = new Anime$1.Anime({
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
      var dateHolderWidth = new Anime$1.Anime({
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
      var scaleFirstSlide = new Anime$1.Anime({
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
      var description = new Anime$1.Anime({
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
      var descriptiontext = new Anime$1.Anime({
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
      var bgQut = new Anime$1.Anime({
        animatedAttrs: {
          transform: {
            translateX: "100%"
          }
        },
        initialValues: {
          transform: {
            translateX: "0%"
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
}(motorcortex.HTMLClip);

var Intro_1 = Intro;

var Anime$2 = motorcortex.loadPlugin(index);

var Transition = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(Transition, _MotorCortex$HTMLClip);

  var _super = _createSuper(Transition);

  function Transition() {
    _classCallCheck(this, Transition);

    return _super.apply(this, arguments);
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
      var transitionText = new Anime$2.Anime({
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
      var transitionContainer = new Anime$2.Anime({
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
}(motorcortex.HTMLClip);

var Transition_1 = Transition;

var Anime$3 = motorcortex.loadPlugin(index);

var SlideDateOne = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(SlideDateOne, _MotorCortex$HTMLClip);

  var _super = _createSuper(SlideDateOne);

  function SlideDateOne() {
    _classCallCheck(this, SlideDateOne);

    return _super.apply(this, arguments);
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
      var array = this.attrs.title[2].split("");
      var html3;
      var containerParams = {
        width: "100%",
        height: "100%"
      };

      for (var i = 0; i < array.length; i++) {
        var html = "<span class='letter letter".concat(i + 1, "'>").concat(array[i], "</span>");
        html3 = html3 + html;
      }

      var word = new motorcortex.HTMLClip({
        css: this.css,
        html: " <div class=\"conttitle\" >".concat(html3.split("undefined")[1], " </div>"),
        selector: ".word",
        containerParams: containerParams
      });
      this.addIncident(word, 0);

      for (var _i = 0; _i < array.length; _i++) {
        var textAnimation = new Anime$3.Anime({
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

      var bgMove = new Anime$3.Anime({
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
      var secondSlideTitleOne = new Anime$3.Anime({
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
      var secondSlideTitleTwo = new Anime$3.Anime({
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
      var wordBg = new Anime$3.Anime({
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
      var shortDescription = new Anime$3.Anime({
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
      var bgscaledown = new Anime$3.Anime({
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
      var bgscaledownMove = new Anime$3.Anime({
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
      var bgsecondscaledownMove = new Anime$3.Anime({
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
      var secondBgDate = new Anime$3.Anime({
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
      var moveSecond = new Anime$3.Anime({
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
      var moveSecondS = new Anime$3.Anime({
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
      return "\n    <div class=\"bg \">\n    <div class=\"second-slide\">\n      <div class=\"second-slide-titleOne\">".concat(this.attrs.title[0], "</div>\n      <div class=\"second-slide-titleTwo\">").concat(this.attrs.title[1], "</div>\n      <div class=\"word-bg\">\n        <div class=\"word\"></div>\n      </div>\n      <div class=\"short-description\">\n        <p>\n         ").concat(this.attrs.description, "\n        </p>\n      </div>\n    </div>\n    </div>\n\n    <div class=\"bg-second \">\n      <div class=\"bg-second-slide\">\n          <div class=\"second-date-container\">\n          <div class=\"second-date\"><span> ").concat(this.attrs.day || "", " ").concat(this.attrs.dayNumber || "", " </span>").concat(this.attrs.month || "", " ").concat(this.attrs.year || "", "</div>\n          </div>\n      </div>\n    </div>\n    \n\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .bg,.bg-second {\n      width: 1920px;\n      height: 1080px;\n      background-image: url(".concat(this.attrs.bgUrl, ");\n      background-size: 1920px;\n      background-position: center;\n      transform: scale(1);\n      display: flex;\n      position: absolute;\n      align-items: center;\n      flex-wrap: wrap;\n      flex: 1 0 auto;\n      left: -100%\n    }\n    .bg:after,.bg-second:after {\n      content: \"\";\n      display: block;\n      background: linear-gradient(").concat(this.attrs.overlayColor, ");\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      z-index: -1;\n    }\n    .bg-second{\n      left:100%;\n      background-image: url(").concat(this.attrs.bgUrl2, ");\n    }\n\n    .short-description{\n      font-size: 20px;\n      color: #fff;\n      position: relative;\n      white-space: normal;\n      text-align: left;\n      text-transform: uppercase;\n      font-family: 'Roboto Mono', monospace;\n      width: 720px;\n      left: -50%;\n      }\n\n      .word-bg{\n        background-color:").concat(this.attrs.mainColor, ";\n        width: 720px;\n        position: relative;\n        left: -50%\n      }\n\n      .word{\n        overflow: hidden;\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 720px\n      }\n\n      .second-slide-titleTwo,.second-slide-titleOne{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.titleone.length, 360), "px;\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n        position: relative;\n        left : -50%;\n      }\n\n      .second-slide-titleTwo{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.subtitle.length, 720), "px;\n      }\n\n      .second-slide-titleOne{\n        color :").concat(this.attrs.mainColor, "\n      }\n\n      .second-slide{\n        position : absolute;\n        left : 0%;\n        display: flex;\n        align-content: center;\n        justify-content: center;\n        flex-direction: column;\n        margin-left: 10%;\n      }\n      .letter{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.str.length, 720), "px;\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n        position: relative;\n        position: relative;\n        text-align: center;\n        top : 300px;\n        width: 100%;\n        \n      }\n      .second-date-container{\n        border-left: 100px solid ").concat(this.attrs.mainColor, ";\n        overflow: hidden;\n        width: 200%;\n        \n      }\n\n      .second-date{\n        font-size: 100px;\n        color: #fff;\n        position: relative;\n        white-space: nowrap;\n        text-align: left;\n        text-transform: uppercase;\n        font-family: 'Roboto Mono', monospace;\n        width: 720px;\n        left:-100%;\n      }\n    \n      \n      .second-date span{\n        color: ").concat(this.attrs.mainColor, ";\n      }\n\n  ");
    }
  }]);

  return SlideDateOne;
}(motorcortex.HTMLClip);

var SlideDateOne_1 = SlideDateOne;

var Anime$4 = motorcortex.loadPlugin(index);

var Scrolslide = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(Scrolslide, _MotorCortex$HTMLClip);

  var _super = _createSuper(Scrolslide);

  function Scrolslide() {
    _classCallCheck(this, Scrolslide);

    return _super.apply(this, arguments);
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
      var moveThird = new Anime$4.Anime({
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
      var thirdScaleUp = new Anime$4.Anime({
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
        duration: 1500 * this.attrs.speed,
        selector: ".third-holder",
        easing: "easeOutQuad"
      });
      var moveThirdIner = new Anime$4.Anime({
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
      var movePresenter = new Anime$4.Anime({
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
}(motorcortex.HTMLClip);

var Scrolslide_1 = Scrolslide;

var Anime$5 = motorcortex.loadPlugin(index);

var LtRslide = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(LtRslide, _MotorCortex$HTMLClip);

  var _super = _createSuper(LtRslide);

  function LtRslide() {
    _classCallCheck(this, LtRslide);

    return _super.apply(this, arguments);
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
      var personConMove = new Anime$5.Anime({
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
      var quarterLeft = new Anime$5.Anime({
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
      var bg = new Anime$5.Anime({
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
      var bgOut = new Anime$5.Anime({
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
}(motorcortex.HTMLClip);

var LtRslide_1 = LtRslide;

var Anime$6 = motorcortex.loadPlugin(index);

var SlideDateTwo = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(SlideDateTwo, _MotorCortex$HTMLClip);

  var _super = _createSuper(SlideDateTwo);

  function SlideDateTwo() {
    _classCallCheck(this, SlideDateTwo);

    return _super.apply(this, arguments);
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
      var bgMove = new Anime$6.Anime({
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
      var secondSlide = new Anime$6.Anime({
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
      var bigTitle = new Anime$6.Anime({
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
      var bgscaledown = new Anime$6.Anime({
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
      var bgscaledownMove = new Anime$6.Anime({
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
      var bgsecondscaledownMove = new Anime$6.Anime({
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
      var secondBgDate = new Anime$6.Anime({
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
      var moveSecond = new Anime$6.Anime({
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
      var movePresenterSlide = new Anime$6.Anime({
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
      var movePresenterSlideLeft = new Anime$6.Anime({
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
      var moveBig = new Anime$6.Anime({
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
      var moveBigOut = new Anime$6.Anime({
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
      return "\n    <div class=\"bg\">\n    <div class=\"bg-deferi-day-slide\">\n      <div class=\"big-title\">".concat(this.attrs.bigTitle, "</div>\n      <div class=\"test-mask \">\n        <div class=\"defter-date-container\">\n          <div class=\"defter-date\"><span> ").concat(this.attrs.day || "", " ").concat(this.attrs.dayNumber, " </span>").concat(this.attrs.month || "", " ").concat(this.attrs.year || "", "</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n    <div class=\"bg-second bg-small\">\n      <div class=\"bg-second-slide\">\n        <div class=\"quarter-first-presenter-slide\">\n        <div class=\"quarter-left\">\n          <div class=\"quarter-presenter-container\">\n            <div class=\"quarter-presenter presenter\">").concat(this.attrs.title, "</div>\n          </div>\n          <div class=\"name-container\">").concat(this.attrs.name, "</div>\n          <div class=\"position-container\">").concat(this.attrs.position, "</div>\n        </div>\n      </div>\n      </div>\n    </div>\n    <div class=\"bg-second bg-big \">\n      <div class=\"bg-second-slide\">\n        <div class=\"quarter-first-presenter-slide\">\n        <div class=\"quarter-left\">\n          <div class=\"quarter-presenter-container\">\n            <div class=\"quarter-presenter presenter\">").concat(this.attrs.title, "</div>\n          </div>\n          <div class=\"name-container\">").concat(this.attrs.name, "</div>\n          <div class=\"position-container\">").concat(this.attrs.position, "</div>\n        </div>\n      </div>\n      </div>\n    </div>\n    \n\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .bg,.bg-second {\n      width: 1920px;\n      height: 1080px;\n      background-image: url(".concat(this.attrs.bgUrl, ");\n      background-size: 1920px;\n      background-position: center;\n      transform: scale(1);\n      display: flex;\n      position: absolute;\n      align-items: center;\n      flex-wrap: wrap;\n      flex: 1 0 auto;\n      left: -100%\n    }\n    .bg:after,.bg-second:after {\n      content: \"\";\n      display: block;\n      background: linear-gradient(").concat(this.attrs.overlayColor, ");\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      z-index: -1;\n    }\n    .bg-second{\n      left:100%;\n      background-image: url(").concat(this.attrs.bgUrl2, ")\n    }\n    .bg-big{\n      left: 100%\n    }\n\n    .bg-second-slide,.bg-third-slide,.bg-quarter-slide,.bg-deferi-day-slide{\n      height: 1080px;\n      width: 1920px;\n      display: flex;\n      align-items: center;\n      overflow: hidden;\n    }\n    .bg-deferi-day-slide{\n      overflow: hidden;\n    }\n\n    .bg-second-slide{\n      justify-content: center;\n    }\n\n    .presenter,.big-title{\n      font-weight: 700;\n      font-family: 'Roboto Mono', monospace;\n      text-transform: uppercase;\n      color: ").concat(this.attrs.mainColor, ";\n    }\n  \n    .big-title{\n      font-size: 1700px;\n      position: relative;\n    }\n\n    .test-mask{\n      position: absolute;\n      left: 0;\n      height: 132.5px;\n      background-size: 1920px;\n      position: absolute;\n      left: 0\n    }\n  \n  .test-mask{\n    \n    height: 132.5px;\n    width: 50%;\n    background-image: url(").concat(this.attrs.bgUrl, ");\n    background-size: 1920px;\n    background-position: center;\n    background-position-x: center;\n    transform: scale(1);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    overflow: hidden;\n    left: 25%;\n    background-position-x: center;  \n  }\n  .test-mask:after{ \n    content: \"\";\n    display: block;\n    background: #4e070799;\n    width: 1920px;\n    height: 1080px;\n    position: absolute;\n    top: -458px;\n    /* bottom: 0; */\n    /* right: 0; */\n    left: 0;\n    z-index: -2;\n    background: linear-gradient(").concat(this.attrs.overlayColor, ");\n    top: -345%;\n  }\n  .defter-date-container{\n    position: absolute;\n    font-size: 60px;\n    color: #fff;\n    white-space: nowrap;\n    text-transform: uppercase;\n    font-family: 'Roboto Mono', monospace;\n    background:").concat(this.attrs.dateOverlay, ";   \n    padding: 2% 6%;\n    background-blend-mode: multiply;\n    background-image: url(").concat(this.attrs.bgUrl, ");\n    background-size: 1920px;\n    background-position: center;\n    transform: scale(1);\n\n  }\n.quarter-presenter-container{\n  overflow: hidden;\n}\n\n\n\n  .quarter-first-presenter-slide{\n    margin-bottom: 15%;\n    border-top: 15px solid ").concat(this.attrs.mainColor, ";\n    position: relative;\n    top: 90%;\n    overflow: hidden;\n    \n  }\n\n  .quarter-left{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position : relative;\n    top: 90%;\n  \n  }\n  .name-container,.position-container{\n    font-weight: 700;\n    font-family: 'Roboto Mono', monospace;\n    text-transform: uppercase;\n    color: #fff;\n  }\n\n  .name-container{\n    font-size: ").concat(this.dinamicFontSize(this.attrs.name.length, 360), "px;\n  }\n  .position-container{\n    font-size: ").concat(this.dinamicFontSize(this.attrs.position.length, 360), "px;\n  }\n  .bg-quarter-slide{\n    height: 1080px;\n    width: 1920px;\n    display: flex;\n    align-items: center;\n  }\n\n\n  .bg-quarter-slide{\n    align-items: flex-end;\n  }\n\n  .quarter-presenter{\n    font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 720), "px;\n  }\n\n\n  ");
    }
  }]);

  return SlideDateTwo;
}(motorcortex.HTMLClip);

var SlideDateTwo_1 = SlideDateTwo;

var Anime$7 = motorcortex.loadPlugin(index);

var BtTslide = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(BtTslide, _MotorCortex$HTMLClip);

  var _super = _createSuper(BtTslide);

  function BtTslide() {
    _classCallCheck(this, BtTslide);

    return _super.apply(this, arguments);
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
      var personConMove = new Anime$7.Anime({
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
      var quarterLeft = new Anime$7.Anime({
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
      var bg = new Anime$7.Anime({
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
      var bgOut = new Anime$7.Anime({
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
}(motorcortex.HTMLClip);

var BtTslide_1 = BtTslide;

var Anime$8 = motorcortex.loadPlugin(index);

var BtTslideDate = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(BtTslideDate, _MotorCortex$HTMLClip);

  var _super = _createSuper(BtTslideDate);

  function BtTslideDate() {
    _classCallCheck(this, BtTslideDate);

    return _super.apply(this, arguments);
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
      var personConMove = new Anime$8.Anime({
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
      var quarterLeft = new Anime$8.Anime({
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
      var bg = new Anime$8.Anime({
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
      var bgscaledown = new Anime$8.Anime({
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
      var bgscaledownMove = new Anime$8.Anime({
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
      var bgsecondscaledownMove = new Anime$8.Anime({
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
      var bgscaleup = new Anime$8.Anime({
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
      var bgscaledownMoveOut = new Anime$8.Anime({
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
      var bgsecondscaledownMoveOut = new Anime$8.Anime({
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
      var bgMoveOut = new Anime$8.Anime({
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
      return "\n   <div class=\"bg\">\n    <div class=\"bg-quarter-slide\">\n      <div class=\"quarter-first-presenter-slide\">\n        <div class=\"quarter-left\">\n          <div class=\"quarter-presenter-container\">\n            <div class=\"quarter-presenter presenter\">".concat(this.attrs.title, "</div>\n          </div>\n          <div class=\"name-container\">").concat(this.attrs.name, "</div>\n          <div class=\"position-container\">").concat(this.attrs.position, "</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"bg-next\">\n  <div class=\"bg-quarter-slide\">\n    <div class=\"test-mask\">\n      <div class=\"defter-date-container\">\n        <div class=\"defter-date\"><span> ").concat(this.attrs.day || "", " ").concat(this.attrs.dayNumber || "", " </span>").concat(this.attrs.month || "", " ").concat(this.attrs.year || "", "</div>\n      </div>\n    </div>\n  </div>\n</div>\n\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .bg {\n      width: 100%;\n      height: 100%;\n      background-image: url(".concat(this.attrs.bgUrl, ");\n      background-size: 1920px;\n      background-position: center;\n      transform: scale(1);\n      display: flex;\n      position: relative;\n      align-items: center;\n      flex-wrap: wrap;\n      flex: 1 0 auto;\n      top : 100%; \n    }\n\n\n    .bg:after,.bg-next {\n      content: \"\";\n      display: block;\n      background: linear-gradient(").concat(this.attrs.overlayColor, ");\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      z-index: -1;\n    }\n    .bg-next {\n      width: 100%;\n      height: 100%;\n      background-image: url(").concat(this.attrs.bgUrl2, ");\n      background-size: 1920px;\n      background-position: center;\n      transform: scale(1);\n      display: flex;\n      position: relative;\n      align-items: center;\n      flex-wrap: wrap;\n      flex: 1 0 auto;\n      top : -100%;\n      left : -100%\n     \n    }\n    .defter-date-container{\n      position: absolute;\n      font-size: 60px;\n      color:#fff;\n      white-space: nowrap;\n      text-transform: uppercase;\n      font-family: 'Roboto Mono', monospace;\n      background: ").concat(this.attrs.dateOverlay, ";\n      padding: 2% 6%;\n      background-blend-mode: multiply;\n      background-image: url(").concat(this.attrs.bgUrl2, ");\n      background-size: 1920px;\n      background-position: center;\n      transform: scale(1);\n    }\n\n    .defter-date span{\n      color: ").concat(this.attrs.mainColor, ";\n    }\n\n\n    .third-first-presenter-slide,.quarter-first-presenter-slide{\n      position : relative;\n    }\n  \n    .quarter-first-presenter-slide{\n      margin-bottom: 15%;\n      border-top: 15px solid ").concat(this.attrs.mainColor, ";\n      align-items: center;\n      justify-content: center;\n      \n    }\n\n    .quarter-left{\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      position : relative;\n      top: 90%;\n      \n    }\n    .name-container,.position-container{\n      font-weight: 700;\n      font-family: 'Roboto Mono', monospace;\n      text-transform: uppercase;\n      color: #fff;\n    }\n  \n    .name-container{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.name.length, 360), "px;\n    }\n    .position-container{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.position.length, 360), "px;\n    }\n    .bg-quarter-slide{\n      height: 1080px;\n      width: 1920px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .quarter-presenter{\n      font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 720), "px;\n    }\n    .presenter,.big-title{\n      font-weight: 700;\n      font-family: 'Roboto Mono', monospace;\n      text-transform: uppercase;\n      color: ").concat(this.attrs.mainColor, ";\n    }\n\n    .test-mask{\n      position: absolute;\n      left: 0;\n      height: 132.5px;\n      background-size: 1920px;\n      position: absolute;\n      left: 0;\n      display: flex;\n      justify-content: center;\n      align-content: center;\n      width: 100%;\n    }\n\n\n  ");
    }
  }]);

  return BtTslideDate;
}(motorcortex.HTMLClip);

var BtTslideDate_1 = BtTslideDate;

var Anime$9 = motorcortex.loadPlugin(index);

var LtRslideTop = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(LtRslideTop, _MotorCortex$HTMLClip);

  var _super = _createSuper(LtRslideTop);

  function LtRslideTop() {
    _classCallCheck(this, LtRslideTop);

    return _super.apply(this, arguments);
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
      var personConMove = new Anime$9.Anime({
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
      var quarterLeft = new Anime$9.Anime({
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
      var bg = new Anime$9.Anime({
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
      var bgOut = new Anime$9.Anime({
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
}(motorcortex.HTMLClip);

var LtRslideTop_1 = LtRslideTop;

var Anime$a = motorcortex.loadPlugin(index);

var RtLslide = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(RtLslide, _MotorCortex$HTMLClip);

  var _super = _createSuper(RtLslide);

  function RtLslide() {
    _classCallCheck(this, RtLslide);

    return _super.apply(this, arguments);
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
      var personConMove = new Anime$a.Anime({
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
      var quarterLeft = new Anime$a.Anime({
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
      var bg = new Anime$a.Anime({
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
      var bgOut = new Anime$a.Anime({
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
}(motorcortex.HTMLClip);

var RtLslide_1 = RtLslide;

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

function _getPrototypeOf$2(o) {
  _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$2(o);
}

function _setPrototypeOf$2(o, p) {
  _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$2(o, p);
}

function _isNativeReflectConstruct$2() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized$2(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$2(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized$2(self);
}

function _createSuper$2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$2();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf$2(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$2(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn$2(this, result);
  };
}

var VideoClip = /*#__PURE__*/function (_MC$BrowserClip) {
  _inherits$2(VideoClip, _MC$BrowserClip);

  var _super = _createSuper$2(VideoClip);

  function VideoClip() {
    _classCallCheck$2(this, VideoClip);

    return _super.apply(this, arguments);
  }

  _createClass$2(VideoClip, [{
    key: "onAfterRender",
    value: function onAfterRender() {
      var _this = this;

      var video = this.context.getElements("video")[0];
      video.muted = true;
      var canvas = this.context.getElements("canvas")[0];
      var ctx = canvas.getContext("2d");
      video.addEventListener("loadedmetadata", function () {
        var canvasWidth = _this.attrs.width || 640;
        var canvasHeight = _this.attrs.height || 360;
        canvas.style.transform = "scale(".concat(canvasWidth / video.videoWidth, ", ").concat(canvasHeight / video.videoHeight, ")"); // canvas.style['transform-origin'] = "top left";

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

      return "\n        <div>\n            <video id=\"video\" style=\"width:".concat(this.attrs.width || 640, "px;height:").concat(this.attrs.height || 360, "px;\" preload=\"auto\">\n                ").concat(this.attrs.sources.map(function (item
      /*, i*/
      ) {
        return "\n                    <source src=\"".concat(item, "#t=").concat(_this2.attrs.startFrom || 0, "\"></source>\n                ");
      }).join(""), "\n            </video>\n            <canvas id=\"canvas\"></canvas>\n        </div>\n        ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n            #video{\n                display:none;\n            }\n        ";
    }
  }]);

  return VideoClip;
}(motorcortex.BrowserClip);

var VideoClip_1 = VideoClip;

var VideoPlay = /*#__PURE__*/function (_MC$MediaPlayback) {
  _inherits$2(VideoPlay, _MC$MediaPlayback);

  var _super = _createSuper$2(VideoPlay);

  function VideoPlay() {
    _classCallCheck$2(this, VideoPlay);

    return _super.apply(this, arguments);
  }

  _createClass$2(VideoPlay, [{
    key: "play",
    value: function play()
    /*millisecond*/
    {
      var _this = this;

      var video = this.element.entity.video;
      var ctx = this.element.entity.ctx; // const playPromise = video.play();

      video.play();

      if (this.hasSetWaitingListener !== true) {
        video.addEventListener("waiting", this._waitingHandler.bind(this));
        this.hasSetWaitingListener = true;
      }

      if (this.hasSetCanplayListener !== true) {
        video.addEventListener("canplay", this._canplayHandler.bind(this));
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
      // console.log("waiting");
      // console.log("and blocking");
      this.setBlock("Video loading");
    }
  }, {
    key: "_canplayHandler",
    value: function _canplayHandler() {
      // console.log("unblocking");
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
}(motorcortex.MediaPlayback);

var VideoPlay_1 = VideoPlay;
var compositeAttributes$1 = {
  filter: ["blur", "brightness", "contrast", "drop-shadow", "grayscale", "hue-rotate", "invert", "opacity", "saturate", "sepia"]
};
var effects = compositeAttributes$1.filter;

var VideoEffect = /*#__PURE__*/function (_MotorCortex$Effect) {
  _inherits$2(VideoEffect, _MotorCortex$Effect);

  var _super = _createSuper$2(VideoEffect);

  function VideoEffect() {
    _classCallCheck$2(this, VideoEffect);

    return _super.apply(this, arguments);
  }

  _createClass$2(VideoEffect, [{
    key: "getScratchValue",
    value: function getScratchValue() {
      return {
        blur: 0,
        brightness: 1,
        contrast: 1,
        grayscale: 0,
        "hue-rotate": 0,
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
    value: function onProgress(f
    /*, m*/
    ) {
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
        blur: "px",
        brightness: "",
        contrast: "",
        grayscale: "",
        "hue-rotate": "deg",
        invert: "",
        opacity: "",
        saturate: "",
        sepia: ""
      };
    }
  }]);

  return VideoEffect;
}(motorcortex.Effect);

var Effect = VideoEffect;
var src = {
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
  compositeAttributes: compositeAttributes$1,
  Clip: {
    exportable: VideoClip_1,
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
      }
    }
  },
  capabilities: {
    speed: false,
    preview: false
  }
};

var Anime$b = motorcortex.loadPlugin(index);
var VideoPlugin = motorcortex.loadPlugin(src);

var SlideDateOneVid = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(SlideDateOneVid, _MotorCortex$HTMLClip);

  var _super = _createSuper(SlideDateOneVid);

  function SlideDateOneVid() {
    _classCallCheck(this, SlideDateOneVid);

    return _super.apply(this, arguments);
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
      var array = this.attrs.title[2].split("");
      var html3;
      var containerParams = {
        width: "100%",
        height: "100%"
      };

      for (var i = 0; i < array.length; i++) {
        var html = "<span class='letter letter".concat(i + 1, "'>").concat(array[i], "</span>");
        html3 = html3 + html;
      }

      var word = new motorcortex.HTMLClip({
        css: this.css,
        html: " <div class=\"conttitle\" >".concat(html3.split("undefined")[1], " </div>"),
        selector: ".word",
        containerParams: containerParams
      });
      this.addIncident(word, 0);

      for (var _i = 0; _i < array.length; _i++) {
        var textAnimation = new Anime$b.Anime({
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

      var bgMove = new Anime$b.Anime({
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
      var secondSlideTitleOne = new Anime$b.Anime({
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
      var secondSlideTitleTwo = new Anime$b.Anime({
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
      var wordBg = new Anime$b.Anime({
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
      var shortDescription = new Anime$b.Anime({
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
      var bgscaledown = new Anime$b.Anime({
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
      var bgscaledownMove = new Anime$b.Anime({
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
      var bgsecondscaledownMove = new Anime$b.Anime({
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
      var secondBgDate = new Anime$b.Anime({
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

      var moveSecondS = new Anime$b.Anime({
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
      return "\n    <div class=\"parent\">\n    <div class=\"bg \">\n    <div class =\"vid\"></div>\n    <div class=\"second-slide\">\n      <div class=\"second-slide-titleOne\">".concat(this.attrs.title[0], "</div>\n      <div class=\"second-slide-titleTwo\">").concat(this.attrs.title[1], "</div>\n      <div class=\"second-slide-titleTwo\">").concat(this.attrs.title[2], "</div>\n      <div class=\"word-bg\">\n        <div class=\"word\"></div>\n      </div>\n      <div class=\"short-description\">\n        <p>\n         ").concat(this.attrs.description, "\n        </p>\n      </div>\n    </div>\n    </div>\n\n    <div class=\"bg-second \">\n      <div class=\"bg-second-slide\">\n          <div class=\"second-date-container\">\n              <div class=\"second-date\"><span> ").concat(this.attrs.day || "", " ").concat(this.attrs.dayNumber || "", " </span>").concat(this.attrs.month || "", " ").concat(this.attrs.year || "", "</div>\n          </div>\n      </div>\n    </div>\n    </div>\n\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .bg,.bg-second {\n      width: 1920px;\n      height: 1080px;\n      background-image: url(".concat(this.attrs.bgUrl, ");\n      background-size: 1920px;\n      background-position: center;\n      transform: scale(1);\n      display: flex;\n      position: absolute;\n      align-items: center;\n      flex-wrap: wrap;\n      flex: 1 0 auto;\n      left: -100%\n    }\n    .parent{\n      position:relative;\n      width: 1920px;\n      height: 1080px;\n      left:0%;\n    }\n    .bg:after,.bg-second:after {\n      content: \"\";\n      display: block;\n      background: linear-gradient(").concat(this.attrs.overlayColor, ");\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      z-index: -1;\n    }\n    .bg-second{\n      left:100%;\n      background-image: url(").concat(this.attrs.bgUrl2, ");\n    }\n    .vid{\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 1920px;\n      height: 1080px;\n    }\n\n    .short-description{\n      font-size: 20px;\n      color: #fff;\n      position: relative;\n      white-space: normal;\n      text-align: left;\n      text-transform: uppercase;\n      font-family: 'Roboto Mono', monospace;\n      width: 720px;\n      left: -50%;\n      }\n\n      .word-bg{\n        background-color:").concat(this.attrs.mainColor, ";\n        width: 720px;\n        position: relative;\n        left: -50%\n      }\n\n      .word{\n        overflow: hidden;\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 720px\n      }\n\n      .second-slide-titleTwo,.second-slide-titleOne{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.title[0].length, 360), "px;\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n        position: relative;\n        left : -50%;\n      }\n\n      .second-slide-titleTwo{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.title[1].length, 720), "px;\n      }\n\n      .second-slide-titleOne{\n        color :").concat(this.attrs.mainColor, "\n      }\n\n      .second-slide{\n        position: absolute;\n        left: 10%;\n        display: flex;\n        align-content: center;\n        justify-content: center;\n        flex-direction: column;\n        top: 20%;\n        transform: scale(1);\n      }\n      .letter{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.title[2].length, 720), "px;\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n        position: relative;\n        position: relative;\n        text-align: center;\n        top : 300px;\n        width: 100%;\n        \n      }\n      .second-date-container{\n        border-left: 100px solid ").concat(this.attrs.mainColor, ";\n        overflow: hidden;\n        width: 200%;\n        \n      }\n\n      .second-date{\n        font-size: 100px;\n        color: #fff;\n        position: relative;\n        white-space: nowrap;\n        text-align: left;\n        text-transform: uppercase;\n        font-family: 'Roboto Mono', monospace;\n        width: 720px;\n        left:-100%;\n      }\n    \n      \n      .second-date span{\n        color: ").concat(this.attrs.mainColor, ";\n      }\n\n  ");
    }
  }]);

  return SlideDateOneVid;
}(motorcortex.HTMLClip);

var SlideDateOneVid_1 = SlideDateOneVid;

var _COLOR$1 = "color";
var intro = {
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
    type: _COLOR$1
  },
  description: {
    optional: false,
    type: "string"
  },
  speed: {
    optional: true,
    type: "number",
    min: 0
  },
  overlayColor: {
    optional: true,
    type: "array",
    min: 2,
    items: {
      optional: true,
      type: _COLOR$1
    }
  }
};
var SlideDateOneVid$1 = {
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
      type: _COLOR$1
    }
  },
  mainColor: {
    optional: true,
    type: _COLOR$1
  },
  speed: {
    optional: true,
    type: "number",
    min: 0
  }
};
var SlideDateOne$1 = {
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
      type: _COLOR$1
    }
  },
  mainColor: {
    optional: true,
    type: _COLOR$1
  },
  speed: {
    optional: true,
    type: "number",
    min: 0
  }
};
var prisenter = {
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
      type: _COLOR$1
    }
  },
  mainColor: {
    optional: true,
    type: _COLOR$1
  },
  speed: {
    optional: true,
    type: "number",
    min: 0
  }
};
var SlideDateTwo$1 = {
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
      type: _COLOR$1
    }
  },
  mainColor: {
    optional: true,
    type: _COLOR$1
  },
  dateOverlay: {
    optional: true,
    type: _COLOR$1
  },
  speed: {
    optional: true,
    type: "number",
    min: 0
  }
};
var BtTslideDate$1 = {
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
      type: _COLOR$1
    }
  },
  mainColor: {
    optional: true,
    type: _COLOR$1
  },
  dateOverlay: {
    optional: true,
    type: _COLOR$1
  },
  speed: {
    optional: true,
    type: "number",
    min: 0
  }
};
var transition = {
  title: {
    optional: true,
    type: "string"
  },
  speed: {
    optional: true,
    type: "number",
    min: 0
  }
};

var validation = /*#__PURE__*/Object.freeze({
  __proto__: null,
  intro: intro,
  SlideDateOneVid: SlideDateOneVid$1,
  SlideDateOne: SlideDateOne$1,
  prisenter: prisenter,
  SlideDateTwo: SlideDateTwo$1,
  BtTslideDate: BtTslideDate$1,
  transition: transition
});

var src$1 = {
  npm_name: "@kissmybutton/motorcortex-slides",
  incidents: [{
    exportable: Intro_1,
    name: "Intro",
    attributesValidationRules: validation.intro,
    originalDims: {
      width: "1920px",
      height: "1080px"
    }
  }, {
    exportable: Transition_1,
    name: "Transition",
    attributesValidationRules: validation.transition,
    originalDims: {
      width: "1920px",
      height: "1080px"
    }
  }, {
    exportable: SlideDateOne_1,
    name: "SlideDateOne",
    attributesValidationRules: validation.SlideDateOne,
    originalDims: {
      width: "1920px",
      height: "1080px"
    }
  }, {
    exportable: SlideDateOneVid_1,
    name: "SlideDateOneVid",
    attributesValidationRules: validation.SlideDateOneVid,
    originalDims: {
      width: "1920px",
      height: "1080px"
    }
  }, {
    exportable: SlideDateTwo_1,
    name: "SlideDateTwo",
    attributesValidationRules: validation.SlideDateTwo,
    originalDims: {
      width: "1920px",
      height: "1080px"
    }
  }, {
    exportable: Scrolslide_1,
    name: "Scrolslide",
    attributesValidationRules: validation.prisenter,
    originalDims: {
      width: "1920px",
      height: "1080px"
    }
  }, {
    exportable: LtRslide_1,
    name: "LtRslide",
    attributesValidationRules: validation.prisenter,
    originalDims: {
      width: "1920px",
      height: "1080px"
    }
  }, {
    exportable: BtTslide_1,
    name: "BtTslide",
    attributesValidationRules: validation.prisenter,
    originalDims: {
      width: "1920px",
      height: "1080px"
    }
  }, {
    exportable: BtTslideDate_1,
    name: "BtTslideDate",
    attributesValidationRules: validation.BtTslideDate,
    originalDims: {
      width: "1920px",
      height: "1080px"
    }
  }, {
    exportable: LtRslideTop_1,
    name: "LtRslideTop",
    attributesValidationRules: validation.prisenter,
    originalDims: {
      width: "1920px",
      height: "1080px"
    }
  }, {
    exportable: RtLslide_1,
    name: "RtLslide",
    attributesValidationRules: validation.prisenter,
    originalDims: {
      width: "1920px",
      height: "1080px"
    }
  }]
};
var src_1 = src$1.npm_name;
var src_2 = src$1.incidents;

export default src$1;
export { src_2 as incidents, src_1 as npm_name };
