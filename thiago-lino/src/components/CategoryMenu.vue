<template>
  <div class="category-menu">
    <ul>
      <li
        v-for="category in categoriesList"
        :key="category.id"
        @click="onCategoryClick(category.id)"
        :class="{ 'active': isActive(category.id) }"
      >
        <component :is="category.icon"/>
        <p>{{ category.label }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Wclothing from "../assets/icons/w-clothing.svg";
import Mclothing from "../assets/icons/m-clothing.svg";
import Computer from "../assets/icons/computer.svg";
import Diamond from "../assets/icons/diamond.svg";


export default {
  name: "CategoryMenu",
  components: {
    Wclothing,
    Mclothing,
    Computer,
    Diamond,
  },
  data() {
    return {
      categoriesList: [
        { label: "Women's", icon: "Wclothing", id: "women's clothing" },
        { label: "Men's", icon: "Mclothing", id: "men's clothing" },
        { label: "Electronics", icon: "Computer", id: "electronics" },
        { label: "Jewelery", icon: "Diamond", id: "jewelery" },
      ],
      selectedCategory: ""
    };
  },
  mounted(){
    this.onCategoryClick("women's clothing");
  },
  methods: {
    onCategoryClick(id) {
      this.selectedCategory = id;
      this.$store.dispatch('changeCategory', id)
    },
    isActive(id){
      return this.selectedCategory === id;
    }
  },
};
</script>

<style lang="less" scoped>
.category-menu {
  position: sticky;
  top: 0;
  width: 130px;
  height: 100vh;
  background: white;
  display: flex;
  align-items: center;
  ul {
    list-style: none;
    padding: 0;
    width: 100vh;
    cursor: pointer;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100px;
    p{
      margin-bottom: 0;
      font-weight: 500;
      font-size: 14px;
      color: @dark-grey;
      padding-right: 5px;
      text-align: center;
    }
     svg{
          path{
            fill: @dark-grey;
          }
        }
      &.active{
        background: @yellow;
        border-radius: 8px;

        p{
          color: black;
        }

        svg{
          path{
            fill: black;
          }
        }
      }
    }
  }
      @media @tablets {
      width: 100%;
      height: fit-content;

      ul{
        display: flex;
        margin: 20px;
        overflow: scroll;
        li{
          min-width: 78px;
        }
      }
    }
}
</style>
