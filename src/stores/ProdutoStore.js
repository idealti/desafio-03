import { defineStore } from 'pinia';

export const useProdutoStore = defineStore('ProdutoStore', {
    id: 'Produtos', 
    state: () => {
        return {
            produtos: [],
            carrinho: [],
            imagem: '',
            nome: '',
            preco: 0,
            quantidade: 1,
            classificacao: 0,
            id: 0,
            visivel: false,
        }
    },

    getters: {
        total: (state) => {
            let totalItems = 0 

            state.carrinho.forEach(produto => {
                let quantidade = produto.quantidade
                totalItems += quantidade;
            })

            return totalItems
        },

        precoTotal: (state) => {
            let totalPreco = 0

            state.carrinho.forEach (produto => {
                let preco = produto.preco * produto.quantidade
                totalPreco += preco
            })

            return totalPreco.toLocaleString('pt-BR')
        },

    },

    actions: {
        addItems(produto, qntd){
            let nome = produto.title;
            let preco =  produto.price;
            let quantidade = qntd;
            let id = produto.id;
            let imagem = produto.image
            let classificacao = produto.rating.rate

            if(this.carrinho.find(item => item.id === id)){
                this.carrinho.find(item => item.id === id).quantidade += quantidade;
            }else{
                this.carrinho.push({
                    id: id,
                    imagem: imagem,
                    nome: nome,
                    preco: preco,
                    quantidade: quantidade,
                    classificacao: classificacao
                })
            }

            this.quantidade = 1;
        },
        removeItem(id){
            id = this.id;
            this.carrinho.splice(id, 1);
        },


        ordemCrescente() {
            this.produtos.sort((a, b) => a.rating.rate - b.rating.rate)
        },

        ordemDecrescente() {
            this.produtos.sort((a, b) => b.rating.rate - a.rating.rate)
        }
    }
})