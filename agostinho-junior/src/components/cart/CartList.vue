<template>
    <div>
        <span class="muted">{{StateCart.length == 0 ? 'Nenhum item adicionado ao carrinho' : ''}}</span>
        <div  v-for="product, index in StateCart" :key="'card_product_'+index">
            <ItemCard> 
                <template v-slot:avatar>
                    <img class="img-item-list" :src="product.image" />
                </template>
                <template v-slot:title>{{product.title}}</template>
                <template v-slot:subtitle>{{product.description}}</template>
                <template v-slot:legend>
                    <TicketTag :text="product.category" />
                </template>
                <template v-slot:actions>
                    <div class="txt-1 text-right">Valor unitário</div>
                    {{formatPrice(product.price)}}
                    <Rating :count="product.rating.count" :rate="product.rating.rate"/>
                    <div class="spacer inc-dec p-1">
                        <div class="fa fa-minus pointer" @click="product.qtde<= 1 ? '': product.qtde--"></div>
                        <div style="width:30px" class="text-center">{{product.qtde}}</div>
                        <div class="fa fa-plus pointer" @click="product.qtde++"></div>
                    </div>
                    <div class="spacer inc-dec">
                        <div></div>
                        <div>
                            <a v-if="isInCart(product)"  class="button button-danger" @click="remove_from_cart(product)" title="remover do carrinho">
                                <span class="fa fa-cart-plus"></span>
                            </a>
                        </div>
                        <div></div>
                    </div>
                </template>
            </ItemCard>
        </div>
        <hr>
        <div class="spacer">
            <div></div>
            <div class="text-right">
                <div class="txt-4 bold">Total: {{formatPrice(StateCartTotal)}}</div>
                <button class="button button-danger" @click="$router.push({name:'Home'})">Continuar comprando</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ItemCard from '../layouts/ItemCard.vue'
import Rating from '../layouts/Rating.vue'
import TicketTag from '../layouts/TicketTag.vue'
import FrontendService from './../../services/frontend'
const frontend_service = new FrontendService()

export default {
    components:{
        ItemCard, Rating, TicketTag
    },
    data:()=>({
    }),
    methods:{
        ...mapActions(['removeCart']),
        remove_from_cart(item){
            this.removeCart(item)
        },
        formatPrice(value) {
            return frontend_service.formatPrice(value)
        },
        isInCart(item){
            return this.StateCart.some(obj => obj.id === item.id)
        },
    },
    mounted(){
    },
    computed:{
        ...mapGetters(['StateCart', 'StateCartTotal']),
    }
}
</script>