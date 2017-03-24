<template>
  <div>
    <loading></loading>
    <div class="pageheader">
      <span class="title">详情</span>
    </div>
    <content>
      <div class="wrapper">
        <ul id="detaillist" >
          <li class="de_list" >
            <div class="header"><a href=""><img :src="dataInfo.user.avatar_url" alt="" class="avatar left"></a><span class="author_name">{{dataInfo.user.name}}</span></div>
            <div class="content">
              <div class="text">
                <a href="javascript:;"><p>{{dataInfo.content}}</p></a>
              </div>
              <div class="link">
                <div class="link_to"><a href="javascript:;">{{dataInfo.category_name}}</a></div>
              </div>
              <div class="img-wrapper-outer" >
                <div class="img-wrapper">
                  <a href="javascript:;"><img :src="dataInfo.large_image" alt="" class="upload_img"></a>
                </div>
              </div>
            </div>
            <div class="foot">
              <ul>
                <li><a href="javascript:;"><span class="favourite">{{dataInfo.digg_count}}</span></a></li>
                <li><a href="javascript:;"><span class="burry">{{dataInfo.bury_count}}</span></a></li>
                <li><a href="javascript:;"><span class="comment">{{dataInfo.comment_count}}</span></a></li>
                <li><a href="javascript:;"><span class="share">{{dataInfo.share_count}}</span></a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </content>
    <div class="comment_area">
      <ul>
        <li><div class="post_wrapper"><span>期待您的神评论</span></div></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import loading from './load.vue'
export default {
  data () {
    return {
      id:this.$route.params.id,
      dataInfo:[],
    }
  },
components:{
  loading
},
//  computed:{
//    id:function () {
//      return this.$store.state.id;
//    }
//  },
  methods:{
      getInfo(){
          this.$store.commit('setLoad',true);
          this.$http.jsonp('http://m.neihanshequ.com/group/'+this.id+'/?is_json=1&csrfmiddlewaretoken=02bb2b4730c97c895db0b351c39c334e').then(function(data){
              console.log(data);
              this.dataInfo = data.data.the_data;
          });
          this.$store.commit('setLoad',false);
      },
  },
  mounted:function(){
      this.getInfo();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  div,li,p,ul{padding:0;margin:0;border: 0;font-size: 100%;}
  ul{list-style: none;}
  a{color: #4f5157;text-decoration: none;}
  .left{float: left}
  .pageheader{
    display: block;height: 4.5rem;line-height: 4.5rem;text-align: center;background-color: #222;color: #FAFAFA;position: fixed;width: 100%;top: 0;left: 0;z-index: 1000;
    .title{
      font-size: 1.8rem;max-width: 65%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;display: inline-block;}
  }
  content{
    display: block;position: relative;height: 100%;padding-top:40px;
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
              }
            }
          }
        }
      }
    }
  }
  .comment_area{
    ul{
      li{
        .post_wrapper{
          position: fixed;bottom: 0;background-color: #d3d3d3;width: 100%;padding: .8rem;box-sizing: border-box;z-index:100;
          span{color: #CBCBCB;display: block;width: 100%;border-radius: 1.072rem;height: 3rem;line-height: 3rem;font-size: 1.6rem;background: #fff url(//s3.pstatp.com/resource/neihan_wap/static/image/post/post-logo_b660914.png) no-repeat 1.92rem center;background-size: auto 70%;padding-left: 5rem;box-sizing: border-box;}
        }
      }
    }
  }
</style>
