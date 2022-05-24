<template>
<div id="conteudo">
<bar_top/>
 <div id="img_central">
   <img src="./assets/MockUp.png" alt="couple" >
 </div>
 <!-- ----------------------- -->
 <div class="card_promo_one">
    <div class="block_one">
      <img src="./assets/yourDes.jpg" style="width: 100%; height: auto; margin-bottom: 60px; " alt="moda_infatil">
    </div>
    <div class="block_two">
      <div class="block_two_promo_one">
        <h1 class="promocao">Promoções da Semana</h1>
      </div>
        <div class="block_two_promo_two">
     
          <img src="./assets/banner-moda-infantil.jpg" style="width: 100%; height: auto; " alt="criança">
      </div>
    </div>
 </div>
  <!-- ----------------------- -->
<h1 style="grid-column: span 10; margin-left: 40px;">Nossos Produtos:
</h1>
 <!-- ----------------------- -->
 <div class="filter">
   <h2 style="margin-left: 40px;">Filtros</h2>
    <div style="display: flex; flex-direction: row; justify-items: center; align-items: center; gap: 10px;">
      <span>Por Categoria:</span>
      <select id="selec_categoria" v-on:click="ModificouSelect()">
        <option value="">todos</option>
        <option value="women">Women</option>
        <option value="men">Men's </option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>
       <span>Por Avaliação:</span>
      <select id="selec_ava" v-on:click="ModificouSelect()">
        <option value="">Todas</option>
        <option value="1">Maior que 1 </option>
        <option value="2">Maior que 2</option>
        <option value="3">Maior que 3 </option>
        <option value="4">Maior que 4</option>
        <option value="5">Maior que 5</option>
      </select>
      <span>Ordenar Por:</span>
      <select id="ordeby" v-on:click="ModificouSelect()">
        <option value="">Aleatório</option>
        <option value="1">Ordem Alfabetica </option>
        <option value="2">Preço</option>
      </select>
    </div>
 </div>
 <!-- ----------------------- -->
 <div v-for="produto in produtosFiltrados" :key='produto.id' class="componente">
   <Card_prod 
:nome="produto.title"
:fotos="produto.image"
:price="produto.price"

