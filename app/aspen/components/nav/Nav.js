/**
 * Created by easterCat on 2018/6/7.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NavList from './List';

class Nav extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            domNode: null,
            hoverId: null,
            activeId: props.defaultId || '',
        };

        this.setHoverId = this.setHoverId.bind(this);
        this.renderLists = this.renderLists.bind(this);
        this.selectActiveId = this.selectActiveId.bind(this);
    }

    setHoverId(hoverId) {
        this.setState({
            hoverId
        })
    }

    selectActiveId(activeId) {
        this.setState({
            activeId
        })
    }

    // animationEvent(value) {
    //     let clientWidth = this.state.clientWidth;
    //     let iCur = 0;
    //     let iSpeed = clientWidth / 7;
    //     let self = this;
    //
    //     clearInterval(timer);
    //
    //     let timer = setInterval(function () {
    //         iCur = iCur + iSpeed;
    //
    //         if (iCur > clientWidth) {
    //             clearInterval(timer)
    //         } else {
    //             self.setState({
    //                 clientWidth: iCur
    //             })
    //         }
    //     }, 30);
    // }

    renderLists() {
        const {activeId, hoverId} = this.state;
        const children = this.props.children;
        let navLists;

        navLists = React.Children.map(children, (child, index) => {
            if (!child) return;
            const id = child.props.id || index.toString();
            const props = {
                activeId: activeId,
                hoverId: hoverId,
                id,
                onMouseEnter: this.setHoverId,
                onMountLeave: this.setHoverId,
                selectActiveId: this.selectActiveId
            };
            return React.cloneElement(child, props);
        });

        return navLists;
    }

    render() {
        let ulClass = classNames({
            'layui-nav': true,
            'layui-nav-tree': false,
            'layui-inline': false
        });

        return (
            <ul className={ulClass}>
                {this.renderLists()}
            </ul>
        )
    }
}

Nav.List = NavList;

Nav.defaultProps = {
    type: 'default'
};

Nav.propTypes = {
    type: PropTypes.string,
};

export default Nav;