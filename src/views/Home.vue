<template>
  <body>
    <div class="wrapper">
      <div class="bg-color--white">
        <div class="container u-pt-68 u-pb-68">
          <div class="row u-pl-48">
            <div class="col-sm-4 d-flex align-items-center">
              <div>
                <h2>關於 雲端早午安</h2>
                <h4 class="sub-border">BRUNCH IN THE CLUOD</h4>
                <p>
                  結氣西口更。手雪玩相方「未首時各送毛語」水哪原弓和放枝、喜習鴨校可坐黑裝三幸七反雨乞。原巾豆毛個兆耳民第采。
                  牛空屋乙占別院鼻喜視種子波笑借看害課貓。它母帽間尺拉士士世帽半上固花寫欠助。音間故平卜未？了車坐消詞。蛋步勿姐主次再邊去綠品，隻汁公泉穴燈冰蝶黑。
                  犬室雨清綠步教婆頁現。土好常節午高畫肖鳥，門寫要免鳥弓丟喝裏人雄外春忍完，奶停常尺您是二跑澡波丁良追山目巾家服，下壯右高眼蝴申生訴寺玉三海苗那許火走中，村魚怕神尤。
                </p>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="u-ml-48">
                <img
                  src="https://picsum.photos/750/500"
                  class="u-center-block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-color--light-brown">
        <div class="container u-pt-48 u-pb-68">
          <div class="u-text-center u-mb-48">
            <h2>必點首選！</h2>
            <h4 class="sub-border">MUST-TRY IN THE CLOUD</h4>
          </div>
          <EatMore></EatMore>
          <div class="row">
            <div class="col-sm-3xiao try-list u-mt-16">
              <img src="https://picsum.photos/280" class="u-center-block" />
              <h3 class="u-text-center color--black">鱈魚龍蝦沙拉漢堡</h3>
              <a href="#"><h6 class="try-btn">太空漢堡系列</h6></a>
            </div>
            <div class="col-sm-3xiao try-list u-mt-16">
              <img src="https://picsum.photos/280" class="u-center-block" />
              <h3 class="u-text-center color--black">火腿巧克力吐司</h3>
              <a href="#"><h6 class="try-btn">飄浮吐司系列</h6></a>
            </div>
            <div class="col-sm-3xiao try-list u-mt-16">
              <img src="https://picsum.photos/280" class="u-center-block" />
              <h3 class="u-text-center color--black">煙燻鮭魚義大利麵</h3>
              <a href="#"><h6 class="try-btn">柔嫩飯麵系列</h6></a>
            </div>
            <div class="col-sm-3xiao try-list u-mt-16">
              <img src="https://picsum.photos/280" class="u-center-block" />
              <h3 class="u-text-center color--black">低脂舒肥雞胸沙拉</h3>
              <a href="#"><h6 class="try-btn">輕盈小點系列</h6></a>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-color--white">
        <div class="container u-pt-48 u-pb-56">
          <div class="u-mb-48">
            <h2>最新消息！</h2>
            <h4 class="sub-border">NEWS IN THE CLOUD</h4>
          </div>
          <SeeMore></SeeMore>
          <div class="row">
            <div class="col-sm-3">
              <img src="https://picsum.photos/306" class="u-center-block" />
              <p class="sub u-mt-16 u-mb-4">2023 JUN.</p>
              <hr class="hr-news" />
              <a href="#"
                ><h3 class="u-mt-16 u-mb-16">留言Google五星好評</h3></a
              >
            </div>
            <div class="col-sm-3">
              <img src="https://picsum.photos/306" class="u-center-block" />
              <p class="sub u-mt-16 u-mb-4">2023 MAY.</p>
              <hr class="hr-news" />
              <a href="#"
                ><h3 class="u-mt-16 u-mb-16">限時！每件商品九折起</h3></a
              >
            </div>
            <div class="col-sm-3">
              <img src="https://picsum.photos/306" class="u-center-block" />
              <p class="sub u-mt-16 u-mb-4">2023 APR.</p>
              <hr class="hr-news" />
              <a href="#"
                ><h3 class="u-mt-16 u-mb-16">名中有「雲」吃出來</h3></a
              >
            </div>
            <div class="col-sm-3">
              <img src="https://picsum.photos/306" class="u-center-block" />
              <p class="sub u-mt-16 u-mb-4">2023 MAR.</p>
              <hr class="hr-news"/>
              <a href="#"><h3 class="u-mt-16 u-mb-16">加一元多一件</h3></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import EatMore from '@/components/EatMore.vue'
import SeeMore from '@/components/SeeMore.vue'

export default {
  name: 'HomeView',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    EatMore,
    SeeMore
  }
}
</script>

<style>
.try-list {
  height: 480px;
  border: 2px solid #fac664;
  padding: 28px 0px;
  margin: 0px 1px;
  background-color: #fef7e9;
  border-radius: 28px;
}
.try-btn {
  display: inline-block;
  width: auto;
  background-color: #fac664;
  color: #644536;
  padding: 10px 14px;
  margin: 0;
  border-radius: 23px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  text-align: center;
  line-height: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.hr-news {
  display: block;
  height: 0.5px;
  border: 0;
  border-top: 2px solid #fac664;
  padding: 0;
  margin-bottom: 0px;
}
</style>
