<template>
  <div class="test">
    <div v-if="test" class="modal js-modal">
      <div class="modal__bg js-modal-close"></div>
      <div class="modal__content">
        <p>
          ここにモーダルウィンドウで表示したいコンテンツを入れます。モーダルウィンドウを閉じる場合は下の「閉じる」をクリックするか、背景の黒い部分をクリックしても閉じることができます。
        </p>
        <a class="js-modal-close" href="">閉じる</a>
      </div>
      <!--modal__inner-->
    </div>
    <!--modal-->
    {{ $store.getters["message/getMessage"] }}
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
        <div class="container-1" v-for="(item1s, index) in lists" :key="index">
          <table
            border="1"
            cellspacing="0"
            style="width: 600px; font-size: 8px; margin-bottom: 30px"
          >
            <tr>
              <td
                rowspan="2"
                style="
                  font-size: 8px;
                  width: 150px;
                  background-color: aquamarine;
                "
              >
                {{ item1[index] }}
              </td>
              <td style="text-align: center">
                <div v-for="(item2, index) in item1s" :key="index">
                  {{ item2.title }}
                  <like :item1="item2" :test1="test1"></like>
                </div>
              </td>
            </tr>
            <tr>
              <td>データ2</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <button v-on:click="update1" class="btn">
      <strong>ログイン</strong>
    </button>
    <button v-on:click="post" class="btn">
      <strong>ログイン</strong>
    </button>
    <div style="margin-bottom: 100px"></div>
    <send-button></send-button>
  </div>
</template>

<script>
import chartjs from "~/components/chartjs.vue";
import comment from "~/components/comment.vue";
import SendButton from "~/components/send-button.vue";
const axiosBase = require("axios");
const axios = axiosBase.create({
  headers: {
    "Content-Type": "application/json",
  },
});
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
      test: "",
      item1: [
        "好きか嫌いか教えてください",
        "親友が好きか嫌いか教えてください",
        "家族が好きか嫌いか教えてください",
        "先生が好きか嫌いか教えてください",
      ],
      message: this.$store.getters["getMessage"],
      test1: "",
    };
  },
  methods: {
    update1() {
      this.$store.dispatch(
        "message/updateMessageAction",
        "有効なログイン情報を取得できませんでした。ログインしてください。"
      );
      console.log(this.$store.getters["message/getMessage"]);
    },
    post() {
      axios
        .get("https://favoritetag.xyz/api/v1/confirm_change_email/")
        .then((res) => {})
        .catch((e) => {
          this.test = "aa";
        });
    },
  },
  mounted() {
    console.log(this.$store.getters["message/getMessage"]);
  },
  updated() {
    console.log(this.$store.getters["message/getMessage"]);
  },
};
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.content {
  margin: 0 auto;
  padding: 40px;
}
.modal {
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100%;
}
.modal__bg {
  background: rgba(0, 0, 0, 0.8);
  height: 100vh;
  position: absolute;
  width: 100%;
}
.modal__content {
  background: #fff;
  left: 50%;
  padding: 40px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
}
</style>
