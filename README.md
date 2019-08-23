# react-highlight-updated [![npm version](https://badge.fury.io/js/react-highlight-updated.svg)](https://badge.fury.io/js/react-highlight-updated)  [![Build Status](https://travis-ci.org/vannya/react-highlight-updated.svg?branch=master)](https://travis-ci.org/vannya/react-highlight-updated)

Updated react-highlight package for syntax highlighting in React using highlight.js.  

This version was created because the [react-highlight package](https://github.com/akiran/react-highlight/) we were using as part of a documentation site was out of date and breaking our test cases. Refactored to a functional component, rewrote refs, updated all build packages and added documentation into the distribution package. This is a breaking change to the original react-highlight package.  
Note: This package now has a peer dependency on React version 16.8.6 due to useEffect and useRef.  

### Latest version

`0.1.4`

### Installation

```bash
  npm install react-highlight-updated highlight.js --save
```

### Usage

#### Importing component

```js
import Highlight from "react-highlight";
```

#### Adding styles - Two methods

##### **CSS**

Choose the [theme](https://highlightjs.org/static/demo/) for syntax highlighting and add corresponding styles of highlight.js

```css
  <link rel="stylesheet" href="/path/to/styles/theme-name.css">
```

The styles will most likely be in `node_modules/highlight.js/styles` folder.

##### **Import into file**

Inside the file that highlight will be used (or a parent file of multiple children), import the stylesheet.

```js
import "/path/to/styles/theme-name.css";
```

### Props:

- className: custom class name
- innerHTML: enable to render markup with dangerouslySetInnerHTML
- element: render code snippet inside specified element

### Examples:

#### Code Sandbox Example

[![Edit react-highlight-updated](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/laughing-swanson-euuss?fontsize=14)

#### Syntax highlighting of single code snippet

Code snippet that requires syntax highlighting should be passed as children to Highlight component in string format. Language name of code snippet should be specified as className.

```html
<Highlight className="language-name-of-snippet">
  {"code snippet to be highlighted"}
</Highlight>
```

#### Syntax highlighting of mutiple code snippets

Set `innerHTML=true` to highlight multiple code snippets at a time.
This is especially useful if html with multiple code snippets is generated from preprocesser tools like markdown.

**Warning:** If innerHTML is set to true, make sure the html generated with code snippets is from trusted source.

```html
<Highlight innerHTML="{true}">
  {"html with multiple code snippets"}
</Highlight>
```
