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

              <ArticleContent :data="article" />
            </Content>

            <div class="disqus-container">
              <vue-disqus
                :identifier="this.$route.fullPath"
                :url="`https://stevencotterill.com${this.$route.fullPath}`"
                :title="article.title"
                shortname="stevencotterill"
              />
            </div>

            <form
              action="https://stevencotterill.us18.list-manage.com/subscribe/post?u=89de3f7692b2e2300565c1665&amp;id=08ec466885"
              method="post"
              class="control newsletter is-hidden-mobile"
              target="_blank"
            >
              <div class="field has-addons">
                <div class="control is-expanded">
                  <input
                    type="email"
                    name="EMAIL"
                    placeholder="Your email"
                    class="input"
                  >
                </div>
                <div class="control">
                  <button class="button is-link">
                    Why not subscribe to my newsletter?
                  </button>
                </div>
              </div>
            </form>
          </Column>
        </Columns>
      </Container>
    </Section>
  </div>
</template>

<script>
import ArticleContent from '~/components/ArticleContent'

export default {
  layout: 'page',
  components: {
    ArticleContent
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
