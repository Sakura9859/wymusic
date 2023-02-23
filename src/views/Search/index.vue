<template>
  <div>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      shape="round"
      @input="inputFn"
    />
    <div class="search_wrap" v-if="songList.length === 0">
      <p class="hot_title">热门搜索</p>
      <div class="hot_name_wrap">
        <span
          class="hot_item"
          v-for="(obj, index) in schList"
          :key="index"
          @click="fn(obj.first)"
          >{{ obj.first }}</span
        >
      </div>
    </div>
    <div class="search_wrap" v-else>
      <p class="hot_title">最佳匹配</p>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell-group>
          <songItem
            v-for="obj in songList"
            :key="obj.id"
            :name="obj.name"
            :author="obj.ar[0].name + '-' + obj.name"
            :id="obj.id"
          ></songItem>
          <!-- <van-cell
            :title="obj.name"
            :label="obj.ar[0].name + '-' + obj.name"
            center
            v-for="obj in songList"
            :key="obj.id"
          >
            <template #right-icon>
              <van-icon name="play-circle-o" size=".6rem" />
            </template>
          </van-cell> -->
        </van-cell-group>
      </van-list>
    </div>
  </div>
</template>

<script>
import { schApi, searchApi } from "@/api/index";
import songItem from "@/components/songItem.vue";
export default {
  components: {
    songItem,
  },
  data() {
    return {
      schList: [],
      value: "",
      songList: [],
      loading: false,
      finished: false,
      page: 1,
      timer: null,
    };
  },
  async created() {
    const res = await schApi();
    this.schList = res.data.result.hots;
  },

  methods: {
    async fn(val) {
      this.value = val;
      this.page = 1;
      this.finished = false;
      const search = await searchApi({
        limit: 20,
        keywords: this.value,
        offset: (this.page - 1) * 20,
      });
      console.log(search);
      this.songList = search.data.result.songs;
      this.loading = false;
    },
    async inputFn() {
      //输入框防抖
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(async () => {
        this.page = 1;
        this.finished = false;
        if (this.value.length === 0) {
          this.songList = [];
          return;
        }
        const search = await searchApi({ limit: 20, keywords: this.value });
        if (search.data.result.songs === undefined) {
          this.songList = [];
          return;
        }
        this.songList = search.data.result.songs;
        this.loading = false;
      }, 900);
    },
    async onLoad() {
      this.page++;
      const res = await searchApi({
        limit: 20,
        keywords: this.value,
        offset: (this.page - 1) * 20,
      });
      // this.songList = [...this.songList, ...res.data.result.songs];
      if (res.data.result.songs === undefined) {
        this.finished = true;
        this.loading = false;
        return;
      }
      this.songList.push(...res.data.result.songs);
      this.loading = false;

      console.log(res);
    },
  },
};
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
.van-cell {
  border-bottom: 1px solid rgb(199, 194, 194);
}
</style>
