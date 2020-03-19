<template>
  <div class="weather">
    <div class="other">
      <p>
        鬼知道天气查询
        <span>
          <i class="iconfont icon-ziyuan1"></i>
        </span>
      </p>
    </div>
    <div class="input">
      <input class="put1" type="text" value="请输入城市" v-model="city" @keyup.enter="wsearch" />
      <input class="put2" type="submit" value="搜索" @click="wsearch" />
    </div>
    <div class="wshow">
      <ul>
        <li v-for="(item,i) in mes" :key="i">
          <span>{{item.date}}</span>

          <span>{{item.type}}</span>
          <span>{{item.high}}</span>
          <span>{{item.low}}</span>
          <span>{{item.fengli}}</span>
        </li>
        <!-- <li>
          <span>星期一</span>
          <span>温度</span>
        </li>
        <li>
          <span>星期一</span>
          <span>温度</span>
        </li>
        <li>
          <span>星期一</span>
          <span>温度</span>
        </li>
        <li>
          <span>星期一</span>
          <span>温度</span>
        </li>-->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Weather",
  data() {
    return {
      mes: [],
      city: "成都"
    };
  },
  methods: {
    wsearch: function() {
      let that = this;
      this.$axios
        .get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
        .then(res => {
          console.log(res);
          that.mes = res.data.data.forecast;
          console.log(that.mes);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    let that = this;
    this.$axios
      .get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
      .then(res => {
        console.log(res);
        that.mes = res.data.data.forecast;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.weather {
  width: 100%;
  height: 350px;
  background-image: -webkit-linear-gradient(
    top,
    rgb(13, 104, 188),
    rgb(114, 173, 224)
  );
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}

div.input {
  display: flex;
  width: 100%;
  height: 21px;
  margin-top: 15px;
  justify-content: center;
}
.put1 {
  border: 1px solid blanchedalmond;
  box-sizing: border-box;
}
.put2 {
  border: 1px solid rosybrown;
  box-sizing: border-box;
  background-color: skyblue;
  font-size: 10px;
}
.wshow {
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: center;
  margin-top: 15px;
}
ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
}
ul li {
  width: 25%;
  height: 246px;
  background-image: -webkit-linear-gradient(
    top,
    rgb(13, 104, 188),
    rgb(114, 173, 224)
  );
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  box-sizing: border-box;
  /* border: 1px solid bisque; */
  margin-right: 10px;
}
ul li:hover {
  background-image: -webkit-gradient(
    linear,
    0% 0,
    0% 100%,
    from(rgb(136, 169, 202)),
    to(rgb(188, 211, 227))
  );
}
ul li span {
  width: 100%;
  height: 30px;

  text-align: center;
  font-size: 10px;
  color: white;
  align-items: center;
  box-sizing: border-box;
  /* border: 1px solid bisque; */
  margin-top: 2px;
}

.other {
  width: 100%;
  height: 50px;
  text-align: center;
  color: aqua;
  font-family: sans-serif;
}
</style>