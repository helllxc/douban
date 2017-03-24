<template>
  <div class="comment">
    <div class="wrapper">
      <ul>
        <li class="hot_comment" v-if="show">
          <a href="javascript:;">
            <div class="caption">
              热门评论
              <span>(<span>{{len}}</span>)</span>
            </div>
            <ul class="comment_list">
              <li class="comment_item" v-for="comment in comments">
                <div class="comment_wrapper">
                  <div class="header">
                    <a href="javascript:;"><img :src="comment.user_profile_image_url" alt="" class="avatar"><div class="comment_name"><p class="name">{{comment.user_name}}</p></div></a>
                    <div class="diggy">{{comment.digg_count}}</div>
                  </div>
                  <p class="content">{{comment.text}}</p>
                </div>
              </li>
            </ul>
          </a>
        </li>
        <li class="comments" v-if="show1">
          <div class="sub_caption">新鲜评论<span>(<span>{{len1}}</span>)</span></div>
          <ul class="comment_list">
            <li class="comment_item" v-for="commentlist in commentLists">
              <div class="comment_wrapper">
                <div class="header">
                  <a href="javascript:;"><img :src="commentlist.user_profile_image_url" alt="" class="avatar"><div class="comment_name"><p class="name">{{commentlist.user_name}}</p></div></a>
                  <div class="diggy">{{commentlist.digg_count}}</div>
                </div>
                <p class="content">{{commentlist.text}}</p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default{
    data:function () {
      return{
        comments:'',
        len:'',
        id:this.$route.params.id,
        commentLists:'',
        len1: '',
        show:true,
        show1:true
      }
    },
  methods:{
    getComment:function () {
      this.$http.jsonp('http://m.neihanshequ.com/api/get_essay_comments/?app_name=neihanshequ_web&group_id='+this.id+'&offset=0&csrfmiddlewaretoken=02bb2b4730c97c895db0b351c39c334e').then(function(data){
          console.log(data)
          this.comments = data.data.data.top_comments;
          if(this.comments.length == 0){
              this.show = false;
          }else{
            this.len = this.comments.length;
          }

          this.commentLists = data.data.data.recent_comments;
          if(this.commentLists.length==0){
            this.show1 = false;
          }else{
            this.len1 = this.commentLists.length;
          }
      })
    }
  },
//  computed:{
//        id:function () {
//          return this.$store.state.id;
//        }
//  },
  mounted:function(){
    this.getComment();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  p,ul{padding:0;margin:0;}
  a{color: #4f5157;text-decoration: none;}
  ul{list-style: none}
  .comment{
    padding-bottom: 4.56rem;
    .wrapper{
      padding: 0 1.2rem;font-size: 1.2rem;
      ul{
        .hot_comment,.comments{
          padding:0;border:0
          a{position: relative;top: 0;visibility: hidden;}
          .caption{
            color: #ff819f;font-size: 1.3rem;
          }
          .sub_caption{color: #CBCBCB;font-size: 1.3rem;}
          ul{
            .comment_item{
              padding-bottom: 1px;margin-top: 1.2rem;margin-bottom: .96rem;
              .comment_wrapper{
                padding-left: 1.1rem;
                .header{
                  position: relative;height: 3.6rem;
                  a{
                    .avatar{
                      position: absolute;top: 50%;transform: translateY(-50%);width: 2.4rem;height: 2.4rem;border-radius: 2.4rem;
                    }
                    .comment_name{
                      position: absolute;top: 50%; transform: translateY(-50%);left: 3.6rem;width: 70%;
                    .name{font-size: 1.6rem;color: #787878;width: 95%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
                    }
                  }
                  .diggy{
                    position: absolute;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                    transform: translateY(-50%);
                    background: url('../assets/favourite.png') no-repeat left .39rem;right: 1.3rem;padding-left: 2.34rem;background-size: auto 60%;height: 2.6rem;line-height: 2.6rem;font-size: 1.3rem;color: #999;
                  }
                }
                .content{
                  word-break: break-all;margin-right: 1.12rem;margin-left: 3.616rem;margin-bottom: 1.2rem;font-size: 1.6rem;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
