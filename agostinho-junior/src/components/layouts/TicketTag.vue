<template>
    <div>
        <div class="category-tag">
            <span :class="icon"></span>
            <span class="category-tag-text">{{text}}</span>
        </div>
    </div>
</template>

<script>

export default {
    props:{
        icon:{
            default:'fa fa-tag'
        },
        text:{
            required:true
        },
    }
}
</script>

<style scoped>
    
.category-tag{
    background-color: #888;
    font-size: 12px;
    padding: 2px 5px;
    color: white;
    border-radius: 3px;
    width: fit-content;
    text-transform: uppercase;
}

.category-tag-text{
    color: white;
    font-size: 10px;
    margin: 0 5px;
    font-weight: bold;
}

    
</style>