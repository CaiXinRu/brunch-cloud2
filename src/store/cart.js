import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  // 定義狀態初始值
  state: () => ({
    isLoading: false,
    cart: undefined
  }),
  // 對狀態加工的 getters，如同 computed
  getters: {},
  // 定義使用到的函式，可以為同步和非同步，如同 method
  actions: {
    getCart () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        console.log(response)
        this.cart = response.data.ßdata
        this.isLoading = false
      })
    }
  }
})
