import * as React from 'react';
import * as classNames from 'classnames';

export interface props {
    children?: any,
    onClick?: any,
    onChoose?: any;
    active?: boolean,
    disabled?: boolean,
    id?: string,
}

class NavItem extends React.Component<props, object> {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick && this.props.onClick();
        this.props.onChoose && this.props.onChoose();
    }

    render() {
        let {children, active, disabled, ...other} = this.props;

        let className = classNames({
            'layui-this': active,
            'layui-btn-disabled': disabled,
        });

        return (
            <li className={className} {...other} onClick={this.handleClick}>
                {children}
            </li>
        )
    }
}

export default NavItem;