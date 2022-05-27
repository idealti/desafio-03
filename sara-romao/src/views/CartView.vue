<template>
  <div class="container">
    <h1 class="title">Meu Carrinho</h1>

    <main>
      <table>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Qty</th>
          <th>SubTotal</th>
        </tr>

        <ul>
      
     </ul>
     

        <tr v-for="item in cart"  :key="item.id">
          <td class="titleProduct">
            <img :src="item.image" :alt="item.title" />
            {{ item.title }}
          </td>
          <td class="price">$ {{ item.price.toFixed(2) }}</td>
          <td class="qtyCount">
            <div>
                <button @click="removeQty(item.id)">-</button>
                {{ item.qtd}}
              <button @click="addQty(item.id)">+</button>
            </div>
          </td>
          <td class="price">${{ item.totalItem.toFixed(2) }}</td>


          <td class="remove" @click="removeProduct(item.id)"><img src="/assets/trash.svg" alt="Remove"/></td>
        </tr>
      </table>

      
    </main>
    <div class="infoCart">
        <div>
          <h4>Total:</h4>
          <p>$ {{$store.getters.total.toFixed(2)}}</p>
         
        </div>
        <button>Proceed To Checkout</button>

        
        
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      cart: this.$store.state.cart,
    };
  },
  methods: {
    addQty(product) {
     
      this.$store.commit("incrementProduct", product);
    },

    removeQty(product){
      this.$store.commit("decrementProduct", product)

    },

    removeProduct(product){
      
       this.$store.commit("removeCart", product)
    }
  },
};
</script>


<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
}

.title {
  text-align: center;
}

main {
  overflow: auto;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  min-width: 500px;
  
}



td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
 
}

th{
  color: #616161;
}

tr:nth-child(even) {
  background-color: #f8f8f8;
}

td {
  text-align: center;
}

td:first-child {
  text-align: left;
}

.titleProduct {
  display: flex;
  align-items: center;
  gap: 10px;
}

.titleProduct img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}
.titleProduct {
  max-width: 100%;
}
.price{
  width: 100px;
}
.qtyCount {
  border: 1px solid red;
}

.qtyCount div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.infoCart{
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  
  
}

.infoCart button{
  margin: auto 0px auto auto;
  height: 35px;
}

.infoCart div{
  border: 1px solid red;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding: 0px 15px;
  
}

.remove img{
  cursor: pointer;
  opacity: 0.8;
  transition: 0.3s ;
}

.remove img:hover{
  fill: red;
  opacity: 1;
}
</style>