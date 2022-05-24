<template>
  <div class="home">
    <router-link to="/cart" class="cart-icon" v-if="isPhone()">
      <CartIcon/>
    </router-link>
    <CategoryMenu/>
    <ItemsList/>
    <CartProducts v-if="isDesktop()"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryMenu from '@/components/CategoryMenu.vue';
import ItemsList from '@/components/ItemList.vue';
import CartProducts from '@/components/CartProducts.vue';
import Mixin from '@/mixins/mixins';
import CartIcon from '@/assets/icons/cart-icon.svg';

export default {
  name: 'HomeView',
  components: {
    CategoryMenu,
    ItemsList,
    CartProducts,
    CartIcon,
},
mixins: [Mixin]

}
</script>
<style lang="less" scoped>
.home{
  display: flex;
.cart-icon{
  width: 42px;
  height: 42px;
  background: @pink;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 20px 20px auto;
}
@media @tablets {
  flex-direction:column
}
}

</style>