<template>
  <div class="search-bar">
    <div class="search-element">
      <button class="search-btn">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" bounce />
      </button>
      <input
        autocomplete="off"
        type="text"
        name="search"
        placeholder="搜尋夢想中的雲端早午餐..."
      />
    </div>
  </div>
</template>

<style scoped>
.search-bar {
  width: 100%;
  height: 96px;
  display: flex;
}
.search-element {
  height: 48px;
  border-radius: 24px;
  background-color: #fef7e9;
  border: 1px solid #644536;
  width: 90%;
  margin: auto;
  box-shadow: 8px 8px 0px #fac664;

  display: flex;
}
.search-element:focus-within {
  border: 3px solid #fac664;
}
.search-btn {
  font-size: 28px;
  margin: 0 15px;
  color: #fac664;
}
.search-element input {
  border: none;
  background: transparent;
  margin: 10px 20px 10px 0px;

  flex: 1;
}
.search-element input:focus-visible {
  outline: none;
}

</style>
