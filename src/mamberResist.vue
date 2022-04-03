<template>
  <div class="total-box">

    <div class="id-box">
      <input type="text" placeholder="아이디를 입력해 주세요" />
    </div>

    <div class="id-box">
      <input type="text" placeholder="비밀번호를 입력해 주세요" />
    </div>

    <div class="id-box">
      <input type="text" placeholder="비밀번호 확인" />
    </div>

    <div class="id-box">
      <input type="text" placeholder="전화번호를 입력해 주세요" />
    </div>

    <div class="id-box">
      <input type="text" placeholder="이메일를 입력해 주세요" />
    </div>

    <div class="login-box">
      <h4>회원가입</h4>
    </div>
    
  </div>  
 

</template>

<script>
export default {
  name: "App",

  data() {
    return {
      
    };
  },

  components: {},
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
}

.total-box{
 margin-top: 200px;
}

.id-box {
  border: 1px solid black;
  width: 427px;
  height: 52px;
  border-radius: 10px;
  position: relative;
 
}

.id-box input::placeholder{
  color: #c4c4c4;
}

.id-box{
  margin-top: 0px;
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
  left: 16px;
  bottom: 18px;
  width: 400px;
  height: 16px;
  font-size: 16px;
  text-align: center;
  margin: 0px;
  
}

</style>

