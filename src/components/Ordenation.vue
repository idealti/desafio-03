<template>
  <div class="ordernation">
    <button @click="toggleOrdenation()" class="btn-default dropbtn">
      Ordenation
    </button>
    <div id="dropDownOrdenation" class="dropdown-content">
      <ul>
        <li @click="lowerPrice()">Low Price</li>
        <li @click="higherPrice()">Higher Price</li>
        <li @click="ascendingOrder()">Alphabetical order(ascending)</li>
        <li @click="descendigOrder()">Alphabetical order(descending)</li>
        <li @click="ordenationDefault()">Ordenation default</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Object,
      default: {},
    },
    ordenationCallback: {
      type: Function,
      required: true,
    },
  },
  mounted() {
    window.onclick = (event) => {
      if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName(
          "dropdown-content"
        );
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      }
    };
  },
  methods: {
    toggleOrdenation() {
      document.getElementById("dropDownOrdenation").classList.toggle("show");
    },
    lowerPrice() {
      const newProducts = this.products.sort((a, b) => {
        if (a.price < b.price) return -1;
        if (a.price > b.price) return 1;
        return 0;
      });
      this.ordenationCallback(newProducts);
    },
    higherPrice() {
      const newProducts = this.products.sort((a, b) => {
        if (a.price > b.price) return -1;
        if (a.price > b.price) return 1;
        return 0;
      });
      this.ordenationCallback(newProducts);
    },
    ascendingOrder() {
      const newProducts = this.products.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
      this.ordenationCallback(newProducts);
    },
    descendigOrder() {
      const newProducts = this.products.sort((a, b) => {
        if (a.title > b.title) return -1;
        if (a.title < b.title) return 1;
        return 0;
      });
      this.ordenationCallback(newProducts);
    },
    ordenationDefault() {
      const newProducts = this.products.sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      });
      this.ordenationCallback(newProducts);
    },
  },
};
</script>

<style scoped>
.btn-default {
  background-color: #4954db;
  color: bisque;
  padding: 16px;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  margin-right: 20px;
  border-radius: 20px;
}

.btn-default:hover {
  background-color: #4480f2;
}

.ordenation {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 5px;
}
.dropdown-content ul {
  margin: 0;
  padding: 0;
}
.dropdown-content li {
  color: black;
  padding: 8px 12px;
  text-decoration: none;
  display: block;
  list-style-type: none;
  margin: 0;
  cursor: pointer;
}
.dropdown-content li:hover {
  background-color: #f1f1f1;
}
.show {
  display: block;
}
@media only screen and (max-width: 1185px) {
  .btn-default {
    font-size: 1rem;
    margin: 0.8rem 1rem;
    width: 12rem;
  }
}
</style>