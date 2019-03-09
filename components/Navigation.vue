<template>
  <nav class="navbar is-bold" role="navigation" aria-label="main navigation">
    <Container>
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <img src="~/assets/img/logo.svg" width="30" alt="Logo">
        </nuxt-link>

        <a
          id="hamburger"
          :class="{ 'is-active': showNav }"
          @click="showNav = !showNav"
          role="button"
          class="navbar-burger"
          aria-label="Hamburger navigation"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div :class="{ 'is-active': showNav }" class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link to="/about" class="navbar-item">
            ABOUT
          </nuxt-link>

          <nuxt-link to="/articles" class="navbar-item">
            ARTICLES
          </nuxt-link>

          <nuxt-link to="/snippets" class="navbar-item">
            SNIPPETS
          </nuxt-link>

          <a
            v-if="$nuxt.$route.path == '/'"
            v-scroll-to="'#contact'"
            href="#"
            class="navbar-item"
          >CONTACT</a>

          <nuxt-link v-else to="/#contact" class="navbar-item">
            CONTACT
          </nuxt-link>
        </div>

        <div class="navbar-item is-hidden-touch">
          <div class="field is-grouped">
            <a
              href="https://twitter.com/stevie_c91"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="icon is-medium has-text-white">
                <font-awesome-icon :icon="['fab', 'twitter']" size="lg" />
              </span>
            </a>
          </div>
        </div>
        <div class="navbar-item is-hidden-touch">
          <div class="field is-grouped">
            <a
              href="https://github.com/stevie-c91"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="icon is-medium has-text-white">
                <font-awesome-icon :icon="['fab', 'github']" size="lg" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </Container>
  </nav>
</template>

<script>
export default {
  data: () => {
    return {
      showNav: false
    }
  }
}
</script>
