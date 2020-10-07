<template>
  <ul class="side-page-link-list">
    <li class="next">
      <button v-on:click="clickNext" class="btn">
        <strong>ログイン</strong>
      </button>
    </li>
  </ul>
</template>
<style scoped>
.side-page-link-list li .btn {
  transition: opacity 0.3s;
  width: 100px;
  padding: 1rem 0.1rem;
  color: #fff;
  border-radius: 4px;
  background-color: #aaa;
  font-size: 1rem;
  border: 0;
  cursor: pointer;
  outline: none;
  width: 100px;
  padding: 1rem 0.1rem;
  color: #fff;
  border-radius: 4px;
  background-color: #aaa;
  font-size: 1rem;
}
.side-page-link-list li .btn:hover {
  opacity: 0.5;
}
.side-page-link-list {
  text-align: center;
}
.side-page-link-list li {
  position: relative;
  display: inline-block;
  width: 10rem;
  margin-left: 0.2rem;
  vertical-align: bottom;
  border: 100px;
}
.side-page-link-list li.next .btn {
  background-color: #1892e2;
  padding: 1.2rem 0.05rem;
}
</style>