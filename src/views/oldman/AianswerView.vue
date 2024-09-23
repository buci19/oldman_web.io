<template>
  <div class="html-viewer">
    <iframe :src="htmlUrl" frameborder="0" width="100%" height="780px"></iframe>
  </div>
</template>

<script>


export default {
  name: 'HtmlViewer',
  data() {
    return {
      htmlUrl: '/Ai.html'
    }
  },

}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
</style>
