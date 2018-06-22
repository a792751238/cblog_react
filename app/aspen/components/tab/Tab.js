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
Object.defineProperty(exports, "__esModule", {value: true});
var React = require("react");
var classNames = require("classnames");
var TabItem_1 = require("./TabItem");
var TabContents_1 = require("./TabContents");
var Tab = /** @class */ (function (_super) {
    __extends(Tab, _super);
    function Tab(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            activeId: props.active || ''
        };
        _this.renderItems = _this.renderItems.bind(_this);
        return _this;
    }

    Tab.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.active !== this.props.active) {
            this.setState({activeId: nextProps.active});
        }
    };
    Tab.prototype.handleChoose = function (id) {
        var _this = this;
        var onSelect = this.props.onSelect;
        this.setState({
            activeId: id
        }, function () {
            onSelect && onSelect.call(_this, id);
        });
    };
    Tab.prototype.renderItems = function () {
        var _this = this;
        var activeId = this.state.activeId;
        var children = this.props.children;
        var length = children.length / 2;
        var arr = children.slice(0, length);
        var items = React.Children.map(arr, function (child, index) {
            if (!child)
                return;
            var id = child.props.id || index.toString();
            var props = {
                active: activeId,
                id: id,
                onClick: _this.handleChoose.bind(_this, id)
            };
            return React.cloneElement(child, props);
        });
        return items;
    };
    Tab.prototype.renderContents = function () {
        var activeId = this.state.activeId;
        var children = this.props.children;
        var length = children.length / 2;
        var arr = children.slice(-length);
        var contents = React.Children.map(arr, function (child, index) {
            if (!child)
                return;
            var id = child.props.id || index.toString();
            var props = {
                activeId: activeId,
                id: id,
            };
            return React.cloneElement(child, props);
        });
        return contents;
    };
    Tab.prototype.render = function () {
        var theme = this.props.theme;
        var tabPaneClassName = classNames({
            'layui-tab-title': true,
        });
        var tabClassName = classNames({
            'layui-tab': true,
            'layui-tab-card': !(theme === 'default') && theme === 'card',
            'layui-tab-brief': !(theme === 'default') && theme === 'brief',
        });
        return (React.createElement("div", {className: tabClassName},
            React.createElement("ul", {className: tabPaneClassName}, this.renderItems()),
            React.createElement("div", {className: "layui-tab-content"}, this.renderContents())));
    };
    Tab.Item = TabItem_1.default;
    Tab.Content = TabContents_1.default;
    Tab.defaultProps = {
        theme: 'default',
    };
    return Tab;
}(React.Component));
exports.default = Tab;