/>
 <button class='buttonAdicionar'  v-on:click="addCart(produto)">Adicionar ao carrinho</button>
 </div>
 
 <div id="cart_itens" style="display: none;" v-if="cart.length > 0" >
   <h2 style="text-align: center;" >Carrinho de Compras</h2>
   <div class="conteudo_card" v-for="produto in cart" :key="produto.id">
   <img :src="produto.image" :alt="produto.title">
    <span style="font-size:15px; margin-right: 20px; width: 30%;">{{produto.title}}</span>
    <span style="font-size:10px; width: 50%;">{{produto.description}}</span>
    <span>${{produto.price}}</span>
    <button style="overflow: hidden; width: 30px; height: 30px; background-color: red;" v-on:click="RemoveCart(produto)">X</button>
    
   </div>
   <hr>
   <h1 style="color: black; text-align: center;">Valor total: {{total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}</h1>
   
 </div>

<button v-on:click="MostrarCart()"  id="cart" v-if="cart.length > 0">
<img src="./assets/carrinho-de-compras.png" alt="carrinho" >
</button>
</div>

</template>

<script>
import bar_top from './components/bar_top.vue'
import Card_prod from './components/Card_prod.vue'




export default {
  name: 'App',
  components: {
    bar_top,
    Card_prod,
  }, 
  data(){
    return {
      produtos:[],
      produtosFiltrados:[],
      cart:[],
      
    }
  },
  async mounted() {
    const req = await fetch('https://fakestoreapi.com/products')
    const data = await req.json();
    this.produtos = await data;
    this.produtosFiltrados = await data;
    

  },
  methods: {
        addCart(produto){
          this.cart.push(produto)
          
          
        },
         RemoveCart(produto){
          this.cart.splice(this.cart.indexOf(produto), 1)
         
        },
    
        filtros(){
          var camp_select_ava =document.getElementById('selec_ava').value;
          var camp_select =document.getElementById('selec_categoria').value;
          if(camp_select != '' && camp_select_ava!=""){
            this.produtosFiltrados = this.produtos.filter(produto => produto.category.toLowerCase().includes(camp_select) && produto.rating.rate >= camp_select_ava )
          } else if(camp_select != '' && camp_select_ava=="" ){
            this.produtosFiltrados = this.produtos.filter(produto => produto.category.toLowerCase().includes(camp_select))
            
          }else if(camp_select == '' && camp_select_ava!="" ){
            this.produtosFiltrados = this.produtos.filter(produto => produto.rating.rate >= camp_select_ava)
          }else{
            this.produtosFiltrados = this.produtos
          }
        },
        ordeby(){
          var ordeby = document.getElementById('ordeby').value;
          if(ordeby ==='1'){
            this.produtosFiltrados = this.produtos.sort(
              (a,b) => {if (a.title<b.title ){
                  return -1;
              }
                if(a.title>b.title){
                  return 1;
                }
              return 0;
              })
          }
          else if(ordeby ==='2'){
            this.produtosFiltrados = this.produtos.sort(
              (a,b) => {if (a.price<b.price ){
                  return -1;
              }
                if(a.price>b.price){
                  return 1;
                }
              return 0;
              })
          }


            
        },

        ModificouSelect(){
          var camp_select =document.getElementById('selec_categoria');
          var camp_select_ava =document.getElementById('selec_ava');
          var ordeby = document.getElementById('ordeby');

          camp_select.addEventListener('change', ()=>{
            this.filtros()
          })
          camp_select_ava.addEventListener('change', ()=>{
            this.filtros()
          })
          ordeby.addEventListener('change', ()=>{
            this.ordeby()
            this.filtros()
          })

        },
        MostrarCart(){
          var div = document.getElementById('cart_itens');
          if(div.style.display === "none"){
              div.style.display = "block"
          } else{
              div.style.display = "none"
          } 
          
        },
  },
  computed: {
    total() {
        let total = 0;
        total = this.cart.reduce( (soma, item) => {
            return soma + item.price
        }, 0)

        return total;

    },
  
  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow: auto;
    overflow-x: hidden;
  }

  #conteudo{
    display: grid;
    grid-template-columns: repeat(10, 1fr);
  }
  #img_central{
    grid-column: span 10;
    width: 100%;
    height: 550px;
    overflow: hidden;
  }
  #img_central img{
    width: 100%;
    height: auto;
  }
  .card_promo_one{
    grid-column: span 10;
    width: 100%;
    height: 80%;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
  }
  .block_one{
    overflow: hidden;
    border-radius: 3px;
    width: 100%;
    height: auto;
    margin: 10px;
    cursor: pointer;
  }
  .block_two{
    width: 100%;
    height: auto;
    margin: 10px;
    display: flex;
    flex-direction: column;
  }
  .block_two_promo_one{
    width: 100%;
    height: 50%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;    
    cursor: pointer;
    margin-bottom: 10px;
    cursor: pointer;
    
  }
   .block_two_promo_two{
     overflow: hidden;
    width: 100%;
    height: 50%;
    margin-top: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;    
    cursor: pointer;

  }
  .filter{
      grid-column: span 10;
      width: 100%;
      height: 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-items: center;
      justify-content: space-between; 
  }
  #cart{
    width: 100px;
    height: 100px;
    background-color: rgba(234,173,32,255);
    position: fixed;
    border-radius: 100%;
    bottom: 0;
    right: 0;
    margin: 30px;
    cursor: pointer;
  }
  #cart_itens{
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;   
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    animation: fadein 0.3s ease-in-out;
  
    
  }
  .conteudo_card{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 80px;
    background-color: white;
    border-radius: 6px;
    margin-top: 10px;
    justify-items: center;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.616);
    border-radius: 6px;
    padding: 1rem;
  }
  .conteudo_card img{
    width: 5%;
    height: auto;
  }
  .componente{
  grid-column: span 2;
   height: 420px;
    overflow: hidden;
  }
  .buttonAdicionar{
    overflow: hidden;
    margin: 10px;
  }

button img{
  width: 50%;
  height: auto;
  margin-right: 5px;
  animation: go-top 1s infinite alternate;

}
button:hover{
    background-color: rgba(234,173,32,255);

}
.promocao{
  text-align: center;
  font-size: 50px;
  margin-top: 50px;
  animation: promo 0.7s infinite alternate-reverse;

}
@keyframes promo {
  from {
    color: black;
  }
  to {
    color: rgba(234,173,32,255);
  }
}
@keyframes go-top {
  from {
    transform: translateY(10px);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
@media (max-width: 1016px)
{
  #conteudo{
    grid-template-columns: repeat(8, 1fr);
  }
  .componente{
    grid-column: span 3 ;
    width: 300px;
  }
  .promocao{
    font-size: 40px;
  }
}
@media (max-width: 820px)
{

  .promocao{
    font-size: 30px;
  }
}
@media (max-width: 900px)
{
  #conteudo{
    grid-template-columns: repeat(8, 1fr);
  }
  .componente{
    grid-column: span 4 ;
    width: 300px;
  }
  .box {
    margin: 0;
    margin-left: 20%;
  }
  .buttonAdicionar{
    margin-left: 20%;
    width: 80%;
  }
}
</style>
