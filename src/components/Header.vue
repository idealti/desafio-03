<template>
  <header>
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/32362019?s=200&v=4"
        alt=""
      />
      <span>Ide@lti</span>
    </div>
  </header>
</template>

<script>
export default {
  name: "myHeader",
};
</script>

<style scoped>
header {
  background-color: #461723;
}
header img {
  width: 5rem;
  height: 5rem;
  margin-left: 200px;
}

div {
  display: flex;
  align-items: center;
}

span {
  margin-left: 2rem;
  font-weight: bold;
  font-size: 3rem;
  color: white;
}
</style>
