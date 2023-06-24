<template>
  <div class="bg-color--white">
    <div class="container u-pt-48 u-pb-68">
      <LocationBar id="locationTop"></LocationBar>
      <div class="location-area">
        <button
          data-area="north"
          class="location-btn"
          @click="filterLocations('north')"
        >
          北部地區
        </button>
        <button
          data-area="middle"
          class="location-btn"
          @click="filterLocations('middle')"
        >
          中部地區
        </button>
        <button
          data-area="south"
          class="location-btn"
          @click="filterLocations('south')"
        >
          南部地區
        </button>
        <button
          data-area="east"
          class="location-btn"
          @click="filterLocations('east')"
        >
          東部地區
        </button>
        <button
          data-area="east"
          class="location-btn"
          @click="filterLocations('all')"
        >
          全台門市
        </button>
      </div>
      <table style="width: 100%" class="location-table">
        <thead>
          <tr class="location-head">
            <th style="width: 20%">門市名稱</th>
            <th style="width: 20%">訂餐專線</th>
            <th style="width: 60%">門市位置</th>
          </tr>
        </thead>
        <tbody>
          <tr
            style="height: 60px"
            class="location-body"
            v-for="(location, index) in filteredLocations"
            :key="index"
          >
            <td style="width: 20%">{{ location.store }}</td>
            <td style="width: 20%">{{ location.tel }}</td>
            <td style="width: 60%">{{ location.address }}</td>
          </tr>
        </tbody>
      </table>
      <a class="location-arrow" href="#locationTop"><font-awesome-icon icon="fa-solid fa-circle-up" /></a>
    </div>
  </div>
</template>

