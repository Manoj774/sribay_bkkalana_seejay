<template>
   <div class="page-title-bar">
      <div class="container">
         <h4 class="mb-4 text-white"> {{heading}}</h4>
         <p class="white--text font-weight-regular"> {{subHeading}} </p>
      </div>
   </div>
</template>

<script>
export default {
   props:['heading','subHeading']
}
</script>
