<template>
    <div id="header-container">
        <h1>Petit & Dubois Stores</h1>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    #header-container{
        background-color: black;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h1{
        color: white;
        font-size: 50px;
        text-transform: uppercase;
        letter-spacing: 3px;
    }
</style>