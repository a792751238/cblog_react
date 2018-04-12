/**
 * Created by easterCat on 2018/4/12.
 */

import React from 'react';
import gantt from './alias/jquery.fn.gantt'
import './prettify.css'
import './style.css'

class Gantt extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let {
            ganttData
        } = this.props;

        $('#gantt').css({
            'width': '800px',
            'background': '#f7f7f7',
        })
            .gantt({
                source: ganttData,
                navigate: 'scroll',//buttons  scroll
                scale: "days",// months weeks days hours
                // maxScale: "days",
                // minScale: "days",
                waitText: '数据加载中,请稍微等候',
                months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                dow: ["一", "二", "三", "四", "五", "六", "日"],
                itemsPerPage: ganttData.length, //显示多少列
                onItemClick: function (data) {
                    console.log("Item clicked - show some details", data);
                },
                onAddClick: function (dt, rowId) {
                    console.group("Empty space clicked - add an item!");
                    console.log(dt);
                    console.log(rowId);
                },
                onRender: function () {
                    setTimeout(() => {
                        $('.fn-gantt .leftPanel,.bottom').css({
                            'display': 'none'
                        })
                    }, 0)
                }
            });
    }

    render() {
        return (
            <div id="gantt"></div>
        )
    }
}


Gantt.defaultProps = {
    ganttData: [
        {
            name: "构件数量",
            desc: "确定项目范围",
            values: [{
                from: "/Date(1320192000000)/",
                to: "/Date(1320592000000)/",
                desc: "<b>任务名称</b>: 获取核心资源<br/><b>进度</b>: 0%<br/><b>工期</b>: 3<br/><b>开始日期</b>: 2017-1-8<br/><b>结束日期</b>: 2017-1-10",
                customClass: "ganttRed",
                label: "确定项目范围",
            }]
        }, {
            name: "构件数量",
            desc: "确定项目范围",
            values: [{
                from: "/Date(1320192000000)/",
                to: "/Date(1320592000000)/",
                desc: "<b>任务名称</b>: 获取核心资源<br/><b>进度</b>: 0%<br/><b>工期</b>: 3<br/><b>开始日期</b>: 2017-1-8<br/><b>结束日期</b>: 2017-1-10",
                customClass: "ganttRed",
                label: "确定项目范围",
            }]
        }, {
            name: "构件数量",
            desc: "确定项目范围",
            values: [{
                from: "/Date(1320192000000)/",
                to: "/Date(1320592000000)/",
                desc: "<b>任务名称</b>: 获取核心资源<br/><b>进度</b>: 0%<br/><b>工期</b>: 3<br/><b>开始日期</b>: 2017-1-8<br/><b>结束日期</b>: 2017-1-10",
                customClass: "ganttRed",
                label: "确定项目范围",
            }]
        }, {
            name: "构件数量",
            desc: "确定项目范围",
            values: [{
                from: "/Date(1320192000000)/",
                to: "/Date(1320592000000)/",
                desc: "<b>任务名称</b>: 获取核心资源<br/><b>进度</b>: 0%<br/><b>工期</b>: 3<br/><b>开始日期</b>: 2017-1-8<br/><b>结束日期</b>: 2017-1-10",
                customClass: "ganttRed",
                label: "确定项目范围",
            }]
        }, {
            name: "构件数量",
            desc: "确定项目范围",
            values: [{
                from: "/Date(1320192000000)/",
                to: "/Date(1320592000000)/",
                desc: "<b>任务名称</b>: 获取核心资源<br/><b>进度</b>: 0%<br/><b>工期</b>: 3<br/><b>开始日期</b>: 2017-1-8<br/><b>结束日期</b>: 2017-1-10",
                customClass: "ganttRed",
                label: "确定项目范围",
            }]
        }, {
            name: "构件数量",
            desc: "确定项目范围",
            values: [{
                from: "/Date(1320192000000)/",
                to: "/Date(1320592000000)/",
                desc: "<b>任务名称</b>: 获取核心资源<br/><b>进度</b>: 0%<br/><b>工期</b>: 3<br/><b>开始日期</b>: 2017-1-8<br/><b>结束日期</b>: 2017-1-10",
                customClass: "ganttRed",
                label: "确定项目范围",
            }]
        }, {
            name: "构件数量",
            desc: "确定项目范围",
            values: [{
                from: "/Date(1320192000000)/",
                to: "/Date(1320592000000)/",
                desc: "<b>任务名称</b>: 获取核心资源<br/><b>进度</b>: 0%<br/><b>工期</b>: 3<br/><b>开始日期</b>: 2017-1-8<br/><b>结束日期</b>: 2017-1-10",
                customClass: "ganttRed",
                label: "确定项目范围",
            }]
        }, {
            name: "构件数量",
            desc: "确定项目范围",
            values: [{
                from: "/Date(1320192000000)/",
                to: "/Date(1320592000000)/",
                desc: "<b>任务名称</b>: 获取核心资源<br/><b>进度</b>: 0%<br/><b>工期</b>: 3<br/><b>开始日期</b>: 2017-1-8<br/><b>结束日期</b>: 2017-1-10",
                customClass: "ganttRed",
                label: "确定项目范围",
            }]
        }, {
            name: "构件数量",
            desc: "确定项目范围",
            values: [{
                from: `/Date(${Date.now() - 10000})/`,
                to: `/Date(${Date.now()})/`,
                desc: "<b>任务名称</b>: 获取核心资源<br/><b>进度</b>: 0%<br/><b>工期</b>: 3<br/><b>开始日期</b>: 2017-1-8<br/><b>结束日期</b>: 2017-1-10",
                customClass: "ganttRed",
                label: "确定项目范围",
            }]
        }]
}

export default  Gantt;