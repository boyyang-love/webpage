<template>
  <div class="music">
    <div class="title">
      <input type="text" value="music" v-model="query" @keyup.enter="musicsearch" />
      <input type="submit" value="search" @click="musicsearch" />
    </div>
    <div class="musicbody">
      <div class="musiclist">
        <ul>
          <li v-for="(item,i) in musiclist" :key="i">
            <i class="iconfont icon-yinle-bofang" @click="musicplay(item.id)"></i>
            {{item.name}}
            <i
              v-if="item.mvid!=0"
              class="iconfont icon-yinle"
              @click="mvplay(item.mvid)"
            ></i>
          </li>
        </ul>
      </div>
      <div class="musicplay">
        <div class="photos">
          <img :src="pho" alt />
        </div>
        <div class="video">
          <video :src="mvurl" controls></video>
        </div>
        <div class="play">
          <audio :src="url" autoplay loop style="width:50px,height:20px"></audio>
          <!-- <object height="100" width="100" :data="url"></object> -->
        </div>
      </div>
      <div class="musicmore">
        <ul>
          <li v-for="(comm,j) in hotcomments" :key="j">
            <span class="user">
              <img :src="comm.user.avatarUrl" alt />
            </span>
            <span class="comment">{{comm.content}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "Music",
  data() {
    return {
      musiclist: "",
      query: "胡歌",
      url: "",
      pho:
        "https://p2.music.126.net/95TcQghGMiaAl5363ZTJbA==/109951163200250165.jpg",
      hotcomments: "",
      mvurl: ""
    };
  },
  methods: {
    //音乐收索
    musicsearch: function() {
      let that = this;
      this.$axios
        .get("https://autumnfish.cn/search?keywords=" + this.query)
        .then(res => {
          console.log(res);
          that.musiclist = res.data.result.songs;
          console.log(this.musiclist);
        })
        .catch(error => {
          console.log(error);
        });
    },
    //播放音乐
    musicplay: function(musicId) {
      let that = this;
      this.$axios
        .get("https://autumnfish.cn/song/url?id=" + musicId)
        .then(res => {
          // console.log(res);
          that.url = res.data.data[0].url;
          // console.log(this.url);
        })
        .catch(error => {
          console.log(error);
        });

      this.$axios
        .get("https://autumnfish.cn/song/detail?ids=" + musicId)
        .then(res => {
          console.log(res);
          that.pho = res.data.songs[0].al.picUrl;
        });

      this.$axios
        .get("https://autumnfish.cn/comment/hot?type=0&id=" + musicId)
        .then(res => {
          that.hotcomments = res.data.hotComments;
        });
    },
    //播放mv
    mvplay: function(mvid) {
      let that = this;
      this.$axios
        .get("https://autumnfish.cn/mv/url?id=" + mvid)
        .then(res => {
          that.mvurl = res.data.data.url;
          console.log(res.data.data.url);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    let that = this;
    this.$axios
      .get("https://autumnfish.cn/search?keywords=" + this.query)
      .then(res => {
        that.musiclist = res.data.result.songs;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>



<style scoped>
.music {
  width: 100%;
  height: 350px;
  background-color: #00ccff;
}
.title {
  text-align: center;
  color: white;
  display: flex;
  justify-content: flex-end;
}
.musicbody {
  width: 100%;
  height: 300px;
  background-color: #33cccc;
  display: flex;
}
.musiclist {
  flex: 1;
  /* background-color: tomato; */
  overflow: auto;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
}
ul li {
  width: 100%;
  height: 15px;
  font-size: 8px;
}

.musicplay {
  flex: 2;
  background-color: violet;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.play {
  height: 25px;
  width: 100%;
}

.musicmore {
  flex: 2;
  /* background-color: yellow; */
  overflow: auto;
}
.musicmore ul li {
  width: 100%;
  height: 60px;
  overflow: auto;
  border: 1px solid blue;
  box-sizing: border-box;
  margin-bottom: 2px;
  display: flex;
}
.iconfont {
  color: #cc3399;
  font-size: 10px;
}
.iconfont:hover {
  color: red;
}
.photos {
  width: 100%;
  height: 100px;
  background-color: red;
}
.photos img {
  width: 100%;
  height: 100px;
}

span.user {
  width: 35px;
  height: 35px;
  background-color: blue;
  border-radius: 100%;
}
.user img {
  width: 35px;
  height: 35px;
  border-radius: 100%;
}
/* .comment {
  width: 100px;
  height: 50px;
} */

video {
  width: 300px;
  height: 200px;
}
</style>
