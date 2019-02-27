<template>
  <div class="youtube-container">
    <div class="youtube-embed">
      <iframe
        :src="`https://www.youtube.com/embed/${youtubeId}`"
        frameborder="0"
        allowfullscreen
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    youtubeId: {
      type: String,
      required: true
    }
  }
}
</script>
