<template>




</template>

<script>
export default {
  data() {
    return {
      activePath: ''
    }
  },
  watch: {
    $route: {
      handler(newVal) {
        this.activePath = newVal.path
      },
      immediate: true
    }
  },
  created() {
    // console.log(this)
  }
};
</script>

<style>

</style>
