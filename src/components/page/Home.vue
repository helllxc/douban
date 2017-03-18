<template>
  <div>
    <xheader></xheader>
    <xcontent></xcontent>
  </div>
</template>

<script>
  import xheader from '../xhead.vue';
  import xcontent from '../content.vue';
export default {
  components:{
    xheader,
    xcontent,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
