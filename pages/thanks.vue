<template>
  <div>
    <Section class="contained-section">
      <Container>
        <Columns class="is-centered">
          <Column class="is-8 contained-column">
            <PageIntroduction
              page-title="Thanks for getting in touch!"
              page-subtitle="Keep an eye on your emails, I will get back to you as soon as possible."
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
  head() {
    return {
      title: 'Thanks | Steven Cotterill',
      link: [{ rel: 'canonical', href: 'https://stevencotterill.com/thanks' }],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Thanks for getting in touch'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Thanks for getting in touch'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Thanks | Steven Cotterill'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://stevencotterill.com/thanks'
        }
      ]
    }
  }
}
</script>
