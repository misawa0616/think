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
        好きか嫌いか教えてください
      </td>
      <td style="text-align: center">
        <div v-for="item1 in item1s" :key="item1">
          <span style="margin-right: 20px">{{ item1.title }}</span>
          <input
            style="width: 8px; margin-right: 5px; vertical-align: middle"
            type="radio"
            v-bind:name="item1.name"
          /><span style="margin-right: 10px">好き</span>
          <input
            style="width: 8px; margin-right: 5px; vertical-align: middle"
            type="radio"
            v-bind:name="item1.name"
          /><span style="margin-right: 10px">どちらかといえば好き</span>
          <input
            style="width: 8px; margin-right: 5px; vertical-align: middle"
            type="radio"
            v-bind:name="item1.name"
          /><span style="margin-right: 10px">どちらかといえば嫌い</span>
          <input
            style="width: 8px; margin-right: 5px; vertical-align: middle"
            type="radio"
            v-bind:name="item1.name"
          /><span>嫌い</span>
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
  props: ["item1s"],
};
</script>