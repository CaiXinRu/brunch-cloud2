<template>
  <div>
    <LoadingPage v-if="isLoading"></LoadingPage>
    <div class="bg-color--white">
      <div class="container u-pt-48 u-pb-68">
        <div href="#" class="dc-button" @click="openCouponModal(true)">
          <div class="s-div">
            <a class="dp-plus"> </a>
          </div>
          <div class="dp-text">建立新的優惠券</div>
        </div>
        <table style="width: 100%" class="dc-table">
          <thead>
            <tr class="dc-head">
              <th style="width: 20%">名稱</th>
              <th style="width: 20%">折扣百分比</th>
              <th style="width: 20%">到期日</th>
              <th style="width: 20%">是否啟用</th>
              <th style="width: 20%">是否編輯</th>
              <th style="width: 20%">是否刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr
              style="height: 50px"
              class="color--dark-brown dc-body"
              v-for="(item, key) in coupons"
              :key="key"
            >
              <td style="width: 20%">{{ item.title }}</td>
              <td style="width: 20%">{{ item.percent }}%</td>
              <td style="width: 20%">{{ $filters.date(item.due_date) }}</td>
              <td style="width: 20%">
                <span class="color--positive" v-if="item.is_enabled === 1"
                  >啟用</span
                >
                <span class="color--negative" v-else>未啟用</span>
              </td>
              <td style="width: 20%">
                <button
                  class="color--dark-brown"
                  @click="openCouponModal(false, item)"
                >
                  <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                </button>
              </td>
              <td style="width: 20%">
                <button
                  class="color--dark-brown"
                  @click="openDelCouponModal(item)"
                >
                  <font-awesome-icon icon="fa-solid fa-trash-can" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <DashCouponModal
      :coupon="tempCoupon"
      ref="couponModal"
      @update-coupon="updateCoupon"
    />
    <DashDelModal :item="tempCoupon" ref="delModal" @del-item="delCoupon" />
  </div>
</template>

<script>
import DashCouponModal from '@/components/DashCouponModal.vue'
import DashDelModal from '@/components/DashDelModal.vue'
import LoadingPage from '@/components/LodingPage.vue'
export default {
  components: { DashCouponModal, DashDelModal, LoadingPage },
  props: {
    config: Object
  },
  data () {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      isLoading: false,
      isNew: false
    }
  },
  methods: {
    openCouponModal (isNew, item) {
      this.isNew = isNew
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000
        }
      } else {
        this.tempCoupon = { ...item }
      }
      this.$refs.couponModal.showModal()
    },
    openDelCouponModal (item) {
      this.tempCoupon = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    getCoupons () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`
      this.$http.get(url, this.tempProduct).then((response) => {
        this.coupons = response.data.coupons
        this.isLoading = false
        console.log(response)
      })
    },
    updateCoupon (tempCoupon) {
      if (this.isNew) {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
        this.$http.post(url, { data: tempCoupon }).then((response) => {
          console.log(response, tempCoupon)
          //  this.$httpMessageState(response, '新增優惠券')
          this.getCoupons()
          this.$refs.couponModal.hideModal()
        })
      } else {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
        this.$http.put(url, { data: this.tempCoupon })
          .then((response) => {
            console.log(response)
            //   this.$httpMessageState(response, '新增優惠券')
            this.getCoupons()
            this.$refs.couponModal.hideModal()
          })
      }
    },
    delCoupon () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.isLoading = true
      this.$http.delete(url).then((response) => {
        console.log(response, this.tempCoupon)
        // this.$httpMessageState(response, '刪除優惠券')
        const delComponent = this.$refs.delModal
        delComponent.hideModal()
        this.getCoupons()
      })
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
.dc-table {
  margin: 48px 0 48px 0;
}
tr {
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
}
.dc-head {
  color: #644536;
  background-color: #fac664;
  font-size: 18px;
  line-height: 50px;
}
.dc-body {
  font-size: 20px;
  border-bottom: 3px solid #fac664;
}
.dc-body:hover {
  background-color: #fef7e9;
}

.dc-button {
  position: absolute;
  width: max-content;
  left: 0%;
  top: 10%;
  cursor: pointer;
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
.dc-button:hover {
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
