var echars1 = { 
    title: {
        text: '艾滋病咨询年龄走势图',
        itemStyle: {
            color: '#40476D',
            fontSize: "24px" 
        }, 
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar;
            if (params[1].value !== '-') {
                tar = params[1];
            }
            else {
                tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    legend: {
        data: ['支出', '收入']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {show: false},
        data: function () {
            var list = [];
            var downNum = 0
            var upNum = 0
            var count = 6
            for (var i = 1; i <= count; i++) {
                if(i===1) {
                    downNum = 0,
                    upNum = 19
                    list.push( downNum+"-"+upNum+"岁");
                } if(i === count) {
                    list.push ("总计")
                } else {
                    downNum = upNum+1
                    upNum = downNum+9
                    list.push( downNum+"-"+upNum+"岁");
                }
                
                
            }
            return list;
        }(),
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
            }
        }
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
        },
        {
            name: '收入',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
        },
        {
            name: '支出',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'bottom'
            },
            data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
        }
    ]
};
export default {
    echars1,
}
