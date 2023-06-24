<template>
  <table style="width: 100%" class="cc-table">
    <thead>
      <tr class="cc-head">
        <th style="width: 100%">顧客資料</th>
      </tr>
    </thead>
    <tbody>
      <tr class="cc-body">
        <td style="width: 100%" class="cc-detail">
          <Form @submit="createOrder" v-slot="{ errors }">
            <div class="cc-inside">
              <div class="cc-column">
                <div class="u-mb-24">
                  <label class="cc-label" for="姓名">收件人姓名＊</label><br />
                  <Field
                    class="cc-input"
                    style="width: 85%"
                    type="text"
                    id="姓名"
                    name="姓名"
                    autocomplete="off"
                    autofocus
                    placeholder="請輸入姓名..."
                    rules="required"
                    :class="{ 'is-invalid': errors['姓名'] }"
                    v-model="form.user.name"
                  ></Field
                  ><error-message
                    name="姓名"
                    class="invalid-feedback"
                  ></error-message
                  ><br />
                </div>
                <div class="u-mb-24">
                  <label class="cc-label" for="phone">聯絡電話＊</label><br />
                  <Field
                    class="cc-input"
                    style="width: 85%"
                    type="tel"
                    id="phone"
                    name="phone"
                    autocomplete="off"
                    placeholder="請輸入手機號碼..."
                    :rules="isPhone"
                    :class="{ 'is-invalid': errors['phone'] }"
                    v-model="form.user.tel"
                  ></Field
                  ><error-message
                    name="phone"
                    class="invalid-feedback"
                  ></error-message
                  ><br />
                </div>
                <div class="u-mb-24">
                  <label class="cc-label" for="Email">Email＊</label><br />
                  <Field
                    class="cc-input"
                    style="width: 85%"
                    type="Eemail"
                    id="Email"
                    name="Email"
                    autocomplete="off"
                    placeholder="請輸入電子信箱..."
                    rules="email|required"
                    :class="{ 'is-invalid': errors['Email'] }"
                    v-model="form.user.email"
                  ></Field>
                  <error-message
                    name="Email"
                    class="invalid-feedback"
                  ></error-message>
                  <br />
                </div>
                <div class="u-mb-24">
                  <label class="cc-label" for="地址">收件地址＊</label><br />
                  <Field
                    class="cc-input"
                    style="width: 85%"
                    type="text"
                    id="地址"
                    name="地址"
                    autocomplete="off"
                    placeholder="請輸入收件地址..."
                    rules="required"
                    :class="{ 'is-invalid': errors['地址'] }"
                    v-model="form.user.address"
                  ></Field
                  ><error-message
                    name="地址"
                    class="invalid-feedback"
                  ></error-message
                  ><br />
                </div>
              </div>
              <div class="cc-column">
                <div class="u-mb-24">
                  <label class="cc-label" for="支付方式">支付方式＊</label><br />
                  <Field
                    class="cc-input"
                    style="width: 85%"
                    type="text"
                    id="支付方式"
                    name="支付方式"
                    autocomplete="off"
                    as="select"
                    rules="required"
                    :class="{ 'is-invalid': errors['支付方式'] }"
                    v-model="form.payment"
                  >
                    <option value="請選擇支付方式" disabled selected>請選擇支付方式</option>
                    <option value="信用卡/金融卡">信用卡/金融卡</option>
                    <option value="LinePay">LinePay</option>
                    <option value="ApplePay">ApplePay</option>
                    <option value="GooglePay">GooglePay</option></Field
                  ><error-message
                    name="支付方式"
                    class="invalid-feedback"
                  ></error-message
                  ><br />
                </div>
                <!-- <div class="u-mb-24">
                  <label class="cc-label" for="日期與時間">預計收件日期與時間＊</label
                  ><br />
                  <Field
                    class="cc-input"
                    style="width: 85%"
                    type="datetime-local"
                    id="日期與時間"
                    name="日期與時間"
                    autocomplete="off"
                    rules="required"
                    :class="{ 'is-invalid': errors['日期與時間'] }"
                    v-model="form.time"
                  ></Field
                  ><error-message
                    name="日期與時間"
                    class="invalid-feedback"
                  ></error-message
                  ><br />
                </div> -->
                <div class="u-mb-24">
                  <label class="cc-label" for="note">留言備註</label><br />
                  <textarea
                    class="cc-note"
                    style="width: 85%"
                    name="note"
                    id="note"
                    autocomplete="off"
                    placeholder="還想告訴我們..."
                    v-model="form.message"
                  ></textarea
                  ><br />
                </div>
                <div class="u-mb-24">
                  <button class="cc-submit" style="width: 85%" type="submit">
                    提交訂單
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data () {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        payment: '請選擇支付方式',
        time: '',
        message: ''
      }
    }
  },
  methods: {
    createOrder () {
      console.log(this.form)
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的手機號碼(09開頭)'
    }
  }
}
</script>

<style>
.cc-table {
  margin: 48px 0 56px 0;
}
.cc-head {
  color: #644536;
  background-color: #fac664;
  font-size: 18px;
  line-height: 50px;

  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
}
.cc-body {
  display: flex;
  flex-direction: row;
  padding: 48px 0 16px 0;
  text-align: start;
  align-items: flex-start;

  font-size: 20px;
  border-bottom: 3px solid #fac664;
  border-right: 3px solid #fac664;
  border-left: 3px solid #fac664;
}
.cc-detail {
  padding: 0 0 0 80px;
}
.cc-inside{
  display: flex;
}
.cc-column {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.cc-label {
  color: #644536;
  margin-bottom: 8px;
  display: inline-block;
}
.cc-input {
  height: 40px;
  background-color: #ffffff;
  border: 2px solid #644536;
  display: flex;
  align-items: center;
  color: #272727;
  padding-left: 16px;
}
.cc-input:focus-within {
  border: 3px solid #fac664;
}
.cc-note {
  height: 175px;
  background-color: #ffffff;
  border: 2px solid #644536;
  display: flex;
  line-height: 34px;
  color: #272727;
  padding-left: 16px;
}
.cc-note:focus-within {
  border: 3px solid #fac664;
}
.cc-submit {
  height: 50px;
  background-color: #fac664;
  color: #644536;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cc-submit:hover{
  background-color: var(--color--secondary);
  color: var(--color--light-brown);
  box-shadow: 5px 5px 0px var(--color--primary);
}
.invalid-feedback {
  color: #fa7864;
  margin: 0;
  padding: 0;
}
</style>
