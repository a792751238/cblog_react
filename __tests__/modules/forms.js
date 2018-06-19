/**
 * Created by easterCat on 2018/6/19.
 */
import React from 'react';
import Form from '../../app/modules/form/Form';
import {shallow} from 'enzyme';


const setup = () => {
    // 模拟 props
    const props = {
        // Jest 提供的mock 函数
        onAddClick: jest.fn((e) => {
        })
    }

    // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
    const wrapper = shallow(<Form {...props} />)
    return {
        props,
        wrapper
    }
};

describe('Form', () => {
    const {wrapper, props} = setup();

    // case1
    // 通过查找是否存在 Input,测试组件正常渲染
    it('AddTodoView Component should render', () => {
        //.find(selector) 是 Enzyme shallow Rendering 提供的语法, 用于查找节点
        // 详细用法见 Enzyme 文档 http://airbnb.io/enzyme/docs/api/shallow.html
        expect(wrapper.find('input').exists());
    })

    // case3
    // 没有输入内容并敲下回车键，测试组件没有调用props的方法
    it('When the Enter key was pressed without text, onAddClick() shoule not be called', () => {
        // mock input 输入和 Enter事件
        const mockEvent = {
            key: 'Enter', // enter 事件
            target: {
                value: '哈哈哈啊'
            }
        }

        // 通过 Enzyme 提供的 simulate api 模拟 DOM 事件
        wrapper.find('input').simulate('keydown', mockEvent)
        // 判断 props.onAddClick 是否被调用
        expect(props.onAddClick).not.toBeCalled()
    })

})