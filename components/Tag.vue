<template>
  <span class="tag is-rounded">
    {{ tagName }}
  </span>
</template>

<script>
export default {
  props: {
    tagName: {
      type: String,
      required: true
    }
  }
}
</script>
