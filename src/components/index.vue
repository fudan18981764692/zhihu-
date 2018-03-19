<template>
<div>
<headerComponent></headerComponent>
</div>
</template>
<script>
import headerComponent from './common/header'
export default {
  name:"IndexComponent",
  components:{
      headerComponent
  },
  data:function(){
      return {msg:"这是首页"}
  }
}
</script>
<style>

</style>

