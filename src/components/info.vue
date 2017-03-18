<template>
  <content>
    <div class="wrapper">
      <ul id="detaillist" >
        <li class="de_list" >
          <div class="header"><a href=""><img :src="dataInfo.user.avatar_url" alt="" class="avatar left"></a><span class="author_name">{{dataInfo.user.name}}</span></div>
          <div class="content">
            <div class="text">
              <a href=""><p>{{dataInfo.content}}</p></a>
            </div>
            <div class="link">
              <div class="link_to"><a href="">内涵段子</a></div>
            </div>
          </div>
          <div class="foot">
            <ul>
              <li><a href=""><span class="favourite">{{dataInfo.digg_count}}</span></a></li>
              <li><a href=""><span class="burry">{{dataInfo.bury_count}}</span></a></li>
              <li><a href=""><span class="comment">{{dataInfo.comment_count}}</span></a></li>
              <li><a href=""><span class="share">{{dataInfo.share_count}}</span></a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </content>
</template>

<script>
export default {
  data () {
    return {
      id:this.$route.params.id,
      dataInfo:[]
    }
  },
  methods:{
      getInfo(){
          this.$http.jsonp('http://m.neihanshequ.com/group/'+this.id+'/?is_json=1&csrfmiddlewaretoken=02bb2b4730c97c895db0b351c39c334e').then(function(data){
              console.log(data);
              this.dataInfo = data.data.the_data
          })
      }
  },
  mounted:function(){
      this.getInfo();
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
</style>
