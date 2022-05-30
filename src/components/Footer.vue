<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-top">
        <div class="footer-info">
          <h2>choose how to pay</h2>
          <br>
          <p>
            With fakeStore, you pay by card,
            ticket or pic. You can also pay up to
            12x on boleto with Credit Market.</p>
        </div>
        <div class="footer-info">
          <h2>
            Free shipping from $79</h2>
          <br>
          <p>
            Just for being registered in FakeStore,
            you get free shipping on thousands of products.
            It is a benefit of Mercado Pontos.</p>
        </div>
        <div class="footer-info">
          <h2>Security from start to finish</h2>
          <br>
          <p>You didn't like what you bought?
            Give it back! In Mercado Livre there
            is nothing you cannot do, because
            you are always protected.</p>
        </div>
      </div>
      <div class="footer-botton">
        <div class="footer-copyright">Copyright ©&nbsp; Fake Store.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #8A8BDE;
}

.footer-top {
  display: flex;
  flex-direction: row;
  justify-content: center;
}





.footer-info {
  margin: 3% 0;
  padding: 0 8%;
  width: 30%;

  text-align: center;
}

.footer-container {
  color: #fff;
  padding: 2em;
  width: 80%;
}

@media (max-width: 700px) {
  .footer-top {
  flex-direction: column;
  align-items: center;
  padding: 0%;
}

.footer-info {
  width: 80%;
  text-align:justify;
  padding: 0 0;
}

}
</style>