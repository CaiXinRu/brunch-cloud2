<template>
  <LodingPage v-if="isLoading"></LodingPage>
  <div class="item-list">
    <div v-for="item in filteredProducts" :key="item.id" class="item-per">
        <font-awesome-icon
          v-if="item.like"
          @click="item.like = !item.like"
          icon="fa-solid fa-heart"
          class="heart"
        />
        <font-awesome-icon
          v-else
          @click="item.like = !item.like"
          icon="fa-regular fa-heart"
          class="heart"
        />
        <a id="show" @click="showModal(item.id)"
          ><div class="item-img" :style="{backgroundImage: `url(${item.imageUrl})`}"></div>
        </a>
        <span class="u-text-center item-text"
          ><a @click="showModal(item.id)">{{ item.title }}</a></span
        >
        <ul>
          <li>
            <span class="item-add">
              <a class="item-add-icon" @click="showModal(item.id)"
                ><font-awesome-icon icon="fa-solid fa-cart-plus"
              /></a>
            </span>
            <span class="item-price">NT$ {{ item.origin_price }}</span>
          </li>
        </ul>
    </div>
  </div>
  <ILBurgerModal
          :id="productId"
          :modelValue="isModalVisible"
          @update:modelValue="
            (val) => {
              isModalVisible = val
            }
          "
        ></ILBurgerModal>
</template>

<script>
import ILBurgerModal from './1-ILBurgerModal.vue'
import LodingPage from '../LodingPage.vue'
export default {
  data () {
    return {
      isLoading: false,
      isModalVisible: false,
      products: [],
      filteredProducts: [],
      productId: ''
    }
  },
  components: {
    ILBurgerModal,
    LodingPage
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        this.products = res.data.products
        this.isLoading = false
      })
    },
    showModal (id) {
      this.productId = id
      // console.log('showmodal', id)
      this.isModalVisible = true
    }
  },
  watch: {
    products: {
      handler () {
        this.filteredProducts = this.products.filter(
          (item) => item.category === '太空漢堡')
      }
    },
    immediate: true
  },
  created () {
    this.getProducts()
  }
}
</script>

<style>
.item-list {
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.item-per {
  background-color: #fef7e9;
  padding: 80px 25px 28px 25px;
  margin: 10px 10px;
  border-radius: 50px;
  width: 295px;
  height: auto;
  user-select: none;
}
.item-per a {
  cursor: pointer;
}
.heart {
  color: #fa7864;
  font-size: 32px;
  position: absolute;
  top: 8%;
  right: 14%;
  cursor: pointer;
}
.item-img{
  height: 180px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-size: cover;
  background-position: center;
}
.item-text {
  display: block;
  font-family: 'Montserrat', 'cwTeXYen', 'Helvetica', 'Noto Sans TC', 'Roboto',
    'Arial', 'LiHei Pro', '黑體-繁', '微軟正黑體', sans-serif;
  font-size: 28px;
  line-height: 28px;
  font-weight: 400;
  margin-top: 24px;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}
.item-per li {
  display: flex;
  align-items: center;
}
.item-per ul {
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.item-price {
  display: inline-block;
  width: auto;
  height: auto;
  font-size: 16px;
  background-color: #669afa;
  color: #fef7e9;
  padding: 10px 15px;
  line-height: 18px;
  margin: auto 10px;
  border-radius: 22px;
  text-align: center;
}
.item-add-icon {
  color: #669afa;
  font-size: 24px;
}
.item-add-icon:hover {
  color: #fac664;
}
.item-add-icon:active {
  color: #e3bac6;
}
</style>
