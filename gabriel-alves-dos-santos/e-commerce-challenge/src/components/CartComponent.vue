<template>
    <section class="cart-container" @mouseleave="close()">
        <h4>Carrinho</h4>
        <div class="scroll">
            <div class="vazio" v-show="state.cartData.length === 0">
                <small>Nada a mostrar! Adicione itens ao carrinho.</small>
                &#128528;
            </div>

            <div class="cont"
                v-for="props in state.cartData" :key="props.id"
            >
                <div class="img-title">
                    <img :src="props.image" alt="imagem do produto"> 
                    <small class="title">Produto: {{ props.title }} </small>  <br>
                </div>
                <div class="description">
                    <small style="text-align: justify;"> <strong>Descrição:</strong> {{ props.description }} </small> <br>
                    <small> Preço Unitário: {{ turnToPrice(props.price) }} </small>
                    <small> Nº de Itens: {{ props.amount }}</small><small> Total: {{ turnToPrice(props.totalPrice) }} </small>
                    <remove-from-cart-btn :id="props.id"/>
                </div>
            </div>
        </div>
        <small>Total a pagar: <strong> {{ turnToPrice(state.totalPrice) }} </strong></small>
        <small>Total de Itens: <strong>{{ state.totalItens }}</strong> </small>
        <button @click='sendData()' >Finalizar Pedido</button>
        <message-component :msg="state.msg"/>
    </section>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'
import { types } from '../store/mutationTypes'
import RemoveFromCartBtn from './RemoveFromCartBtn.vue'
import MessageComponent from './MessageComponent.vue'
export default {
  name: 'CartComponent',
  components:{
    RemoveFromCartBtn,
    MessageComponent
  },
  setup (props, { emit }) {
    const state = reactive({
        cartData: null,
        totalPrice: null,
        totalItens: null,
        msg: null

    })
    function close (){
        emit('closeView')
    }
    function showMsg (msg) {
        state.msg = msg
        setTimeout(() => {
            state.msg = null
        },4000)
    }
    function sendData () {
        try{
            if (state.cartData.length === 0) throw new Error('Adicione itens ao carrinho antes de finalizar uma compra.')
            store.commit(CLEAN_LIST)
            showMsg('Compra Realizada com Sucesso!')
        } catch(erro){
            showMsg(erro)
        }
    }
    function turnToPrice(num){
      num.toFixed(2).replace('.',',')
      return num.toLocaleString('eua', {style: 'currency', currency: 'USD'})
    }
    const store = useStore()
    const { CLEAN_LIST } = types
    
    state.cartData = computed(() => store.state.listaDeCompras)
    state.totalPrice = computed(() => store.getters.getTotalPrice)
    state.totalItens = computed(() => store.getters.getTotalItens)

    return {
        state,
        sendData,
        close,
        turnToPrice
    }  
  } 
}
</script>

<style lang="scss" scoped>
@import '../variaveis/variaveis.scss';
    section{
        transition: .5s;
        animation: appearCart .5s forwards;
        z-index: 30;
        position: absolute;
        top: 120px;
        left:50%;
        height: 480px;
        width: 50%;
        border-radius: 8px;
        box-shadow: 1px 1px 10px black;
        background-color: rgb(228, 226, 226);
        padding: 10px;
        & h4{
            text-transform: uppercase;
            margin:10px 0;
        }
        & small{
            margin: 10px;
            display: inline-block;
            color: black;
            border-radius: 8px;
            padding: 5px 7px;
        }
        button{
            background-color: green;
            color: white;
            font-weight: bold;
            border: 2px solid darkgreen;
            border-radius: 8px;
            cursor: pointer;
            padding: 5px 7px;
            text-transform: uppercase;
            display: block;
            margin: auto;
            transition: .5s;
            &:hover{
            background-color: darken($color: green, $amount: 10);
            }
        }
        & .scroll{
            overflow-y: scroll;
            height: 300px;
            background-color: white;
            box-shadow: 1px 1px 10px black;
            border-radius: 8px;
            & .cont{
                animation: appearCart .5s forwards;
                border-bottom: 2px solid $brown-var;
                border-radius: 8px;
                padding: 10px;
                min-height: 30px;
                width: inherit;
                & img{
                    width: 50px;
                }
                & .img-title{
                    display: flex;
                    justify-content: center;
                    flex-direction: row;
                    & .title{
                        text-transform: uppercase;
                        font-weight: bold;
                    }
                    
                }
            }
            & .vazio{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100%;
                & small{
                    border: none;
                    background-color: white;
                    font-weight: bold;
                }
            }

        }
    }
    @media screen and (max-width: 767px) {
        section{
            width: 70%;
            left:30%;

        }
    }
    @media screen and (max-width: 485px) {
        section{
            width: 100%;
            left:0;

        }
    }
    @keyframes appearCart {
        0%{
            background-color: transparent;
            color: transparent;
            scale: .7;
        }
    }
</style>
