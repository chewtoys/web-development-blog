<template>
  <Column class="is-4">
    <div class="card article-cards">
      <div class="card-image">
        <figure class="image is-4by3">
          <nuxt-link :to="'/articles/' + cardData.slug">
            <img :src="cardData.mainImage['440x330']" :alt="cardData.title">
          </nuxt-link>
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <nuxt-link :to="'/articles/' + cardData.slug">
              <p class="title is-4 has-text-link">
                {{ cardData.title }}
              </p>
            </nuxt-link>
          </div>
        </div>
        <Content>
          <p>{{ cardData.excerpt }}</p>
          <div class="tags">
            <Tag v-for="(tag, i) in cardData.tags" :key="i" :tag-name="tag" />
          </div>
        </Content>
      </div>
    </div>
  </Column>
</template>

<script>
import Tag from '~/components/Tag'

export default {
  components: {
    Tag
  },
  props: {
    cardData: {
      type: Object,
      required: true
    }
  }
}
</script>
