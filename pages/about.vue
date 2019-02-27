<template>
  <div>
    <Section class="contained-section">
      <Container>
        <Columns class="is-centered">
          <Column class="is-8 contained-column">
            <PageIntroduction
              page-title="About"
              page-subtitle="A bit about me and what I do"
            />

            <Content>
              <div v-html="pageContent" />
            </Content>
          </Column>
        </Columns>
      </Container>
    </Section>
  </div>
</template>

<script>
export default {
  layout: 'page',
  asyncData(context) {
    return context.app.$axios
      .get('https://api.stevencotterill.com/wp-json/wdb/v1/page', {
        params: {
          id: '33'
        }
      })
      .then(response => {
        return {
          pageContent: response.data.pageContent
        }
      })
  },
  head() {
    return {
      title: 'About | Steven Cotterill',
      link: [{ rel: 'canonical', href: 'https://stevencotterill.com/about' }],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'I am a Web Developer based in Belfast. Find out more about me and what I do'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'I am a Web Developer based in Belfast. Find out more about me and what I do'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'About | Steven Cotterill'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://stevencotterill.com/about'
        }
      ]
    }
  }
}
</script>
