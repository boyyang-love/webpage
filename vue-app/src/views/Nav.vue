<template>
  <div class="nav">
    <ul>
      <li>
        <i class="iconfont icon-daohang" @click="hidden"></i>
        <ul v-show="flog">
          <li v-for="(item,i) in mes" :key="i">
            <router-link :to="item.path">
              <i :class="item.icon"></i>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      mes: [
        { icon: "iconfont icon-index-copy", path: "home" },
        { icon: "iconfont icon-tianqi", path: "weather" },
        { icon: "iconfont icon-yinle", path: "music" },
        { icon: "iconfont icon-weibiaoti--2", path: "home" }
      ],
      flog: true
    };
  },
  methods: {
    hidden: function() {
      this.flog = !this.flog;
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  width: 25px;
  height: 45px;
}

.nav {
  width: 25px;
  height: 350px;
  background-color: #cccccc;
  display: flex;
}
.iconfont {
  font-size: 25px;
  line-height: 30px;
  color: #6699ff;
}
.iconfont:hover {
  color: #66ffff;
}
a {
  text-decoration: none;
}
.active {
  text-decoration: none;
}
</style>