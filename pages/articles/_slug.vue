<template>
  <div>
    <Section class="contained-section">
      <Container>
        <Columns class="is-centered">
          <Column class="is-8 contained-column">
            <div class="image is-5by3 article-main-img">
              <img :src="article.mainImage['920x500']" :alt="article.title">
            </div>

            <Content>
              <PageIntroduction
                :page-title="article.title"
                :page-subtitle="article.excerpt"
                :page-date="article.date"
              />

              <PostContent :data="article" />
            </Content>

            <Comments :title="article.title" />

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
      .get('articles', {
        params: {
          slug: params.slug
        }
      })
      .then(response => {
        return {
          article: response.data[0]
        }
      })
      .catch(e => {
        error({ statusCode: 404, message: 'This article was not found' })
      })
  },
  head() {
    return {
      title: `${this.article.title} | Steven Cotterill`,
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
          content: this.article.excerpt
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.excerpt
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.article.title} | Steven Cotterill`
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://stevencotterill.com${this.$route.fullPath}`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.article.mainImage['920x500']
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.article.mainImage['920x500']
        },
        {
          hid: 'og:image:type',
          property: 'og:image:type',
          content: this.article.mainImage.type
        },
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: this.article.mainImage.width
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: this.article.mainImage.height
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.article.title
        }
      ]
    }
  }
}
</script>
