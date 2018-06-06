import * as React from 'react';
import * as classNames from 'classnames';

export interface props {
    children?: any,
    onClick?: (activeId: string) => void,
    active?: string,
    disabled?: boolean,
    id: string,
}

class NavItem extends React.Component<props, object> {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let {id} = this.props;
        this.props.onClick && this.props.onClick(id);
    }

    render() {
        let {children, active, id, disabled, ...other} = this.props;

        let className = classNames({
            'layui-this': active === id,
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