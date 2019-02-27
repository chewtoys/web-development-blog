<template>
  <Container>
    <h1 v-if="error.statusCode === 404">
      Page not found
    </h1>
    <h1 v-else>
      An error occurred
    </h1>
    <nuxt-link to="/">
      Home page
    </nuxt-link>
  </Container>
</template>

<template>
  <div>
    <Section class="contained-section">
      <Container>
        <Columns class="is-centered">
          <Column class="is-8 contained-column">
            <PageIntroduction
              page-title="Page not found"
              page-subtitle="Please try again, or return home"
            />
          </Column>
        </Columns>
      </Container>
    </Section>
  </div>
</template>

<script>
export default {
  layout: 'page',
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
