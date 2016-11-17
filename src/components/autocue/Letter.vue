<template>
  <span :class="{ wrong: isWrong, space: isSpace }">{{ letter }}</span>
</template>

<script>
export default {
  name: 'autocue',
  props: ['letter', 'isWrong'],
  computed: {
    isSpace () {
      return this.letter === ' '
    }
  }
}
</script>

<style scoped>
span {
  display: inline-block;
  margin: 0;
  padding: 0;
}

.wrong {
  background: #d00;
  color: #fff;

  &.space:after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 7px;
    background: #d00;
    height: 66px;
    top: 2px;
  }
}

.space {
  width: 7px;
}
</style>
