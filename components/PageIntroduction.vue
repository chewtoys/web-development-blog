<template>
  <div>
    <div class="article-title-container has-text-centered">
      <h1 class="title is-3 is-spaced">
        {{ pageTitle }}
      </h1>
      <h2 class="subtitle is-5">
        {{ pageSubtitle }}
      </h2>
      <p v-if="pageDate" class="has-text-centered">
        {{ pageDate }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      required: true
    },
    pageSubtitle: {
      type: String,
      required: true
    },
    pageDate: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
