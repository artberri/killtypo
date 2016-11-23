<template>
  <div class="notifications">
    <notification v-for="notification in notifications" :notification="notification" @close-notification="removeNotification">
    </notification>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import * as types from '../../store/mutation-types'
import Notification from './Notification'

export default {
  name: 'notifications',
  components: {
    Notification
  },
  computed: {
    notifications () {
      return this.$store.state.notifications
    }
  },
  methods: {
    ...mapMutations({
      'removeNotification': types.REMOVE_NOTIFICATION
    })
  }
}
</script>

<style scoped>
.notifications {
  position: fixed;
  right: 10px;
  top: 10px;
  width: 350px;
  z-index: 100;
}
</style>