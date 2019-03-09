<template>
  <div class="code-snippet-container">
    <pre><code :class="`lang-${data.language}`">{{ data.code }}</code></pre>
  </div>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-json'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'

Prism.plugins.NormalizeWhitespace.setDefaults({
  'remove-trailing': true,
  'remove-indent': true,
  'left-trim': false,
  'right-trim': false
})

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  mounted: function() {
    this.$nextTick(() => {
      Prism.highlightAll()
    })
  }
}
</script>
