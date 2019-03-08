<template>
  <div>
    <NavigationHero
      page-title="Home"
      page-sub-title="Web Development Blog"
      hero-colour="is-link"
    />

    <Section>
      <Container>
        <h2 class="title has-text-centered">
          Latest articles
        </h2>

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

        <div class="has-text-centered">
          <nuxt-link
            to="/articles"
            class="button is-medium is-link has-text-centered"
          >
            View all
          </nuxt-link>
        </div>
      </Container>
    </Section>

    <ContactForm />
  </div>
</template>

<script>
import NavigationHero from '~/components/NavigationHero'
import Card from '~/components/Card'
import ContactForm from '~/components/ContactForm'
import chunk from 'lodash.chunk'

export default {
  components: {
    NavigationHero,
    Card,
    ContactForm
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
          limit: '6'
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
      title: 'Home | Steven Cotterill',
      link: [{ rel: 'canonical', href: 'https://stevencotterill.com' }],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Web Development blog, focusing on PHP and other web technologies'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Web Development blog, focusing on PHP and other web technologies'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Home | Steven Cotterill'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://stevencotterill.com'
        }
      ]
    }
  }
}
</script>
