<template>
  <table
    border="1"
    cellspacing="0"
    style="width: 600px; font-size: 8px; margin-bottom: 30px"
  >
    <tr>
      <td
        rowspan="2"
        style="font-size: 8px; width: 150px; background-color: aquamarine"
      >
        {{ item1 }}
      </td>
      <td style="text-align: center">
        <div v-for="(item2, index1) in item1s" :key="index1">
          {{ item2.title }}
          <span v-for="(item3, index2) in item2s" :key="index2">
            <input
              style="width: 8px; margin-right: 5px; vertical-align: middle"
              type="radio"
              v-bind:name="item1.name"
            /><span style="margin-right: 10px">{{ item3 }}</span>
          </span>
        </div>
      </td>
    </tr>
    <tr>
      <td>データ2</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: ["item1s", "item1"],

  data() {
    return {
      item2s: ["好き", "どちらかといえば好き", "どちらかといえば嫌い", "嫌い"],
    };
  },
};
</script>