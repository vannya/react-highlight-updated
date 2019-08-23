"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _highlight = _interopRequireDefault(require("highlight.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor
              ? Object.getOwnPropertyDescriptor(obj, key)
              : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

var Highlight = function Highlight(_ref) {
  var children = _ref.children,
    className = _ref.className,
    element = _ref.element,
    innerHTML = _ref.innerHTML;
  (0, _react.useEffect)(function() {
    highlightCode();
  });
  var elem = (0, _react.useRef)();

  var highlightCode = function highlightCode() {
    var nodes = elem.current.querySelectorAll("pre code");
    nodes.forEach(function(node) {
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

    return _react.default.createElement("div", props);
  }

  if (element) {
    return _react.default.createElement(element, props, children);
  }

  return _react.default.createElement(
    "pre",
    {
      ref: elem
    },
    _react.default.createElement(
      "code",
      {
        className: className
      },
      children
    )
  );
};

Highlight.defaultProps = {
  innerHTML: false,
  className: undefined,
  element: undefined
};
var _default = Highlight;
exports.default = _default;
