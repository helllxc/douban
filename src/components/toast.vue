<template>
  <div class="toast" v-if="show">
    <div class="mask"></div>
    <div class="text-wrapper">
      <span class="msg success">{{tips}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    computed:{
        show:function(){
          return this.$store.state.shown;
        },
      tips:function () {
        return this.$store.state.iscomment;
      }
    }
  }
</script>

<style lang="less" scoped>
	.toast{
    position: fixed;top: 0;left: 0;height: 100%;width: 100%;z-index: 1000;
    .mask{position: absolute;top: 0;left: 0;z-index: 1001;height: 100%;width: 100%;}
    .text-wrapper{
      opacity: 1;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);text-align: center;width: 100%;height: 12.5rem;line-height: 9rem;
      .msg{
        border-radius: 10px;background-color: #000;height: 12.9rem;width: 12.9rem;font-size: 1.65rem;line-height: 12.375rem;color: #fff;box-sizing: border-box;display: inline-block;
      }
      .success{
        background: #000 url('../assets/success.png') no-repeat .825rem center;padding-left: 3.3rem;background-size: auto 20%;
      }
    }
  }
</style>
