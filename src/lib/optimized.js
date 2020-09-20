import React, { useEffect, useRef } from "react";
import hljs from "highlight.js";

const Highlight = ({ children, className, element, innerHTML, languages }) => {
  useEffect(() => {
    highlightCode();
  });

  const elem = useRef();

  const highlightCode = () => {
    const nodes = elem.current.querySelectorAll("pre code");
    if (languages.length === 0 && className) {
      languages.push(className);
    }

    languages.forEach(lang => {
      hljs.registerLanguage(
        lang,
        require("highlight.js/lib/languages/" + lang)
      );
    });

    nodes.forEach(node => hljs.highlightBlock(node));
  };

  const props = { ref: elem, className };

  if (innerHTML) {
    props.dangerouslySetInnerHTML = { __html: children };
    if (element) {
      return React.createElement(element, props);
    }
    return <div {...props} />;
  }

  if (element) {
    return React.createElement(element, props, children);
  }
  return (
    <pre ref={elem}>
      <code className={className}>{children}</code>
    </pre>
  );
};

Highlight.defaultProps = {
  innerHTML: false,
  className: undefined,
  languages: []
};

export default Highlight;
