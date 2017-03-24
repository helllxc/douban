<template>
  <div>
    <info></info>
    <comment></comment>
  </div>
</template>

<script>
  import info from '../info.vue';
  import comment from '../comment.vue';
export default {
  data:function () {
    return{
      id:this.$route.params.id
    }
  },
  components:{
    info,
    comment,
  },
  methods:{
      setid:function(){
          this.$store.commit('setId',this.id)
      }
  },
  mounted:function(){
      if(this.id){
        this.setid();
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
