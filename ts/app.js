"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./public/index.html");
var React = require("react");
require("Lay");
var ReactDOM = require("react-dom");
var Hello_1 = require("./Hello");
ReactDOM.render(React.createElement(Hello_1.default, { name: "TypeScript", enthusiasmLevel: 10 }), document.getElementById('root'));
