<template>
  <div class="pagediscover">
    <ul>
      <li>
        <a href="">
          <img src="" alt="">
          <div class="desc">
             <h1>神评论</h1>
              <h2>有<span>{{count}}</span>条大神级评论</h2>
          </div>
        </a>
      </li>
      <li v-for="detail in detaillists">
        <a :href="'#/index/dis'">
          <img :src="detail.url" alt="">
          <div class="desc">
            <h1>{{detail.title}}</h1>
            <h2>{{detail.content}}</h2>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
      data:function(){
          return{
             count:'',
            detaillists:[]
          }
      },
      methods:{
          getData:function () {
            this.$http.get('./static/discovery.json').then(function(data){
                this.detaillists = data.data;
                console.log(data,data);
            })
          },
        getComment(){
              this.$http.jsonp('http://m.neihanshequ.com/god_comments_count/?app_name=neihanshequ_web&is_json=1&min_time=1490250909&csrfmiddlewaretoken=02bb2b4730c97c895db0b351c39c334e').then(function(data){
                  this.count = data.data.data.count;
              })
        }
      },
      mounted:function () {
        this.getData();
        this.getComment();
      }
  }
</script>

<style lang="less" scoped>
  h1,h2,div,li,p,ul{padding:0;margin:0;border: 0;font-size: 100%;}
  ul{list-style: none;padding-top:42px}
  a{color: #4f5157;text-decoration: none;}
  .pagediscover{
    ul{
      li{
        height: 7rem;width: 100%;border-bottom: 1px solid #f3f3f3;position: relative;overflow: hidden;
        a{
          display: block;width: 100%;height: 100%;
          img{
            position: absolute;top: 50%;-webkit-transform: translateY(-50%);transform: translateY(-50%);left: 1rem;width: 5rem;height: 5rem;border-radius: 10px;background-repeat: no-repeat;background-position: center center;background-size: 100%;background-image: url(//s3a.pstatp.com/resource/neihan_wap/static/image/bar-comments_c2e7bb9.png)
          }
          .desc{
            width: 100%;padding-left: 7rem;left: 0;box-sizing: border-box;position: absolute;top: 50%;transform: translateY(-50%);
              h1{
                font-size: 1.7rem;color: #444;margin-bottom: .68rem;
              }
              h2{
                font-size: 1.3rem;
                color: #AFAFAF;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                max-width: 90%;
              }
            }
        }
      }
    }
  }
</style>
