<template>
  <div>
    <Section class="contained-section">
      <Container>
        <Columns class="is-centered">
          <Column class="is-8 contained-column">
            <Content>
              <PageIntroduction
                :page-title="snippet.title"
                :page-subtitle="snippet.excerpt"
                :page-date="snippet.date"
              />

              <PostContent :data="snippet" />
            </Content>

            <Comments :title="snippet.title" />

            <Newsletter />
          </Column>
        </Columns>
      </Container>
    </Section>
  </div>
</template>

<script>
import PostContent from '~/components/PostContent'
import Comments from '~/components/Comments'
import Newsletter from '~/components/Newsletter'

export default {
  layout: 'page',
  components: {
    PostContent,
    Comments,
    Newsletter
  },
  asyncData({ $axios, params, error }) {
    return $axios
      .get('snippets', {
        params: {
          slug: params.slug
        }
      })
      .then(response => {
        return {
          snippet: response.data[0]
        }
      })
      .catch(e => {
        error({ statusCode: 404, message: 'This snippet was not found' })
      })
  },
  head() {
    return {
      title: `${this.snippet.title} | Steven Cotterill`,
      link: [
        {
          rel: 'canonical',
          href: `https://stevencotterill.com${this.$route.fullPath}`
        }
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.snippet.excerpt
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.snippet.excerpt
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.snippet.title} | Steven Cotterill`
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://stevencotterill.com${this.$route.fullPath}`
        }
      ]
    }
  }
}
</script>
