<!--
Date: 2020-07-30 11:25:44
LastEditors: Future Meng
LastEditTime: 2020-07-30 16:20:40
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// const escpos = require("escpos");
// // install escpos-usb adapter module manually

// escpos.USB = require("escpos-usb");
// // Select the adapter based on your printer type
// const device = new escpos.USB();

// const options = { encoding: "GB18030" /* default */ };

// const printer = new escpos.Printer(device, options);
// @ is an alias to /src

import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {
    print() {
      // device.open(function(error) {
      //   console.log(error);
      //   printer
      //     .font("a")
      //     .align("ct")
      //     .style("bu")
      //     .size(1, 1)
      //     .text("The quick brown fox jumps over the lazy dog")
      //     .text("敏捷的棕色狐狸跳过懒狗")
      //     .barcode("1234567", "EAN8")
      //     .table(["One", "Two", "Three"])
      //     .tableCustom(
      //       [
      //         { text: "Left", align: "LEFT", width: 0.33, style: "B" },
      //         { text: "Center", align: "CENTER", width: 0.33 },
      //         { text: "Right", align: "RIGHT", width: 0.33 }
      //       ],
      //       { encoding: "cp857", size: [1, 1] } // Optional
      //     )
      //     .qrimage("https://github.com/song940/node-escpos", function(err) {
      //       console.log(err);
      //       this.cut();
      //       this.close();
      //     });
      // });
    }
  },
  mounted() {}
};
</script>
