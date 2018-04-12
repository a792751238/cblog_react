/**
 * Created by easterCat on 2018/4/12.
 */

import React from 'react';
import gantt from './alias/jquery.fn.gantt'
import './prettify.css'
import './style.css'

class Gante extends React.Component {


    componentDidMount() {

        $('#gante').css({
            'background': '#f7f7f7',
            'width': '800px',
            'overflow': 'auto'
        })
            .gantt({
                source: [
                    {
                        name: "task  1",
                        desc: "确定项目范围",
                        values: [{
                            from: "/Date(1320192000000)/",
                            to: "/Date(1320592000000)/",
                            desc: "<b>任务名称</b>: 获取核心资源<br/><b>进度</b>: 0%<br/><b>工期</b>: 3<br/><b>开始日期</b>: 2017-1-8<br/><b>结束日期</b>: 2017-1-10",
                            customClass: "ganttRed",
                            label: "确定项目范围",
                        }]
                    }, {
                        name: "task  2",
                        desc: "这是描述",
                        values: [{
                            from: "/Date(1322611200000)/",
                            to: "/Date(1323302400000)/",
                            label: "",
                            customClass: "ganttRed"
                        }]
                    }, {
                        name: "task  3",
                        desc: "",
                        values: [{
                            from: "/Date(1323802400000)/",
                            to: "/Date(1325685200000)/",
                            label: "",
                            customClass: "ganttGreen"
                        }]
                    }, {
                        name: "task  4",
                        desc: "描述",
                        values: [{
                            from: "/Date(1325685200000)/",
                            to: "/Date(1325695200000)/",
                            label: "",
                            customClass: "ganttBlue"
                        }]
                    }, {
                        name: "task  5",
                        desc: "",
                        values: [{
                            from: "/Date(1326785200000)/",
                            to: "/Date(1325785200000)/",
                            label: "",
                            customClass: "ganttGreen"
                        }]
                    }, {
                        name: "task  6",
                        desc: "",
                        values: [{
                            from: "/Date(1328785200000)/",
                            to: "/Date(1328905200000)/",
                            label: "",
                            customClass: "ganttBlue"
                        }]
                    }, {
                        name: "task  7",
                        desc: "",
                        values: [{
                            from: "/Date(1330011200000)/",
                            to: "/Date(1336611200000)/",
                            label: "",
                            customClass: "ganttOrange"
                        }]
                    }, {
                        name: "task  8",
                        desc: "",
                        values: [{
                            from: "/Date(1336611200000)/",
                            to: "/Date(1338711200000)/",
                            label: "",
                            customClass: "ganttOrange"
                        }]
                    },

                    {
                        name: "more",
                        desc: "",
                        values: [
                            {
                                from: "/Date(1322611200000)/",
                                to: "/Date(1323302400000)/",
                                label: "",
                                customClass: "ganttBlue"
                            },
                            {
                                from: "/Date(1323802400000)/",
                                to: "/Date(1325685200000)/",
                                label: "",
                                customClass: "ganttOrange"
                            },
                            {
                                from: "/Date(1328785200000)/",
                                to: "/Date(1328905200000)/",
                                label: "",
                                customClass: "ganttGreen"
                            },

                        ]
                    }],
                navigate: 'scroll',//buttons  scroll
                scale: "days",// months  weeks days  hours
                // maxScale: "days",
                // minScale: "days",
                waitText: '数据加载中,请稍微等候',
                months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                dow: ["一", "二", "三", "四", "五", "六", "日"],
                itemsPerPage: 20, //显示多少列
                onItemClick: function (data) {
                    console.log("Item clicked - show some details", data);
                },
                onAddClick: function (dt, rowId) {
                    alert("Empty space clicked - add an item!");
                },
                onRender: function () {
                    setTimeout(() => {
                        $('.fn-gantt .leftPanel').css({
                            'display': 'none'
                        })
                    }, 0)
                }
            });


    }


    render() {
        return (
            <div id="gante">
                hello owrld
            </div>
        )
    }
}

export default  Gante;