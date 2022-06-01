<template>
    <main class="carrinho">
        <h1>Carrinho <font-awesome-icon icon="xmark" id="fechar" @click="fecharCarrinho()" /></h1>
        <div v-for="produto in carrinho" :key="produto.id" id="produto">
            <img :src=produto.imagem :alt=produto.nome>
                <div id="nome">
                    <h3>{{produto.nome}}</h3>
                    <h2>R${{produto.preco}}</h2>
                </div>
                <div id="quantidade">
                    <input type="number" min="1" v-model=produto.quantidade>
                    <font-awesome-icon icon="trash" id="lixeira" @click="removerItem(produto.id)"  />
                </div>
        </div>
        <div class="total">
            <h3>Total</h3>
            <div id="preco">
                <h1>R${{precoTotal}}</h1>
                <button id="comprar"><font-awesome-icon icon="bag-shopping" /> Fechar Pedido </button>
            </div>
        </div>
    </main>
</template>

<script>
    import { useProdutoStore } from '@/stores/ProdutoStore'
    import { mapWritableState } from 'pinia'
    import { mapActions } from 'pinia'

    export default {
        name: 'CarrinhoCard',

        computed: {
            ...mapWritableState(useProdutoStore, ['carrinho', 'total', 'precoTotal', 'visivel']),
            ...mapActions(useProdutoStore, ['removeItem'])
        },

    setup() {
        const produtoStore = useProdutoStore();

        return { produtoStore }
    },

        methods: {
            fecharCarrinho() {
                if(this.visivel) {
                    this.visivel = false
                }
            },
            removerItem(id) {
                this.produtoStore.removeItem(id)
            }
        },
    }
</script>

<style scoped>
    .carrinho {
        background-color: var(--text-color-light);
        position: relative;
        color: #ffff;
        height: 100vh;
        width: 35vw;
        position: absolute;
        z-index: 999;
        top: 0;
        right: 0;
        padding: 1rem;
    }

    .carrinho h1 {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #fechar:hover {
        cursor: pointer;

    }

    #produto {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    #produto img {
        width: 4rem;
        object-fit: contain;
        margin-right: .2rem;
        border-radius: 7px;
}

    #quantidade {
        position: relative;
        margin-left: .5rem;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
}

    #quantidade input {
        width: 3rem;
        font-size: 1rem;
        font-family: var(--font);
        border: none;
        border-radius: 5px;
        color: #fff;
        background-color: var(--text-color);
        text-align: center;
    }

    #lixeira {
        position: absolute;
        right: 1px;
        bottom: -22px;
        margin-left: 1rem;
    }

    #produto li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
    }

    .total {
        position: absolute;
        bottom: 1rem;
        width: 95%;
    }

    #preco {
        position: relative;
        display: flex;
        justify-content: space-between;
    }


    #comprar {
        border: none;
        background-color: var(--main-color);
        padding: 1rem;
        border-radius: 10px;
        font-family: var(--font);
        font-size: 1.3rem;
        font-weight: 700;
        color: #fff;
        transition: all 0.12s ease-in-out; 
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    #comprar:hover {
        background-color: hsl(183, 60%, 52%);
        cursor: pointer; 
    }

    @media (max-width: 1028px) {
        .carrinho {
            width: 50vw;
        }
    }

    @media (max-width: 768px) {
        .carrinho {
            width: 99vw;
        }
    }

</style>