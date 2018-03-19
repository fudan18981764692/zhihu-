<template>
  <div class="header">
      <div class="title"></div>
      <div class="picture"></div>
  </div>
</template>
<script>
export default {
  name:"headerComponent",
  data:function(){
      return {  
      }
  }
}
</script>
<style>
.header{
    width:100%;
}
.header>.title{
    width:100%;
    height:100px;
    line-height: 100px;
    color: #fff;
    font-size:.427rem;
    background: #00a2ea;
}

</style>


