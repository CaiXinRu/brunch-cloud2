<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-color--white">
    <div class="container u-pt-48 u-pb-68">
      <MenuBar id="menuTop"></MenuBar>
      <div class="menu-category">
        <button
          data-category="burger"
          class="menu-btn"
          @click="filterMeals('burger')"
        >
          太空漢堡
        </button>
        <button
          data-category="toast"
          class="menu-btn"
          @click="filterMeals('toast')"
        >
          飄浮吐司
        </button>
        <button
          data-category="rice&noodles"
          class="menu-btn"
          @click="filterMeals('rice&noodles')"
        >
          柔情飯麵
        </button>
        <button
          data-category="snack"
          class="menu-btn"
          @click="filterMeals('snack')"
        >
          輕盈小點
        </button>
        <button
          data-category="drink"
          class="menu-btn"
          @click="filterMeals('drink')"
        >
          沁涼飲品
        </button>
        <button
          data-category="east"
          class="menu-btn"
          @click="filterMeals('all')"
        >
          完整菜單
        </button>
      </div>
      <!-- Burger -->
      <ITBurger
        v-if="filteredMeals.includes('ITBurger')"
        ref="ITBurger"
      ></ITBurger>
      <ILBurger
        v-if="filteredMeals.includes('ILBurger')"
        ref="ILBurger"
      ></ILBurger>
      <!-- Sandwich -->
      <ITSandwich
        v-if="filteredMeals.includes('ITSandwich')"
        ref="ITSandwich"
      ></ITSandwich>
      <ILSandwich
        v-if="filteredMeals.includes('ILSandwich')"
        ref="ILSandwich"
      ></ILSandwich>
      <!-- Rice & Noodles -->
      <ITRiceNoodles
        v-if="filteredMeals.includes('ITRiceNoodles')"
        ref="ITRiceNoodles"
      ></ITRiceNoodles>
      <ILRiceNoodles
        v-if="filteredMeals.includes('ILRiceNoodles')"
        ref="ILRiceNoodles"
      ></ILRiceNoodles>
      <!-- Snack -->
      <ITSnack v-if="filteredMeals.includes('ITSnack')" ref="ITSnack"></ITSnack>
      <ILSnack v-if="filteredMeals.includes('ILSnack')" ref="ILSnack"></ILSnack>
      <!-- Drinks -->
      <ITDrinks
        v-if="filteredMeals.includes('ITDrinks')"
        ref="ITDrinks"
      ></ITDrinks>
      <ILDrinks
        v-if="filteredMeals.includes('ILDrinks')"
        ref="ILDrinks"
      ></ILDrinks>

      <a class="menu-arrow" href="#menuTop"
        ><font-awesome-icon icon="fa-solid fa-circle-up"
      /></a>
    </div>
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar.vue'
import ITBurger from '@/components/Item-Title/1-ITBurger.vue'
import ITSandwich from '@/components/Item-Title/2-ITSandwich.vue'
import ITRiceNoodles from '@/components/Item-Title/3-ITRiceNoodles.vue'
import ITSnack from '@/components/Item-Title/4-ITSnack.vue'
import ITDrinks from '@/components/Item-Title/5-ITDrinks.vue'
import ILBurger from '@/components/Item-List/1-ILBurger.vue'
// import ILSandwich from '@/components/Item-List/2-ILSandwich.vue'
// import ILRiceNoodles from '@/components/Item-List/3-ILRiceNoodles.vue'
// import ILSnack from '@/components/Item-List/4-ILSnack.vue'
// import ILDrinks from '@/components/Item-List/5-ILDrinks.vue'

export default {
  data () {
    return {
      selectedCategory: 'all'
    }
  },
  components: {
    MenuBar,
    ITBurger,
    ITSandwich,
    ITRiceNoodles,
    ITSnack,
    ITDrinks,
    ILBurger
    // ILSandwich
    // ILRiceNoodles,
    // ILSnack,
    // ILDrinks
  },
  methods: {
    filterMeals (category) {
      this.selectedCategory = category
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    filteredMeals () {
      if (this.selectedCategory === 'all') {
        return [
          'ITBurger',
          'ILBurger',
          'ITSandwich',
          'ILSandwich',
          'ITRiceNoodles',
          'ILRiceNoodles',
          'ITSnack',
          'ILSnack',
          'ITDrinks',
          'ILDrinks'
        ]
      } else {
        switch (this.selectedCategory) {
          case 'burger':
            return ['ITBurger', 'ILBurger']
          case 'toast':
            return ['ITSandwich', 'ILSandwich']
          case 'rice&noodles':
            return ['ITRiceNoodles', 'ILRiceNoodles']
          case 'snack':
            return ['ITSnack', 'ILSnack']
          case 'drink':
            return ['ITDrinks', 'ILDrinks']
          default:
            return []
        }
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
.menu-category {
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.menu-btn {
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
  margin-bottom: 36px;
}
.menu-btn:hover {
  color: #fef7e9;
}
.menu-btn:before {
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
.menu-btn:after {
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
.menu-btn:hover:before {
  top: -40%;
  left: 13%;
  transform: scale(1);
}
.menu-btn:hover:after {
  top: -60%;
  right: 10%;
  transform: scale(1);
}
.menu-arrow {
  font-size: 50px;
  color: var(--color--primary);
  align-self: flex-end;
  cursor: pointer;
}
</style>
