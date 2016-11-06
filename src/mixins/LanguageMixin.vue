<script>
import Vue from 'vue'

export default {
  computed: {
    language () {
      return Vue.config.lang
    }
  }
}
</script>