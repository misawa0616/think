
<template>
  <div class="container-1">
    <ul class="item-4">
      <li
        v-for="(item1, index) in item1s"
        :key="item1"
        v-on:click="item2s.push(item1s.splice(index, 1)[0])"
      >
        {{ item1 }}
      </li>
    </ul>
    <ul class="item-4">
      <li
        v-for="(item2, index) in item2s"
        :key="item2"
        v-on:click="item1s.push(item2s.splice(index, 1)[0])"
      >
        {{ item2 }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item1s: [1, 2, 3, 4],
      item2s: [],
    };
  },
};
</script>