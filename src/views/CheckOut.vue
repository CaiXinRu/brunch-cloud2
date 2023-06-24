<template>
  <div class="bg-color--white">
    <div class="container u-pt-48 u-pb-48">
      <div class="co-stepbar">
        <div class="co-step">
          <div class="cs-num">1</div>
          <div class="cs-text">購物訂單</div>
          <div class="cs-bar"></div>
        </div>
        <div class="co-step">
          <div class="cs-num">2</div>
          <div class="cs-text">填寫資料</div>
          <div class="cs-bar"></div>
        </div>
        <div class="co-step">
          <div class="cs-num">3</div>
          <div class="cs-text">確認訂單</div>
          <div class="cs-bar"></div>
        </div>
        <div class="co-step">
          <div class="cs-num">4</div>
          <div class="cs-text">完成付款</div>
          <div class="cs-bar"></div>
        </div>
      </div>
      <CheckList></CheckList>
      <CheckCustomer></CheckCustomer>
      <CheckFinal></CheckFinal>
    </div>
  </div>
</template>

<script scoped>
import CheckList from '@/components/checkout/1-CheckList.vue'
import CheckCustomer from '@/components/checkout/2-CheckCustomer.vue'
import CheckFinal from '@/components/checkout/3-CheckFinal.vue'

export default {
  data: () => {
    return {
    }
  },
  components: {
    CheckList,
    CheckCustomer,
    CheckFinal
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.co-stepbar {
  width: 50%;
  display: flex;
  justify-content: space-around;
}
.co-step {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cs-num {
  width: 40px;
  height: 40px;
  color: #fef7e9;
  background-color: #fac664;
  border-radius: 40px;
  font-size: 20px;
  text-align: center;
  line-height: 40px;
}
.cs-text {
  color: #644536;
  font-size: 20px;
  margin: 8px 0;
}
.cs-bar {
  width: 150px;
  height: 6px;
  background-color: rgb(250, 198, 100);
  margin: 8px 0;
}
</style>
