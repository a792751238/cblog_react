"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var HelloCon_1 = require("./test/HelloCon");
var Tag_1 = require("./components/tag/Tag");
var Hello = /** @class */ (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hello.prototype.render = function () {
        var _a = this.props, name = _a.name, _b = _a.enthusiasmLevel, enthusiasmLevel = _b === void 0 ? 1 : _b;
        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }
        return (React.createElement("div", { className: "hello" },
            React.createElement("div", { className: "greeting" },
                "Hello ",
                name + getExclamationMarks(enthusiasmLevel)),
            React.createElement(HelloCon_1.default, { compiler: "today", framework: "good boy" }),
            React.createElement(Tag_1.default, { shape: "dot", color: "orange" }),
            React.createElement(Tag_1.default, { color: "orange" }, "hello world"),
            React.createElement(Tag_1.default, { shape: "rim" }, "hello world")));
    };
    return Hello;
}(React.Component));
exports.default = Hello;
function getExclamationMarks(numChars) {
    return Array(numChars + 1).join('!');
}
