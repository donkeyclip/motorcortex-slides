import MotorCortex, { CSSEffect, BrowserClip, MediaPlayback, Effect } from '@donkeyclip/motorcortex';

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
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
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
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized$1(self);
}

function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf$1(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$1(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn$1(this, result);
  };
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


var global$x = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$e = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$d = fails$e; // Detect IE8's incomplete defineProperty implementation

var descriptors = !fails$d(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});

var call$9 = Function.prototype.call;
var functionCall = call$9.bind ? call$9.bind(call$9) : function () {
  return call$9.apply(call$9, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable$1 = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable$1.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable$1;

var createPropertyDescriptor$4 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var FunctionPrototype$3 = Function.prototype;
var bind$3 = FunctionPrototype$3.bind;
var call$8 = FunctionPrototype$3.call;
var callBind = bind$3 && bind$3.bind(call$8);
var functionUncurryThis = bind$3 ? function (fn) {
  return fn && callBind(call$8, fn);
} : function (fn) {
  return fn && function () {
    return call$8.apply(fn, arguments);
  };
};

var uncurryThis$j = functionUncurryThis;
var toString$6 = uncurryThis$j({}.toString);
var stringSlice$4 = uncurryThis$j(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice$4(toString$6(it), 8, -1);
};

var global$w = global$x;
var uncurryThis$i = functionUncurryThis;
var fails$c = fails$e;
var classof$7 = classofRaw$1;
var Object$4 = global$w.Object;
var split = uncurryThis$i(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

var indexedObject = fails$c(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$7(it) == 'String' ? split(it, '') : Object$4(it);
} : Object$4;

var global$v = global$x;
var TypeError$b = global$v.TypeError; // `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible

var requireObjectCoercible$4 = function (it) {
  if (it == undefined) throw TypeError$b("Can't call method on " + it);
  return it;
};

var IndexedObject$1 = indexedObject;
var requireObjectCoercible$3 = requireObjectCoercible$4;

var toIndexedObject$6 = function (it) {
  return IndexedObject$1(requireObjectCoercible$3(it));
};

// https://tc39.es/ecma262/#sec-iscallable

var isCallable$e = function (argument) {
  return typeof argument == 'function';
};

var isCallable$d = isCallable$e;

var isObject$9 = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$d(it);
};

var global$u = global$x;
var isCallable$c = isCallable$e;

var aFunction = function (argument) {
  return isCallable$c(argument) ? argument : undefined;
};

var getBuiltIn$6 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$u[namespace]) : global$u[namespace] && global$u[namespace][method];
};

var uncurryThis$h = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$h({}.isPrototypeOf);

var getBuiltIn$5 = getBuiltIn$6;
var engineUserAgent = getBuiltIn$5('navigator', 'userAgent') || '';

var global$t = global$x;
var userAgent = engineUserAgent;
var process = global$t.process;
var Deno = global$t.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version$2;

if (v8) {
  match = v8.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us

  version$2 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
} // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0


if (!version$2 && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version$2 = +match[1];
  }
}

var engineV8Version = version$2;

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION$2 = engineV8Version;
var fails$b = fails$e; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$b(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$3 = nativeSymbol;
var useSymbolAsUid = NATIVE_SYMBOL$3 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

var global$s = global$x;
var getBuiltIn$4 = getBuiltIn$6;
var isCallable$b = isCallable$e;
var isPrototypeOf$2 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var Object$3 = global$s.Object;
var isSymbol$3 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$4('Symbol');
  return isCallable$b($Symbol) && isPrototypeOf$2($Symbol.prototype, Object$3(it));
};

var global$r = global$x;
var String$3 = global$r.String;

var tryToString$2 = function (argument) {
  try {
    return String$3(argument);
  } catch (error) {
    return 'Object';
  }
};

var global$q = global$x;
var isCallable$a = isCallable$e;
var tryToString$1 = tryToString$2;
var TypeError$a = global$q.TypeError; // `Assert: IsCallable(argument) is true`

var aCallable$2 = function (argument) {
  if (isCallable$a(argument)) return argument;
  throw TypeError$a(tryToString$1(argument) + ' is not a function');
};

var aCallable$1 = aCallable$2; // `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod

var getMethod$2 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable$1(func);
};

var global$p = global$x;
var call$7 = functionCall;
var isCallable$9 = isCallable$e;
var isObject$8 = isObject$9;
var TypeError$9 = global$p.TypeError; // `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive

var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$9(fn = input.toString) && !isObject$8(val = call$7(fn, input))) return val;
  if (isCallable$9(fn = input.valueOf) && !isObject$8(val = call$7(fn, input))) return val;
  if (pref !== 'string' && isCallable$9(fn = input.toString) && !isObject$8(val = call$7(fn, input))) return val;
  throw TypeError$9("Can't convert object to primitive value");
};

var shared$5 = {exports: {}};

var global$o = global$x; // eslint-disable-next-line es/no-object-defineproperty -- safe

var defineProperty$4 = Object.defineProperty;

var setGlobal$3 = function (key, value) {
  try {
    defineProperty$4(global$o, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global$o[key] = value;
  }

  return value;
};

var global$n = global$x;
var setGlobal$2 = setGlobal$3;
var SHARED = '__core-js_shared__';
var store$3 = global$n[SHARED] || setGlobal$2(SHARED, {});
var sharedStore = store$3;

var store$2 = sharedStore;
(shared$5.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.19.1',
  mode: 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

var global$m = global$x;
var requireObjectCoercible$2 = requireObjectCoercible$4;
var Object$2 = global$m.Object; // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject

var toObject$4 = function (argument) {
  return Object$2(requireObjectCoercible$2(argument));
};

var uncurryThis$g = functionUncurryThis;
var toObject$3 = toObject$4;
var hasOwnProperty = uncurryThis$g({}.hasOwnProperty); // `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty

var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$3(it), key);
};

var uncurryThis$f = functionUncurryThis;
var id = 0;
var postfix = Math.random();
var toString$5 = uncurryThis$f(1.0.toString);

var uid$3 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$5(++id + postfix, 36);
};

var global$l = global$x;
var shared$4 = shared$5.exports;
var hasOwn$a = hasOwnProperty_1;
var uid$2 = uid$3;
var NATIVE_SYMBOL$2 = nativeSymbol;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var WellKnownSymbolsStore$1 = shared$4('wks');
var Symbol$1 = global$l.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$2;

