<template>
    <div class="msgAdd">
        <p>{{msg}}</p>
        
    </div>
</template>

<script>
export default {
    name:"Message",
    props:{
        "msg": String,
      
    },

    
}
</script>

<style scoped>
 .msgAdd{
     background: rgb(243, 243, 243);
     border-bottom: 2px solid green;
     width: 200px;
     height: 45px;
     font-size: 0.8rem;
     border-top-left-radius: 5px;
     border-bottom-left-radius: 5px;
     padding: 0px 10px;
     display: flex;
     align-items: center;
     right: 0;
     z-index: 1;
     position: fixed;
     animation: animeMsg 0.8s forwards;


 }

 @keyframes animeMsg{
     from{
         opacity: 0;
         transform: translateX(100px);
     }

     to{
         opacity: 1;
         transform: initial;
     }
 }
</style>