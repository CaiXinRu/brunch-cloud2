<template>
    <DashNavbar></DashNavbar>
    <router-view/>
</template>

<script>
import DashNavbar from '../components/DashNavbar.vue'
export default {
  components: {
    DashNavbar
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    // headers加入token
    this.$http.defaults.headers.common.Authorization = token
    // 將api替換成登入驗證的路徑
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api, this.user)
      .then((res) => {
        // console.log(res)
        // 假如登入不成功，則轉向login頁面
        if (!res.data.success) {
          this.$router.push('/login')
        }
      })
  }
}
</script>
