<template>
  <div>
    <Navigation class="is-fixed-top is-link" />

    <Section class="articles-all">
      <h2 class="title has-text-centered">
        All articles
      </h2>

      <Container>
        <Columns
          v-for="(chunk, i) in chunkedArticles"
          :key="i"
          class="article-columns"
        >
          <Card
            v-for="article in chunk"
            :key="article.id"
            :card-data="article"
          />
        </Columns>
      </Container>
    </Section>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation'
import Card from '~/components/Card'
import chunk from 'lodash.chunk'

export default {
  components: {
    Navigation,
    Card
  },
  computed: {
    chunkedArticles() {
      return chunk(this.articles, 3)
    }
  },
  asyncData(context) {
    return context.app.$axios
      .get('articles', {
        params: {
          limit: '12'
        }
      })
      .then(response => {
        return {
          articles: response.data
        }
      })
  },
  head() {
    return {
      title: 'Articles | Steven Cotterill',
      link: [
        { rel: 'canonical', href: 'https://stevencotterill.com/articles' }
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'View all of my articles'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'View all of my articles'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Articles | Steven Cotterill'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://stevencotterill.com/articles'
        }
      ]
    }
  }
}
</script>
