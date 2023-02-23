<template>
  <van-cell :title="name" :label="author + '-' + name" center>
    <template #right-icon>
      <van-icon name="play-circle-o" size=".6rem" @click="playFn" />
    </template>
  </van-cell>
</template>

<script>
export default {
  props: {
    name: String,
    author: String,
    id: Number,
  },
  methods: {
    playFn() {
      this.$router.push({
        path: "/play",
        query: {
          id: this.id,
        },
      });
    },
  },
};
</script>

<style scoped>
.van-cell {
  border-bottom: 1px solid rgb(199, 194, 194);
}
</style>
