<template>
    <div>
        <h3>{{ state.msg }}</h3>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
export default {
  name: 'MessageComponent',
  props: {
    msg: String
  },
  setup (props) {
    const state= reactive({
        msg: null
    })
    watch(() => props.msg,
      () => {
        state.msg = props.msg
      },{
        deep: true
      })
    return{
        state
    }
  }
}
</script>

<style>

</style>