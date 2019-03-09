<template>
  <div>
    <Navigation class="is-fixed-top is-link" />

    <Section class="articles-all">
      <h2 class="title has-text-centered">
        All snippets
      </h2>

      <Container>
        <Columns
          v-for="(chunk, i) in chunkedSnippets"
          :key="i"
          class="article-columns"
        >
          <CardSnippet
            v-for="snippet in chunk"
            :key="snippet.id"
            :card-data="snippet"
          />
        </Columns>
      </Container>
    </Section>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation'
import CardSnippet from '~/components/CardSnippet'
import chunk from 'lodash.chunk'

export default {
  components: {
    Navigation,
    CardSnippet
  },
  computed: {
    chunkedSnippets() {
      return chunk(this.snippets, 3)
    }
  },
  asyncData(context) {
    return context.app.$axios
      .get('snippets', {
        params: {
          limit: '12'
        }
      })
      .then(response => {
        return {
          snippets: response.data
        }
      })
  },
  head() {
    return {
      title: 'Snippets | Steven Cotterill',
      link: [
        { rel: 'canonical', href: 'https://stevencotterill.com/snippets' }
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'View all of my snippets'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'View all of my snippets'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Snippets | Steven Cotterill'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://stevencotterill.com/snippets'
        }
      ]
    }
  }
}
</script>
