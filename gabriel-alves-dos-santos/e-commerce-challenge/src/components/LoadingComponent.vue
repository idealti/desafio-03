<template>
    <div>
        <div class="loading">
        </div>
        <p>Carregando dados</p>
    </div>
</template>

<script>
export default {
  name: 'LoadingComponent'
}
</script>

<style lang="scss" scoped>
@import '../variaveis/variaveis.scss';
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: auto;
        & div.loading{
            border: 5px solid $militar-green-var;
            border-top: 5px solid transparent;
            height: 50px;
            width: 50px;
            border-radius: 50%;
            animation: loading 1s infinite;
        }
    }
    @keyframes loading {
        to{
            transform: rotate(360deg);
        }
    }
</style>
