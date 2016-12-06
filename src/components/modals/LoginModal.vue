<template>
  <modal v-if="showLoginModal" @close="closeModal('login')">
    <h3 slot="header">{{ $t("login.loginModalTitle") }}</h3>
    <p>{{ $t("login.loginModalContent") }}</p>
    <div slot="footer">
      <login-button></login-button>
    </div>
  </modal>
</template>

<script>
import LanguageMixin from '../../mixins/LanguageMixin'
import Modal from '../Modal'
import { mapMutations } from 'vuex'
import * as types from '../../store/mutation-types'
import LoginButton from '../LoginButton'

export default {
  name: 'login-modal',
  mixins: [LanguageMixin],
  components: {
    Modal,
    LoginButton
  },
  computed: {
    showLoginModal () {
      return this.$store.state.online.status && this.$store.state.modals.login
    }
  },
  methods: {
    ...mapMutations({
      'closeModal': types.HIDE_MODAL
    })
  }
}
</script>

<style scoped>

</style>