var wellKnownSymbol$c = function (name) {
  if (!hasOwn$a(WellKnownSymbolsStore$1, name) || !(NATIVE_SYMBOL$2 || typeof WellKnownSymbolsStore$1[name] == 'string')) {
    var description = 'Symbol.' + name;

    if (NATIVE_SYMBOL$2 && hasOwn$a(Symbol$1, name)) {
      WellKnownSymbolsStore$1[name] = Symbol$1[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore$1[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore$1[name] = createWellKnownSymbol(description);
    }
  }

  return WellKnownSymbolsStore$1[name];
};

var global$k = global$x;
var call$6 = functionCall;
var isObject$7 = isObject$9;
var isSymbol$2 = isSymbol$3;
var getMethod$1 = getMethod$2;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$b = wellKnownSymbol$c;
var TypeError$8 = global$k.TypeError;
var TO_PRIMITIVE$1 = wellKnownSymbol$b('toPrimitive'); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive

var toPrimitive$1 = function (input, pref) {
  if (!isObject$7(input) || isSymbol$2(input)) return input;
  var exoticToPrim = getMethod$1(input, TO_PRIMITIVE$1);
  var result;

  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$6(exoticToPrim, input, pref);
    if (!isObject$7(result) || isSymbol$2(result)) return result;
    throw TypeError$8("Can't convert object to primitive value");
  }

  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol$1 = isSymbol$3; // `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey

var toPropertyKey$4 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol$1(key) ? key : key + '';
};

var global$j = global$x;
var isObject$6 = isObject$9;
var document$1 = global$j.document; // typeof document.createElement is 'object' in old IE

var EXISTS$1 = isObject$6(document$1) && isObject$6(document$1.createElement);

var documentCreateElement$1 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$8 = descriptors;
var fails$a = fails$e;
var createElement = documentCreateElement$1; // Thank's IE8 for his funny defineProperty

var ie8DomDefine = !DESCRIPTORS$8 && !fails$a(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

var DESCRIPTORS$7 = descriptors;
var call$5 = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$3 = createPropertyDescriptor$4;
var toIndexedObject$5 = toIndexedObject$6;
var toPropertyKey$3 = toPropertyKey$4;
var hasOwn$9 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

objectGetOwnPropertyDescriptor.f = DESCRIPTORS$7 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$5(O);
  P = toPropertyKey$3(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) {
    /* empty */
  }
  if (hasOwn$9(O, P)) return createPropertyDescriptor$3(!call$5(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var objectDefineProperty = {};

var global$i = global$x;
var isObject$5 = isObject$9;
var String$2 = global$i.String;
var TypeError$7 = global$i.TypeError; // `Assert: Type(argument) is Object`

var anObject$9 = function (argument) {
  if (isObject$5(argument)) return argument;
  throw TypeError$7(String$2(argument) + ' is not an object');
};

var global$h = global$x;
var DESCRIPTORS$6 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var anObject$8 = anObject$9;
var toPropertyKey$2 = toPropertyKey$4;
var TypeError$6 = global$h.TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe

var $defineProperty$1 = Object.defineProperty; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

objectDefineProperty.f = DESCRIPTORS$6 ? $defineProperty$1 : function defineProperty(O, P, Attributes) {
  anObject$8(O);
  P = toPropertyKey$2(P);
  anObject$8(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty$1(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError$6('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$5 = descriptors;
var definePropertyModule$4 = objectDefineProperty;
var createPropertyDescriptor$2 = createPropertyDescriptor$4;
var createNonEnumerableProperty$4 = DESCRIPTORS$5 ? function (object, key, value) {
  return definePropertyModule$4.f(object, key, createPropertyDescriptor$2(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var redefine$3 = {exports: {}};

var uncurryThis$e = functionUncurryThis;
var isCallable$8 = isCallable$e;
var store$1 = sharedStore;
var functionToString$1 = uncurryThis$e(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (!isCallable$8(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString$1(it);
  };
}

var inspectSource$3 = store$1.inspectSource;

var global$g = global$x;
var isCallable$7 = isCallable$e;
var inspectSource$2 = inspectSource$3;
var WeakMap$1 = global$g.WeakMap;
var nativeWeakMap = isCallable$7(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1));

var shared$3 = shared$5.exports;
var uid$1 = uid$3;
var keys = shared$3('keys');

var sharedKey$3 = function (key) {
  return keys[key] || (keys[key] = uid$1(key));
};

var hiddenKeys$5 = {};

var NATIVE_WEAK_MAP = nativeWeakMap;
var global$f = global$x;
var uncurryThis$d = functionUncurryThis;
var isObject$4 = isObject$9;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;
var hasOwn$8 = hasOwnProperty_1;
var shared$2 = sharedStore;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$4 = hiddenKeys$5;
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$5 = global$f.TypeError;
var WeakMap = global$f.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;

    if (!isObject$4(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$5('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP || shared$2.state) {
  var store = shared$2.state || (shared$2.state = new WeakMap());
  var wmget = uncurryThis$d(store.get);
  var wmhas = uncurryThis$d(store.has);
  var wmset = uncurryThis$d(store.set);

  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError$5(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };

  get = function (it) {
    return wmget(store, it) || {};
  };

  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey$2('state');
  hiddenKeys$4[STATE] = true;

  set = function (it, metadata) {
    if (hasOwn$8(it, STATE)) throw new TypeError$5(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$3(it, STATE, metadata);
    return metadata;
  };

  get = function (it) {
    return hasOwn$8(it, STATE) ? it[STATE] : {};
  };

  has = function (it) {
    return hasOwn$8(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var DESCRIPTORS$4 = descriptors;
var hasOwn$7 = hasOwnProperty_1;
var FunctionPrototype$2 = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getDescriptor = DESCRIPTORS$4 && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$7(FunctionPrototype$2, 'name'); // additional protection from minified / mangled / dropped function names

var PROPER = EXISTS && function something() {
  /* empty */
}.name === 'something';

var CONFIGURABLE = EXISTS && (!DESCRIPTORS$4 || DESCRIPTORS$4 && getDescriptor(FunctionPrototype$2, 'name').configurable);
var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var global$e = global$x;
var isCallable$6 = isCallable$e;
var hasOwn$6 = hasOwnProperty_1;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$4;
var setGlobal$1 = setGlobal$3;
var inspectSource$1 = inspectSource$3;
var InternalStateModule$1 = internalState;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var getInternalState$2 = InternalStateModule$1.get;
var enforceInternalState = InternalStateModule$1.enforce;
var TEMPLATE = String(String).split('String');
(redefine$3.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;

  if (isCallable$6(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }

    if (!hasOwn$6(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
      createNonEnumerableProperty$2(value, 'name', name);
    }

    state = enforceInternalState(value);

    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }

  if (O === global$e) {
    if (simple) O[key] = value;else setGlobal$1(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else createNonEnumerableProperty$2(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable$6(this) && getInternalState$2(this).source || inspectSource$1(this);
});

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor = Math.floor; // `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity

var toIntegerOrInfinity$3 = function (argument) {
  var number = +argument; // eslint-disable-next-line no-self-compare -- safe

  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$3;
var max = Math.max;
var min$2 = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

var toAbsoluteIndex$1 = function (index, length) {
  var integer = toIntegerOrInfinity$2(index);
  return integer < 0 ? max(integer + length, 0) : min$2(integer, length);
};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$3;
var min$1 = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

var toLength$2 = function (argument) {
  return argument > 0 ? min$1(toIntegerOrInfinity$1(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$1 = toLength$2; // `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike

var lengthOfArrayLike$3 = function (obj) {
  return toLength$1(obj.length);
};

var toIndexedObject$4 = toIndexedObject$6;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike$2 = lengthOfArrayLike$3; // `Array.prototype.{ indexOf, includes }` methods implementation

var createMethod$2 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$4($this);
    var length = lengthOfArrayLike$2(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$2(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$2(false)
};

var uncurryThis$c = functionUncurryThis;
var hasOwn$5 = hasOwnProperty_1;
var toIndexedObject$3 = toIndexedObject$6;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$3 = hiddenKeys$5;
var push$3 = uncurryThis$c([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$3(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !hasOwn$5(hiddenKeys$3, key) && hasOwn$5(O, key) && push$3(result, key); // Don't enum bug & hidden keys


  while (names.length > i) if (hasOwn$5(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$3(result, key);
  }

  return result;
};

var enumBugKeys$3 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;
var hiddenKeys$2 = enumBugKeys$2.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$2);
};

var objectGetOwnPropertySymbols = {};

objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$3 = getBuiltIn$6;
var uncurryThis$b = functionUncurryThis;
var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$7 = anObject$9;
var concat = uncurryThis$b([].concat); // all object keys, includes non-enumerable and symbols

var ownKeys$1 = getBuiltIn$3('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule$1.f(anObject$7(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$4 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
var definePropertyModule$3 = objectDefineProperty;

var copyConstructorProperties$2 = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$3.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$4(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

var fails$9 = fails$e;
var isCallable$5 = isCallable$e;
var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : isCallable$5(detection) ? fails$9(detection) : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';
var isForced_1 = isForced$1;

var global$d = global$x;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;
var redefine$2 = redefine$3.exports;
var setGlobal = setGlobal$3;
var copyConstructorProperties$1 = copyConstructorProperties$2;
var isForced = isForced_1;
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/

var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global$d;
  } else if (STATIC) {
    target = global$d[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$d[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties$1(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty$1(sourceProperty, 'sham', true);
    } // extend global


    redefine$2(target, key, sourceProperty, options);
  }
};

var classof$6 = classofRaw$1; // `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe

var isArray$3 = Array.isArray || function isArray(argument) {
  return classof$6(argument) == 'Array';
};

var toPropertyKey$1 = toPropertyKey$4;
var definePropertyModule$2 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$4;

var createProperty$1 = function (object, key, value) {
  var propertyKey = toPropertyKey$1(key);
  if (propertyKey in object) definePropertyModule$2.f(object, propertyKey, createPropertyDescriptor$1(0, value));else object[propertyKey] = value;
};

var wellKnownSymbol$a = wellKnownSymbol$c;
var TO_STRING_TAG$2 = wellKnownSymbol$a('toStringTag');
var test = {};
test[TO_STRING_TAG$2] = 'z';
var toStringTagSupport = String(test) === '[object z]';

var global$c = global$x;
var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$4 = isCallable$e;
var classofRaw = classofRaw$1;
var wellKnownSymbol$9 = wellKnownSymbol$c;
var TO_STRING_TAG$1 = wellKnownSymbol$9('toStringTag');
var Object$1 = global$c.Object; // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


var classof$5 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object$1(it), TO_STRING_TAG$1)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && isCallable$4(O.callee) ? 'Arguments' : result;
};

var uncurryThis$a = functionUncurryThis;
var fails$8 = fails$e;
var isCallable$3 = isCallable$e;
var classof$4 = classof$5;
var getBuiltIn$2 = getBuiltIn$6;
var inspectSource = inspectSource$3;

var noop = function () {
  /* empty */
};

var empty = [];
var construct = getBuiltIn$2('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$2 = uncurryThis$a(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function (argument) {
  if (!isCallable$3(argument)) return false;

  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function (argument) {
  if (!isCallable$3(argument)) return false;

  switch (classof$4(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction':
      return false;
    // we can't check .prototype since constructors produced by .bind haven't it
  }

  return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource(argument));
}; // `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor


var isConstructor$2 = !construct || fails$8(function () {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;

var global$b = global$x;
var isArray$2 = isArray$3;
var isConstructor$1 = isConstructor$2;
var isObject$3 = isObject$9;
var wellKnownSymbol$8 = wellKnownSymbol$c;
var SPECIES$3 = wellKnownSymbol$8('species');
var Array$1 = global$b.Array; // a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesConstructor$1 = function (originalArray) {
  var C;

  if (isArray$2(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (isConstructor$1(C) && (C === Array$1 || isArray$2(C.prototype))) C = undefined;else if (isObject$3(C)) {
      C = C[SPECIES$3];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array$1 : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1; // `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesCreate$2 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var fails$7 = fails$e;
var wellKnownSymbol$7 = wellKnownSymbol$c;
var V8_VERSION$1 = engineV8Version;
var SPECIES$2 = wellKnownSymbol$7('species');

var arrayMethodHasSpeciesSupport$1 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION$1 >= 51 || !fails$7(function () {
    var array = [];
    var constructor = array.constructor = {};

    constructor[SPECIES$2] = function () {
      return {
        foo: 1
      };
    };

    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $$3 = _export;
var global$a = global$x;
var fails$6 = fails$e;
var isArray$1 = isArray$3;
var isObject$2 = isObject$9;
var toObject$2 = toObject$4;
var lengthOfArrayLike$1 = lengthOfArrayLike$3;
var createProperty = createProperty$1;
var arraySpeciesCreate$1 = arraySpeciesCreate$2;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$1;
var wellKnownSymbol$6 = wellKnownSymbol$c;
var V8_VERSION = engineV8Version;
var IS_CONCAT_SPREADABLE = wellKnownSymbol$6('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError$4 = global$a.TypeError; // We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679

var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$6(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject$2(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray$1(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species

$$3({
  target: 'Array',
  proto: true,
  forced: FORCED
}, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject$2(this);
    var A = arraySpeciesCreate$1(O, 0);
    var n = 0;
    var i, k, length, len, E;

    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];

      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike$1(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError$4(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError$4(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }

    A.length = n;
    return A;
  }
});

var FunctionPrototype$1 = Function.prototype;
var apply$2 = FunctionPrototype$1.apply;
var bind$2 = FunctionPrototype$1.bind;
var call$4 = FunctionPrototype$1.call; // eslint-disable-next-line es/no-reflect -- safe

var functionApply = typeof Reflect == 'object' && Reflect.apply || (bind$2 ? call$4.bind(apply$2) : function () {
  return call$4.apply(apply$2, arguments);
});

var global$9 = global$x;
var classof$3 = classof$5;
var String$1 = global$9.String;

var toString$4 = function (argument) {
  if (classof$3(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String$1(argument);
};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3; // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe

var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS$3 = descriptors;
var definePropertyModule$1 = objectDefineProperty;
var anObject$6 = anObject$9;
var toIndexedObject$2 = toIndexedObject$6;
var objectKeys$1 = objectKeys$2; // `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe

var objectDefineProperties = DESCRIPTORS$3 ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$6(O);
  var props = toIndexedObject$2(Properties);
  var keys = objectKeys$1(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) definePropertyModule$1.f(O, key = keys[index++], props[key]);

  return O;
};

var getBuiltIn$1 = getBuiltIn$6;
var html$1 = getBuiltIn$1('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */
var anObject$5 = anObject$9;
var defineProperties = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys$1 = hiddenKeys$5;
var html = html$1;
var documentCreateElement = documentCreateElement$1;
var sharedKey$1 = sharedKey$3;
var GT = '>';
var LT = '<';
var PROTOTYPE$1 = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey$1('IE_PROTO');

var EmptyConstructor = function () {
  /* empty */
};

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak

  return temp;
}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
}; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug


var activeXDocument;

var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }

  NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
  : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH

  var length = enumBugKeys.length;

  while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys[length]];

  return NullProtoObject();
};

hiddenKeys$1[IE_PROTO] = true; // `Object.create` method
// https://tc39.es/ecma262/#sec-object.create

var objectCreate = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    EmptyConstructor[PROTOTYPE$1] = anObject$5(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE$1] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = NullProtoObject();

  return Properties === undefined ? result : defineProperties(result, Properties);
};

var objectGetOwnPropertyNamesExternal = {};

var uncurryThis$9 = functionUncurryThis;
var arraySlice$3 = uncurryThis$9([].slice);

/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof$2 = classofRaw$1;
var toIndexedObject$1 = toIndexedObject$6;
var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
var arraySlice$2 = arraySlice$3;
var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames$1(it);
  } catch (error) {
    return arraySlice$2(windowNames);
  }
}; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
  return windowNames && classof$2(it) == 'Window' ? getWindowNames(it) : $getOwnPropertyNames$1(toIndexedObject$1(it));
};

var wellKnownSymbolWrapped = {};

var wellKnownSymbol$5 = wellKnownSymbol$c;
wellKnownSymbolWrapped.f = wellKnownSymbol$5;

var global$8 = global$x;
var path$1 = global$8;

var path = path$1;
var hasOwn$3 = hasOwnProperty_1;
var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
var defineProperty$3 = objectDefineProperty.f;

var defineWellKnownSymbol$1 = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn$3(Symbol, NAME)) defineProperty$3(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule$1.f(NAME)
  });
};

var defineProperty$2 = objectDefineProperty.f;
var hasOwn$2 = hasOwnProperty_1;
var wellKnownSymbol$4 = wellKnownSymbol$c;
var TO_STRING_TAG = wellKnownSymbol$4('toStringTag');

var setToStringTag$1 = function (it, TAG, STATIC) {
  if (it && !hasOwn$2(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty$2(it, TO_STRING_TAG, {
      configurable: true,
      value: TAG
    });
  }
};

var uncurryThis$8 = functionUncurryThis;
var aCallable = aCallable$2;
var bind$1 = uncurryThis$8(uncurryThis$8.bind); // optional / simple context binding

var functionBindContext = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : bind$1 ? bind$1(fn, that) : function
    /* ...args */
  () {
    return fn.apply(that, arguments);
  };
};

var bind = functionBindContext;
var uncurryThis$7 = functionUncurryThis;
var IndexedObject = indexedObject;
var toObject$1 = toObject$4;
var lengthOfArrayLike = lengthOfArrayLike$3;
var arraySpeciesCreate = arraySpeciesCreate$2;
var push$2 = uncurryThis$7([].push); // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation

var createMethod$1 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject$1($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;

    for (; length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);

      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3:
            return true;
          // some

          case 5:
            return value;
          // find

          case 6:
            return index;
          // findIndex

          case 2:
            push$2(target, value);
          // filter
        } else switch (TYPE) {
          case 4:
            return false;
          // every

          case 7:
            push$2(target, value);
          // filterReject
        }
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$1(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod$1(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod$1(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod$1(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod$1(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod$1(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$1(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod$1(7)
};

var $$2 = _export;
var global$7 = global$x;
var getBuiltIn = getBuiltIn$6;
var apply$1 = functionApply;
var call$3 = functionCall;
var uncurryThis$6 = functionUncurryThis;
var DESCRIPTORS$2 = descriptors;
var NATIVE_SYMBOL$1 = nativeSymbol;
var fails$5 = fails$e;
var hasOwn$1 = hasOwnProperty_1;
var isArray = isArray$3;
var isCallable$2 = isCallable$e;
var isObject$1 = isObject$9;
var isPrototypeOf$1 = objectIsPrototypeOf;
var isSymbol = isSymbol$3;
var anObject$4 = anObject$9;
var toObject = toObject$4;
var toIndexedObject = toIndexedObject$6;
var toPropertyKey = toPropertyKey$4;
var $toString = toString$4;
var createPropertyDescriptor = createPropertyDescriptor$4;
var nativeObjectCreate = objectCreate;
var objectKeys = objectKeys$2;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule = objectDefineProperty;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var arraySlice$1 = arraySlice$3;
var redefine$1 = redefine$3.exports;
var shared$1 = shared$5.exports;
var sharedKey = sharedKey$3;
var hiddenKeys = hiddenKeys$5;
var uid = uid$3;
var wellKnownSymbol$3 = wellKnownSymbol$c;
var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
var defineWellKnownSymbol = defineWellKnownSymbol$1;
var setToStringTag = setToStringTag$1;
var InternalStateModule = internalState;
var $forEach = arrayIteration.forEach;
var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol$3('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState$1 = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global$7.Symbol;
var SymbolPrototype$1 = $Symbol && $Symbol[PROTOTYPE];
var TypeError$3 = global$7.TypeError;
var QObject = global$7.QObject;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push$1 = uncurryThis$6([].push);
var AllSymbols = shared$1('symbols');
var ObjectPrototypeSymbols = shared$1('op-symbols');
var StringToSymbolRegistry = shared$1('string-to-symbol-registry');
var SymbolToStringRegistry = shared$1('symbol-to-string-registry');
var WellKnownSymbolsStore = shared$1('wks'); // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

var setSymbolDescriptor = DESCRIPTORS$2 && fails$5(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () {
      return nativeDefineProperty(this, 'a', {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);

  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype$1);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS$2) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject$4(O);
  var key = toPropertyKey(P);
  anObject$4(Attributes);

  if (hasOwn$1(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn$1(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn$1(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, {
        enumerable: createPropertyDescriptor(0, false)
      });
    }

    return setSymbolDescriptor(O, key, Attributes);
  }

  return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject$4(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS$2 || call$3($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call$3(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn$1(AllSymbols, P) && !hasOwn$1(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn$1(this, P) || !hasOwn$1(AllSymbols, P) || hasOwn$1(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn$1(AllSymbols, key) && !hasOwn$1(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);

  if (descriptor && hasOwn$1(AllSymbols, key) && !(hasOwn$1(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }

  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn$1(AllSymbols, key) && !hasOwn$1(hiddenKeys, key)) push$1(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn$1(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$1(ObjectPrototype, key))) {
      push$1(result, AllSymbols[key]);
    }
  });
  return result;
}; // `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor


if (!NATIVE_SYMBOL$1) {
  $Symbol = function Symbol() {
    if (isPrototypeOf$1(SymbolPrototype$1, this)) throw TypeError$3('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);

    var setter = function (value) {
      if (this === ObjectPrototype) call$3(setter, ObjectPrototypeSymbols, value);
      if (hasOwn$1(this, HIDDEN) && hasOwn$1(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };

    if (DESCRIPTORS$2 && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {
      configurable: true,
      set: setter
    });
    return wrap(tag, description);
  };

  SymbolPrototype$1 = $Symbol[PROTOTYPE];
  redefine$1(SymbolPrototype$1, 'toString', function toString() {
    return getInternalState$1(this).tag;
  });
  redefine$1($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });
  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol$3(name), name);
  };

  if (DESCRIPTORS$2) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty(SymbolPrototype$1, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState$1(this).description;
      }
    });

    {
      redefine$1(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {
        unsafe: true
      });
    }
  }
}

$$2({
  global: true,
  wrap: true,
  forced: !NATIVE_SYMBOL$1,
  sham: !NATIVE_SYMBOL$1
}, {
  Symbol: $Symbol
});
$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});
$$2({
  target: SYMBOL,
  stat: true,
  forced: !NATIVE_SYMBOL$1
}, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = $toString(key);
    if (hasOwn$1(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError$3(sym + ' is not a symbol');
    if (hasOwn$1(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () {
    USE_SETTER = true;
  },
  useSimple: function () {
    USE_SETTER = false;
  }
});
$$2({
  target: 'Object',
  stat: true,
  forced: !NATIVE_SYMBOL$1,
  sham: !DESCRIPTORS$2
}, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});
$$2({
  target: 'Object',
  stat: true,
  forced: !NATIVE_SYMBOL$1
}, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
}); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443

$$2({
  target: 'Object',
  stat: true,
  forced: fails$5(function () {
    getOwnPropertySymbolsModule.f(1);
  })
}, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
}); // `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify

if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL$1 || fails$5(function () {
    var symbol = $Symbol(); // MS Edge converts symbol values to JSON as {}

    return $stringify([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
    || $stringify({
      a: symbol
    }) != '{}' // V8 throws on boxed symbols
    || $stringify(Object(symbol)) != '{}';
  });
  $$2({
    target: 'JSON',
    stat: true,
    forced: FORCED_JSON_STRINGIFY
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice$1(arguments);
      var $replacer = replacer;
      if (!isObject$1(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

      if (!isArray(replacer)) replacer = function (key, value) {
        if (isCallable$2($replacer)) value = call$3($replacer, this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return apply$1($stringify, null, args);
    }
  });
} // `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive


if (!SymbolPrototype$1[TO_PRIMITIVE]) {
  var valueOf = SymbolPrototype$1.valueOf; // eslint-disable-next-line no-unused-vars -- required for .length

  redefine$1(SymbolPrototype$1, TO_PRIMITIVE, function (hint) {
    // TODO: improve hint logic
    return call$3(valueOf, this);
  });
} // `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag


setToStringTag($Symbol, SYMBOL);
hiddenKeys[HIDDEN] = true;

var $$1 = _export;
var DESCRIPTORS$1 = descriptors;
var global$6 = global$x;
var uncurryThis$5 = functionUncurryThis;
var hasOwn = hasOwnProperty_1;
var isCallable$1 = isCallable$e;
var isPrototypeOf = objectIsPrototypeOf;
var toString$3 = toString$4;
var defineProperty$1 = objectDefineProperty.f;
var copyConstructorProperties = copyConstructorProperties$2;
var NativeSymbol = global$6.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS$1 && isCallable$1(NativeSymbol) && (!('description' in SymbolPrototype) || // Safari 12 bug
NativeSymbol().description !== undefined)) {
  var EmptyStringDescriptionStore = {}; // wrap Symbol constructor for correct work with undefined description

  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString$3(arguments[0]);
    var result = isPrototypeOf(SymbolPrototype, this) ? new NativeSymbol(description) // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
    : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;
  var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';
  var symbolToString = uncurryThis$5(SymbolPrototype.toString);
  var symbolValueOf = uncurryThis$5(SymbolPrototype.valueOf);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace$1 = uncurryThis$5(''.replace);
  var stringSlice$3 = uncurryThis$5(''.slice);
  defineProperty$1(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = symbolValueOf(this);
      var string = symbolToString(symbol);
      if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';
      var desc = NATIVE_SYMBOL ? stringSlice$3(string, 7, -1) : replace$1(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });
  $$1({
    global: true,
    forced: true
  }, {
    Symbol: SymbolWrapper
  });
}

var Intro = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits$1(Intro, _MotorCortex$HTMLClip);

  var _super = _createSuper$1(Intro);

  function Intro() {
    _classCallCheck$1(this, Intro);

    return _super.apply(this, arguments);
  }

  _createClass$1(Intro, [{
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
    key: "html",
    get: function get() {
      return "\n      <div class=\"bg\"> \n        <div class=\"first-slide\">\n          <div class=\"testdiv\">\n            <div class=\"sub\">\n              <div class=\"subtitle\">\n                <div class=\"subtitle-holder\">\n                  <div class=\"subtitle-text\">".concat(this.attrs.subtitle, "</div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"title\">\n            <div class=\"date-holder\">\n              <div class=\"date\">\n                <span> ").concat(this.attrs.month, "</span>\n              </div>\n            </div>\n            <div class=\"holder-title\">\n              <div class=\"title-text\">").concat(this.attrs.title, "</div>\n            </div>\n          </div>\n          <div class=\"description\">\n            <div class=\"description-text\">\n              <p>").concat(this.attrs.description, "</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .bg {\n        height: 1080px;\n        width: 1920px;\n        position: relative;\n        background-image: url(".concat(this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/kissmybutonbg.jpg", ");\n        background-size: 1920px;\n        background-position: center;\n        transform: scale(1);\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n        flex: 1 0 auto;\n      }\n\n      .bg:after {\n        content: \"\";\n        display: block;\n        background: linear-gradient(").concat(this.attrs.overlayColor || "#101820D7,#101820FF", ");\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        z-index: -1;\n      }\n\n      .first-slide {\n        display: flex;\n        width: 90%;\n        white-space: nowrap;\n        overflow: hidden;\n        flex-direction: column;\n        position: relative;\n      }\n\n      .sub {\n        display: flex;\n        overflow: hidden;\n        position: relative;\n        width: 50%;\n      }\n      \n      .title {\n        color: ").concat(this.attrs.mainColor || "#00ff40", ";\n        font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 864 * (this.attrs.speed || 2)), "px;\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        margin-top:-").concat(this.dinamicFontSize(this.attrs.title.length, 864 * (this.attrs.speed || 2)) / 2.6, "px;\n        overflow: hidden;\n        display: flex;\n        width: 100%;\n      }\n\n      .subtitle {\n        color: ").concat(this.attrs.mainColor || "#00ff40", ";\n        font-size: ").concat(this.dinamicFontSize(this.attrs.subtitle.length, 864), "px;\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        overflow: hidden;\n      }\n\n      .description-text {\n        position: relative;\n        transform: translateY(-200%);\n      }\n\n      .description {\n        border-top: 15px solid ").concat(this.attrs.mainColor || "#00ff40", ";\n        overflow: hidden;\n        transform: translateY(200%);\n        font-size: 30px;\n        color: #fff;\n        position: relative;\n        white-space: normal;\n        text-align: left;\n        text-transform: uppercase;\n        font-family: 'Roboto Mono', monospace;\n      }\n\n      .testdiv{\n        width:100%;\n        padding-bottom: 2%;\n      }\n\n      .date-holder{\n        width: 28%;\n        position: absolute;\n        justify-self: center;\n        top: 8%;\n        display: flex;\n        justify-content: flex-end;\n      }\n\n      .date {\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .date span {\n        position: relative;\n        overflow: hidden;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        font-size: 50px;\n        color: #fff ;\n        transform: translateX(200%);\n      }\n\n      .title-text{\n        overflow: hidden;\n        width : 0%;\n      }\n\n      .subtitle-text{\n        overflow: hidden;\n        right: 100%;\n        position: relative;\n      }\n\n      .subtitle-holder{\n        overflow: hidden;\n        position : relative;\n        right: -100%;\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var speed = this.attrs.speed || 2;
      var titleanime = new CSSEffect({
        animatedAttrs: {
          width: "100%"
        },
        initialValues: {
          width: "0%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".title-text",
        easing: "easeOutQuad"
      });
      var bg = new CSSEffect({
        animatedAttrs: {
          backgroundSize: "3000px"
        },
        initialValues: {
          backgroundSize: "1980px"
        },
        attrs: {}
      }, {
        duration: 2800 * speed,
        selector: ".bg",
        easing: "easeOutCubic"
      });
      var subtextRight = new CSSEffect({
        animatedAttrs: {
          right: "0%"
        },
        initialValues: {
          right: "100%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".subtitle-text",
        easing: "easeOutQuad"
      });
      var subholderRight = new CSSEffect({
        animatedAttrs: {
          right: "0%"
        },
        initialValues: {
          right: "-100%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".subtitle-holder",
        easing: "easeOutQuad"
      });
      var subtitleRight = new CSSEffect({
        animatedAttrs: {
          left: "".concat(864 * speed - (this.dinamicFontSize(this.attrs.subtitle.length, 864) * 0.6 * this.attrs.subtitle.length, 864), "px")
        },
        initialValues: {},
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".sub",
        easing: "easeOutQuad"
      });
      var datespan = new CSSEffect({
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
        duration: 1000 * speed,
        selector: ".date span",
        easing: "easeOutQuad"
      });
      var dateHolderWidth = new CSSEffect({
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
      var scaleFirstSlide = new CSSEffect({
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
        duration: 1000 * speed,
        selector: ".first-slide",
        easing: "easeOutQuad"
      });
      var description = new CSSEffect({
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
        duration: 1000 * speed,
        selector: ".description",
        easing: "easeOutQuad"
      });
      var descriptiontext = new CSSEffect({
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
        duration: 300 * speed,
        selector: ".description-text",
        easing: "easeOutQuad"
      });
      var bgQut = new CSSEffect({
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
        duration: 1000 * speed,
        selector: ".bg",
        easing: "easeOutQuad"
      });
      this.addIncident(bg, 0);
      this.addIncident(titleanime, 0);
      this.addIncident(subtextRight, 0);
      this.addIncident(subholderRight, 0);
      this.addIncident(subtitleRight, 1500 * speed);
      this.addIncident(scaleFirstSlide, 1500 * speed);
      this.addIncident(description, 1500 * speed);
      this.addIncident(datespan, 1800 * speed);
      this.addIncident(dateHolderWidth, 2050 * speed);
      this.addIncident(descriptiontext, 2500 * speed);
      this.addIncident(bgQut, this.calculatedDuration + 1000 * speed);
    }
  }]);

  return Intro;
}(MotorCortex.HTMLClip);

var Transition = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits$1(Transition, _MotorCortex$HTMLClip);

  var _super = _createSuper$1(Transition);

  function Transition() {
    _classCallCheck$1(this, Transition);

    return _super.apply(this, arguments);
  }

  _createClass$1(Transition, [{
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
    key: "html",
    get: function get() {
      return "\n      <div class=\"transition-container\">\n        <p class=\"transition-text\">".concat(this.attrs.title, "</p>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .transition-container {\n        color:white; \n        background:rgb(0, 0, 0);\n        mix-blend-mode: multiply;\n        font: bolder 400px \"Roboto Mono\";\n        text-align: center;\n        position: relative;\n        left: -100%;\n        width: 20%;\n        height: 100%;\n        position: absolute;\n        display: flex;\n        align-content: center;\n        align-items: center;\n        overflow: hidden;\n      }\n\n      .transition-text {\n        position: relative;\n        left: -0%;\n      }\n    ";
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var transitionText = new CSSEffect({
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
        duration: 1000 * (this.attrs.speed || 2),
        selector: ".transition-text"
      });
      var transitionContainer = new CSSEffect({
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
        duration: 1000 * (this.attrs.speed || 2),
        selector: ".transition-container"
      });
      this.addIncident(transitionText, 0);
      this.addIncident(transitionContainer, 0);
    }
  }]);

  return Transition;
}(MotorCortex.HTMLClip);

var anObject$3 = anObject$9; // `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags

var regexpFlags$1 = function () {
  var that = anObject$3(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var regexpStickyHelpers = {};

var fails$4 = fails$e;
var global$5 = global$x; // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError

var $RegExp$2 = global$5.RegExp;
regexpStickyHelpers.UNSUPPORTED_Y = fails$4(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});
regexpStickyHelpers.BROKEN_CARET = fails$4(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

var fails$3 = fails$e;
var global$4 = global$x; // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError

var $RegExp$1 = global$4.RegExp;
var regexpUnsupportedDotAll = fails$3(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$2 = fails$e;
var global$3 = global$x; // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError

var $RegExp = global$3.RegExp;
var regexpUnsupportedNcg = fails$2(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */

/* eslint-disable regexp/no-useless-quantifier -- testing */


var call$2 = functionCall;
var uncurryThis$4 = functionUncurryThis;
var toString$2 = toString$4;
var regexpFlags = regexpFlags$1;
var stickyHelpers$1 = regexpStickyHelpers;
var shared = shared$5.exports;
var create = objectCreate;
var getInternalState = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;
var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$2 = uncurryThis$4(''.charAt);
var indexOf = uncurryThis$4(''.indexOf);
var replace = uncurryThis$4(''.replace);
var stringSlice$2 = uncurryThis$4(''.slice);

var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$2(nativeExec, re1, 'a');
  call$2(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();

var UNSUPPORTED_Y$1 = stickyHelpers$1.UNSUPPORTED_Y || stickyHelpers$1.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  // eslint-disable-next-line max-statements -- TODO
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString$2(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$2(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y$1 && re.sticky;
    var flags = call$2(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');

      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$2(str, re.lastIndex); // Support anchored sticky behavior.

      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$2(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      } // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.


      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }

    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
    match = call$2(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$2(match.input, charsAdded);
        match[0] = stringSlice$2(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }

    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      call$2(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);

      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$3 = patchedExec;

var $ = _export;
var exec$1 = regexpExec$3; // `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec

$({
  target: 'RegExp',
  proto: true,
  forced: /./.exec !== exec$1
}, {
  exec: exec$1
});

var uncurryThis$3 = functionUncurryThis;
var redefine = redefine$3.exports;
var regexpExec$2 = regexpExec$3;
var fails$1 = fails$e;
var wellKnownSymbol$2 = wellKnownSymbol$c;
var createNonEnumerableProperty = createNonEnumerableProperty$4;
var SPECIES$1 = wellKnownSymbol$2('species');
var RegExpPrototype = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$2(KEY);
  var DELEGATES_TO_SYMBOL = !fails$1(function () {
    // String methods call symbol-named RegEp methods
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$1(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.

      re.constructor = {};

      re.constructor[SPECIES$1] = function () {
        return re;
      };

      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
    var uncurriedNativeRegExpMethod = uncurryThis$3(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$3(nativeMethod);
      var $exec = regexp.exec;

      if ($exec === regexpExec$2 || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return {
            done: true,
            value: uncurriedNativeRegExpMethod(regexp, str, arg2)
          };
        }

        return {
          done: true,
          value: uncurriedNativeMethod(str, regexp, arg2)
        };
      }

      return {
        done: false
      };
    });
    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};

var isObject = isObject$9;
var classof$1 = classofRaw$1;
var wellKnownSymbol$1 = wellKnownSymbol$c;
var MATCH = wellKnownSymbol$1('match'); // `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp

var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof$1(it) == 'RegExp');
};

var global$2 = global$x;
var isConstructor = isConstructor$2;
var tryToString = tryToString$2;
var TypeError$2 = global$2.TypeError; // `Assert: IsConstructor(argument) is true`

var aConstructor$1 = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError$2(tryToString(argument) + ' is not a constructor');
};

var anObject$2 = anObject$9;
var aConstructor = aConstructor$1;
var wellKnownSymbol = wellKnownSymbol$c;
var SPECIES = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor

var speciesConstructor$1 = function (O, defaultConstructor) {
  var C = anObject$2(O).constructor;
  var S;
  return C === undefined || (S = anObject$2(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};

var uncurryThis$2 = functionUncurryThis;
var toIntegerOrInfinity = toIntegerOrInfinity$3;
var toString$1 = toString$4;
var requireObjectCoercible$1 = requireObjectCoercible$4;
var charAt$1 = uncurryThis$2(''.charAt);
var charCodeAt = uncurryThis$2(''.charCodeAt);
var stringSlice$1 = uncurryThis$2(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$1(requireObjectCoercible$1($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt$1(S, position) : first : CONVERT_TO_STRING ? stringSlice$1(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

var charAt = stringMultibyte.charAt; // `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex

var advanceStringIndex$1 = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};

var global$1 = global$x;
var call$1 = functionCall;
var anObject$1 = anObject$9;
var isCallable = isCallable$e;
var classof = classofRaw$1;
var regexpExec$1 = regexpExec$3;
var TypeError$1 = global$1.TypeError; // `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec

var regexpExecAbstract = function (R, S) {
  var exec = R.exec;

  if (isCallable(exec)) {
    var result = call$1(exec, R, S);
    if (result !== null) anObject$1(result);
    return result;
  }

  if (classof(R) === 'RegExp') return call$1(regexpExec$1, R, S);
  throw TypeError$1('RegExp#exec called on incompatible receiver');
};

var apply = functionApply;
var call = functionCall;
var uncurryThis$1 = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var isRegExp = isRegexp;
var anObject = anObject$9;
var requireObjectCoercible = requireObjectCoercible$4;
var speciesConstructor = speciesConstructor$1;
var advanceStringIndex = advanceStringIndex$1;
var toLength = toLength$2;
var toString = toString$4;
var getMethod = getMethod$2;
var arraySlice = arraySlice$3;
var callRegExpExec = regexpExecAbstract;
var regexpExec = regexpExec$3;
var stickyHelpers = regexpStickyHelpers;
var fails = fails$e;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var $push = [].push;
var exec = uncurryThis$1(/./.exec);
var push = uncurryThis$1($push);
var stringSlice = uncurryThis$1(''.slice); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;

  re.exec = function () {
    return originalExec.apply(this, arguments);
  };

  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
}); // @@split logic

fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;

  if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
  'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

      if (!isRegExp(separator)) {
        return call(nativeSplit, string, separator, lim);
      }

      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;

      while (match = call(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;

        if (lastIndex > lastLastIndex) {
          push(output, stringSlice(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }

        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }

      if (lastLastIndex === string.length) {
        if (lastLength || !exec(separatorCopy, '')) push(output, '');
      } else push(output, stringSlice(string, lastLastIndex));

      return output.length > lim ? arraySlice(output, 0, lim) : output;
    }; // Chakra, V8

  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [// `String.prototype.split` method
  // https://tc39.es/ecma262/#sec-string.prototype.split
  function split(separator, limit) {
    var O = requireObjectCoercible(this);
    var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
    return splitter ? call(splitter, separator, O, limit) : call(internalSplit, toString(O), separator, limit);
  }, // `RegExp.prototype[@@split]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
  //
  // NOTE: This cannot be properly polyfilled in engines that don't support
  // the 'y' flag.
  function (string, limit) {
    var rx = anObject(this);
    var S = toString(string);
    var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
    if (res.done) return res.value;
    var C = speciesConstructor(rx, RegExp);
    var unicodeMatching = rx.unicode;
    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y ? 'g' : 'y'); // ^(? + rx + ) is needed, in combination with some S slicing, to
    // simulate the 'y' flag.

    var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
    if (lim === 0) return [];
    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
    var p = 0;
    var q = 0;
    var A = [];

    while (q < S.length) {
      splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
      var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
      var e;

      if (z === null || (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
        q = advanceStringIndex(S, q, unicodeMatching);
      } else {
        push(A, stringSlice(S, p, q));
        if (A.length === lim) return A;

        for (var i = 1; i <= z.length - 1; i++) {
          push(A, z[i]);
          if (A.length === lim) return A;
        }

        q = p = e;
      }
    }

    push(A, stringSlice(S, p));
    return A;
  }];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

var SlideDateOne = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits$1(SlideDateOne, _MotorCortex$HTMLClip);

  var _super = _createSuper$1(SlideDateOne);

  function SlideDateOne() {
    _classCallCheck$1(this, SlideDateOne);

    return _super.apply(this, arguments);
  }

  _createClass$1(SlideDateOne, [{
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
    key: "html",
    get: function get() {
      return "\n    <div>\n      <div class=\"bg \">\n        <div class=\"second-slide\">\n          <div class=\"second-slide-titleOne\">".concat(this.attrs.title[0], "</div>\n          <div class=\"second-slide-titleTwo\">").concat(this.attrs.title[1], "</div>\n          <div class=\"word-bg\">\n            <div class=\"word\"></div>\n          </div>\n          <div class=\"short-description\">\n            <p>").concat(this.attrs.description, "</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"bg-second \">\n        <div class=\"bg-second-slide\">\n            <div class=\"second-date-container\">\n            <div class=\"second-date\"><span> ").concat(this.attrs.day || "", " ").concat(this.attrs.dayNumber || "", " </span>").concat(this.attrs.month || "", " ").concat(this.attrs.year || "", "</div>\n            </div>\n        </div>\n      </div>\n    </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .bg,.bg-second {\n        width: 1920px;\n        height: 1080px;\n        background-image: url(".concat(this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg3.jpg", ");\n        background-size: 1920px;\n        background-position: center;\n        transform: scale(1);\n        display: flex;\n        position: absolute;\n        align-items: center;\n        flex-wrap: wrap;\n        flex: 1 0 auto;\n        left: -100%\n      }\n\n      .bg:after,.bg-second:after {\n        content: \"\";\n        display: block;\n        background: linear-gradient(").concat(this.attrs.overlayColor || "#101820D7,#101820FF", ");\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        z-index: -1;\n      }\n\n      .bg-second{\n        left:100%;\n        background-image: url(").concat(this.attrs.bgUrl2 || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg2.jpg", ");\n      }\n\n      .short-description{\n        font-size: 20px;\n        color: #fff;\n        position: relative;\n        white-space: normal;\n        text-align: left;\n        text-transform: uppercase;\n        font-family: 'Roboto Mono', monospace;\n        width: 720px;\n        left: -50%;\n      }\n\n      .word-bg{\n        background-color:").concat(this.attrs.mainColor || "#00ff40", ";\n        width: 720px;\n        position: relative;\n        left: -50%\n      }\n\n      .word{\n        overflow: hidden;\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 720px\n      }\n\n      .second-slide-titleTwo,.second-slide-titleOne{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.titleone.length, 360), "px;\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n        position: relative;\n        left : -50%;\n      }\n\n      .second-slide-titleTwo{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.subtitle.length, 720), "px;\n      }\n\n      .second-slide-titleOne{\n        color :").concat(this.attrs.mainColor || "#00ff40", "\n      }\n\n      .second-slide{\n        position : absolute;\n        left : 0%;\n        display: flex;\n        align-content: center;\n        justify-content: center;\n        flex-direction: column;\n        margin-left: 10%;\n      }\n\n      .letter{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.str.length, 720), "px;\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n        position: relative;\n        position: relative;\n        text-align: center;\n        top : 300px;\n        width: 100%;\n      }\n\n      .second-date-container{\n        border-left: 100px solid ").concat(this.attrs.mainColor || "#00ff40", ";\n        overflow: hidden;\n        width: 200%;\n      }\n\n      .second-date{\n        font-size: 100px;\n        color: #fff;\n        position: relative;\n        white-space: nowrap;\n        text-align: left;\n        text-transform: uppercase;\n        font-family: 'Roboto Mono', monospace;\n        width: 720px;\n        left:-100%;\n      }\n      \n      .second-date span{\n        color: ").concat(this.attrs.mainColor, ";\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var array = this.attrs.title[2].split("");
      var html3;
      var speed = this.attrs.speed || 2;
      var containerParams = {
        width: "100%",
        height: "100%"
      };

      for (var i = 0; i < array.length; i++) {
        var html = "<span class='letter letter".concat(i + 1, "'>").concat(array[i], "</span>");
        html3 = html3 + html;
      }

      var word = new MotorCortex.HTMLClip({
        css: this.css,
        html: " <div class=\"conttitle\" >".concat(html3.split("undefined")[1], " </div>"),
        selector: ".word",
        containerParams: containerParams
      });
      this.addIncident(word, 0);

      for (var _i = 0; _i < array.length; _i++) {
        var textAnimation = new CSSEffect({
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
        word.addIncident(textAnimation, (2000 + 100 * (_i + 1)) * speed);
      }

      var bgMove = new CSSEffect({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".bg",
        easing: "easeOutQuad"
      });
      var secondSlideTitleOne = new CSSEffect({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "-50%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".second-slide-titleOne",
        easing: "easeOutQuad"
      });
      var secondSlideTitleTwo = new CSSEffect({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "-50%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".second-slide-titleTwo",
        easing: "easeOutQuad"
      });
      var wordBg = new CSSEffect({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "-50%"
        },
        attrs: {}
      }, {
        duration: 1200 * speed,
        selector: ".word-bg",
        easing: "easeOutQuad"
      });
      var shortDescription = new CSSEffect({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "-50%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".short-description",
        easing: "easeOutQuad"
      });
      var bgscaledown = new CSSEffect({
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
        duration: 500 * speed,
        selector: ".bg,.bg-second",
        easing: "easeOutQuad"
      });
      var bgscaledownMove = new CSSEffect({
        animatedAttrs: {
          left: "-25%"
        },
        initialValues: {
          left: "0%"
        },
        attrs: {}
      }, {
        duration: 500 * speed,
        selector: ".bg",
        easing: "easeOutQuad"
      });
      var bgsecondscaledownMove = new CSSEffect({
        animatedAttrs: {
          left: "25%"
        },
        initialValues: {
          left: "100%"
        },
        attrs: {}
      }, {
        duration: 500 * speed,
        selector: ".bg-second",
        easing: "easeOutQuad"
      });
      var secondBgDate = new CSSEffect({
        animatedAttrs: {
          left: "5%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".second-date",
        easing: "easeOutQuad"
      });
      var moveSecond = new CSSEffect({
        animatedAttrs: {
          left: "-76%"
        },
        initialValues: {},
        attrs: {}
      }, {
        duration: 800 * speed,
        selector: ".bg",
        easing: "easeOutQuad"
      });
      var moveSecondS = new CSSEffect({
        animatedAttrs: {
          left: "-76%"
        },
        initialValues: {},
        attrs: {}
      }, {
        duration: 1500 * speed,
        selector: ".bg-second",
        easing: "easeOutQuad"
      });
      this.addIncident(bgMove, 0);
      this.addIncident(secondSlideTitleOne, 300 * speed);
      this.addIncident(secondSlideTitleTwo, 500 * speed);
      this.addIncident(wordBg, 500 * speed);
      this.addIncident(shortDescription, 900 * speed);
      this.addIncident(bgscaledown, 3700 * speed);
      this.addIncident(bgscaledownMove, 3700 * speed);
      this.addIncident(bgsecondscaledownMove, 3700 * speed);
      this.addIncident(secondBgDate, 3700 * speed);
      this.addIncident(moveSecond, 6000 * speed);
      this.addIncident(moveSecondS, this.calculatedDuration + 1000 * speed);
    }
  }]);

  return SlideDateOne;
}(MotorCortex.HTMLClip);

var DESCRIPTORS = descriptors;
var FUNCTION_NAME_EXISTS = functionName.EXISTS;
var uncurryThis = functionUncurryThis;
var defineProperty = objectDefineProperty.f;
var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /^\s*function ([^ (]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name'; // Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name

if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}

var Scrolslide = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits$1(Scrolslide, _MotorCortex$HTMLClip);

  var _super = _createSuper$1(Scrolslide);

  function Scrolslide() {
    _classCallCheck$1(this, Scrolslide);

    return _super.apply(this, arguments);
  }

  _createClass$1(Scrolslide, [{
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
    key: "html",
    get: function get() {
      return "\n      <div class=\"third-holder \">\n        <div class=\"bg\">\n          <div class=\"bg-third-slide\">\n            <div class=\"third-first-presenter-slide\">\n              <div class=\"third-presenter-container\">\n                <div class=\"third-presenter presenter\">".concat(this.attrs.title, "</div>\n              </div>\n              <div class=\"name-container\">").concat(this.attrs.name, "</div>\n              <div class=\"position-container\">").concat(this.attrs.position, "</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"bg\">\n          <div class=\"bg-third-slide\">\n            <div class=\"third-first-presenter-slide\">\n              <div class=\"third-presenter-container\">\n                <div class=\"third-presenter presenter\">").concat(this.attrs.title, "</div>\n              </div>\n              <div class=\"name-container\">").concat(this.attrs.name, "</div>\n              <div class=\"position-container\">").concat(this.attrs.position, "</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"bg\">\n          <div class=\"bg-third-slide\">\n            <div class=\"third-first-presenter-slide\">\n              <div class=\"third-presenter-container\">\n                <div class=\"third-presenter presenter\">").concat(this.attrs.title, "</div>\n              </div>\n              <div class=\"name-container\">").concat(this.attrs.name, "</div>\n              <div class=\"position-container\">").concat(this.attrs.position, "</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .bg {\n        width: 100%;\n        height: 100%;\n        background-image: url(".concat(this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg3.jpg", ");\n        background-size: 1920px;\n        background-position: center;\n        transform: scale(1);\n        display: flex;\n        position: relative;\n        align-items: center;\n        flex-wrap: wrap;\n        flex: 1 0 auto;\n        margin-top: 10%;\n        margin-bottom: 10%;\n      }\n\n      .bg:after {\n        content: \"\";\n        display: block;\n        background: linear-gradient(").concat(this.attrs.overlayColor || "#101820D7,#101820FF", ");\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        z-index: -1;\n      }\n    \n     .bg-third-slide{\n        height: 1080px;\n        width: 1920px;\n        display: flex;\n        align-items: center;\n        margin-left: 5%;\n      }\n\n      .third-first-presenter-slide{\n        position : relative;\n      }\n\n      .third-presenter-container{\n        overflow: hidden;\n        border-top: 15px solid ").concat(this.attrs.mainColor || "#00ff40", ";\n      }\n\n      .presenter,.big-title{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: ").concat(this.attrs.mainColor || "#00ff40", ";\n      }\n\n      .third-presenter{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 720), "px;\n        transform: translateY(-100%);\n      }\n\n      .name-container,.position-container{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n      }\n    \n      .name-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.name.length, 360), "px;\n      }\n\n      .position-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.position.length, 360), "px;\n      }\n\n      .third-holder{\n        left: 100%;\n        position: relative;\n        top : 0%;\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var speed = this.attrs.speed || 2;
      var moveThird = new CSSEffect({
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
        duration: 1000 * speed,
        selector: ".third-holder",
        easing: "easeOutQuad"
      });
      var thirdScaleUp = new CSSEffect({
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
        duration: 1500 * speed,
        selector: ".third-holder",
        easing: "easeOutQuad"
      });
      var moveThirdIner = new CSSEffect({
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
        duration: 1500 * speed,
        selector: ".bg",
        easing: "easeOutQuad"
      });
      var movePresenter = new CSSEffect({
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
        duration: 800 * speed,
        selector: ".presenter",
        easing: "easeOutQuad"
      });
      var bgOut = new CSSEffect({
        animatedAttrs: {
          left: "100%"
        },
        initialValues: {
          left: "0%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".third-holder",
        easing: "easeOutQuad"
      });
      this.addIncident(moveThird, 0);
      this.addIncident(thirdScaleUp, 0);
      this.addIncident(moveThirdIner, 0);
      this.addIncident(movePresenter, 700 * speed);
      this.addIncident(bgOut, this.calculatedDuration + 1000 * speed);
    }
  }]);

  return Scrolslide;
}(MotorCortex.HTMLClip);

var LtRslide = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits$1(LtRslide, _MotorCortex$HTMLClip);

  var _super = _createSuper$1(LtRslide);

  function LtRslide() {
    _classCallCheck$1(this, LtRslide);

    return _super.apply(this, arguments);
  }

  _createClass$1(LtRslide, [{
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
    key: "html",
    get: function get() {
      return "\n      <div class=\"bg\">\n        <div class=\"bg-quarter-slide\">\n          <div class=\"quarter-first-presenter-slide\">\n            <div class=\"quarter-left\">\n              <div class=\"quarter-presenter-container\">\n                <div class=\"quarter-presenter presenter\">".concat(this.attrs.title, "</div>\n              </div>\n              <div class=\"name-container\">").concat(this.attrs.name, "</div>\n              <div class=\"position-container\">").concat(this.attrs.position, "</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .bg {\n        width: 100%;\n        height: 100%;\n        background-image: url(".concat(this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg4.jpg", ");\n        background-size: 1920px;\n        background-position: center;\n        transform: scale(1);\n        display: flex;\n        position: relative;\n        align-items: center;\n        flex-wrap: wrap;\n        flex: 1 0 auto;\n        left : -100%;\n      }\n\n      .bg:after {\n        content: \"\";\n        display: block;\n        background: linear-gradient(").concat(this.attrs.overlayColor || "#101820D7,#101820FF", ");\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        z-index: -1;\n      }\n\n      .third-first-presenter-slide,.quarter-first-presenter-slide{\n        position : relative;\n      }\n    \n      .quarter-first-presenter-slide{\n        margin-bottom: 15%;\n        border-right: 15px solid ").concat(this.attrs.mainColor || "#00ff40", ";\n      }\n\n      .quarter-left{\n        display: flex;\n        flex-direction: column;\n        align-items: flex-end;\n        position : relative;\n        left: -50%;\n      }\n\n      .name-container,.position-container{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n      }\n    \n      .name-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.name.length, 360), "px;\n      }\n\n      .position-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.position.length, 360), "px;\n      }\n\n      .bg-quarter-slide{\n        height: 1080px;\n        width: 1920px;\n        display: flex;\n        align-items: center;\n      }\n\n      .bg-quarter-slide{\n        align-items: flex-end;\n      }\n\n      .quarter-presenter{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 720), "px;\n      }\n\n      .presenter,.big-title{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: ").concat(this.attrs.mainColor || "#00ff40", ";\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var speed = this.attrs.speed || 2;
      var personConMove = new CSSEffect({
        animatedAttrs: {
          left: "50%"
        },
        initialValues: {},
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".quarter-first-presenter-slide",
        easing: "easeInSine"
      });
      var quarterLeft = new CSSEffect({
        animatedAttrs: {
          left: "-20%"
        },
        initialValues: {
          left: "-50%"
        },
        attrs: {}
      }, {
        duration: 1500 * speed,
        selector: ".quarter-left",
        easing: "easeOutQuad"
      });
      var bg = new CSSEffect({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".bg",
        easing: "easeOutQuad"
      });
      var bgOut = new CSSEffect({
        animatedAttrs: {
          left: "100%"
        },
        initialValues: {
          left: "0%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".bg",
        easing: "easeOutQuad"
      });
      this.addIncident(bg, 0);
      this.addIncident(personConMove, 0);
      this.addIncident(quarterLeft, 0);
      this.addIncident(bgOut, this.calculatedDuration + 1000 * speed);
    }
  }]);

  return LtRslide;
}(MotorCortex.HTMLClip);

var SlideDateTwo = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits$1(SlideDateTwo, _MotorCortex$HTMLClip);

  var _super = _createSuper$1(SlideDateTwo);

  function SlideDateTwo() {
    _classCallCheck$1(this, SlideDateTwo);

    return _super.apply(this, arguments);
  }

  _createClass$1(SlideDateTwo, [{
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
    key: "html",
    get: function get() {
      return "\n    <div>\n      <div class=\"bg\">\n        <div class=\"bg-deferi-day-slide\">\n          <div class=\"big-title\">".concat(this.attrs.bigTitle, "</div>\n          <div class=\"test-mask \">\n            <div class=\"defter-date-container\">\n              <div class=\"defter-date\"><span> ").concat(this.attrs.day || "", " ").concat(this.attrs.dayNumber, " </span>").concat(this.attrs.month || "", " ").concat(this.attrs.year || "", "</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"bg-second bg-small\">\n        <div class=\"bg-second-slide\">\n          <div class=\"quarter-first-presenter-slide\">\n          <div class=\"quarter-left\">\n            <div class=\"quarter-presenter-container\">\n              <div class=\"quarter-presenter presenter\">").concat(this.attrs.title, "</div>\n            </div>\n            <div class=\"name-container\">").concat(this.attrs.name, "</div>\n            <div class=\"position-container\">").concat(this.attrs.position, "</div>\n          </div>\n        </div>\n        </div>\n      </div>\n      <div class=\"bg-second bg-big \">\n        <div class=\"bg-second-slide\">\n          <div class=\"quarter-first-presenter-slide\">\n          <div class=\"quarter-left\">\n            <div class=\"quarter-presenter-container\">\n              <div class=\"quarter-presenter presenter\">").concat(this.attrs.title, "</div>\n            </div>\n            <div class=\"name-container\">").concat(this.attrs.name, "</div>\n            <div class=\"position-container\">").concat(this.attrs.position, "</div>\n          </div>\n        </div>\n        </div>\n      </div>\n    </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .bg,.bg-second {\n        width: 1920px;\n        height: 1080px;\n        background-image: url(".concat(this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg5.jpg", ");\n        background-size: 1920px;\n        background-position: center;\n        transform: scale(1);\n        display: flex;\n        position: absolute;\n        align-items: center;\n        flex-wrap: wrap;\n        flex: 1 0 auto;\n        left: -100%\n      }\n\n      .bg:after,.bg-second:after {\n        content: \"\";\n        display: block;\n        background: linear-gradient(").concat(this.attrs.overlayColor || "#101820D7,#101820FF", ");\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        z-index: -1;\n      }\n\n      .bg-second{\n        left:100%;\n        background-image: url(").concat(this.attrs.bgUrl2 || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg2.jpg", ");\n      }\n\n      .bg-big{\n        left: 100%;\n      }\n\n      .bg-second-slide,.bg-third-slide,.bg-quarter-slide,.bg-deferi-day-slide{\n        height: 1080px;\n        width: 1920px;\n        display: flex;\n        align-items: center;\n        overflow: hidden;\n      }\n\n      .bg-deferi-day-slide{\n        overflow: hidden;\n      }\n\n      .bg-second-slide{\n        justify-content: center;\n      }\n\n      .presenter,.big-title{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: ").concat(this.attrs.mainColor || "#00ff40", ";\n      }\n    \n      .big-title{\n        font-size: 1700px;\n        position: relative;\n      }\n\n      .test-mask{\n        position: absolute;\n        left: 0;\n        height: 132.5px;\n        background-size: 1920px;\n        position: absolute;\n        left: 0\n      }\n    \n      .test-mask{\n        height: 132.5px;\n        width: 50%;\n        background-image: url(").concat(this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg5.jpg", ");\n        background-size: 1920px;\n        background-position: center;\n        background-position-x: center;\n        transform: scale(1);\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n        overflow: hidden;\n        left: 25%;\n        background-position-x: center;  \n      }\n\n      .test-mask:after{ \n        content: \"\";\n        display: block;\n        background: #4e070799;\n        width: 1920px;\n        height: 1080px;\n        position: absolute;\n        top: -458px;\n        left: 0;\n        z-index: -2;\n        background: linear-gradient(").concat(this.attrs.overlayColor || "#101820D7,#101820FF", ");\n        top: -345%;\n      }\n\n      .defter-date-container{\n        position: absolute;\n        font-size: 60px;\n        color: #fff;\n        white-space: nowrap;\n        text-transform: uppercase;\n        font-family: 'Roboto Mono', monospace;\n        background:").concat(this.attrs.dateOverlay || "#ff00b3", ";   \n        padding: 2% 6%;\n        background-blend-mode: multiply;\n        background-image: url(").concat(this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg5.jpg", ");\n        background-size: 1920px;\n        background-position: center;\n        transform: scale(1);\n      }\n\n      .quarter-presenter-container{\n        overflow: hidden;\n      }\n\n      .quarter-first-presenter-slide{\n        margin-bottom: 15%;\n        border-top: 15px solid ").concat(this.attrs.mainColor || "#00ff40", ";\n        position: relative;\n        top: 90%;\n        overflow: hidden;\n      }\n\n      .quarter-left{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        position : relative;\n        top: 90%;\n      }\n\n      .name-container,.position-container{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n      }\n\n      .name-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.name.length, 360), "px;\n      }\n\n      .position-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.position.length, 360), "px;\n      }\n\n      .bg-quarter-slide{\n        height: 1080px;\n        width: 1920px;\n        display: flex;\n        align-items: center;\n      }\n\n      .bg-quarter-slide{\n        align-items: flex-end;\n      }\n\n      .quarter-presenter{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 720), "px;\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var speed = this.attrs.speed || 2;
      var bgMove = new CSSEffect({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".bg",
        easing: "easeOutCubic"
      });
      var secondSlide = new CSSEffect({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".second-slide",
        easing: "easeOutCubic"
      });
      var bigTitle = new CSSEffect({
        animatedAttrs: {
          left: "-1500px"
        },
        initialValues: {},
        attrs: {}
      }, {
        duration: 7400 * speed,
        selector: ".big-title",
        easing: "easeOutCubic"
      });
      var bgscaledown = new CSSEffect({
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
        duration: 500 * speed,
        selector: ".bg,.bg-small",
        easing: "easeOutCubic"
      });
      var bgscaledownMove = new CSSEffect({
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
      var bgsecondscaledownMove = new CSSEffect({
        animatedAttrs: {
          left: "25%"
        },
        initialValues: {
          left: "100%"
        },
        attrs: {}
      }, {
        duration: 500 * speed,
        selector: ".bg-small",
        easing: "easeOutCubic"
      });
      var secondBgDate = new CSSEffect({
        animatedAttrs: {
          left: "5%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".second-date",
        easing: "easeOutCubic"
      });
      var moveSecond = new CSSEffect({
        animatedAttrs: {
          left: "-175%"
        },
        initialValues: {},
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".bg-small,.bg",
        easing: "easeOutCubic"
      });
      var movePresenterSlide = new CSSEffect({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "90%"
        },
        attrs: {}
      }, {
        duration: 1500 * speed,
        selector: ".quarter-first-presenter-slide",
        easing: "easeOutCubic"
      });
      var movePresenterSlideLeft = new CSSEffect({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "90%"
        },
        attrs: {}
      }, {
        duration: 1500 * speed,
        selector: ".quarter-left",
        easing: "easeOutCubic"
      });
      var moveBig = new CSSEffect({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "100%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".bg-big",
        easing: "easeOutCubic"
      });
      var moveBigOut = new CSSEffect({
        animatedAttrs: {
          top: "-100%"
        },
        initialValues: {
          left: "0%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".bg-big",
        easing: "easeOutQuad"
      });
      this.addIncident(bgMove, 0);
      this.addIncident(secondSlide, 500 * speed);
      this.addIncident(bigTitle, 0);
      this.addIncident(bgscaledown, 3700 * speed);
      this.addIncident(bgscaledownMove, 3700 * speed);
      this.addIncident(bgsecondscaledownMove, 3700 * speed);
      this.addIncident(secondBgDate, 3700 * speed);
      this.addIncident(movePresenterSlide, 3700 * speed);
      this.addIncident(movePresenterSlideLeft, 4000 * speed);
      this.addIncident(moveSecond, this.calculatedDuration - 3000 * speed);
      this.addIncident(moveBig, this.calculatedDuration - 3200 * speed);
      this.addIncident(moveBigOut, this.calculatedDuration + 1000 * speed);
    }
  }]);

  return SlideDateTwo;
}(MotorCortex.HTMLClip);

var BtTslide = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits$1(BtTslide, _MotorCortex$HTMLClip);

  var _super = _createSuper$1(BtTslide);

  function BtTslide() {
    _classCallCheck$1(this, BtTslide);

    return _super.apply(this, arguments);
  }

  _createClass$1(BtTslide, [{
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
    key: "html",
    get: function get() {
      return "\n      <div class=\"bg\">\n        <div class=\"bg-quarter-slide\">\n          <div class=\"quarter-first-presenter-slide\">\n            <div class=\"quarter-left\">\n              <div class=\"quarter-presenter-container\">\n                <div class=\"quarter-presenter presenter\">".concat(this.attrs.title, "</div>\n              </div>\n              <div class=\"name-container\">").concat(this.attrs.name, "</div>\n              <div class=\"position-container\">").concat(this.attrs.position, "</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .bg {\n        width: 100%;\n        height: 100%;\n        background-image: url(".concat(this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg4.jpg", ");\n        background-size: 1920px;\n        background-position: center;\n        transform: scale(1);\n        display: flex;\n        position: relative;\n        align-items: center;\n        flex-wrap: wrap;\n        flex: 1 0 auto;\n      \n        top : 100%;\n        \n      }\n      .bg:after {\n        content: \"\";\n        display: block;\n        background: linear-gradient(").concat(this.attrs.overlayColor || "#101820D7,#101820FF", ");\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        z-index: -1;\n      }\n      .third-first-presenter-slide,.quarter-first-presenter-slide{\n        position : relative;\n      }\n    \n      .quarter-first-presenter-slide{\n        margin-bottom: 15%;\n        border-top: 15px solid ").concat(this.attrs.mainColor || "#00ff40", ";\n        align-items: center;\n        justify-content: center;\n        \n      }\n\n      .quarter-left{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        position : relative;\n        top: 90%;\n        \n      }\n      .name-container,.position-container{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n      }\n    \n      .name-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.name.length, 360), "px;\n      }\n      .position-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.position.length, 360), "px;\n      }\n      .bg-quarter-slide{\n        height: 1080px;\n        width: 1920px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n      .quarter-presenter{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 720), "px;\n      }\n      .presenter,.big-title{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: ").concat(this.attrs.mainColor || "#00ff40", ";\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var speed = this.attrs.speed || 2;
      var personConMove = new CSSEffect({
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
        duration: 1500 * speed,
        selector: ".quarter-first-presenter-slide"
      });
      var quarterLeft = new CSSEffect({
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
        duration: 2000 * speed,
        selector: ".quarter-left"
      });
      var bg = new CSSEffect({
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
        duration: 1000 * speed,
        selector: ".bg",
        easing: "easeOutQuad"
      });
      var bgOut = new CSSEffect({
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
        duration: 1000 * speed,
        selector: ".bg",
        easing: "easeOutQuad"
      });
      this.addIncident(bg, 0);
      this.addIncident(personConMove, 0);
      this.addIncident(quarterLeft, 0);
      this.addIncident(bgOut, this.calculatedDuration + 1000 * speed);
    }
  }]);

  return BtTslide;
}(MotorCortex.HTMLClip);

var BtTslideDate = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits$1(BtTslideDate, _MotorCortex$HTMLClip);

  var _super = _createSuper$1(BtTslideDate);

  function BtTslideDate() {
    _classCallCheck$1(this, BtTslideDate);

    return _super.apply(this, arguments);
  }

  _createClass$1(BtTslideDate, [{
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
    key: "html",
    get: function get() {
      return "\n    <div class=\"fragment\">\n      <div class=\"bg\">\n        <div class=\"bg-quarter-slide\">\n          <div class=\"quarter-first-presenter-slide\">\n            <div class=\"quarter-left\">\n              <div class=\"quarter-presenter-container\">\n                <div class=\"quarter-presenter presenter\">".concat(this.attrs.title, "</div>\n              </div>\n              <div class=\"name-container\">").concat(this.attrs.name, "</div>\n              <div class=\"position-container\">").concat(this.attrs.position, "</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"bg-next\">\n        <div class=\"bg-quarter-slide\">\n          <div class=\"test-mask\">\n            <div class=\"defter-date-container\">\n              <div class=\"defter-date\"><span> ").concat(this.attrs.day || "", " ").concat(this.attrs.dayNumber || "", " </span>").concat(this.attrs.month || "", " ").concat(this.attrs.year || "", "</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .fragment{\n        position: relative\n      }\n      .bg {\n        width: 100%;\n        height: 100%;\n        background-image: url(".concat(this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg3.jpg", ");\n        background-size: 1920px;\n        background-position: center;\n        transform: scale(1);\n        display: flex;\n        position: relative;\n        align-items: center;\n        flex-wrap: wrap;\n        flex: 1 0 auto;\n        top : 100%; \n      }\n\n      .bg:after,.bg-next {\n        content: \"\";\n        display: block;\n        background: linear-gradient(").concat(this.attrs.overlayColor || "#101820D7,#101820FF", ");\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        z-index: -1;\n      }\n\n      .bg-next {\n        width: 100%;\n        height: 100%;\n        background-size: 1920px;\n        background-position: center;\n        transform: scale(1);\n        display: flex;\n        position: absolute;\n        align-items: center;\n        flex-wrap: wrap;\n        flex: 1 0 auto;\n        left : -100%\n      }\n\n      .bg-next,.defter-date-container{\n        background-image: url(").concat(this.attrs.bgUrl2 || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg2.jpg", ");\n      }\n\n      .defter-date-container{\n        position: absolute;\n        font-size: 60px;\n        color:#fff;\n        white-space: nowrap;\n        text-transform: uppercase;\n        font-family: 'Roboto Mono', monospace;\n        background: ").concat(this.attrs.dateOverlay || "#ff00b3", ";\n        padding: 2% 6%;\n        background-blend-mode: multiply;\n        background-size: 1920px;\n        background-position: center;\n        transform: scale(1);\n      }\n\n      .defter-date span{\n        color: ").concat(this.attrs.mainColor || "#00ff40", ";\n      }\n\n      .third-first-presenter-slide,.quarter-first-presenter-slide{\n        position : relative;\n      }\n    \n      .quarter-first-presenter-slide{\n        margin-bottom: 15%;\n        border-top: 15px solid ").concat(this.attrs.mainColor || "#00ff40", ";\n        align-items: center;\n        justify-content: center;\n      }\n\n      .quarter-left{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        position : relative;\n        top: 90%;\n      }\n\n      .name-container,.position-container{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n      }\n    \n      .name-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.name.length, 360), "px;\n      }\n\n      .position-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.position.length, 360), "px;\n      }\n\n      .bg-quarter-slide{\n        height: 1080px;\n        width: 1920px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n      .quarter-presenter{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 720), "px;\n      }\n\n      .presenter,.big-title{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: ").concat(this.attrs.mainColor || "#00ff40", ";\n      }\n\n      .test-mask{\n        position: absolute;\n        left: 0;\n        height: 132.5px;\n        background-size: 1920px;\n        position: absolute;\n        left: 0;\n        display: flex;\n        justify-content: center;\n        align-content: center;\n        width: 100%;\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var speed = this.attrs.speed || 2;
      var personConMove = new CSSEffect({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "90%"
        },
        attrs: {}
      }, {
        duration: 1500 * speed,
        selector: ".quarter-first-presenter-slide",
        easing: "easeOutCubic"
      });
      var quarterLeft = new CSSEffect({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "90%"
        },
        attrs: {}
      }, {
        duration: 2000 * speed,
        selector: ".quarter-left",
        easing: "easeOutCubic"
      });
      var bg = new CSSEffect({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "100%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".bg,.fragment",
        easing: "easeOutQuad"
      });
      var bgscaledown = new CSSEffect({
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
        duration: 500 * speed,
        selector: ".bg,.bg-next",
        easing: "easeOutCubic"
      });
      var bgscaledownMove = new CSSEffect({
        animatedAttrs: {
          left: "25%"
        },
        initialValues: {
          left: "0%"
        },
        attrs: {}
      }, {
        duration: 500 * speed,
        selector: ".bg",
        easing: "easeOutCubic"
      });
      var bgsecondscaledownMove = new CSSEffect({
        animatedAttrs: {
          left: "-25%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      }, {
        duration: 500 * speed,
        selector: ".bg-next",
        easing: "easeOutCubic"
      });
      var bgscaleup = new CSSEffect({
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
        duration: 500 * speed,
        selector: ".bg,.bg-next",
        easing: "easeOutCubic"
      });
      var bgscaledownMoveOut = new CSSEffect({
        animatedAttrs: {
          left: "100%"
        },
        initialValues: {
          left: "25%"
        },
        attrs: {}
      }, {
        duration: 500 * speed,
        selector: ".bg",
        easing: "easeOutCubic"
      });
      var bgsecondscaledownMoveOut = new CSSEffect({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "-25%"
        },
        attrs: {}
      }, {
        duration: 500 * speed,
        selector: ".bg-next",
        easing: "easeOutCubic"
      });
      var bgMoveOut = new CSSEffect({
        animatedAttrs: {
          left: "100%"
        },
        initialValues: {
          left: "0%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".bg-next",
        easing: "easeOutQuad"
      });
      this.addIncident(bg, 0);
      this.addIncident(personConMove, 0);
      this.addIncident(quarterLeft, 0);
      this.addIncident(bgscaledown, 3000 * speed);
      this.addIncident(bgsecondscaledownMove, 3000 * speed);
      this.addIncident(bgscaledownMove, 3000 * speed);
      this.addIncident(bgscaleup, 4000 * speed);
      this.addIncident(bgscaledownMoveOut, 4000 * speed);
      this.addIncident(bgsecondscaledownMoveOut, 4000 * speed);
      this.addIncident(bgMoveOut, this.calculatedDuration + 1000 * speed);
    }
  }]);

  return BtTslideDate;
}(MotorCortex.HTMLClip);

var LtRslideTop = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits$1(LtRslideTop, _MotorCortex$HTMLClip);

  var _super = _createSuper$1(LtRslideTop);

  function LtRslideTop() {
    _classCallCheck$1(this, LtRslideTop);

    return _super.apply(this, arguments);
  }

  _createClass$1(LtRslideTop, [{
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
    key: "html",
    get: function get() {
      return "\n      <div class=\"bg\">\n        <div class=\"bg-quarter-slide\">\n            <div class=\"quarter-left\">\n              <div class=\"quarter-presenter-container\">\n                <div class=\"quarter-presenter presenter\">".concat(this.attrs.title, "</div>\n              </div>\n              <div class=\"name-container\">").concat(this.attrs.name, "</div>\n              <div class=\"position-container\">").concat(this.attrs.position, "</div>\n            </div>\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .bg {\n        width: 100%;\n        height: 100%;\n        background-image: url(".concat(this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg2.jpg", ");\n        background-size: 1920px;\n        background-position: center;\n        transform: scale(1);\n        display: flex;\n        position: relative;\n        align-items: center;\n        flex-wrap: wrap;\n        flex: 1 0 auto;\n        left : -100%;\n      }\n\n      .bg:after {\n        content: \"\";\n        display: block;\n        background: linear-gradient(").concat(this.attrs.overlayColor || "#101820D7,#101820FF", ");\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        z-index: -1;\n      }\n\n      .quarter-left{\n        display: flex;\n        flex-direction: column;\n        align-items: flex-end;\n        position : relative;\n        top: -100%;\n        border-top: 15px solid ").concat(this.attrs.mainColor || "#00ff40", ";\n        padding-top: 25%;\n        margin-left: 4%;\n      }\n\n      .name-container,.position-container{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n      }\n    \n      .name-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.name.length, 360), "px;\n      }\n\n      .position-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.position.length, 360), "px;\n      }\n\n      .bg-quarter-slide{\n        height: 1080px;\n        width: 1920px;\n        display: flex;\n        align-items: center;\n      }\n\n      .quarter-presenter{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 720), "px;\n      }\n\n      .presenter,.big-title{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: ").concat(this.attrs.mainColor || "#00ff40", ";\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var speed = this.attrs.speed || 2;
      var personConMove = new CSSEffect({
        animatedAttrs: {
          paddingTop: "0%"
        },
        initialValues: {
          paddingTop: "40%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".quarter-left",
        easing: "easeOutCubic"
      });
      var quarterLeft = new CSSEffect({
        animatedAttrs: {
          top: "25%"
        },
        initialValues: {
          top: "-100%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".quarter-left",
        easing: "easeOutCubic"
      });
      var bg = new CSSEffect({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".bg",
        easing: "easeOutCubic"
      });
      var bgOut = new CSSEffect({
        animatedAttrs: {
          left: "100%"
        },
        initialValues: {
          left: "0%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".bg",
        easing: "easeOutCubic"
      });
      this.addIncident(bg, 0);
      this.addIncident(personConMove, 0);
      this.addIncident(quarterLeft, 0);
      this.addIncident(bgOut, this.calculatedDuration + 1000 * speed);
    }
  }]);

  return LtRslideTop;
}(MotorCortex.HTMLClip);

var RtLslide = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits$1(RtLslide, _MotorCortex$HTMLClip);

  var _super = _createSuper$1(RtLslide);

  function RtLslide() {
    _classCallCheck$1(this, RtLslide);

    return _super.apply(this, arguments);
  }

  _createClass$1(RtLslide, [{
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
    key: "html",
    get: function get() {
      return "\n      <div class=\"bg\">\n        <div class=\"bg-quarter-slide\">\n            <div class=\"quarter-left\">\n              <div class=\"quarter-presenter-container\">\n                <div class=\"quarter-presenter presenter\">".concat(this.attrs.title, "</div>\n              </div>\n              <div class=\"name-container\">").concat(this.attrs.name, "</div>\n              <div class=\"position-container\">").concat(this.attrs.position, "</div>\n            </div>\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .bg {\n        width: 100%;\n        height: 100%;\n        background-image: url(".concat(this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg4.jpg", ");\n        background-size: 1920px;\n        background-position: center;\n        transform: scale(1);\n        display: flex;\n        position: relative;\n        align-items: center;\n        flex-wrap: wrap;\n        flex: 1 0 auto;\n        right: -100%;\n      }\n\n      .bg:after {\n        content: \"\";\n        display: block;\n        background: linear-gradient(").concat(this.attrs.overlayColor || "#101820D7,#101820FF", ");\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        z-index: -1;\n      }\n\n      .quarter-left{\n        display: flex;\n        flex-direction: column;\n        align-items: flex-end;\n        position : relative;\n        top: 100%;\n        border-bottom: 15px solid ").concat(this.attrs.mainColor || "#00ff40", ";\n        padding-bottom: 25%;\n        margin-right: 4%;\n      }\n\n      .name-container,.position-container{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n      }\n    \n      .name-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.name.length, 360), "px;\n      }\n\n      .position-container{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.position.length, 360), "px;\n      }\n\n      .bg-quarter-slide{\n        height: 1080px;\n        width: 1920px;\n        display: flex;\n        align-items: center;\n        justify-content: flex-end;\n      }\n\n      .quarter-presenter{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.title.length, 720), "px;\n      }\n\n      .presenter,.big-title{\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: ").concat(this.attrs.mainColor || "#00ff40", ";\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var speed = this.attrs.speed || 2;
      var personConMove = new CSSEffect({
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
        duration: 1000 * speed,
        selector: ".quarter-left"
      });
      var quarterLeft = new CSSEffect({
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
        duration: 1000 * speed,
        selector: ".quarter-left"
      });
      var bg = new CSSEffect({
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
        duration: 1000 * speed,
        selector: ".bg",
        easing: "easeOutQuad"
      });
      var bgOut = new CSSEffect({
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
        duration: 1000 * speed,
        selector: ".bg",
        easing: "easeOutQuad"
      });
      this.addIncident(bg, 0);
      this.addIncident(personConMove, 0);
      this.addIncident(quarterLeft, 0);
      this.addIncident(bgOut, this.calculatedDuration + 1000 * speed);
    }
  }]);

  return RtLslide;
}(MotorCortex.HTMLClip);

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
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
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
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
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

var VideoClip = /*#__PURE__*/function (_BrowserClip) {
  _inherits(VideoClip, _BrowserClip);

  var _super = _createSuper(VideoClip);

  function VideoClip() {
    _classCallCheck(this, VideoClip);

    return _super.apply(this, arguments);
  }

  _createClass(VideoClip, [{
    key: "html",
    get: function get() {
      var _this = this;

      this.width = this.attrs.width || 640;
      this.height = this.attrs.height || 360;
      this.startFrom = this.attrs.startFrom || 0;
      var videoStyle = "width:".concat(this.width, "px;height:").concat(this.height, "px;");
      var videoSources = this.attrs.sources.map(function (item) {
        return "<source src=\"".concat(item, "#t=").concat(_this.startFrom, "\"></source>");
      }).join("\n");
      return "\n      <div>\n          <video id=\"video\" style=\"".concat(videoStyle, "\" preload=\"auto\">\n              ").concat(videoSources, "\n          </video>\n          <canvas id=\"canvas\"></canvas>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      #video{\n        display:none;\n      }\n    ";
    }
  }, {
    key: "onAfterRender",
    value: function onAfterRender() {
      var _this2 = this;

      var video = this.context.getElements("video")[0]; // video.muted = true;

      var canvas = this.context.getElements("canvas")[0];
      var ctx = canvas.getContext("2d");

      var loadedmetadataListener = function loadedmetadataListener() {
        var scaleX = _this2.width / video.videoWidth;
        var scaleY = _this2.width / video.videoWidth;
        canvas.style.transform = "scale(".concat(scaleX, ", ").concat(scaleY, ")");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
      };

      video.addEventListener("loadedmetadata", loadedmetadataListener, {
        once: true
      });
      this.setCustomEntity("video", {
        video: video,
        canvas: canvas,
        ctx: ctx,
        startFrom: this.startFrom
      }); // Audio

      if (this.attrs.audio === false) {
        video.muted = true;
      } else {
        video.crossOrigin = "anonymous";
        this.DescriptiveIncident.attachMediaElementSource(video);
      }
    }
  }]);

  return VideoClip;
}(BrowserClip);

var VideoPlay = /*#__PURE__*/function (_MediaPlayback) {
  _inherits(VideoPlay, _MediaPlayback);

  var _super = _createSuper(VideoPlay);

  function VideoPlay() {
    _classCallCheck(this, VideoPlay);

    return _super.apply(this, arguments);
  }

  _createClass(VideoPlay, [{
    key: "play",
    value: function play() {
      var video = this.element.entity.video;
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
  }, {
    key: "drawFrame",
    value: function drawFrame(video) {
      var _this = this;

      var ctx = this.element.entity.ctx;
      ctx.drawImage(video, 0, 0);
      this.timeout = setTimeout(function () {
        _this.drawFrame(video);
      }, 10);
    }
  }, {
    key: "waitingHandler",
    value: function waitingHandler() {
      this.setBlock("Video loading");
    }
  }, {
    key: "canplayHandler",
    value: function canplayHandler() {
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
    value: function onProgress(fraction, millisecond) {
      var startFrom = millisecond + this.element.entity.startFrom;
      this.element.entity.video.currentTime = (startFrom + millisecond) / 1000;
      this.element.entity.ctx.drawImage(this.element.entity.video, 0, 0);
    }
  }]);

  return VideoPlay;
}(MediaPlayback);

var compositeAttributes = {
  filter: ["blur", "brightness", "contrast", "drop-shadow", "grayscale", "hue-rotate", "invert", "opacity", "saturate", "sepia"]
};
var effects = compositeAttributes.filter;
var effectsUnits = {
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

var VideoEffect = /*#__PURE__*/function (_Effect) {
  _inherits(VideoEffect, _Effect);

  var _super = _createSuper(VideoEffect);

  function VideoEffect() {
    _classCallCheck(this, VideoEffect);

    return _super.apply(this, arguments);
  }

  _createClass(VideoEffect, [{
    key: "getScratchValue",
    value: function getScratchValue() {
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
  }, {
    key: "objToFilterValue",
    value: function objToFilterValue(obj) {
      var string = "";

      for (var filter in obj) {
        string += "".concat(filter, "(").concat(obj[filter]).concat(effectsUnits[filter], ") ");
      }

      return string;
    }
  }, {
    key: "onProgress",
    value: function onProgress(fraction) {
      var targetValues = Object.assign({}, this.initialValue);

      for (var i in effects) {
        var effect = effects[i];

        if (this.initialValue[effect] !== this.targetValue[effect]) {
          targetValues[effect] = fraction * (this.targetValue[effect] - this.initialValue[effect]) + this.initialValue[effect];
        }
      }

      this.element.entity.ctx.filter = this.objToFilterValue(targetValues);
    }
  }]);

  return VideoEffect;
}(Effect);

var name$1 = "@kissmybutton/motorcortex-video";
var version$1 = "1.2.0";
var index$1 = {
  npm_name: name$1,
  version: version$1,
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
  compositeAttributes: compositeAttributes,
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

var VideoPlugin = MotorCortex.loadPlugin(index$1);

var SlideDateOneVid = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits$1(SlideDateOneVid, _MotorCortex$HTMLClip);

  var _super = _createSuper$1(SlideDateOneVid);

  function SlideDateOneVid() {
    _classCallCheck$1(this, SlideDateOneVid);

    return _super.apply(this, arguments);
  }

  _createClass$1(SlideDateOneVid, [{
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
    key: "html",
    get: function get() {
      return "\n      <div class=\"parent\">\n        <div class=\"bg \">\n          <div class =\"vid\"></div>\n          <div class=\"second-slide\">\n            <div class=\"second-slide-titleOne\">".concat(this.attrs.title[0], "</div>\n            <div class=\"second-slide-titleTwo\">").concat(this.attrs.title[1], "</div>\n            <div class=\"second-slide-titleTwo\">").concat(this.attrs.title[2], "</div>\n            <div class=\"word-bg\">\n              <div class=\"word\"></div>\n            </div>\n            <div class=\"short-description\">\n              <p>\n               ").concat(this.attrs.description, "\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"bg-second \">\n          <div class=\"bg-second-slide\">\n              <div class=\"second-date-container\">\n                  <div class=\"second-date\"><span> ").concat(this.attrs.day || "", " ").concat(this.attrs.dayNumber || "", " </span>").concat(this.attrs.month || "", " ").concat(this.attrs.year || "", "</div>\n              </div>\n          </div>\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .bg,.bg-second {\n        width: 1920px;\n        height: 1080px;\n        background-image: url(".concat(this.attrs.bgUrl || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg3.jpg", ");\n        background-size: 1920px;\n        background-position: center;\n        transform: scale(1);\n        display: flex;\n        position: absolute;\n        align-items: center;\n        flex-wrap: wrap;\n        flex: 1 0 auto;\n        left: -100%\n      }\n\n      .parent{\n        position:relative;\n        width: 1920px;\n        height: 1080px;\n        left:0%;\n      }\n\n      .bg:after,.bg-second:after {\n        content: \"\";\n        display: block;\n        background: linear-gradient(").concat(this.attrs.overlayColor || "#101820D7,#101820FF", ");\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        z-index: -1;\n      }\n\n      .bg-second{\n        left:100%;\n        background-image: url(").concat(this.attrs.bgUrl2 || "https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg2.jpg", ");\n      }\n\n      .vid{\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 1920px;\n        height: 1080px;\n      }\n\n      .short-description{\n        font-size: 20px;\n        color: #fff;\n        position: relative;\n        white-space: normal;\n        text-align: left;\n        text-transform: uppercase;\n        font-family: 'Roboto Mono', monospace;\n        width: 720px;\n        left: -50%;\n      }\n\n      .word-bg{\n        background-color:").concat(this.attrs.mainColor || "#00ff40", ";\n        width: 720px;\n        position: relative;\n        left: -50%\n      }\n\n      .word{\n        overflow: hidden;\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 720px\n      }\n\n      .second-slide-titleTwo,.second-slide-titleOne{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.title[0].length, 360), "px;\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n        position: relative;\n        left : -50%;\n      }\n\n      .second-slide-titleTwo{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.title[1].length, 720), "px;\n      }\n\n      .second-slide-titleOne{\n        color :").concat(this.attrs.mainColor || "#00ff40", "\n      }\n\n      .second-slide{\n        position: absolute;\n        left: 10%;\n        display: flex;\n        align-content: center;\n        justify-content: center;\n        flex-direction: column;\n        top: 20%;\n        transform: scale(1);\n      }\n\n      .letter{\n        font-size: ").concat(this.dinamicFontSize(this.attrs.title[2].length, 720), "px;\n        font-weight: 700;\n        font-family: 'Roboto Mono', monospace;\n        text-transform: uppercase;\n        color: #fff;\n        position: relative;\n        position: relative;\n        text-align: center;\n        top : 300px;\n        width: 100%;\n      }\n\n      .second-date-container{\n        border-left: 100px solid ").concat(this.attrs.mainColor || "#00ff40", ";\n        overflow: hidden;\n        width: 200%;\n      }\n\n      .second-date{\n        font-size: 100px;\n        color: #fff;\n        position: relative;\n        white-space: nowrap;\n        text-align: left;\n        text-transform: uppercase;\n        font-family: 'Roboto Mono', monospace;\n        width: 720px;\n        left:-100%;\n      }\n    \n      .second-date span{\n        color: ").concat(this.attrs.mainColor, ";\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var speed = this.attrs.speed || 2;
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
        duration: this.attrs.vidDuration || 6000
      });
      this.addIncident(VideoClip, 0);
      VideoClip.addIncident(Playback, 0);
      var delay = (this.attrs.vidDuration || 6000) - 3000 * speed;
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

      var word = new MotorCortex.HTMLClip({
        css: this.css,
        html: " <div class=\"conttitle\" >".concat(html3.split("undefined")[1], " </div>"),
        selector: ".word",
        containerParams: containerParams
      });
      this.addIncident(word, 0);

      for (var _i = 0; _i < array.length; _i++) {
        var textAnimation = new CSSEffect({
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
        word.addIncident(textAnimation, (2000 + 100 * (_i + 1)) * speed);
      }

      var bgMove = new CSSEffect({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".bg",
        easing: "easeOutQuad"
      });
      var secondSlideTitleOne = new CSSEffect({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "-50%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".second-slide-titleOne",
        easing: "easeOutQuad"
      });
      var secondSlideTitleTwo = new CSSEffect({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "-50%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".second-slide-titleTwo",
        easing: "easeOutQuad"
      });
      var wordBg = new CSSEffect({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "-50%"
        },
        attrs: {}
      }, {
        duration: 1200 * speed,
        selector: ".word-bg",
        easing: "easeOutQuad"
      });
      var shortDescription = new CSSEffect({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "-50%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".short-description",
        easing: "easeOutQuad"
      });
      var bgscaledown = new CSSEffect({
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
        duration: 500 * speed,
        selector: ".bg,.bg-second",
        easing: "easeOutQuad"
      });
      var bgscaledownMove = new CSSEffect({
        animatedAttrs: {
          left: "-25%"
        },
        initialValues: {
          left: "0%"
        },
        attrs: {}
      }, {
        duration: 500 * speed,
        selector: ".bg",
        easing: "easeOutQuad"
      });
      var bgsecondscaledownMove = new CSSEffect({
        animatedAttrs: {
          left: "25%"
        },
        initialValues: {
          left: "100%"
        },
        attrs: {}
      }, {
        duration: 500 * speed,
        selector: ".bg-second",
        easing: "easeOutQuad"
      });
      var secondBgDate = new CSSEffect({
        animatedAttrs: {
          left: "5%"
        },
        initialValues: {
          left: "-100%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".second-date",
        easing: "easeOutQuad"
      });
      var moveSecondS = new CSSEffect({
        animatedAttrs: {
          left: "-100%"
        },
        initialValues: {
          left: "0%"
        },
        attrs: {}
      }, {
        duration: 1000 * speed,
        selector: ".parent",
        easing: "easeOutQuad"
      });
      this.addIncident(bgMove, 0);
      this.addIncident(secondSlideTitleOne, 300 * speed);
      this.addIncident(secondSlideTitleTwo, 500 * speed);
      this.addIncident(wordBg, 500 * speed);
      this.addIncident(shortDescription, 900 * speed);
      this.addIncident(bgscaledown, 3700 * speed + delay);
      this.addIncident(bgscaledownMove, 3700 * speed + delay);
      this.addIncident(bgsecondscaledownMove, 3700 * speed + delay);
      this.addIncident(secondBgDate, 3700 * speed + delay);
      this.addIncident(moveSecondS, this.calculatedDuration + 1000 * speed);
    }
  }]);

  return SlideDateOneVid;
}(MotorCortex.HTMLClip);

var _COLOR = "color";
var introintroVal = {
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
      type: _COLOR
    }
  }
};
var SlideDateOneVidintroVal = {
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
  },
  speed: {
    optional: true,
    type: "number",
    min: 0
  }
};
var SlideDateOneintroVal = {
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
  },
  speed: {
    optional: true,
    type: "number",
    min: 0
  }
};
var prisenterintroVal = {
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
  },
  speed: {
    optional: true,
    type: "number",
    min: 0
  }
};
var SlideDateTwointroVal = {
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
  },
  speed: {
    optional: true,
    type: "number",
    min: 0
  }
};
var BtTslideDateintroVal = {
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
  },
  speed: {
    optional: true,
    type: "number",
    min: 0
  }
};
var transitionintroVal = {
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

var name = "@donkeyclip/motorcortex-slides";
var version = "1.0.24";

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
    exportable: Scrolslide,
    name: "Scrolslide",
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
