<template>
    <div ref="map" class="map">
        <ve-map :data="chartData" :extend="chartExtend" :visual-map="visualMap"></ve-map>
    </div>
</template>

<script>
    import VeMap from 'v-charts/lib/map.common';
    import 'echarts/lib/component/visualMap';

    export default {
        components: {VeMap},
        name: 'charts',
        data: function () {
            this.visualMap = {
                inverse: true,
                show: true,
                type: 'continuous', // 'piecewise',
                realtime: false, // 拖拽是否实施更新
                min: 0,
                max: 5000,
                calculable: false,
                text: ['高', '低'],
                inRange: {
                    color: ['#cde1f5', '#3887e0'],
                    symbolSize: [500, 5000]
                },
                align: 'top',
                orient: 'horizontal'
            };
            this.chartExtend = {
                legend: {
                    show: false //图例展示
                },
                series: {
                    showLegendSymbol: false, // 去掉地图小圆点
                    silent: false, // 详情展示
                    itemStyle: {
                        normal: {
                            areaColor: '#cde1f5',
                            borderColor: '#fff'
                        },
                        emphasis: {
                            areaColor: '#fde166'
                        }
                    },
                    label: {
                        normal: {
                            show: false,
                            position: 'inside',
                            textStyle: {
                                color: 'rgba(0, 0, 0, 0)'
                            }
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: 'rgb(249, 249, 249)'
                            }
                        }
                    },
                    zoom: 1.2
                }
            };
            this.chartSettings = {
                label: {
                    normal: {
                        show: false,
                        position: 'inside',
                        textStyle: {
                            color: 'rgba(0, 0, 0, 0)'
                        },
                        formatter: function (params) {
                            /*if (params.name === '澳门' || params.name === '香港') {
                                return '';
                            } else {
                                return params.name;
                            }*/
                        }
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: 'rgb(249, 249, 249)'
                        }
                    }
                },
                zoom: 1.2
            };
            return {
                chartData: {
                    columns: ['位置', '税收'],
                    rows: [
                        {'位置': '吉林', '税收': 123},
                        {'位置': '北京', '税收': 1223},
                        {'位置': '上海', '税收': 2123},
                        {'位置': '浙江', '税收': 4123}
                    ]
                }
            };
        },
        methods: {},
        mounted() {
        },
        computed: {}
    };
</script>
<style lang="scss" scoped>
    .map {
        width: 100%;
        height: 100%;
    }
</style>
