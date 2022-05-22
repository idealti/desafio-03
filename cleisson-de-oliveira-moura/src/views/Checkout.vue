<script setup lang="ts">
   import { ref } from 'vue';
   const numberValue = ref('################')
   const holderName = ref('Nome Completo')
   const monthExpire = ref('mm')
   const yearExpire = ref('aa')
   const cvvValue = ref('')
</script>

<template>
   <div class="container">
      <div class="card-container">
         <div class="front">
               <div class="image">
                  <img src="../assets/creditCardImages/chip.png" alt="">
                  <img src="../assets/creditCardImages/visa.png" alt="">
               </div>
               <div class="card-number-box">{{numberValue}}</div>
               <div class="flexbox">
                  <div class="box">
                     <span>Titular</span>
                     <div class="card-holder-name">{{holderName}}</div>
                  </div>
                  <div class="box">
                     <span>Validade</span>
                     <div class="expiration">
                           <span class="exp-month">{{monthExpire}}/</span>
                           <span class="exp-year">{{yearExpire}}</span>
                     </div>
                  </div>
               </div>
         </div>
      </div>
      <form action="">
         <div class="inputBox">
               <span>Número do cartão</span>
               <input type="text" maxlength="16" class="card-number-input" v-model="numberValue">
         </div>
         <div class="inputBox">
               <span>Nome do titular</span>
               <input type="text" class="card-holder-input" v-model="holderName">
         </div>
         <div class="flexbox">
               <div class="inputBox">
                  <span>Mês de validade</span>
                  <select name="" id="" class="month-input" v-model="monthExpire">
                     <option value="month" selected disabled>month</option>
                     <option value="01">01</option>
                     <option value="02">02</option>
                     <option value="03">03</option>
                     <option value="04">04</option>
                     <option value="05">05</option>
                     <option value="06">06</option>
                     <option value="07">07</option>
                     <option value="08">08</option>
                     <option value="09">09</option>
                     <option value="10">10</option>
                     <option value="11">11</option>
                     <option value="12">12</option>
                  </select>
               </div>
               <div class="inputBox">
                  <span>Ano de validade</span>
                  <select name="" id="" class="year-input" v-model="yearExpire">
                     <option value="year" selected disabled>year</option>
                     <option value="2021">2021</option>
                     <option value="2022">2022</option>
                     <option value="2023">2023</option>
                     <option value="2024">2024</option>
                     <option value="2025">2025</option>
                     <option value="2026">2026</option>
                     <option value="2027">2027</option>
                     <option value="2028">2028</option>
                     <option value="2029">2029</option>
                     <option value="2030">2030</option>
                  </select>
               </div>
               <div class="inputBox">
                  <span>cvv</span>
                  <input type="text" maxlength="4" class="cvv-input" v-model="cvvValue">
               </div>
         </div>
         <router-link to="/">
            <input type="button" href="" value="Finalizar" class="submit-btn">
         </router-link>
      </form>
   </div>    
</template>

<style scoped lang="scss">
.container{
    max-width: 1020px;
    margin: 0 auto;
    padding-top: 9rem;
    background: #fff;
    border-radius: 4px;
    min-height: 100vh;
    background: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    padding-bottom: 60px;

   form {
      background: #fff;
      border-radius: 5px;
      box-shadow: 0 10px 15px rgba(0,0,0,.1);
      padding: 20px;
      width: 600px;
      padding-top: 160px;

      .inputBox{
         margin-top: 20px;

         span{
            display: block;
            color:#999;
            padding-bottom: 5px;
         }

         input, select{
            width: 100%;
            padding: 10px;
            border-radius: 10px;
            border:1px solid rgba(0,0,0,.3);
            color:#444;
         }
      }

      .flexbox{
         display: flex;
         gap:15px;

         .inputBox{
            flex:1 1 150px;
         }
      }

      .submit-btn{
         width: 100%;
         background:linear-gradient(45deg, #121414, #3b3e3e);
         margin-top: 20px;
         padding: 10px;
         font-size: 20px;
         color:#fff;
         border-radius: 10px;
         border:none;
         cursor: pointer;
         transition: .2s linear;

         &:hover{
            opacity: .8;
         }
      }
   }
}
.container .card-container{
    margin-bottom: -150px;
    position: relative;
    height: 250px;
    width: 400px;
}

.container .card-container .front{
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0; left: 0;
    background:linear-gradient(45deg, #121414, #3b3e3e);
    border-radius: 5px;
    backface-visibility: hidden;
    box-shadow: 0 15px 25px rgba(0,0,0,.2);
    padding:20px;
    transform:perspective(1000px) rotateY(0deg);
    transition:transform .4s ease-out;
}

.container .card-container .front .image{
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding-top: 10px;
}

.container .card-container .front .image img{
    height: 50px;
}

.container .card-container .front .card-number-box{
    padding:30px 0;
    font-size: 22px;
    color:#fff;
}

.container .card-container .front .flexbox{
    display: flex;
}

.container .card-container .front .flexbox .box:nth-child(1){
    margin-right: auto;
}

.container .card-container .front .flexbox .box{
    font-size: 15px;
    color:#fff;
}

.container .card-container .back{
    position: absolute;
    top:0; left: 0;
    height: 100%;
    width: 100%;
    background:linear-gradient(45deg, #121414, #3b3e3e);
    border-radius: 5px;
    padding: 20px 0;
    text-align: right;
    backface-visibility: hidden;
    box-shadow: 0 15px 25px rgba(0,0,0,.2);
    transform:perspective(1000px) rotateY(180deg);
    transition:transform .4s ease-out;
}

.container .card-container .back .stripe{
    background: #000;
    width: 100%;
    margin: 10px 0;
    height: 50px;
}

.container .card-container .back .box{
    padding: 0 20px;
}

.container .card-container .back .box span{
    color:#fff;
    font-size: 15px;
}

.container .card-container .back .box .cvv-box{
    height: 50px;
    padding: 10px;
    margin-top: 5px;
    color:#333;
    background: #fff;
    border-radius: 5px;
    width: 100%;
}

.container .card-container .back .box img{
    margin-top: 30px;
    height: 30px;
}
</style>