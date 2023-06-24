<template>
    <a href="#" class="s-button">
      <div class="s-div">
        <a class="see-more"> </a>
      </div>
      <div class="s-text">See more</div>
    </a>

</template>

<style lang="scss" scoped>
.s-button {
  position: absolute;
  width: max-content;
  left: 90%;
  top: 15%;
}
.s-div{
  height: 52px;
}
.see-more {
  font-size: 24px;
  border: 1px solid #FAC664;
  width: 52px;
  height: 52px;
  display: inline-block;
  background-color: #FAC664;
  color: #fef7e9;
  border-radius: 26px;
  line-height: 52px;

  transition: all 0.45s cubic-bezier(0.65,0,.076,1);
}

.s-text {
  padding-left: 75px;
  padding-right: 30px;
  position: relative;
  top: -51px;
  white-space: nowrap;
  font-weight: 700;
  line-height: 52px;
  color: #FAC664;
  font-family: 'Aclonica', 'Montserrat', 'cwTeXYen', "Helvetica", sans-serif;

  transition: all 0.45s cubic-bezier(0.65,0,.076,1);
}

.see-more:before {
  content: '→';
  opacity: 0;
  font-weight: 300;
  font-size: 30px;
  font-family: 'Aclonica';

  line-height: 52px;
  color: #fef7e9;

  position: absolute;
  left: 19px;
  top: 1px;

  transition: all 0.45s cubic-bezier(0.65,0,.076,1);
}
.s-button:hover {
  .see-more:before {
    opacity: 1;
    color: #fef7e9;

    transform: translateX(10px);
  }

  .see-more {
    width: 100%;
    padding: 0px 16px;
    color: #fef7e9;
  }

  .see-more:after {
    opacity: 0;
    //   content: '→';
  }

  .s-text {
    color: #fef7e9;
  }
}

.see-more:after {
  content: '>';
  font-size: 28px;
  font-weight: 300;
  line-height: 52px;
  color: #fef7e9;
  font-family: 'Aclonica';

  position: absolute;
  left: 18px;
  top: 0;

  opacity: 1;
  transition: all 0.45s cubic-bezier(0.65,0,.076,1);

}
</style>
