<template>
  <div class="share_container" v-show="share">
    <div class="mask" @click="isShow"></div>
    <div class="content">
      <header>分享到</header>
      <ul>
        <li><a href="javascript:;" class="sina"><span>新浪微博</span></a></li>
        <li><a href="javascript:;" class="tencent"><span>腾讯微博</span></a></li>
        <li><a href="javascript:;" class="QQ"><span>QQ空间</span></a></li>
        <li><a href="javascript:;" class="collect"><span>收藏</span></a></li>
      </ul>
      <div class="btns-wrapper">
        <div class="button" id="cancel">
          <a href="javascript:;" @click="isShow()">取消</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
      computed:{
        share:function () {
          return this.$store.state.share;
        }
      },
      methods:{
          isShow:function(){
              this.$store.commit('setShare',false)
          }
      }
  }
</script>

<style lang="less" scoped>
  div,li,p,ul{padding:0;margin:0;border: 0;font-size: 100%;}
  ul{list-style: none;}
  a{color: #4f5157;text-decoration: none;}
  .share_container{
    position: fixed;top: 0;left: 0;height: 100%;width: 100%;z-index: 1000;
    .mask{position: absolute;top: 0;left: 0;z-index: 1001;height: 100%;width: 100%;background-color: rgba(0,0,0,.3);}
    .content{
      position: fixed;bottom: 0;left: 0;background-color: #fff;width: 100%;z-index: 1001;
      header{color: #666;font-size: 1.6rem;display: block;text-align: center;margin: 2.4rem 0 1.7rem;line-height: 1.6rem;}
      ul{
        width: 86.25%;overflow: hidden;margin: 0 auto;
        li{
          float: left;width: 33%;box-sizing: border-box;
          a{
            display: block;height: 5.7rem;width: 5.7rem;margin: 0 auto 4rem;background-size: 100%;background-repeat: no-repeat;background-position: center center;position: relative;
            span{text-align: center;display: block;position: absolute;bottom: -2.16rem;width: 150%;left: 50%;transform: translateX(-50%);}
          }
          .sina{background-image: url('../assets/sina.png');}
          .tencent{background-image: url('../assets/tencent.png');}
          .QQ{background-image: url('../assets/QQ.png');}
          .collect{background-image: url('../assets/collect.png');}
        }
      }
      .btns-wrapper{
        border-top: 1px solid #C7C7C7;overflow: hidden;
        .button{
          float: left;font-size: 1.6rem;height: 5rem;line-height: 5rem;padding: 0;border: 0;width: 100%;background-color: #fff;color: #ff819f;text-align: center;
          a{display: block;height: 100%;}
        }
      }
    }
  }
</style>
