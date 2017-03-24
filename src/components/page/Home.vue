<template>
  <div>
    <xheader></xheader>
    <loading></loading>
    <router-view></router-view>
    <!--<xcontent></xcontent>-->
  </div>
</template>

<script>
  import xheader from '../xhead.vue';
//  import xcontent from '../content.vue';
  import loading from '../loading.vue'
export default {

  components:{
    xheader,
    loading,
//    xcontent,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
