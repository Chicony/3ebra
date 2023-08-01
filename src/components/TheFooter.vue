<template>
  <div class="footer">
    <ul class="footer-navigation">
      <li class="navigation-item">
        <a href="#" class="navigation-link">Карта сайта</a>
      </li>
      <li class="navigation-item">
        <a href="#" class="navigation-link">Условия использования</a>
      </li>
      <li class="navigation-item">
        <a href="#" class="navigation-link">Контакты</a>
      </li>
      <li class="navigation-item">
        <a href="#" class="navigation-link">Горячая линия</a>
      </li>
      <li class="navigation-item">
        <a href="#" class="navigation-link">Антикоррупционная политика</a>
      </li>
    </ul>
    <div class="footer-contacts">
      <div class="social-networks">
        <a href="#" class="social-network-link">
          <img class="social-network-icon" src="../assets/image/twitter.png" alt="Twitter">
        </a>
        <a href="#" class="social-network-link">
          <img class="social-network-icon" src="../assets/image/facebook.png" alt="Facebook">
        </a>
        <a href="#" class="social-network-link">
          <img class="social-network-icon" src="../assets/image/linkedin.png" alt="Linkedin">
        </a>
      </div>
      <div class="copyright">
        © 2019 ООО Зебра Тест
      </div>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: 'TheFooter'
  }
</script>
  
<style scoped>
.footer
{
  background-color: #F8F8F8;
  padding: 36px 78px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #97999B;
}

.footer-navigation
{
  list-style: none;
}

.footer-navigation .navigation-item
{
  display: inline-block;
  margin-right: 38px;
}


.footer-navigation .navigation-link
{
  text-decoration: none;
  color: #97999B;
}

.footer-navigation .navigation-link:hover
{
  text-decoration: underline;
}

.social-networks
{
  display: flex;
}

.social-network-icon
{
  filter: grayscale(1);
  transition: 0.6s;
}

.social-network-icon:hover
{
  filter: none;
}

.social-network-link
{
  margin: 0 8px;
  display: flex;
  align-items: center;
}

.copyright
{
  margin-left: 26px;
}

.footer-contacts
{
  display: flex;
}
</style>