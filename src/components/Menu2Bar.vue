<template>
    <div class="col-sm-2 fixed">
      <div class="menu-bar">
        <div class="t-primary">MENU</div>
        <a href="#burgers" class="t-list">太空漢堡</a>
        <a href="#sandwiches" class="t-list">飄浮吐司</a>
        <a href="#ricenoodles" class="t-list">柔情飯麵</a>
        <a href="#snacks" class="t-list">輕盈小點</a>
        <a href="#drinks" class="t-list">沁涼飲品</a>
      </div>
    </div>
</template>

<style scoped>
.fixed{
  position: fixed;
  z-index: 10;
}
.menu-bar {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.t-primary {
  display: flex;
  background-color: #669afa;
  border-radius: 30px;
  width: 90%;
  height: 96px;
  line-height: 96px;
  justify-content: center;

  color: #fef7e9;
  font-size: 31px;
  font-family: 'Aclonica', 'Montserrat', 'cwTeXYen', 'Helvetica', sans-serif;
  margin-bottom: 40px;
}
.t-list {
    display: flex;
    text-align: center;
    justify-content: center;
    background: #FAC664;
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
    margin-bottom: 45px;
}
.t-list:hover{
  color: #FEF7E9;
}
.t-list:before {
    width: 3.2em;
    height: 3.2em;
    position: absolute;
    content: "";
    display: flex;
    background: #FAC664;
    border-radius: 50%;
    transition: 1s ease;
    z-index: -1;

    top: 0%;
    left: 13%;
    transform: scale(0.65);
    transition: all 0.5s;
}
.t-list:after {
    width: 3.8em;
    height: 3.8em;
    position: absolute;
    content: "";
    display: flex;
    background: #FAC664;
    border-radius: 50%;
    transition: 1s ease;
    z-index: -1;

    top: 0%;
    right: 10%;
    transform: scale(0.65);
    transition: all 1s ease;
}

.t-list:hover:before {
    top: -40%;
    left: 13%;
    transform: scale(1);
}

.t-list:hover:after {
    top: -60%;
    right: 10%;
    transform: scale(1);
}
</style>
