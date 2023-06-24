<template>
  <div class="sticky-footer">
    <NavBar class="sticky-top" :class="{ 'navbar--hidden': !showHeader }"></NavBar>
    <router-view/>
    <FooterBar class="sticky-bottom"></FooterBar>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
export default {
  data () {
    return {
      showHeader: true,
      lastScrollPosition: 0,
      scrollOffset: 40
    }
  },
  components: {
    NavBar,
    FooterBar
  },
  methods: {
    // Toggle if navigation is shown or hidden
    onScroll () {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < this.scrollOffset) {
        return
      }
      this.showHeader = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    }
  },
  mounted () {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestro () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style scoped>
.sticky-footer{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.sticky-top{
  position: sticky;
  left:0px;
  top: 0px;
  width: 100vw;
  z-index: 10;
  height: fit-content;
  transition: 0.5s all ease;
}
.navbar--hidden{
  top: -100%;
}
.sticky-bottom{
  margin-top: auto;
}
</style>
