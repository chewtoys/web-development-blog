<template>
  <section :class="heroColour" class="hero is-bold">
    <div class="hero-body">
      <Container class="has-text-centered">
        <h1 class="title">
          {{ pageTitle }}
        </h1>
        <h2 class="subtitle">
          {{ pageSubTitle }}
        </h2>
      </Container>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      required: true
    },
    pageSubTitle: {
      type: String,
      required: true
    },
    heroColour: {
      type: String,
      required: true
    }
  }
}
</script>
