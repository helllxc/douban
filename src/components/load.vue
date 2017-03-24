<template>
  <div>
    <div id="pageletLoading" v-show="load">
      <span class="spinner"></span>
    </div>
  </div>
</template>

<script>
  export default{
    computed:{
        load:function () {
          return this.$store.state.load;
        }
    }
  }
</script>

<style lang="less" scoped>
	#pageletLoading {
    background: rgba(0,0,0,0);position: fixed;width: 100%;height: 100%;top: 0;left: 0;z-index: 10001;background-size: 15%;
    .spinner{
      background: url('../assets/load.png') no-repeat center center;background-size: 100%;position: absolute;width: 50px;height: 50px;left: 50%;top: 50%;margin: -25px 0 0 -25px;-webkit-animation: rotator 1.5s linear infinite;animation: rotator 1.5s linear infinite;
    }
	}
  .hidden{display: none}

  @keyframes rotator {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
  }
  }
</style>
