<template>
  <div class="container-box">
    <div class="id-box">
      <input type="text" placeholder="아이디를 입력해 주세요" />
    </div>

    <div class="pw-box">
      <input type="password" placeholder="비밀번호를 입력해 주세요" />
      <img :src="require(`./assets/${imgName}.png`)" @click="changeImg" />
    </div>

    <div class="login-box">
      <h4>로그인</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      imgName: "EyeSlash",
    };
  },

  methods: {
    changeImg() {
      if (this.imgName === "EyeSlash") {
        this.imgName = "Eye";
      } else {
        this.imgName = "EyeSlash";
      }
    },
  },

  components: {},
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
}
.container-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 491px;
  height: 404px;
  border-radius: 10px;
  margin-top: 235px;
}

.id-box,
.pw-box {
  border: 1px solid black;
  width: 427px;
  height: 52px;
  border-radius: 10px;
  position: relative;
}

.id-box {
  margin-top: 43px;
}

.id-box input {
  width: 393px;
  height: 16px;
  font-size: 16px;
  position: absolute;
  top: 18px;
  left: 17px;
  border: none;
}

.pw-box {
  margin-top: 20px;
}

.pw-box input {
  width: 349px;
  height: 16px;
  font-size: 16px;
  position: absolute;
  top: 18px;
  left: 17px;
  border: none;
}

.pw-box img {
  position: absolute;
  top: 10px;
  left: 387px;
}

.login-box {
  position: relative;
  width: 433px;
  height: 52px;
  margin-top: 50px;
  border: 1px solid black;
  border-radius: 10px;
}

.login-box h4 {
  position: absolute;
  width: 400px;
  height: 16px;
  font-size: 16px;
  text-align: center;
  margin: 0px;
  left: 16px;
  bottom: 18px;
}
</style>
