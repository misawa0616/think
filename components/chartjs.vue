<script>
import { Bar } from "vue-chartjs";
export default {
  extends: Bar,
  data() {
    return {
      chartdata: {
        //◆データ
        labels: ["A", "B", "C", "D", "E"], //ラベル名
        datasets: [
          {
            //データ設定
            data: [], //データ内容
            backgroundColor: [
              "#FF4444",
              "#4444FF",
              "#44BB44",
              "#FFFF44",
              "#FF44FF",
            ], //背景色
          },
          {
            //データ設定
            data: [], //データ内容
            backgroundColor: [
              "#FF4444",
              "#4444FF",
              "#44BB44",
              "#FFFF44",
              "#FF44FF",
            ], //背景色
          },
        ],
      },
      options: {
        tooltips: {
          enabled: false,
        },
        type: "bar", //◆棒グラフ
        //◆オプション
        responsive: false, //グラフ自動設定
        legend: {
          //凡例設定
          display: false, //表示設定
        },
        title: {
          //タイトル設定
          display: true, //表示設定
          fontSize: 18, //フォントサイズ
          text: "タイトル", //ラベル
        },
        scales: {
          //軸設定
          yAxes: [
            {
              //y軸設定
              display: true, //表示設定
              scaleLabel: {
                //軸ラベル設定
                display: true, //表示設定
                labelString: "縦軸ラベル", //ラベル
                fontSize: 18, //フォントサイズ
              },
              ticks: {
                //最大値最小値設定
                min: 0, //最小値
                max: 30, //最大値
                fontSize: 18, //フォントサイズ
                stepSize: 5, //軸間隔
              },
            },
          ],
          xAxes: [
            {
              //x軸設定
              display: true, //表示設定
              barPercentage: 0.4, //棒グラフ幅
              categoryPercentage: 0.4, //棒グラフ幅
              scaleLabel: {
                //軸ラベル設定
                display: true, //表示設定
                labelString: "横軸ラベル", //ラベル
                fontSize: 18, //フォントサイズ
              },
              ticks: {
                fontSize: 18, //フォントサイズ
              },
            },
          ],
        },
        layout: {
          //レイアウト
          padding: {
            //余白設定
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
      },
    };
  },
  mounted() {
    this.chartdata.datasets[0].data = [10, 20, 30];
    this.chartdata.datasets[1].data = [5, 15, 15];
    console.log(this);
    this.renderChart(this.chartdata, this.options);
  },
};
</script>