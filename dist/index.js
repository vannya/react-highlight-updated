"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _highlight = _interopRequireDefault(require("highlight.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Highlight = function Highlight(_ref) {
  var children = _ref.children,
      className = _ref.className,
      element = _ref.element,
      innerHTML = _ref.innerHTML;
  (0, _react.useEffect)(function () {
    highlightCode();
  });
  var elem = (0, _react.useRef)();

  var highlightCode = function highlightCode() {
    var nodes = elem.current.querySelectorAll("pre code");
    nodes.forEach(function (node) {
      return _highlight.default.highlightBlock(node);
    });
  };

  var props = {
    ref: elem,
    className: className
  };

  if (innerHTML) {
    props.dangerouslySetInnerHTML = {
      __html: children
    };

    if (element) {
      return _react.default.createElement(element, props);
    }

    return /*#__PURE__*/_react.default.createElement("div", props);
  }

  if (element) {
    return _react.default.createElement(element, props, children);
  }

  return /*#__PURE__*/_react.default.createElement("pre", {
    ref: elem
  }, /*#__PURE__*/_react.default.createElement("code", {
    className: className
  }, children));
};

Highlight.defaultProps = {
  innerHTML: false,
  className: undefined,
  element: undefined
};
var _default = Highlight;
exports.default = _default;