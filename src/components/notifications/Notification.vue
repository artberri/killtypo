<template>
  <transition name="fade">
    <div class="notification" :class="notification.type ? notification.type : 'secondary'">
      <button @click="triggerClose(notification)" class="close-button" aria-label="Close alert" type="button">&times;</button>
      <p>
        {{notification.text}}
      </p>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'notification',
  props: ['notification'],
  data () {
    return {
      timer: null
    }
  },
  created () {
    let timeout = this.notification.hasOwnProperty('timeout') ? this.notification.timeout : true

    if (timeout) {
      let delay = this.notification.delay || 3000

      this.timer = setTimeout(() => {
        this.triggerClose(this.notification)
      }, delay)
    }
  },
  methods: {
    triggerClose (notification) {
      clearTimeout(this.timer)
      this.$emit('close-notification', notification)
    }
  }
}
</script>

<style scoped>
.notification {
  position: relative;
  max-width: 300px;
  border-radius: 5px;
  background: #67c58f;
  box-shadow: 0 25px 10px -15px rgba(0,0,0,0.1);
  padding: 22px;
  line-height: 1.4;
  color: rgba(250,251,255,0.95);
  margin-bottom: 10px;

  p {
    color: #fff;
    font-size: 90%;
    font-family: 'Helvetica Neue', 'Segoe UI', Helvetica, Arial, sans-serif;
    margin: 0;
    text-align: left;
  }

  &.error {
    background: #ea6969;
  }
}

button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  padding: 0;
  position: absolute;
  right: 4px;
  top: 4px;
  overflow: hidden;
  cursor: pointer;
  backface-visibility: hidden;
  border: 0;
  background: transparent;
  display: block;
  font-size: 24px;
}

.fade-enter-active,
.fade-leave-active {
	animation-name: animScale;
	animation-duration: 0.25s;
}

.fade-enter,
.fade-leave-active {
  animation-direction: reverse;
}

@keyframes animScale {
	0% {
    opacity: 0;
    transform: translate3d(0, 40px, 0) scale3d(0.1, 0.6, 1);
  }

	100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
  }
}

</style>