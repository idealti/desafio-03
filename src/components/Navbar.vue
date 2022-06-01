<template>
    <div class="navbar">
        <h1>Petit.</h1>
        <ul id="nav_menu">
            <li>Categorias</li>
            <li>Login</li>
            <li id="carrinho"><span id="items">{{total}}</span><font-awesome-icon icon="cart-shopping" id="cartIcon" @click="carrinhoShow()"/></li>
        </ul>
    </div>
</template>

<script>

    import { mapWritableState } from 'pinia'
    import { useProdutoStore } from '@/stores/ProdutoStore'
    
    export default {
        name: 'NavBar',

        setup() {
            const produtoStore =  useProdutoStore();
            return { produtoStore }
        },

        data(){
            return {
            }
        },

        computed: {
            ...mapWritableState(useProdutoStore, ['total', 'visivel'])
        },

        methods: {
            carrinhoShow() {
                if(!this.visivel) {
                    this.visivel = true
                }

                console.log(this.visivel)
            }
        }
    }
</script>

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
    }

    #nav_menu {
        display: flex;
        align-items: center;
    }

    #nav_menu li {
        list-style-type: none;
        margin-left: 1rem;
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--text-color-light);
    }

    #carrinho {
        position: relative;
    }

    #cartIcon:hover {
        cursor: pointer;
        color: #595c61;
        transition: all .1s ease-in-out
    }

    #items {
        font-size: 14px;
        position: absolute;
        top: -9px;
        right: -7px;
        color: #ffff;
        z-index: 999;
        background-color: #ff0000;
        padding: 1px;
        border-radius: 100%;
    }
</style>