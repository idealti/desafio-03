<template>
    <div>
        {{prefix}}
        <select @change="onChangeLimitResult" :class="style_class">
            <option v-if="label" value="">{{label}}</option>
            <option v-for="opt, index in options" :key="index" :value="opt.value">{{opt.text}}</option>
        </select>
        {{suffix}}
        
    </div>    

</template>

<script>
export default {
    props:{
        options:{
            default: ()=>[],
            required:true
        },
        label:{
            default:null
        },
        prefix:{
            default:''
        },
        suffix:{
            default:''
        },
        style_class:{
            default:'no-border'
        }
    },
    methods:{
        onChangeLimitResult(event){
            this.$emit('change-option', event.target.value)
        }
    }
}
</script>