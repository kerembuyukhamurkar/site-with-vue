<template>
   <div class="px-5" >
      <h3 class="text-3xl font-bold">{{ name }}</h3>
      <p>{{commentContent}}</p>
   </div>

</template>
<script>

export default{
   props:[ "name", "img","commentContent"]
    
  


}






</script>