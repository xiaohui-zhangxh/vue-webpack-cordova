<template>
  <div>
    <span>{{isLoading}}</span>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { CHANGE_LOADING_STATUS } from 'store/modules/common'
export default {
  components: { },
  computed: {
    ...mapState({
      isLoading: state => state.common.isLoading
    })
  },
  mounted () {
    this.$store.commit(CHANGE_LOADING_STATUS, {isLoading: true})
    setTimeout(function () {
      this.$store.commit(CHANGE_LOADING_STATUS, {isLoading: false})
    }.bind(this), 2000)
  }
}
</script>
<style>
body {
  margin: 0;
}
</style>
