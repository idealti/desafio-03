<template>
  <div class="home">
   
    
    
      <div class="filters container">
        <ul>
          <li @click="filterCategory('')">All</li>
          <li @click="filterCategory('/category/electronics')">Electronics</li>
          <li @click="filterCategory('/category/jewelery')">Jewelery</li>
          <li @click="filterCategory(`/category/men's%20clothing`)">Mens's clothing</li>
          <li @click="filterCategory(`/category/women's%20clothing`)">Women's clothing</li>
          <li @click="filterCategory(`?sort=desc`)">Price Desc</li>
          <li @click="filterCategory(`?sort=asc`)">Price Asc</li>
        </ul>

        <div class="filterContent">
          <label for="filter">Filter</label>
         <select v-model="selected" @change="ordemBy(selectFilter)">
          <option disabled value="">Escolha um item</option>
          <option>Popularity</option>
          <option>Low to High</option>
          <option>High to Low</option>
        </select>
        <br>
        <span>Selecionado: {{ selected }}</span>
        </div>
         
        
      </div>
    <main class="listProducts container">
      
      <div class="productsContainer" v-if="listProducts !== null">
        <div v-for="product in listProducts" :key="product.id">
          <Product :product="product"/>
        </div>
      </div>

      <div v-else>
        <p>Carregando...</p>
      </div>
    </main>
  </div>
</template>

<script>
import Product from "../components/Product.vue";

export default {
  name: "HomeView",
  components: {
    Product,
  },

  data() {
    return {
      listProducts: null,
      id: 1,
      carrinho: this.$store.state.cart,
      selected: ''
    };
  },

  methods: {
    async fetchApi() {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      this.listProducts = data;

      console.log(data[1].rating)
    },

    async apiFilter(category) {
      const res = await fetch(`https://fakestoreapi.com/products${category}`);
      const data = await res.json();
      console.log(data)
      this.listProducts = data;
    },


    add(){
      this.$store.commit('increment')
      
      console.log("carrinho", this.$store.state.cart)
    },

    filterCategory(category){
      this.apiFilter(category)
    },

    ordemBy(selectFilter){


      const lista =  this.listProducts.map(product => product.rating.rate)
      
      console.log("rating", lista)


      this.listProducts.sort(function (b, a) {
        if (a.rating.rate > b.rating.rate) {
          return 1;
        }
        if (a.rating.rate < b.rating.rate) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });

      console.log(this.listProducts)

    }
    
  },

  mounted() {
    this.fetchApi();

  },
};
</script>

<style scoped>
main {
 
  border-top: 2px solid rgb(228, 228, 228);
 
}

.productsContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: center;
  gap: 30px 10px;
}

.filters{
/*   border: 1px solid red; */
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}

.filters ul{
  display: flex;
  gap:20px;

 
}

.filters ul li{
  cursor: pointer;
  display: flex;
  flex-direction: column;

}

.filters ul li:after{
  content: '';
  width: 0%;
  height: 5px;
  border-radius: 5px;
  background: #75e8a4;
  transition: 0.8s;
}

.filters ul li:hover::after{
 
  width: 100%;
  
 
}


.filterContent{
  display:flex;
  flex-direction:column;
}
</style>