<template>
    <div >
        <div>
            <slot name="navbar">
                <Navbar/>
            </slot>
        </div>
        <div class="p-3 container" style="min-height: 59vh;">
            <slot name="main">main</slot>
        </div>
        <Footer/>
        
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar.vue'
import Footer from '../layouts/Footer.vue'
export default {
    components:{
        Navbar, Footer
    }
    
}
</script>
