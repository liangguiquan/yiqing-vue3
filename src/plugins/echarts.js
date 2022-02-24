


/**
 * 把echarts开发成vue插件
 * @param {*} app 
 * @param {*} options 
 */

// 导入echarts
 import echarts from 'echarts'
 // 导入地图js文件
 import 'echarts/map/js/china'

const install = function (app, options) {
    // app.config.globalProperties  
    Object.defineProperties(app.config.globalProperties, {
        $myChart: {
            get() {
                return {
                    // 1. 绘制折线图
                    line(id) {
                        var myChart = echarts.init(document.getElementById(id));
                        // 绘制图表
                        myChart.setOption({
                            title: {
                                text: 'ECharts 入门示例'
                            },
                            tooltip: {},
                            xAxis: {
                                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                            },
                            yAxis: {},
                            series: [
                                {
                                    name: '销量',
                                    type: 'line',
                                    data: [5, 20, 36, 10, 10, 20]
                                }
                            ]
                        });
                    },
                    // 2. 中国地图
                    chinaMap(id, data) {
                        // 1. 获取容器
                        var myChart = echarts.init(document.getElementById(id));
                        // 2. 书写配置
                        var option = {
                            title: {
                                // text: '国内现存确诊',
                                //   subtext: 'Data from www.census.gov',
                                //   sublink: 'http://www.census.gov/popest/data/datasets.html',
                                //   left: 'right'
                            },
                            tooltip: {  // 悬浮弹框
                                trigger: 'click',  // click item
                                enterable: true,
                                formatter(item) {
                                    return `${item.name}`;
                                },
                                showDelay: 0,
                                transitionDuration: 0.2
                            },
                            visualMap: {  // 映射高亮颜色
                                orient: 'vertical',  // 垂直  vertical   水平  horizontal
                                type: 'piecewise',  //  分段/离散
                                bottom: 0,
                                pieces: [  // 配置颜色区间
                                    {
                                        min: 0,
                                        max: 0,
                                        color: "#FFFFFF"
                                    },
                                    {
                                        min: 1,
                                        max: 100,
                                        color: "#FDFDCF"
                                    },
                                    {
                                        min: 100,
                                        max: 1000,
                                        color: "#FE9E83"
                                    },
                                    {
                                        min: 1000,
                                        max: 5000,
                                        color: "#E55A4E"
                                    },
                                    {
                                        min: 5000,
                                        color: "#4F070D"
                                    }
                                ]
                            },
                            series: [
                                {
                                    name: '省',
                                    type: 'map',  // 地图 line  bar  map
                                    map: 'china',  // 中国地图，需要引入地图china.js
                                    roam: false,
                                    zoom: 1.2,
                                    aspectScale: 0.75,
                                    top: 40,
                                    layoutCenter: ['5%', '5%'],
                                    label: {
                                        normal: {
                                            show: true,
                                            textStyle: {
                                                fontSize: 8
                                            }
                                        }
                                    },
                                    itemStyle: {
                                        normal: {
                                            areaColor: 'rgba(0, 255, 236, 0)',
                                            borderColor: 'rgba(0, 0, 0, 0.2)'
                                        },
                                        emphasis: {  // 选中的区域颜色及阴影效果等
                                            areaColor: 'rgba(255, 180, 0, 0.8)',
                                            shadowOffsetX: 0,
                                            shadowOffsetY: 0,
                                            shadowBlur: 20,
                                            borderWidth: 0,
                                        },
                                    },
                                    data: data

                                    // data: [
                                    //     { name: '北京', value: 3000 },
                                    //     { name: '上海', value: 210 },
                                    // ]
                                }
                            ]
                        };
                        // 3. 绘制图表
                        myChart.setOption(option);
                    },
                }
            }
        }
    });
}

export default install;