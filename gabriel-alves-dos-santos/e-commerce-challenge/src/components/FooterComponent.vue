<template>
    <footer>
        <h2>Petit Store &copy;</h2>
    </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style lang="scss" scoped>
@import '../variaveis/variaveis.scss';
    footer{
        height: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $grey-var;
        color: $militar-green-var;
    }
</style>
