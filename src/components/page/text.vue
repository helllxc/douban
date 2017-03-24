<template>
  <div>
    <xcontent :a="str" :b="str1"></xcontent>
  </div>
</template>

<script>
  import xcontent from '../content.vue'
export default {
  data:function () {
    return{
      str:"http://m.neihanshequ.com/?skip_guidence=1&is_json=",
      str1:"&app_name=neihanshequ_web&min_time=1490151383&csrfmiddlewaretoken=02bb2b4730c97c895db0b351c39c334e"
    }
  },
  components:{
    xcontent
  }
}
</script>

<style lang="less" scoped>

</style>
