/**
 * Created by easterCat on 2018/6/8.
 */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Breakcrume extends React.Component {

    constructor(props) {
        super(props);

        this.filterActiveProps = this.filterActiveProps.bind(this);
    }

    filterActiveProps(dataObj, showSp) {
        let {separator} = this.props;

        if (dataObj) {
            let props = {};
            let style = {};

            if (dataObj.hasOwnProperty('href')) {
                Object.assign(props, {
                    href: dataObj.href
                })
            }
            if (dataObj.hasOwnProperty('onClick')) {
                Object.assign(props, {
                    onClick: dataObj.onClick
                })
            }
            if (!showSp) {
                Object.assign(style, {
                    fontWeight: '700'
                })
            }


            return (
                <span key={dataObj.id}>
                    <a {...props} style={style}>{dataObj.text}</a>
                    {
                        showSp ?
                            <span data-lay-separator>{separator || ''}</span> :
                            null
                    }
                </span>
            )
        }
    }

    render() {
        let {className, datas} = this.props;

        let crumeClass = classnames({
            'layui-breadcrumb': true
        }, className);

        return (
            <span style={{visibility: 'visible'}} className={crumeClass}>
            {
                datas && datas.map((data, index) => {
                    let content;
                    if (index === datas.length - 1) {
                        content = this.filterActiveProps(data, false)
                    } else {
                        content = this.filterActiveProps(data, true)
                    }

                    return content;
                })
            }
        </span>
        )
    }
}

Breakcrume.defaultProps = {
    style: {},
};

Breakcrume.propTypes = {
    style: PropTypes.object
};

export default Breakcrume;