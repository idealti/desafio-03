<template>
    <div class="item-card">
        <div class="row">
            <div class="item-card-thumbnail">
                <slot name="avatar"></slot>
            </div>
            <div class="item-card-content">
                <div class="item-card-title">
                    <slot name="title"></slot>
                </div>
                <div class="item-card-subtitle limit-text">
                    <slot name="subtitle"></slot>
                </div>
                <div class="item-card-legend">
                    <slot name="legend"></slot>
                </div>
            </div>
            <div>
                <div class="item-card-actions">
                    <slot name="actions"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
}
</script>

<style scoped>
    .item-card{
        margin: 5px;
        padding: 10px;
        border-style: solid;
        border-radius: 5px;
        border-width: 1px;
        border-color: #ddd;
    }
    .item-card:hover{
        background-color: #eee;
        transition: .3s;
    }
    .item-card-title{
        font-weight: bolder;
        font-size: 1.2em;
        text-align: left;
        padding: 10px 10px ;
    }
    .item-card-subtitle{
        text-align: left;
        color: #888;
        font-size: .8em;
        padding: 0 10px;
    }
    .item-card-actions{
        text-align: left;
        font-weight: bolder;
        font-size: 1.2em;
        white-space: nowrap;
    }
    .item-card-thumbnail{
        border-radius:5px;
        margin-top:5px;
    }
    
    .item-card-legend{
        text-align:start;
        padding: 15px 10px 5px 10px;
    }
    .item-card-content{
        width: 100%;
    }
    
</style>