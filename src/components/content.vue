<template>
  <content @scroll="loadMore()">
      <toast></toast>
      <share></share>
      <div class="wrapper" >
        <ul id="detaillist" v-for="(list,$index) in detaillist">
          <li class="de_list" :id="list.group.id">
            <a :href="'#/detail/'+list.group.id" >
              <div class="header"><a href=""><img :src="list.group.user.avatar_url" alt="" class="avatar left"></a><span class="author_name">{{list.group.user.name}}</span></div>
              <div class="content">
                <div class="text">
                  <a :href="'#/detail/'+list.group.id"><p>{{list.group.content}}</p></a>
                </div>
                <div class="link">
                  <div class="link_to"><a href="">{{list.group.category_name}}</a></div>
                </div>
                <div class="img-wrapper-outer">
                  <div class="img-wrapper">
                    <a href="javascript:;" :class="{'stable':list.group.large_image.height>708}"><img :src="list.group.large_image.url_list[0].url" alt="" class="upload_img"></a>
                    <div class="long-img" :class="{'large_image':list.group.large_image.height>708}"><span>点击查看长图</span></div>
                  </div>
                </div>
              </div>
              <div class="foot">
                <ul>
                  <li><a href="javascript:;" @click="showtoast(list,1,$index)"><span class="favourite">{{list.group.digg_count}}</span></a></li>
                  <li><a href="javascript:;" @click="showtoast(list,2,$index)"><span class="burry">{{list.group.bury_count}}</span></a></li>
                  <li><a :href="'#/detail/'+list.group.id"><span class="comment" :class="{'hot':list.group.status_desc=='热门投稿'}">{{list.group.comment_count}}</span></a></li>
                  <li><a href="javascript:;" @click="isShare"><span class="share">{{list.group.share_count}}</span></a></li>
                </ul>
              </div>
            </a>
          </li>
        </ul>
      </div>
  </content>
</template>

<script>
  import toast from './toast.vue';
  import share from './share.vue'
export default {
  props:['a','b'],
  data(){
      return{
        detaillist:[],
        num:0,
        top:0,
        clicked:'',
      }
  },
  methods:{
    getinfo() {
      this.$store.commit('setLoading',true)
      this.num++;
      this.$http.jsonp(this.a+this.num+this.b ).
      then(function (data) {
        this.detaillist = this.detaillist.concat(data.data.data.data);
        this.$store.commit('setLoading',false)
        console.log(this.detaillist)
      })
    },
    loadMore(){
        console.log(this);
        if(this.$el.scrollTop+this.$el.offsetHeight>=this.$el.scrollHeight-10){
           this.getinfo();
        }
        if(this.$el.scrollTop>this.top){
          this.$store.commit('setShown',false)
        }else{
          this.$store.commit('setShown',true)
        }
      this.top = this.$el.scrollTop
    },
    showtoast:function (obj,num,idx) {
        if(!obj.group.is_anonymous){
            this.$store.commit('setComment','操作成功')
          if(num==1){
            obj.group.digg_count+=1;
            this.clicked = '顶';
            $('.favourite').eq(idx).addClass('ed');
          }else{
            obj.group.bury_count+=1;
            this.clicked = '踩';
            $('.burry').eq(idx).addClass('ec');
          }
          obj.group.is_anonymous = true;
        }else{
          this.$store.commit('setComment','你已'+this.clicked+'过')
        }
      this.$store.commit('setToast',true);
      var self = this;
      setTimeout(function(){
        self.$store.commit('setToast',false);
      },1000);
    },
    isShare:function () {
      this.$store.commit('setShare',true)
    }
  },
  mounted(){
    this.getinfo();
  },
  components:{
    toast,
    share
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
                  .ed{background-image: url('../assets/ding.png');color: #ff819f;}
                  .ec{background-image: url('../assets/cai.png');color: #ff819f;}
                }
              }
            }
         }
      }
    }
  }

</style>
