<template>
    <div class="spacer">
        <div class="text-left sidebar">
            <!-- CATEGORIAS -->
            <div>
                {{search}}
                <div class="legend">Categorias</div>
            </div>
            <div class="sidebar-filter" style="margin-bottom:20px">

                <div v-for="cat, index in StateCategories" 
                    :key="'category_'+index" 
                    :class="(filter_categories.some(obj=> obj == cat) ? 'filter-selected ': '')+' m-1'">
                    <input type="checkbox" v-model="filter_categories" :value="cat" :id="'category_'+index"
                         /> 
                    <label :for="'category_'+index" style="margin-left:5px" 
                        :class="'muted txt-2 pointer '+((filter_categories.some(obj=> obj == cat) ? 'checked ': ''))">
                        {{cat}}
                    </label>
                </div>
            </div>
            
            <hr>
            <!-- RATE -->
            <div>
                <div class="legend">Classificação</div>
            </div>
            <div class="sidebar-filter">
                <div v-for="rate, index in [1,2,3,4,5]" :key="'rate_'+index" 
                    :class="(filter_rate.some(obj=> obj == rate) ? 'filter-selected ': '')+' m-1'">
                    <input type="checkbox" v-model="filter_rate" :value="rate" :id="'rate_'+index"/> 
                    <label :for="'rate_'+index"  style="margin-left:5px"
                        :class="'muted txt-2 pointer '+((filter_categories.some(obj=> obj == rate) ? 'checked ': ''))"> 
                        {{rate}} {{rate > 1 ? 'estrelas' : 'estrela'}}
                    </label>
                </div>
            </div>
            
        </div>
        <div class="width-full">
            <div class="spacer" style="margin:0 5px;display:flex">
                <div class="align-self-center legend">
                    <SimpleSelectField 
                        style_class="legend no-border pointer"
                        prefix="exibir"
                        suffix="resultados"
                        :options="results_per_page" 
                        @change-option="onChangeLimitResult" />
                </div>
                <div class="align-self-center legend">
                    <span v-if="false">
                        {{filteredProducts().length}}/{{StateProducts.length}} resultados
                    </span>
                </div>
                <div>
                    <SimpleSelectField
                        style_class="no-border text-right legend pointer"
                        label="-- Ordenar por --"
                        :options="order_by"
                        @change-option="onOrderBy"
                    />
                </div>

            </div>
            <div v-show="filteredProducts().length == 0" class="legend">
                Nenhum registro encontrado
            </div>
            <div v-show="StateProductsLoading" class="legend">
                Carregando...
            </div>
            <div v-for="product, index in filteredProducts()" :key="'card_product_'+index">
                <ItemCard v-show="filteredProducts().length > 0"> 
                    <template v-slot:avatar>
                        <img class="img-item-list" :src="product.image" />
                    </template>
                    <template v-slot:title>{{product.title}}</template>
                    <template v-slot:subtitle>{{product.description}}</template>
                    <template v-slot:legend>
                        <TicketTag :text="product.category" />
                    </template>
                    <template v-slot:actions>
                        {{formatPrice(product.price)}}
                        <Rating :count="product.rating.count" :rate="product.rating.rate"/>
                        <div class="spacer">
                            <div></div>
                            <div>
                                <a v-if="isInCart(product)"  class="button button-danger" @click="removeFromCart(product)" title="remover do carrinho">
                                    <span class="fa fa-cart-plus"></span>
                                </a>
                                <a v-else class="button button-success" @click="addToCart(product)" title="adicionar ao carrinho">
                                    <span class="fa fa-cart-plus"></span>
                                </a>
                            </div>
                            <div></div>
                        </div>
                    </template>
                </ItemCard>
            </div>
        </div>
        <div v-show="StateCart.length > 0" class="floating-container"  @click="$router.push({name:'Cart'})">
            <span class="floating-button">
                <div class="floating-legend" :style="`--total-price: '`+(formatPrice(StateCartTotal))+`'`"></div>
                <div class="fa fa-shopping-cart"></div>
            </span>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ItemCard from '../layouts/ItemCard.vue'
import Rating from '../layouts/Rating.vue'
import SimpleSelectField from '../layouts/SimpleSelectField.vue'
import TicketTag from '../layouts/TicketTag.vue'
import FrontendService from './../../services/frontend'
const frontend_service = new FrontendService()
import { bus } from './../../main'
export default {
    components:{
        ItemCard, Rating, TicketTag, SimpleSelectField
    },
    data:()=>({
        search:'',
        params:{
            sort:'asc',
            limit:10
        },
        order_by:[
            { value:'cat_asc', text:'ordem crescente: Categoria'},
            { value:'cat_desc', text:'ordem decrescente: Categoria'},
            { value:'rate_asc', text:'menor para maior: Classificação'},
            { value:'rate_desc', text:'maior para menor: Classificação'},
        ],
        results_per_page:[
            { value: 10, text: 10},
            { value: 25, text: 25},
            { value: 50, text: 50},
            { value: 100, text: 100},
        ],
        filter_categories:[],
        filter_rate:[]
    }),
    methods:{
        ...mapActions(['ListProducts', 'addCart', 'removeCart', 'ListCategories']),
        addToCart(item){
            this.addCart({...item, qtde:1})
        },
        removeFromCart(item){
            this.removeCart(item)
        },
        formatPrice(value) {
            return frontend_service.formatPrice(value)
        },
        isInCart(item){
            return this.StateCart.some(obj => obj.id === item.id)
        },
        onChangeLimitResult(value){
            this.params.limit = value
            this.loadProdutcs()
        },
        onOrderBy(order_value){
            if(order_value === 'cat_asc'){
                this.StateProducts.sort(frontend_service.cat_asc)
            }else if(order_value === 'cat_desc'){
                this.StateProducts.sort(frontend_service.cat_desc)
            }else if(order_value === 'rate_asc'){
                this.StateProducts.sort(frontend_service.rate_asc)
            }else if(order_value === 'rate_desc'){
                this.StateProducts.sort(frontend_service.rate_desc)
            } 
        },
        loadProdutcs(){
            this.ListProducts({params:this.params})
        },
        loadCategories(){
            this.ListCategories()
        },
        filteredProducts(){
            let items = []
            // Filtro de Categorias
            items = this.StateProducts.filter(item=>{
                return this.filter_categories.some(cat => cat == item.category) || this.filter_categories.length === 0
            })
            // Filtro de rate
            items = items.filter(item=>{
                return this.filter_rate.some(rate => rate == parseInt(item.rating.rate)) || this.filter_rate.length === 0
            })
            // Filtro Campo pesquisa (navbar)
            items = items.filter(item=>{
                return item.title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 || 
                       item.description.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 || 
                       item.category.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 || 
                       this.search.length === 0
            })
            
            return items
        },
        
    },
    mounted(){
        this.loadProdutcs()
        this.loadCategories()
    },
    computed:{
        ...mapGetters(['StateProducts', 'StateCart', 'StateCategories', 'StateCartTotal','StateProductsLoading']),
    },
    created(){
        bus.$on(`search-product`, (value) => {
            this.search = value
        })
    },
    destroyed(){
        bus.$off(`search-product`);
    }
}
</script>

<style scoped>
</style>