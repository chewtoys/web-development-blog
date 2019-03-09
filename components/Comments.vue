<template>
  <div class="disqus-container">
    <vue-disqus
      :identifier="this.$route.fullPath"
      :url="`https://stevencotterill.com${this.$route.fullPath}`"
      :title="title"
      shortname="stevencotterill"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
