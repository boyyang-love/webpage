<template>
  <div class="echarts">
    <div class="main"></div>
  </div>
</template>

<script>
export default {
  name: "Echarts",
  data() {
    return {
      source: [
        ["星期一", 25],
        ["星期二", 35],
        ["星期三", 45],
        ["星期四", 25],
        ["星期五", 35],
        ["星期六", 45],
        ["星期天", 25]
      ]
    };
  },
  methods: {
    play: function() {
      let charts = this.$echarts.init(
        document.getElementsByClassName("main")[0]
      );
      let option = {
        title: {
          text: "温度"
        },
        dataset: {
          // source: [
          //   ["星期一", 25],
          //   ["星期二", 35],
          //   ["星期三", 45],
          //   ["星期四", 25],
          //   ["星期五", 35],
          //   ["星期六", 45],
          //   ["星期天", 25]
          // ]
          source: this.source
        },
        xAxis: {
          type: "category"
        },
        yAxis: {},
        series: [{ type: "line" }]
      };
      charts.setOption(option);
    }
  },
  mounted() {
    this.play();
  }
};
</script>

<style scoped>
.main {
  width: 280px;
  height: 288px;
  background-color: cadetblue;
}
</style>