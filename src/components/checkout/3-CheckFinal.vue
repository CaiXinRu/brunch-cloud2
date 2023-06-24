<template>
  <table style="width: 100%" class="cf-table">
    <thead>
      <tr class="cf-head">
        <th style="width: 25%">品名</th>
        <!-- <th style="width: 25%">備註</th> -->
        <th style="width: 25%">單價</th>
        <th style="width: 25%">數量</th>
        <th style="width: 25%">小計</th>
      </tr>
    </thead>
    <tbody>
      <tr
        style="height: 100px"
        class="color--dark-brown cf-body"
        v-for="(item, index) in items"
        :key="'item' + index"
      >
        <td style="width: 25%">{{ item.name }}</td>
        <!-- <td style="width: 25%">{{ item.note }}</td> -->
        <td style="width: 25%">
          特價{{ item.priceUnit }}{{ item.price * 0.8 }}
        </td>
        <td style="width: 25%">{{ item.count }} 份</td>
        <td style="width: 25%">
          {{ item.priceUnit }}{{ item.price * 0.8 * item.count }}
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr class="cf-total">
        <td style="width: 40%; border-right: 3px solid #ffff">總計</td>
        <td style="width: 60%">{{ priceUnit }}{{ total }}</td>
      </tr>
    </tfoot>
  </table>
  <table style="width: 100%" class="cf-table2">
    <thead>
      <tr class="cf-head">
        <th style="width: 100%">顧客資料</th>
      </tr>
    </thead>
    <tbody>
      <tr style="height: 50px" class="cf-body">
        <td
          style="width: 40%; border-right: 3px solid #fac664"
          class="color--dark-brown"
        >
          收件人姓名
        </td>
        <td style="width: 60%" class="color--black">？？</td>
      </tr>
      <tr style="height: 50px" class="cf-body">
        <td
          style="width: 40%; border-right: 3px solid #fac664"
          class="color--dark-brown"
        >
          聯絡電話
        </td>
        <td style="width: 60%" class="color--black">？？</td>
      </tr>
      <tr style="height: 50px" class="cf-body">
        <td
          style="width: 40%; border-right: 3px solid #fac664"
          class="color--dark-brown"
        >
          Email
        </td>
        <td style="width: 60%" class="color--black">？？</td>
      </tr>
      <tr style="height: 50px" class="cf-body">
        <td
          style="width: 40%; border-right: 3px solid #fac664"
          class="color--dark-brown"
        >
          收件地址
        </td>
        <td style="width: 60%" class="color--black">？？</td>
      </tr>
      <tr style="height: 50px" class="cf-body">
        <td
          style="width: 40%; border-right: 3px solid #fac664"
          class="color--dark-brown"
        >
          支付方式
        </td>
        <td style="width: 60%" class="color--black">？？</td>
      </tr>
      <tr style="height: 50px" class="cf-body">
        <td
          style="width: 40%; border-right: 3px solid #fac664"
          class="color--dark-brown"
        >
          預計收件日期與時間
        </td>
        <td style="width: 60%" class="color--black">？？</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  data: () => {
    return {
      total: 128,
      priceUnit: 'NT$',
      items: [
        {
          name: '鱈魚龍蝦沙拉漢堡',
          price: 80,
          priceUnit: 'NT$',
          count: 1,
          note: '不加生菜'
        },
        {
          name: '鮭魚麻辣沙拉漢堡',
          price: 80,
          priceUnit: 'NT$',
          count: 1,
          note: '不加生菜'
        },
        {
          name: '鮭魚麻辣沙拉漢堡',
          price: 80,
          priceUnit: 'NT$',
          count: 1,
          note: '不加生菜'
        },
        {
          name: '鮭魚麻辣沙拉漢堡',
          price: 80,
          priceUnit: 'NT$',
          count: 1,
          note: '不加生菜'
        }
      ]
    }
  }
}
</script>

<style scoped>
.cf-table {
  margin: 48px 0 56px 0;
}
tr {
  display: flex;
  flex-direction: row;
  /* padding: 4px 0; */
  text-align: center;
  align-items: center;
}
.cf-head {
  color: #644536;
  background-color: #fac664;
  font-size: 18px;
  line-height: 50px;
}
.cf-body {
  font-size: 20px;
  border-bottom: 3px solid #fac664;
  border-right: 3px solid #fac664;
  border-left: 3px solid #fac664;
}
.cf-total {
  color: #644536;
  background-color: #fac664;
  font-size: 18px;
  line-height: 50px;
  padding: 8px 0;
}
.cf-table2 {
  margin: 0 0 56px 0;
}
</style>
