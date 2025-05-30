/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * @readonly
 * @enum {string}
 */
var OPERATION_TYPE = {
  API_READY: "API_READY",
  APP_API_START: "APP_API_START",
  APP_API_STOP: "APP_API_STOP",
  SIGNIN: "SIGNIN",
  SIGNOUT: "SIGNOUT",
  GO_HOME: "GO_HOME",
  GO_SITEVIEW: "GO_SITEVIEW",
  GET_SITEVIEW: "GET_SITEVIEW",
  GET_LEVEL: "GET_LEVEL",
  GET_LEVEL_ALL: "GET_LEVEL_ALL",
  GET_CAPTURE: "GET_CAPTURE",
  GET_CAPTURE_ALL: "GET_CAPTURE_ALL",
  GET_PANO: "GET_PANO",
  GET_PANO_ALL: "GET_PANO_ALL",
  GET_ANNOTATION: "GET_ANNOTATION",
  GET_ANNOTATION_ALL: "GET_ANNOTATION_ALL",
  GET_ROOM: "GET_ROOM",
  GET_ROOM_ALL: "GET_ROOM_ALL",
  GET_CAMERA_PARAMETERS: "GET_CAMERA_PARAMETERS",
  SET_CAMERA_ROTATE: "SET_CAMERA_ROTATE",
  SET_CAMERA_ZOOM: "SET_CAMERA_ZOOM",
  SET_CAMERA_LOOKAT: "SET_CAMERA_LOOKAT",
  SET_CAMERA_RESET: "SET_CAMERA_RESET",
  SET_CAMERA_MOVE: "SET_CAMERA_MOVE",
  CHANGE_LEVEL: "CHANGE_LEVEL",
  CHANGE_CAPTURE: "CHANGE_CAPTURE",
  CHANGE_PANO: "CHANGE_PANO",
  CHANGE_PRESET: "CHANGE_PRESET",
  MOVE_TO_BIM_GRID: "MOVE_TO_BIM_GRID",
  FIND_NEAREST_PANOS: "FIND_NEAREST_PANOS",
  ADD_ANNOTATION_FORM: "ADD_ANNOTATION_FORM",
  DELETE_ANNOTATION: "DELETE_ANNOTATION",
  UPDATE_ANNOTATION_FORM: "UPDATE_ANNOTATION_FORM",
  TOGGLE_RESOLVE_ANNOTATION: "TOGGLE_RESOLVE_ANNOTATION",
  GET_FORM_TEMPLATE_ALL: "GET_FORM_TEMPLATE_ALL",
  GET_FORM_TEMPLATE: "GET_FORM_TEMPLATE",
  GET_ANNOTATION_GROUP: "GET_ANNOTATION_GROUP",
  GET_ANNOTATION_GROUP_ALL: "GET_ANNOTATION_GROUP_ALL",
  SET_ACTIVE_ANNOTATION: "SET_ACTIVE_ANNOTATION",
  RESET_ACTIVE_ANNOTATION: "RESET_ACTIVE_ANNOTATION",
  CHANGE_LAYOUT: "CHANGE_LAYOUT"
};

/**
 * @typedef {Object} CupixMessageRequest
 * @property {OPERATION_TYPE} operationType
 * @property {"CUPIXWORKS_API"} header
 * @property {string} uuid
 * @property {number} timestamp
 */
/**
 * @typedef {Object} ErrorType
 * @property {string} error
 */

var resolvers = {};

/**
 * @typedef {Object} siteView4embed
 * @property {number} uuid
 * @property {boolean} quiet
 * @property {boolean} ready
 */
var siteView4embed = {
  uuid: 0,
  quiet: false,
  ready: false
};
window.siteView4embed = siteView4embed;

/**
 * @param {string} htmlDivId
 * @param {string} siteviewUrl
 */
