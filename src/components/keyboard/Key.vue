<template>
  <div :class="classObject" v-html="html"></div>
</template>

<script>
export default {
  name: 'key',
  props: ['keyobj'],
  computed: {
    letters () {
      return this.$store.state.autocue.letters
    },
    nextLetter () {
      return this.letters.nextLetter
    },
    isWritting () {
      return this.$store.state.autocue.isWritting
    },
    classObject () {
      let letter = this.nextLetter

      if (letter && letter.length === 1) {
        letter = letter.toUpperCase()
      }

      let classes = {
        key: true,
        dual: this.keyobj.dual,
        slash: this.keyobj.slash,
        left: this.keyobj.left,
        right: this.keyobj.right,
        next: this.isWritting && this.keyobj.letters.indexOf(letter) >= 0
      }

      if (this.keyobj.type) {
        classes[this.keyobj.type] = true
      }

      return classes
    },

    html () {
      return this.keyobj.letters.join('<br>').replace(' ', '&nbsp;')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.key {
  box-sizing: content-box;
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

.next {
  background-color: #42b983;
  color: #fff;
}

</style>
