<template>
  <div class="item">
    <img :src="item.image" alt="" />
    <div class="container__item">
      <h4 class="cut-text">
        {{ item.title.split(" ").slice(0, 4).join(" ") }}
      </h4>
      <h6>$ {{ item.price }}</h6>
      <span id="item__remove" @click="remove">Remove item</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    remove() {
      this.$store.commit("remove", this.item);
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  width: 100%;
  height: 90px;
  background: #ffffff;
  margin-bottom: 2px;
  margin-top: 2px;
  align-items: center;
}

.item img {
  width: 88px;
  height: 67px;
  margin-left: 14px;
  margin-right: 14px;
}

.container__item {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}

.container__item h4 {
  font-weight: 700;
  font-size: 12px;
  color: #333333;
  margin: 0;
}

.container__item h6 {
  font-weight: 600;
  font-size: 12px;
  margin: 0;
  color: #2e245e;
}

.container__item span {
  font-weight: 400;
  font-size: 12px;
  color: #242424;
}

#item__remove {
  color: #2e245e;
  cursor: pointer;
  transition: 500ms;
}

#item__remove:hover {
  color: #7364bb;
  transition: 500ms;
  text-decoration: underline;
}

.cut-text {
}
</style>
