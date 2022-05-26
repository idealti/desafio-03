<script setup lang="ts">
import { ref } from 'vue';
import CheckoutModal from '../components/modals/CheckoutModal.vue';
import { useCart } from '../stores/useCart';

const { cleanCart } = useCart();
const modalIsOpen = ref(false)

const numberValue = ref('################')
const holderName = ref('Full Name')
const monthExpire = ref('mm')
const yearExpire = ref('yy')
const cvvValue = ref('xxx')

function handleFinishOrder () {
   cleanCart()
   modalIsOpen.value = true
}
</script>

<template>
<div class="container">
   <div class="cardContainer">
      <div class="front">
            <div class="image">
               <img src="../assets/creditCardImages/chip.png" alt="">
               <img src="../assets/creditCardImages/visa.png" alt="">
            </div>
            <div class="cardNumberBox">{{numberValue}}</div>
            <div class="flexbox">
               <div class="box">
                  <span>Holder Name</span>
                  <div class="card-holder-name">{{holderName}}</div>
               </div>
               <div class="box">
                  <span>Valid thru</span>
                  <div class="expiration">
                        <span class="exp-month">{{monthExpire}}/</span>
                        <span class="exp-year">{{yearExpire}}</span>
                  </div>
               </div>
            </div>
      </div>
   </div>
   <form>
      <div class="inputBox">
            <span>Card Number</span>
            <input type="text" maxlength="16" class="card-number-input" v-model="numberValue" @click="numberValue = ''">
      </div>
      <div class="inputBox">
            <span>Holder Name</span>
            <input type="text" class="card-holder-input" v-model="holderName" @click="holderName = ''">
      </div>
      <div class="flexbox">
            <div class="inputBox">
               <span>Expire Month</span>
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
               <span>Expire Year</span>
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
               <input type="text" maxlength="4" class="cvv-input" v-model="cvvValue" @click="cvvValue = ''">
            </div>
      </div>
      <button type="button" class="submit-btn" @click="handleFinishOrder">Finish Order</button>
      <Teleport to="#modal">
         <Transition name="modal">
            <CheckoutModal v-if="modalIsOpen" @close="modalIsOpen = false" />
         </Transition>
      </Teleport>
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
    min-height: 95vh;
    background: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    padding-bottom: 3.75rem;

   form {
      background: #fff;
      border-radius: 5px;
      box-shadow: 0 10px 15px rgba(0,0,0,.1);
      padding: 1.25rem;
      width: 37.5rem;
      padding-top: 10rem;

      .inputBox{
         margin-top: 1.25rem;

         span{
            display: block;
            color:#999;
            padding-bottom: 0.32rem;
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
         gap: 1rem;

         .inputBox{
            flex:1 1 9.4rem;
         }
      }

      .submit-btn{
         width: 100%;
         background:linear-gradient(45deg, #121414, #3b3e3e);
         margin-top: 1.25rem;
         padding: 1.6rem;
         font-size: 1.25rem;
         color:#fff;
         border-radius: 10px;
         border: none;
         cursor: pointer;
         transition: 200ms linear;

         &:hover{
            opacity: .8;
         }
      }
   }
}
.cardContainer{
    margin-bottom: -9.4rem;
    position: relative;
    height: 15rem;
    width: 25rem;
}
.front{
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0; left: 0;
    background:linear-gradient(45deg, #121414, #3b3e3e);
    border-radius: 5px;
    backface-visibility: hidden;
    box-shadow: 0 15px 25px rgba(0,0,0,.2);
    padding: 1.25rem;

    .image{
      display: flex;
      align-items:center;
      justify-content: space-between;
      padding-top: 0.6rem;

      img{
         height: 3.25rem;
      }
   }

   .cardNumberBox{
      padding: 2rem 0;
      font-size: 1.3rem;
      color:#fff;
   }

   .flexbox{
      display: flex;

      .box{
         font-size: 1rem;
         color:#fff;
      }

      .box:nth-child(1){
         margin-right: auto;
      }
   }
}

.modal-enter-active, .modal-leave-active {
   transition: all 300ms ease;
}
.modal-enter-from, .modal-leave-to {
   opacity: 0;
   transform: scale(1.1);
}

@media (max-width: 500px){
   .container form {
      width: 30rem;
   }
}
@media (max-width: 358px){
   .container form {
      width: 25rem;
   }
}
</style>