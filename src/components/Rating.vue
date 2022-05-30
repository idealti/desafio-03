<template>
  <div class="rating">
    <button @click="toggleRating()" class="btn-default dropbtn">Rating</button>
    <div id="dropDownRating" class="dropdown-content">
      <ul>
        <li @click="oneStar()">
          <star-rating
            :rating="1"
            :read-only="true"
            :increment="0.1"
            :star-size="20"
          />
        </li>
        <li @click="twoStars()">
          <star-rating
            :rating="2"
            :read-only="true"
            :increment="0.1"
            :star-size="20"
          />
        </li>
        <li @click="threeStars()">
          <star-rating
            :rating="3"
            :read-only="true"
            :increment="0.1"
            :star-size="20"
          />
        </li>
        <li @click="fourStars()">
          <star-rating
            :rating="4"
            :read-only="true"
            :increment="0.1"
            :star-size="20"
          />
        </li>
        <li @click="ratingDefault()">Rating default</li>
      </ul>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  props: {
    products: {
      type: Object,
      default: {},
    },
    ratingCallback: {
      type: Function,
      required: true,
    },
    productsNotChangeable: {
      type: Object,
      default: {},
    },
  },
  components: {
    StarRating,
  },
  methods: {
    toggleRating() {
      document.getElementById("dropDownRating").classList.toggle("show");
    },
    oneStar() {
      //Lógica para checar se o filtro de categorias está ativo
      const allCategorysSelects = [
        ...document.getElementsByClassName("active"),
      ];
      let newProducts = [];

      if (allCategorysSelects.length > 0) {
        allCategorysSelects.forEach((category) => {
          this.productsNotChangeable.forEach((product) => {
            if (
              product.category.toUpperCase() ===
                category.outerText.toUpperCase() &&
              product.rating.rate > 1
            ) {
              newProducts.push(product);
            }
          });
        });
      } else {
        newProducts = this.productsNotChangeable.filter((product) => {
          if (product.rating.rate > 1) return product;
        });
      }

      this.ratingCallback(newProducts);
    },
    twoStars() {
      //Lógica para checar se o filtro de categorias está ativo
      const allCategorysSelects = [
        ...document.getElementsByClassName("active"),
      ];
      let newProducts = [];

      if (allCategorysSelects.length > 0) {
        allCategorysSelects.forEach((category) => {
          this.productsNotChangeable.forEach((product) => {
            if (
              product.category.toUpperCase() ===
                category.outerText.toUpperCase() &&
              product.rating.rate > 2
            ) {
              newProducts.push(product);
            }
          });
        });
      } else {
        newProducts = this.productsNotChangeable.filter((product) => {
          if (product.rating.rate > 2) return product;
        });
      }

      this.ratingCallback(newProducts);
    },
    threeStars() {
      //Lógica para checar se o filtro de categorias está ativo
      const allCategorysSelects = [
        ...document.getElementsByClassName("active"),
      ];
      let newProducts = [];

      if (allCategorysSelects.length > 0) {
        allCategorysSelects.forEach((category) => {
          this.productsNotChangeable.forEach((product) => {
            if (
              product.category.toUpperCase() ===
                category.outerText.toUpperCase() &&
              product.rating.rate > 3
            ) {
              newProducts.push(product);
            }
          });
        });
      } else {
        newProducts = this.productsNotChangeable.filter((product) => {
          if (product.rating.rate > 3) return product;
        });
      }

      this.ratingCallback(newProducts);
    },
    fourStars() {
      //Lógica para checar se o filtro de categorias está ativo
      const allCategorysSelects = [
        ...document.getElementsByClassName("active"),
      ];
      let newProducts = [];

      if (allCategorysSelects.length > 0) {
        allCategorysSelects.forEach((category) => {
          this.productsNotChangeable.forEach((product) => {
            if (
              product.category.toUpperCase() ===
                category.outerText.toUpperCase() &&
              product.rating.rate > 4
            ) {
              newProducts.push(product);
            }
          });
        });
      } else {
        newProducts = this.productsNotChangeable.filter((product) => {
          if (product.rating.rate > 4) return product;
        });
      }

      this.ratingCallback(newProducts);
    },
    ratingDefault() {
      const allCategorysSelects = [
        ...document.getElementsByClassName("active"),
      ];

      let newProducts = [];

      if (allCategorysSelects.length > 0) {
        allCategorysSelects.forEach((category) => {
          this.productsNotChangeable.forEach((product) => {
            if (
              product.category.toUpperCase() ===
              category.outerText.toUpperCase()
            ) {
              newProducts.push(product);
            }
          });
        });
      } else {
        newProducts = this.productsNotChangeable;
      }

      newProducts = newProducts.sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      });
      this.ratingCallback(newProducts);
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

.rating {
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