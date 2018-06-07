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
var classNames = require("classnames");
var NavItem_1 = require("./NavItem");
var Nav = /** @class */ (function (_super) {
    __extends(Nav, _super);
    function Nav(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            activeId: props.active || ''
        };
        _this.renderItems = _this.renderItems.bind(_this);
        return _this;
    }
    Nav.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.active !== this.props.active) {
            this.setState({ activeId: nextProps.active });
        }
    };
    Nav.prototype.handleChoose = function (id) {
        var _this = this;
        var onSelect = this.props.onSelect;
        this.setState({
            activeId: id
        }, function () {
            onSelect && onSelect.call(_this, id);
        });
    };
    Nav.prototype.renderItems = function () {
        var _this = this;
        var activeId = this.state.activeId;
        var children = this.props.children;
        var items = React.Children.map(children, function (child, index) {
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
    Nav.prototype.render = function () {
        var theme = this.props.theme;
        var tabPaneClassName = classNames({
            'layui-tab-title': true,
        });
        var tabClassName = classNames({
            'layui-tab': true,
            'layui-tab-card': !(theme === 'default') && theme === 'card',
            'layui-tab-brief': !(theme === 'default') && theme === 'brief',
        });
        return (React.createElement("div", { className: tabClassName },
            React.createElement("ul", { className: tabPaneClassName }, this.renderItems())));
    };
    Nav.Item = NavItem_1.default;
    Nav.defaultProps = {
        theme: 'default',
    };
    return Nav;
}(React.Component));
exports.default = Nav;
