<template>
  <div>
    <div v-for="(content, i) in data.content" :key="i">
      <div v-if="content.type === 'text'" v-html="content.text" />

      <div
        v-if="content.type === 'image'"
        class="article-img has-text-centered"
      >
        <img
          :src="content.image"
          :alt="content.alt"
        >
      </div>

      <no-ssr>
        <Code v-if="content.type === 'code'" :data="content" />
      </no-ssr>

      <YouTube v-if="content.type === 'youtube'" :youtube-id="content.id" />
    </div>
  </div>
</template>

<script>
import Code from '~/components/Code'
import YouTube from '~/components/YouTube'

export default {
  components: {
    Code,
    YouTube
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
