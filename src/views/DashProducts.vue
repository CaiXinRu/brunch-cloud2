<template>
  <LoadingPage v-if="isLoading"></LoadingPage>
  <div class="bg-color--white">
    <div class="container u-pt-48 u-pb-68">
      <div class="dp-button" @click="openModal(true)">
        <div class="s-div">
          <a class="dp-plus"> </a>
        </div>
        <div class="dp-text">新增餐點品項</div>
      </div>
      <table style="width: 100%" class="dp-table">
        <thead>
          <tr class="dp-head">
            <th style="width: 20%">餐點類別</th>
            <th style="width: 20%">餐點名稱</th>
            <th style="width: 20%">原價</th>
            <th style="width: 20%">特價</th>
            <th style="width: 20%">是否啟用</th>
            <th style="width: 20%">是否編輯</th>
            <th style="width: 20%">是否刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr
            style="height: 50px"
            class="color--dark-brown dp-body"
            v-for="item in products"
            :key="item.id"
          >
            <td style="width: 20%">{{ item.category }}</td>
            <td style="width: 20%">{{ item.title }}</td>
            <td style="width: 20%">NT${{ item.origin_price }}</td>
            <td style="width: 20%">NT${{ item.price }}</td>
            <td style="width: 20%">
              <span class="color--positive" v-if="item.is_enabled === 1"
                >啟用</span
              >
              <span class="color--negative" v-else>未啟用</span>
            </td>
            <td style="width: 20%">
              <button class="color--dark-brown" @click="openModal(false, item)">
                <font-awesome-icon icon="fa-solid fa-pen-to-square" />
              </button>
            </td>
            <td style="width: 20%">
              <button class="color--dark-brown" @click="openDelModal(item)">
                <font-awesome-icon icon="fa-solid fa-trash-can" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <DashProductModal
    ref="dashProductModal"
    :product="tempProduct"
    @update-product="updateProduct"
  ></DashProductModal>
  <DashDelModal
    ref="dashDelModal"
    :item="tempProduct"
    @del-item="delProduct"
  ></DashDelModal>
</template>

<script>
import DashProductModal from '@/components/DashProductModal.vue'
import DashDelModal from '@/components/DashDelModal.vue'
import LoadingPage from '@/components/LodingPage.vue'
export default {
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false
    }
  },
  components: {
    DashProductModal,
    DashDelModal,
    LoadingPage
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          // console.log(res.data)
          this.products = res.data.products
          this.pagination = res.data.pagination
        }
        this.isLoading = false
      })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      this.$refs.dashProductModal.showModal()
    },
    updateProduct (item) {
      this.tempProduct = item
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }
      this.isLoading = true
      this.$http[httpMethod](api, { data: this.tempProduct })
        .then((res) => {
          // console.log(res)
          this.$refs.dashProductModal.hideModal()
          this.getProducts()
          this.isLoading = false
        })
    },
    openDelModal (item) {
      this.tempProduct = { ...item }
      this.$refs.dashDelModal.showModal()
    },
    delProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.isLoading = true
      this.$http.delete(api).then((res) => {
        this.$refs.dashDelModal.hideModal()
        this.getProducts()
        this.isLoading = false
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}
tr {
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
}
.dp-head {
  color: #644536;
  background-color: #fac664;
  font-size: 18px;
  line-height: 50px;
}
.dp-body {
  font-size: 20px;
  border-bottom: 3px solid #fac664;
}
.dp-body:hover {
  background-color: #fef7e9;
}
.dp-button {
  width: max-content;
  left: 0%;
  top: 10%;
  cursor: pointer;
  height: 70px;
}
.s-div {
  height: 52px;
}
.dp-plus {
  font-size: 24px;
  width: 52px;
  height: 52px;
  display: inline-block;
  background-color: var(--color--dark-brown);
  color: #fef7e9;
  border-radius: 26px;
  line-height: 52px;

  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
}

.dp-text {
  padding-left: 75px;
  padding-right: 30px;
  position: relative;
  top: -51px;
  white-space: nowrap;
  font-size: 20px;
  font-weight: 700;
  line-height: 52px;
  color: var(--color--dark-brown);
  font-family: 'Aclonica', 'Montserrat', 'cwTeXYen', 'Helvetica', sans-serif;

  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
}

.dp-plus:before {
  content: '→';
  opacity: 0;
  font-weight: 300;
  font-size: 30px;
  font-family: 'Aclonica';

  line-height: 50px;
  color: #fef7e9;

  position: absolute;
  left: 19px;
  top: 3px;

  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
}
.dp-button:hover {
  .dp-plus:before {
    opacity: 1;
    color: #fef7e9;

    transform: translateX(10px);
  }

  .dp-plus {
    width: 100%;
    padding: 0px 16px;
    color: #fef7e9;
  }

  .dp-plus:after {
    opacity: 0;
  }

  .dp-text {
    color: #fef7e9;
  }
}

.dp-plus:after {
  content: '+';
  font-size: 32px;
  font-weight: 300;
  line-height: 56px;
  color: #fef7e9;
  font-family: 'Aclonica';

  position: absolute;
  left: 18px;
  top: 0;

  opacity: 1;
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
}
</style>
