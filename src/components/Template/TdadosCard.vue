<template>
  <div class="card-data">
      <div class="card-data-container">
          <p>{{dataProduct.title}}</p>
          <h2>${{dataProduct.price}} <span></span></h2>
          <p>rate: {{dataProduct.rating.rate}}</p>
        
          <div class="sub-container-data-card">
           <p>{{dataProduct.category}}</p>
         
          </div>
         
      </div>
  </div>
</template>

<script>
export default {
    props: ['dataProduct']
}
</script>

<style>
.card-data{
  display: flex;
  justify-content:center ;
  align-items: center;
}
 .card-data-container{
   padding: .2em;
   color: #6d70f1;
   width: 80%;
 }

 .card-data-container p{
    font-size: .7em;
 }

 .sub-container-data-card{
   margin-top: 10px ;
 display: flex;
justify-content: space-between;
 
 }

  .sub-container-data-card p{
    padding: .5em;
    color:#fff;
    background-color: #9BB6FA;
  }



</style>