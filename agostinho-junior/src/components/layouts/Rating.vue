<template>
    <div>
        <div class="rating" :title="rate">
            <span :class="'fa fa-star '+(rate > 0 ? 'rated': '')"></span>
            <span :class="'fa fa-star '+(rate >= 2 ? 'rated': '')"></span>
            <span :class="'fa fa-star '+(rate >= 3 ? 'rated': '')"></span>
            <span :class="'fa fa-star '+(rate >= 4 ? 'rated': '')"></span>
            <span :class="'fa fa-star '+(rate == 5 ? 'rated': '')"></span>
        </div>
        <center><span style="font-size:10px">{{count}} avaliações</span></center>
    </div>
</template>

<script>

export default {
    props:{
        rate:{
            default:0,
            required:true
        },
        count:{
            default:0,
            required:true
        }
    }
}
</script>

<style scoped>
    .rating{
        font-size: 14px;
        text-align: center;
    }
    .rated{
        color: orange;
    }
    
</style>