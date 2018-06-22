"use strict";
var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({__proto__: []} instanceof Array && function (d, b) {
                d.__proto__ = b;
            }) ||
            function (d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
            };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }

            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
var __assign = (this && this.__assign) || Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
var __rest = (this && this.__rest) || function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    };
Object.defineProperty(exports, "__esModule", {value: true});
var React = require("react");
var classNames = require("classnames");
var Tag = /** @class */ (function (_super) {
    __extends(Tag, _super);
    function Tag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }

    Tag.prototype.render = function () {
        var _a = this.props, children = _a.children, shape = _a.shape, color = _a.color,
            other = __rest(_a, ["children", "shape", "color"]);
        var prefix = 'layui';
        var className = classNames((_b = {},
            _b[prefix + "-badge"] = !shape,
            _b[prefix + "-badge-" + shape] = !!shape,
            _b[prefix + "-bg-" + color] = color,
            _b));
        return (React.createElement("span", __assign({className: className}, other), children));
        var _b;
    };
    return Tag;
}(React.Component));
exports.default = Tag;
