<template>
  <form class="post-create">
    <div class="field">
      <textarea
        v-auto-expand
        class="textarea"
        placeholder="Write a post"
        rows="1"></textarea>
      <button class="btn btn-success mt-2 btn-sm">Send</button>
    </div>
  </form>
</template>

<script>
import autoExpand from '../../directives/autoExpand'
export default {
    directives: {autoExpand}
}
</script>
<style>
.textarea-post {
  padding-bottom: 30px;
}
.post-create {
  margin-bottom: 15px;
}
</style>
