<template>
  <div class="bg-color--white">
    <div class="container u-pt-48 u-pb-68">
      <NewsBar></NewsBar>
    </div>
  </div>
</template>

<script>
import NewsBar from '@/components/NewsBar'
export default {
  components: {
    NewsBar
  }
}
</script>

<style scoped>
.container{
    display: flex;
    justify-content: center;
}
</style>
