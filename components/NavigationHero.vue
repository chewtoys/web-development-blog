<template>
  <section :class="heroColour" class="hero is-bold">
    <div class="hero-head">
      <Navigation />
    </div>

    <Hero
      :page-title="pageTitle"
      :page-sub-title="pageSubTitle"
      :hero-colour="heroColour"
    />
  </section>
</template>

<script>
import Hero from '~/components/Hero'
import Navigation from '~/components/Navigation'

export default {
  components: {
    Hero,
    Navigation
  },
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
