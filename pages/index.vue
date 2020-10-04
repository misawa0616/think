<template>
  <div class="test">
    <div class="container-1">
      <div class="item-1"></div>
      <div class="item-2">
        <div class="container-1">
          <chartjs :width="200" :height="200"></chartjs>
        </div>
        <div class="container-1">
          <comment></comment>
        </div>
        <br />
        <div class="container-1" v-for="item1s in lists" :key="item1s">
          <like :item1s="item1s"></like>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chartjs from "~/components/chartjs.vue";
import comment from "~/components/comment.vue";
export default {
  data() {
    return {
      lists: [
        [
          { title: "勉強", name: "1" },
          { title: "運動", name: "2" },
        ],
        [{ title: "運動", name: "3" }],
        [{ title: "ゲーム", name: "4" }],
        [{ title: "会話", name: "5" }],
      ],
    };
  },
};
</script>
<style>
</style>
