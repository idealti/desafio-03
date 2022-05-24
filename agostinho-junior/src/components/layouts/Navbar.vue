<template>
    <div>

        <nav class="nav navbar-toolbar navbar-padding">
            <div class="container spacer">
                <div style="align-self:center" class="brand">
                    <a href="#">PeTiT<span class="fa fa-dollar text-danger"></span>TORE</a>
                </div>
                <div id="search-field">
                    <input v-model="search" class="input-text" placeholder="Pesquisa..." />
                </div>
            </div>
        </nav>
        <nav class="nav navbar-toolbar navbar-padding">
            <div class="container spacer">
                <div>
                    <router-link :to="{name:'Home'}">Produtos</router-link>
                </div>
                <div>
                    <ul >
                        <li>
                            <span class="sum-cart-value">{{formatPrice(StateCartTotal)}}</span> 
                            <span class="bold sum-cart-itens">{{StateCartItensTotal}} itens </span>
                            <span class="fa fa-shopping-cart pointer" @click="$router.push({name:'Cart'})"></span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import FrontendService from './../../services/frontend'
const frontend_service = new FrontendService()

import { bus } from './../../main'

export default {
    data: ()=>({
        search: '',
        fullscreen:false
    }),
    methods:{
        formatPrice(value) {
            return frontend_service.formatPrice(value)
        },
    },
    computed:{
        ...mapGetters(['StateCartTotal','StateCartItensTotal'])
    },
    watch:{
        search(value){
            bus.$emit(`search-product`, value);
        }
    }
}
</script>

<style scoped>
    .nav{
        background-color: #3498DB;
        z-index: 99;
        display: flex;
        
    }
    .navbar-toolbar{
        display: inherit;
        justify-content: space-between;
    }
    .navbar-padding{
        padding: 15px 0;
    }
    .navbar{
        padding: 30px;
        justify-content: space-between;
    }
    nav a {
        color: #fff;
        text-decoration: none;
        font-weight: bold;
    }
    nav a:hover {
        color: #ddd;
        transition: .3s;
    }
    nav li {
        color: white;
        float: left;
        list-style: none;
        margin-left: 20px;
    }
    .sum-cart-itens{
        margin-left:10px;
        font-size:11px;
        filter: opacity(0.5);
    }
    .sum-cart-value{
        font-size:14px;
    }
    .spacer {
        display: flex;
        justify-content: space-between;
    }

</style>