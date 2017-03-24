<template>
	<div class="loading" v-show="loading">
		<mu-circular-progress :size="40"/>
	</div>
</template>
<script>
    export default {
        computed:{
            loading:function () {
				      return this.$store.state.loading;
            }
        }
    }
</script>
<style lang="css">
	.loading {
		display: flex;
		justify-content: center;
		align-items: center;
    padding-top:42px;
	}
</style>