<script>
import LocationBar from '@/components/locations/LocationBar.vue'
export default {
  data () {
    return {
      locations: [
        // 北部地區
        {
          store: '臺北北醫莊敬店',
          tel: '02-8732-8088',
          address: '台北市信義區莊敬路260巷13號',
          area: 'north'
        },
        {
          store: '臺北台大公館店',
          tel: '02-2378-0699',
          address: '台北市中正區羅斯福路137巷29號',
          area: 'north'
        },
        {
          store: '新北新莊中學店',
          tel: '02-8888-8888',
          address: '新北市新莊區中學路123號',
          area: 'north'
        },
        {
          store: '桃園龍潭高中店',
          tel: '03-9999-9999',
          address: '桃園市龍潭區高中街456號',
          area: 'north'
        },
        {
          store: '基隆市立暖暖店',
          tel: '02-7777-7777',
          address: '基隆市暖暖區市立路789號',
          area: 'north'
        },
        {
          store: '新竹清大資工店',
          tel: '03-9876-5432',
          address: '新竹市東區資工路789號',
          area: 'north'
        },

        // 中部地區
        {
          store: '台中一中尊賢店',
          tel: '04-2225-6010',
          address: '台中市北區尊賢街3-1號',
          area: 'middle'
        },
        {
          store: '台中逢甲福星店',
          tel: '04-2707-9178',
          address: '台中市西屯區福星路22巷40號',
          area: 'middle'
        },
        {
          store: '彰化師範大學店',
          tel: '04-3333-3333',
          address: '彰化縣彰化市師範路456號',
          area: 'middle'
        },
        {
          store: '南投縣立大學店',
          tel: '049-4444-4444',
          address: '南投縣埔里鎮大學路789號',
          area: 'middle'
        },

        // 南部地區
        {
          store: '高雄高醫博愛店',
          tel: '07-322-8523',
          address: '高雄市三民區博愛一路368-1號',
          area: 'south'
        },
        {
          store: '高雄中山鼓元店',
          tel: '07-531-6718',
          address: '高雄市鼓山區鼓元街38-3號',
          area: 'south'
        },
        {
          store: '屏東大學店',
          tel: '08-9876-5432',
          address: '屏東縣屏東市大學路789號',
          area: 'south'
        },
        {
          store: '雲林科技大學店',
          tel: '05-5555-5555',
          address: '雲林縣斗六市科技路123號',
          area: 'south'
        },
        {
          store: '台南成功大學店',
          tel: '06-2345-6789',
          address: '台南市東區大學路123號',
          area: 'south'
        },
        {
          store: '嘉義中正大學店',
          tel: '05-7890-1234',
          address: '嘉義市東區中正路456號',
          area: 'south'
        },

        // 東部地區
        {
          store: '宜蘭中山店',
          tel: '03-4567-8901',
          address: '宜蘭縣羅東鎮中山路123號',
          area: 'east'
        },
        {
          store: '台東大學店',
          tel: '089-234-5678',
          address: '台東縣台東市大學路456號',
          area: 'east'
        },
        {
          store: '宜蘭南澳技術店',
          tel: '089-789-0123',
          address: '宜蘭縣南澳鄉技術路789號',
          area: 'east'
        },
        {
          store: '花蓮文藻外語店',
          tel: '03-1234-5678',
          address: '花蓮縣花蓮市外語路123號',
          area: 'east'
        },
        {
          store: '花蓮慈濟中央店',
          tel: '03-857-1734',
          address: '花蓮縣吉安鄉中央路二段615-2號',
          area: 'east'
        },
        {
          store: '花蓮東華大學店',
          tel: '03-866-1857',
          address: '花蓮縣壽豐鄉大學路二段33號',
          area: 'east'
        }
      ],
      selectedArea: '' // 儲存選取的地區
    }
  },
  components: {
    LocationBar
  },
  methods: {
    filterLocations (area) {
      this.selectedArea = area
    }
  },
  computed: {
    filteredLocations () {
      // 根據選取的地區過濾資料
      if (this.selectedArea === '' || this.selectedArea === 'all') {
        return this.locations // 若未選取地區，會回傳所有資料
      } else {
        return this.locations.filter(
          (location) => location.area === this.selectedArea
        )
      }
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.location-area {
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.location-btn {
  display: flex;
  text-align: center;
  justify-content: center;
  background: #fac664;
  color: #272727;
  font-weight: bold;
  padding: 1.18em 1.32em 1.03em;
  line-height: 1;
  border-radius: 38px;
  position: relative;
  min-width: 7.23em;
  text-decoration: none;
  font-family: var(--font);
  font-size: 1.25rem;
  z-index: 2;
  margin-bottom: 55px;
}
.location-btn:hover {
  color: #fef7e9;
}
.location-btn:before {
  width: 3.2em;
  height: 3.2em;
  position: absolute;
  content: '';
  display: flex;
  background: #fac664;
  border-radius: 50%;
  transition: 1s ease;
  z-index: -1;

  top: 0%;
  left: 13%;
  transform: scale(0.65);
  transition: all 0.5s;
}
.location-btn:after {
  width: 3.8em;
  height: 3.8em;
  position: absolute;
  content: '';
  display: flex;
  background: #fac664;
  border-radius: 50%;
  transition: 1s ease;
  z-index: -1;

  top: 0%;
  right: 10%;
  transform: scale(0.65);
  transition: all 1s ease;
}
.location-btn:hover:before {
  top: -40%;
  left: 13%;
  transform: scale(1);
}
.location-btn:hover:after {
  top: -60%;
  right: 10%;
  transform: scale(1);
}

.location-table {
  margin: 0 0 20px 0;
}
tr,
th {
  display: flex;
  flex-direction: row;
  padding: 0 0 0 16px;
  text-align: start;
  align-items: center;
  justify-content: flex-start;
}
.location-head {
  color: #644536;
  background-color: #fac664;
  font-size: 18px;
  line-height: 50px;
  padding: 0;
}
.location-body {
  font-size: 20px;
  border-bottom: 3px solid #fac664;
}
.location-arrow{
  font-size: 50px;
  color: var(--color--primary);
  align-self: flex-end;
  cursor: pointer;
}
</style>
