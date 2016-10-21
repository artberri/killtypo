<template>
  <div :class="classObject">
      <slot>message</slot>
  </div>
</template>

<script>
export default {
  name: 'key',
  props: ['type', 'dual', 'slash', 'left', 'right'],
  computed: {
    classObject: function () {
      let classes = {
        key: true,
        dual: this.dual,
        slash: this.slash,
        left: this.left,
        right: this.right
      }

      if (this.type) {
        classes[this.type] = true
      }

      return classes
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.key{
  font-family: Arial, sans-serif;
  width: 40px;
  height: 40px;
  display: block;
  background-color: #eee;
  text-align: left;
  padding-left: 8px;
  line-height: 29px;
  border-radius: 2px;
  float: left;
  margin-left: 2px;
  margin-bottom: 2px;
  transition: box-shadow .7s ease;
}

.dual {
  font-size: 14px;
  line-height: 20px;
  width: 30px;
}

.backspace {
  width: 84px;
  font-size: 12px;
}

.tab {
  width: 50px;
  line-height: 40px;
  font-size: 13px;
}

.letter {
  width: 30px;
}

.slash {
  width: 64px;
}

.caps {
  width: 70px;
  font-size: 12px;
  line-height: 18px;
}

.enter {
  width: 92px;
  line-height:40px;
  text-align: center;
  padding-left: 0;
}

.shift.left {
  width: 90px;
  line-height: 40px;
  font-size: 13px;
}

.shift.right {
  width: 104px;
  line-height: 40px;
  font-size: 13px;
}

.ctrl {
  width: 50px;
  line-height: 40px;
  font-size: 13px;
}

.space {
  width: 234px;
}

</style>
