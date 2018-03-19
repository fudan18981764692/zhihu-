<template>
<div>
<headerComponent></headerComponent>
<ul>
   <li v-for="tem in list">
    <titleComponent></titleComponent>  
    </li> 
</ul>

</div>
</template>
<script>
import headerComponent from './common/header'
import titleComponent from './common/title_np'
export default {
  name:"IndexComponent",
  components:{
      headerComponent,
      titleComponent 
  },
  data:function(){
      return {msg:"这是首页",
      list:[1,2,3]
      }
  }
}
</script>
<style>
     ul{
         list-style:none;
         background:#f2f2f2;
         margin:0;
         padding:0;
     }
     li{margin-top:15px;}
</style>

