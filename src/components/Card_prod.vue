<template>
    <div class="box">
        <div class="div_image">
            <img :src="fotos" :alt="nome">
        </div>
        <h4>{{nome}}</h4>
        <span style="overflow: hidden;">Preço: {{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}</span>
       
        
    </div>
</template>

<script>


    export default {
        props: {
            nome: String,
            fotos: String,
            price:String,
        },
  
    }
</script>

<style>
.box{
    margin: 10px;
    border-radius: 6px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;    
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    padding: 10px;
    overflow: hidden;
    justify-content: space-between;
}
h4{
    font-size: 13px;
    overflow: hidden;
    margin-top: 15px;

}
img{
    width: 80%;
    height: 80%;
}
.div_image{
    width: 80%;
    height: 80%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
button{
    background: none;
    border: none;
    font-size: 15px;
    width: 100%;
    background-color: blue;
    color: white;
    height: 10%;
    cursor: pointer;
}

</style>