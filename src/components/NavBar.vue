<template>
  <header class="navbar bg-color--secondary">
    <div class="container u-pt-16">
      <div class="logo">
        <a href="/"><img src="https://picsum.photos/80" /></a>
      </div>
      <div class="list-bar">
        <ul class="list">
          <li>
            <router-link to="/menu" class="main-font" date-link-alt="MENU"
              ><span>雲端美味</span></router-link
            >
          </li>
          <li><p class="color--light-brown main-font-1">｜</p></li>
          <li>
            <router-link
              to="/promotions"
              class="main-font"
              date-link-alt="PROMOTIONS"
              ><span>促銷優惠</span></router-link
            >
          </li>
          <li><p class="color--light-brown main-font-1">｜</p></li>
          <li>
            <router-link
              to="/locations"
              class="main-font"
              date-link-alt="LOCATIONS"
              ><span>門市據點</span></router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="top-right-btn">
      <nav>
        <ul>
          <li>
            <span>
              <font-awesome-icon icon="fa-solid fa-user" />
            </span>
            <span>
              <a href="#">會員登入</a>
            </span>
          </li>
          <li>
            <span>
              <font-awesome-icon icon="fa-solid fa-heart" />
            </span>
            <span>
              <a href="#">我的最愛</a>
            </span>
          </li>
          <li>
            <span>
              <font-awesome-icon icon="fa-solid fa-cart-shopping" />
            </span>
            <span>
              <a @click="showModal()">購物清單</a>
            </span>
          </li>
        </ul>
      </nav>
    </div>
    <CartBar :modelValue="isCartBarOpen" @update:modelValue="(val)=>{isCartBarOpen = val}"></CartBar>
  </header>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import CartBar from '@/components/CartBar.vue'

export default {
  name: 'NavBar',
  data: () => {
    return {
      isCartBarOpen: false
    }
  },
  components: {
    CartBar
  },
  methods: {
    showModal () {
      this.isCartBarOpen = true
      const modal = document.getElementById('cartModal')
      modal.showModal()
    }
  }
}
</script>

<style scoped>
.navbar {
  height: auto;
}
.logo {
  margin: auto;
}
.list-bar {
  margin: 20px 0 0 0;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.list {
  list-style-type: none;
}
.list > li {
  float: left;
}
.main-font-1 {
  font-size: 24px;
  margin: 0 20px;
  font-weight: 500;
  display: block;
  overflow: hidden;
}
.main-font {
  font-size: 24px;
  margin: 0 20px;
  padding: 0 18px;
  font-weight: 500;
  display: block;
  overflow: hidden;
  color: var(--color--primary);
}
.main-font span {
  color: var(--color--light-brown);
  display: block;
  transition: 1s;
}
.main-font:hover span {
  transform: translateY(-100%);
}
.main-font:before {
  position: absolute;
  content: attr(date-link-alt);
  left: 50%;
  transform: translateX(-50%);
  top: 100%;
  font-size: 16px;
  opacity: 0;
  transition: 1s;
}
.main-font:hover:before {
  top: 0;
  opacity: 1;
}

.top-right-btn {
  padding: 0;
  margin: 0;
  display: flex;
  position: absolute;
  top: 10%;
  right: 8%;
}
.top-right-btn nav {
  width: 18vw;
}
.top-right-btn ul {
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.top-right-btn li {
  list-style-type: none;
  height: 50px;
  width: 90px;
  overflow: hidden;
}
.top-right-btn li > span {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}
.top-right-btn li > span:nth-child(1) {
  color: var(--color--light-brown);
  background-color: var(--color--secondary);
  font-size: 18px;
}
.top-right-btn li > span:nth-child(2) {
  background-color: var(--color--light-brown);
}
li:hover span {
  transform: translateY(-100%);
}
.top-right-btn a {
  color: var(--color--secondary);
  font-family: 'Aclonica', 'Montserrat', 'cwTeXYen', 'Helvetica', sans-serif;
  font-size: 18px;
  text-align: center;
}
.top-right-btn a:hover {
  color: var(--color--secondary);
}
CartBar::backdrop {
  background-color: rgb(39, 39, 39, 0.5);
}
</style>
