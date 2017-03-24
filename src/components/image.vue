<template>
  <xcontent :a="str" :b="str1"></xcontent>
</template>

<script>
  import xcontent from './content.vue'
export default {
  data:function(){
      return{
        str:"http://m.neihanshequ.com/pic/?is_json=",
        str1:"&app_name=neihanshequ_web&max_time=1490336265&csrfmiddlewaretoken=02bb2b4730c97c895db0b351c39c334e"
      }
  },
  components:{
      xcontent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  p,ul{padding:0;margin:0;}
  ul{list-style: none;}
  a{color: #4f5157;text-decoration: none;}
  .left{float: left}
  content{
    overflow:auto;display: block;position: relative;height: 600px;padding-top:40px;
    .wrapper{
      height: 100%;padding: 1.2rem;font-size: 1.2rem;
      ul{
        .de_list{
           border: 1px solid #f0f0f0;background-color: #FDFDFD;margin-bottom: 1.2rem;padding: 1.1rem;
            .header{
              overflow: hidden;position: relative;
              img{
                width: 2.5rem;height: 2.5rem;border-radius: 2.4rem; margin-right: 1.1rem;
              }
              .author_name{
                font-size: 1.6rem;color: #787878;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;width: 70%;display: inline-block;
                margin-top:4px;
              }
            }
            .header,.content{
              margin-bottom: .6rem;
            }
            .content{
              .text{
                p{
                  font-size: 1.8rem;margin-bottom: .54rem;color: #333;word-break: break-all;word-wrap: break-word;
                }
              }
              .link{
                display: inline-block;border-radius: .858rem;
                .link_to{
                  display: inline-block;min-width: 3.8955rem;height: 1.5015rem;padding: 0 .84rem;line-height: 1.5225rem;border-radius: .7508rem;border: 1px solid #5e96b4;color: #5e96b4;text-align: center;font-size: 1.05rem;
                  a{
                    color: #5e96b4;display: block;
                  }
                }
              }
              .img-wrapper-outer{
                text-align: center;overflow: hidden;margin-top: .6rem;
                .img-wrapper{
                  background: url(//s3a.pstatp.com/resource/neihan_wap/static/image/loading-small-v2_0871d6b.png) no-repeat center center;border: 1px solid #f0f0f0;position: relative;
                  a{
                    display:block;
                    .upload_img{
                      display: block;width:100%;margin: 0 auto;
                    }
                  }
                  .stable{height:708px}
                  .long-img{
                    text-align: center;position: absolute;bottom: 0;left: 0;width: 100%;height: 4.2rem;display: none;background: url(//s3.pstatp.com/resource/neihan_wap/static/image/long-img-bg_b8c6002.png) repeat-x center center;background-size: auto 100%;
                    span{display: inline-block;font-size: 1.3rem;color: #fff;height: 4.55rem;line-height: 4.55rem;padding-left: 2.6rem;background: url(//s3a.pstatp.com/resource/neihan_wap/static/image/long-img-icon_e84cd76.png) no-repeat left center;background-size: auto 40%;}
                  }
                  .large_image{display: block}
                }
              }
            }
            .foot{
              font-size: 1.2rem;
              ul{
                overflow: hidden;
                li{
                  color: #999;float: left;height: 2.4rem;position: relative;margin-right: -1px;text-align: center;overflow: hidden;width: 20%;
                a{
                  display: block;color: #999;}
                  span{display: inline-block;text-align: left;background-repeat: no-repeat;padding-left: 2.16rem;background-size: auto 60%;line-height: 2.4rem;box-sizing: border-box;white-space: nowrap;}
                  .favourite{background-image: url('../assets/favourite.png');background-position: left center;}
                  .burry{background-image: url('../assets/bury.png');background-position: left center;}
                  .comment{background-image: url('../assets/commond.png');background-position: left center;}
                  .share{background-image: url('../assets/share.png');background-position: left center;}
                  .hot{background-image: url('../assets/hot.png');background-position: left center;}
                }
              }
            }
         }
      }
    }
  }

</style>
