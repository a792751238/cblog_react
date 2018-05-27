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
/**
 * Created by fuhuo on 2018/3/29.
 */
var React = require("react");
var Top_1 = require("./Top");
var HelloCon = /** @class */ (function (_super) {
    __extends(HelloCon, _super);
    function HelloCon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloCon.prototype.render = function () {
        return React.createElement(Top_1.Top, { compiler: this.props.compiler, framework: this.props.framework });
    };
    return HelloCon;
}(React.Component));
exports.default = HelloCon;
