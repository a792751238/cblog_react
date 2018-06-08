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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classNames = require("classnames");
var TabContents = /** @class */ (function (_super) {
    __extends(TabContents, _super);
    function TabContents(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    TabContents.prototype.handleClick = function () {
        var id = this.props.id;
        this.props.onClick && this.props.onClick(id);
    };
    TabContents.prototype.render = function () {
        var _a = this.props, children = _a.children, activeId = _a.activeId, id = _a.id, disabled = _a.disabled, other = __rest(_a, ["children", "activeId", "id", "disabled"]);
        var className = classNames({
            'layui-tab-item': true,
            'layui-show': activeId === id,
        });
        return (React.createElement("div", { className: className }, children));
    };
    return TabContents;
}(React.Component));
exports.default = TabContents;
