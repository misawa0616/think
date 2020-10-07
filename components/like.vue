<template>
  <span>
    <span v-for="(item, index) in items" :key="index">
      <input
        style="width: 8px; margin-right: 5px; vertical-align: middle"
        type="radio"
        v-bind:name="item1.name"
        v-bind:value="items[index]"
        v-model="test1"
      /><span style="margin-right: 10px">{{ item }}</span>
    </span>
  </span>
</template>

<script>
export default {
  props: ["item1", "test1"],

  data() {
    return {
      items: ["好き", "どちらかといえば好き", "どちらかといえば嫌い", "嫌い"],
    };
  },
};
</script>