siteView4embed.init = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(htmlDivId, siteviewUrl) {
    var auth,
      elem,
      resolver,
      _siteviewUrl,
      iframe,
      result,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            auth = _args.length > 2 && _args[2] !== undefined ? _args[2] : {
              accessCode: undefined,
              apiToken: undefined
            };
            elem = document.getElementById(htmlDivId);
            if (auth !== null && auth !== void 0 && auth.apiToken) siteviewUrl += "?cupix_api_token=".concat(auth.apiToken);else if (auth !== null && auth !== void 0 && auth.accessCode) siteviewUrl += "?access_code=".concat(auth.accessCode);
            if (elem) {
              iframe = document.createElement("iframe");
              iframe.onload = function () {
                siteView4embed.cupixWindow = iframe.contentWindow;
                if (resolver) resolver();
              };
              iframe.style.width = "100%";
              iframe.style.height = "100%";
              iframe.src = (_siteviewUrl = siteviewUrl) !== null && _siteviewUrl !== void 0 ? _siteviewUrl : "https://apidemo.cupix.works";
              elem.appendChild(iframe);
            }
            result = new Promise(function (res, rej) {
              resolver = res;
            });
            return _context.abrupt("return", result);
          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
siteView4embed.readyPromise = new Promise(function (res, rej) {
  resolvers[-1] = res;
});

/**
 * @param {CupixMessageRequest} event
 * @param {number} waitReady
 * @return {Promise<ErrorType>}
*/
siteView4embed.sendToCupix = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event, waitReady) {
    var error, promise;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!siteView4embed.cupixWindow) {
              _context2.next = 12;
              break;
            }
            event.header = "CUPIXWORKS_API";
            event.uuid = siteView4embed.uuid.toString();
            event.timestamp = Date.now();
            error = {
              error: "timeout: ".concat(event.operationType, " ").concat(waitReady, "ms")
            };
            /** @type {Promise<ErrorType>} */
            promise = new Promise(function (resolve) {
              var id = siteView4embed.uuid;
              resolvers[id] = resolve;
              setTimeout(function () {
                if (resolvers[id]) {
                  resolve(error);
                }
                ;
                if (!siteView4embed.ready) {
                  resolvers[-1](false);
                }
              }, waitReady !== null && waitReady !== void 0 ? waitReady : 5000);
            });
            _context2.next = 8;
            return siteView4embed.readyPromise;
          case 8:
            siteView4embed.cupixWindow.postMessage(event, "*");
            if (!siteView4embed.quiet) console.log("sendToCupix: [".concat(event.operationType, "]"), JSON.stringify(event));
            siteView4embed.uuid++;
            return _context2.abrupt("return", promise);
          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * @param {number} timeout
*/
siteView4embed.start = function (timeout) {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.APP_API_START
  }, timeout);
};
siteView4embed.stop = function () {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.APP_API_STOP
  });
};

/**
 * @param {string} teamDomain
 * @param {string} email
 * @param {string} password
 * */
siteView4embed.signin = function (teamDomain, email, password) {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.SIGNIN,
    operationArgs: {
      email: email,
      password: password,
      teamDomain: teamDomain
    }
  });
};
siteView4embed.signinWithToken = function (token) {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.SIGNIN,
    operationArgs: {
      token: token
    }
  });
};
siteView4embed.signout = function () {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.SIGNOUT
  });
};
siteView4embed.goHome = function () {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.GO_HOME
  });
};

