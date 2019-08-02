import React, { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/highlight";

var Highlight = function Highlight(_ref) {
  var children = _ref.children,
      className = _ref.className,
      element = _ref.element,
      innerHTML = _ref.innerHTML,
      languages = _ref.languages;
  useEffect(function () {
    highlightCode();
  });
  var elem = useRef();

  var highlightCode = function highlightCode() {
    var nodes = elem.current.querySelectorAll("pre code");

    if (languages.length === 0 && className) {
      languages.push(className);
    }

    languages.forEach(function (lang) {
      hljs.registerLanguage(lang, require("highlight.js/lib/languages/" + lang));
    });
    nodes.forEach(function (node) {
      return hljs.highlightBlock(node);
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
      return React.createElement(element, props);
    }

    return React.createElement("div", props);
  }

  if (element) {
    return React.createElement(element, props, children);
  }

  return React.createElement("pre", {
    ref: elem
  }, React.createElement("code", {
    className: className
  }, children));
};

Highlight.defaultProps = {
  innerHTML: false,
  className: undefined,
  languages: []
};
export default Highlight;