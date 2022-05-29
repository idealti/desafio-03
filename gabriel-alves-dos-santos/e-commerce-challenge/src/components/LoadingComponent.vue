<template>
    <div>
        <div class="loading">
        </div>
        <p> {{ state.msg }} </p>
        <ul v-show="state.msg !== 'Carregando dados'">
            <li>Verifique sua conexão</li>
            <li>Recarregue a página</li>
        </ul>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core';
export default {
  name: 'LoadingComponent',
  setup(){
    const store = useStore();
    const state = reactive({
        msg: ''
    })
    state.msg = computed(() => store.state.dados.loadingMessage)
    return{
        state
    }
  }
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
        & li{
            font-weight: bold;
        }
    }
    @keyframes loading {
        to{
            transform: rotate(360deg);
        }
    }
</style>