/**
* @param {string} siteViewKey
* @param {boolean} hideSideBar
* @param {'top' | 'bottom'} mapViewPosition
* @param {"BASIC" | "TIMELINE" | "BIM_COMPARE"} layout
* @param {string} openingGeolocation
* @param {object} { coordinate: [string, string], offset?: { x: 0, y: 0, z: 0 } }
* */
siteView4embed.goSiteView = function (siteViewKey) {
  var hideSideBar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var mapViewPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'top';
  var openingGeolocation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var openingLevelId = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
  var openingLevelName = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;
  var openingCaptureId = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : undefined;
  var openingCaptureDate = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : undefined;
  var openingPosition = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : undefined;
  var openingBimGrid = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : undefined;
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.GO_SITEVIEW,
    operationArgs: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
      siteViewKey: siteViewKey,
      hideSideBar: hideSideBar,
      mapViewPosition: mapViewPosition,
      openingGeolocation: openingGeolocation
    }, openingLevelId && {
      openingLevelId: openingLevelId
    }), openingLevelName && {
      openingLevelName: openingLevelName
    }), openingCaptureId && {
      openingCaptureId: openingCaptureId
    }), openingCaptureDate && {
      openingCaptureDate: openingCaptureDate
    }), openingPosition && {
      openingPosition: openingPosition
    }), {}, {
      openingBimGrid: openingBimGrid,
      deepLink: true
    })
  });
};
siteView4embed.getSiteView = function () {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.GET_SITEVIEW
  });
};
siteView4embed.getLevel = function (levelId) {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.GET_LEVEL,
    operationArgs: {
      levelId: levelId
    }
  });
};
siteView4embed.getLevelAll = function () {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.GET_LEVEL_ALL
  });
};
siteView4embed.getCapture = function (captureId) {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.GET_CAPTURE,
    operationArgs: {
      captureId: captureId
    }
  });
};
siteView4embed.getCaptureAll = function () {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.GET_CAPTURE_ALL
  });
};
siteView4embed.getPano = function (panoId) {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.GET_PANO,
    operationArgs: {
      panoId: panoId
    }
  });
};
siteView4embed.getPanoAll = function () {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.GET_PANO_ALL
  });
};
siteView4embed.getAnnotation = function (annotationId) {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.GET_ANNOTATION,
    operationArgs: {
      annotationId: annotationId
    }
  });
};
siteView4embed.getAnnotationAll = function () {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.GET_ANNOTATION_ALL
  });
};
siteView4embed.getRoom = function (roomId) {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.GET_ROOM,
    operationArgs: {
      roomId: roomId
    }
  });
};
siteView4embed.getRoomAll = function () {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.GET_ROOM_ALL
  });
};
siteView4embed.getCameraParameters = function () {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.GET_CAMERA_PARAMETERS
  });
};
siteView4embed.setCameraRotate = function (direction, angle) {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.SET_CAMERA_ROTATE,
    operationArgs: {
      direction: direction,
      angle: angle
    }
  });
};
siteView4embed.setCameraZoom = function (angleInDegree) {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.SET_CAMERA_ZOOM,
    operationArgs: {
      angleInDegree: angleInDegree
    }
  });
};
siteView4embed.setCameraLookAt = function (x, y, z) {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.SET_CAMERA_LOOKAT,
    operationArgs: {
      lookAtX: x,
      lookAtY: y,
      lookAtZ: z
    }
  });
};
siteView4embed.setCameraReset = function () {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.SET_CAMERA_RESET
  });
};
siteView4embed.setCameraMove = function (direction) {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.SET_CAMERA_MOVE,
    operationArgs: {
      direction: direction
    }
  });
};
siteView4embed.changeLevel = function (levelId) {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.CHANGE_LEVEL,
    operationArgs: {
      levelId: levelId
    }
  });
};
siteView4embed.changeCapture = function (captureId) {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.CHANGE_CAPTURE,
    operationArgs: {
      captureId: captureId
    }
  });
};
siteView4embed.changePano = function (panoId) {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.CHANGE_PANO,
    operationArgs: {
      panoId: panoId
    }
  });
};
siteView4embed.changePreset = function (presetName) {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.CHANGE_PRESET,
    operationArgs: {
      presetName: presetName
    }
  });
};
siteView4embed.moveToBimGrid = function (info) {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.MOVE_TO_BIM_GRID,
    operationArgs: {
      bimGrid: {
        coordinate: info.coordinate,
        offset: info.offset
      }
    }
  });
};
siteView4embed.findNearestPanos = function (levelId, captureId, coordX, coordY, normalX, normalY, maxCount) {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.FIND_NEAREST_PANOS,
    operationArgs: {
      levelId: levelId,
      captureId: captureId,
      coordX: coordX,
      coordY: coordY,
      normalX: normalX,
      normalY: normalY,
      maxCount: maxCount
    }
  });
};
siteView4embed.addAnnotation = function (formTemplateId, annotationGroupId, name, values) {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.ADD_ANNOTATION_FORM,
    operationArgs: {
      formTemplateId: formTemplateId,
      annotationGroupId: annotationGroupId,
      name: name,
      values: values
    }
  });
};
siteView4embed.deleteAnnotation = function (annotationId) {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.DELETE_ANNOTATION,
    operationArgs: {
      annotationId: annotationId
    }
  });
};
siteView4embed.updateAnnotation = function (annotationId, name, values) {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.UPDATE_ANNOTATION_FORM,
    operationArgs: {
      annotationId: annotationId,
      name: name,
      values: values
    }
  });
};
siteView4embed.toggleResolveAnnotation = function (annotationId) {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.TOGGLE_RESOLVE_ANNOTATION,
    operationArgs: {
      annotationId: annotationId
    }
  });
};
siteView4embed.getFormTemplates = function () {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.GET_FORM_TEMPLATE_ALL
  });
};
siteView4embed.getFormTemplate = function (formTemplateId) {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.GET_FORM_TEMPLATE,
    operationArgs: {
      formTemplateId: formTemplateId
    }
  });
};
siteView4embed.getAnnotationGroup = function (annotationGroupId) {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.GET_ANNOTATION_GROUP,
    operationArgs: {
      annotationGroupId: annotationGroupId
    }
  });
};
siteView4embed.getAnnotationGroupAll = function () {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.GET_ANNOTATION_GROUP_ALL
  });
};

/** @param {number} annotationId */
siteView4embed.setActiveAnnotation = function (annotationId) {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.SET_ACTIVE_ANNOTATION,
    operationArgs: {
      annotationId: annotationId
    }
  });
};
siteView4embed.resetActiveAnnotation = function () {
  return siteView4embed.sendToCupix({
    operationType: OPERATION_TYPE.RESET_ACTIVE_ANNOTATION
  });
};
function log() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }
  console.log("%c".concat(params.join(' ')), 'color: #bada55;');
}
function ready() {
  resolvers[-1](true);
  siteView4embed.ready = true;
}
window.addEventListener("message", /** @param {MessageEvent<CupixMessageResponse>} e */
function (e) {
  var _response$request;
  if (e.source !== siteView4embed.cupixWindow) return;
  var response = e && e.data;
  if (response == undefined) return;
  if (response.header != "CUPIXWORKS_API") return;
  if (!siteView4embed.quiet) log("[CUPIXWORKS_API]", JSON.stringify(response || {}));
  if (!siteView4embed.ready) ready(response);
  if ((_response$request = response.request) !== null && _response$request !== void 0 && _response$request.uuid && typeof resolvers[response.request.uuid] === "function") {
    resolvers[response.request.uuid](response.response || response);
    resolvers[response.request.uuid] = null;
  }
}, false);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_objectSpread({}, siteView4embed));
var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
