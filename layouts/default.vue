<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.item-5 {
  display: none;
}
.is-active {
  display: block;
}
.container-1 {
  display: flex;
  justify-content: center;
}
.container-2 {
  display: flex;
}
.item-1 {
  background-color: aquamarine;
  width: 200px;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.item-2 {
  flex: 1;
}
.item-3 {
  width: 300px;
}
.item-4 {
  margin-right: 100px;
  list-style-type: none;
  height: 200px;
  width: 200px;
  border: solid 1px black;
  padding: 20px;
}
.item-4 li:before {
  position: relative;
  top: -2px;
  content: "";
  width: 3px;
  height: 3px;
  display: inline-block;
  background-color: black;
  border-radius: 50%;
  margin-right: 5px;
}
</style>
