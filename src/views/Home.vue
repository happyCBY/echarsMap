<template>
  <div class="commonBg">
      <header class="herderText">健康印迹厦门市艾滋病咨询检测实时分析平台</header>
      <div class="content">
          <div class="contentLeft mgr12">
              <div class="contentLeft1 h276 mgb14"></div>
              <div class="contentLeft2 h276 mgb14"></div>
              <div class="contentLeft3 h276"></div>
          </div>
          <div class="contentCenter mgr12"></div>
          <div class="contentRight"></div>
      </div>
  </div>
</template>

<script>
import echarsData from '@/utils/echarsData.js'
 console.log(echarsData)
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

export default {
  name:"",
  components: {},
  props: {},
  data() {
    return {

    };
  },
  created() {
      
  },
  mounted() {
      this.init()
  },
  methods: {
      init(){
          var myChart1 = echarts.init(document.querySelector('.contentLeft1'));
          var myChart2 = echarts.init(document.querySelector('.contentLeft2'));
          var myChart3 = echarts.init(document.querySelector('.contentLeft3'));
         
          myChart1.setOption(echarsData.echars1);
          myChart2.setOption(echarsData.echars1);
          myChart3.setOption(echarsData.echars1);
      }
  },
};
</script>

<style lang="less"  scoped>
#main {
    width: 300px;
    height: 300px;
}
.commonBg {
    width: 100%;
    min-height: 100vh;
    background: #06091E;
    overflow: hidden;
}
.herderText {
    margin-top: 28px;
    margin-bottom: 27px;
    text-align: center;
    font-size:30px;
    font-family:SourceHanSansSC-Bold,SourceHanSansSC;
    font-weight:bold;
    color:rgba(15,166,228,1);
}
.content {
    display: flex;
    padding: 0 20px 84px; 
}
.contentLeft {
    display: flex;
    flex-direction: column;
    width: 386px;
    .h276 {
        // flex: 1;
        height: 276px;
    }
}
.contentCenter {
    width: 768px;
}
.contentRight {
    width: 699px;
}
.mgr12 {
    margin-right: 12px;
}
.mgb14 {
    margin-bottom: 14px;
}
</style>
