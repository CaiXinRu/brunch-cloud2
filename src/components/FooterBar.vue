<template>
  <body>
    <footer>
      <div class="bg-color--light-brown">
        <div class="container u-pt-16 u-pb-16">
          <div class="footer">
            <div>
              <img src="https://picsum.photos/120" />
            </div>
            <div class="footer-content">
              <p class="footer-text color--secondary">
                營業時間 05:30~14:30 (最後點餐時間14:15)
              </p>
              <p class="footer-text color--secondary">加盟專線 0975-173513</p>
              <p class="footer-text color--secondary">
                電子郵件 brunchincloud@gmail.com
              </p>
              <p class="footer-text color--brown">
                本網站僅供個人作品使用，無作任何商業用途｜<router-link
                  to="/login"
                  >登入後台</router-link
                >
              </p>
            </div>
            <div class="footer-icons">
              <div>
                <a
                  href="https://line.me/ti/p/5AZebOZFkr"
                  target="_blank"
                  class="footer-icon-1"
                  ><font-awesome-icon icon="fa-brands fa-line"
                /></a>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/lu.kyuhyun/"
                  target="_blank"
                  class="footer-icon"
                  ><font-awesome-icon icon="fa-brands fa-square-facebook"
                /></a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/lu_kyuhyun/"
                  target="_blank"
                  class="footer-icon"
                  ><font-awesome-icon icon="fa-brands fa-square-instagram"
                /></a>
              </div>
              <div>
                <a
                  href="https://github.com/CaiXinRu"
                  target="_blank"
                  class="footer-icon"
                  ><font-awesome-icon icon="fa-brands fa-square-github"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </body>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.footer-content {
  margin: 0 120px 0 16px;
}
.footer-text {
  display: flex;
  margin: 8px 0;
  font-size: 18px;
  letter-spacing: 0.1em;
}
.footer-text a {
  color: #c0b5a0;
}
.footer-text:hover a {
  color: #fac664;
}
.footer-text:active a {
  color: #e3bac6;
}
.footer-icons {
  width: 30%;
  height: 110px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.footer-icon-1 {
  color: #fac664;
  margin-left: 8px;
  font-size: 32px;
}
.footer-icon {
  color: #fac664;
  margin-left: 8px;
  font-size: 34px;
}
</style>
