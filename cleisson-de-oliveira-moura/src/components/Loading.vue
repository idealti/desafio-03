<template>
   <div class="loadingAnimation">
      <div class="bouncingBalls">
         <div></div>
         <div></div>
         <div></div>
         <div></div>
      </div>
      Loading...
   </div>
</template>

<style scoped lang="scss">
.loadingAnimation {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   font-size: 2rem;
   font-weight: 900;
   color: #fff;
   margin: 0 auto;
   text-align: center;
   position: absolute;
   left: 50%;
   right: 50%;
   padding-top: 10rem;

   .bouncingBalls {
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
      width: 6.25rem;
      height: 6.25rem;
      margin-bottom: 1rem;

      div {
         width: 1.25rem;
         height: 1.25rem;
         background-color: #fff;
         border-radius: 50%;
         animation: bouncer 500ms cubic-bezier(.19, .57, .3, .98) infinite alternate;

         &:nth-child(2) {
            animation-delay: 100ms;
            opacity: .8;
         }
         &:nth-child(3) {
            animation-delay: 200ms;
            opacity: .6;
         }
         &:nth-child(4) {
            animation-delay: 300ms;
            opacity: .4;
         }
      }
   }
}

@keyframes bouncer {
   from {transform: translateY(0);}
   to {transform: translateY(-6.25rem);}
}
</style>