<template>
  <div>
    <van-nav-bar :title="activeTitle" fixed />
    <div class="main">
      <router-view></router-view>
    </div>

    <van-tabbar
      router
      v-model="active"
      active-color="#07c160"
      inactive-color="#000"
    >
      <van-tabbar-item icon="home-o" replace to="/layout/home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="search" replace to="/layout/search"
        >搜索</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTitle: this.$route.meta.title,
      active: 0,
    };
  },
  watch: {
    $route() {
      this.activeTitle = this.$route.meta.title;
    },
  },
};
</script>

<style scoped>
/* 中间内容区域 - 容器样式(留好上下导航所占位置) */
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>
