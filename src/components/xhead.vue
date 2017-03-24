<template>
  <nav class="slide" v-if="show">
    <ul id="navbar">
      <li class="acitve"><a href="#/text">段子</a></li>
      <li><a href="#/image">图片</a></li>
      <li><a href="">视频</a></li>
      <li><a href="#/discovery">发现</a></li>
      <li><a href="">我的</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
    computed:{
      show(){
          return this.$store.state.show;
      }
    },
  methods:function () {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  ul{padding:0;margin: 0;list-style: none}
  a{text-decoration: none;color:#ffffff}
  nav{
    position: fixed;top: 0;left: 0;z-index: 1000;width: 100%;
    #navbar{
      display: block;background-color: #222;width: 100%;overflow: hidden;
      li{
        font-size: 1.5rem;height: 3.5rem;line-height: 2.33;color: #fff;float: left;width: 20%;text-align: center
      }
      .acitve{background-color: #ff819f;}
    }
  }
</style>
