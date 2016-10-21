<template>
  <!-- Keyboard Based on https://codepen.io/attilahajzer/pen/kydqJ -->
  <div class="keyboard">
    <key type="num" :dual="true">
        ~<br>`
    </key>
    <key type="num" :dual="true">
        !<br>1
    </key>
    <key type="num" :dual="true">
        @<br>2
    </key>
    <key type="num" :dual="true">
        #<br>3
    </key>
    <key type="num" :dual="true">
        $<br>4
    </key>
    <key type="num" :dual="true">
        %<br>5
    </key>
    <key type="num" :dual="true">
        ^<br>6
    </key>
    <key type="num" :dual="true">
        &amp;<br>7
    </key>
    <key type="num" :dual="true">
        *<br>8
    </key>
    <key type="num" :dual="true">
        (<br>9
    </key>
    <key type="num" :dual="true">
        )<br>0
    </key>
    <key type="num" :dual="true">
        _<br>-
    </key>
    <key type="num" :dual="true">
        +<br>=
    </key>
    <key type="backspace">
        Backspace
    </key>
    <!--END NUMBER KEYS -->

    <key type="tab">
        Tab
    </key>

    <key type="letter">
        Q
    </key>
        <key type="letter">
        W
    </key>
        <key type="letter">
        E
    </key>
        <key type="letter">
        R
    </key>
        <key type="letter">
        T
    </key>
        <key type="letter">
        Y
    </key>
        <key type="letter">
        U
    </key>
        <key type="letter">
        I
    </key>
        <key type="letter">
        O
    </key>
        <key type="letter">
        P
    </key>
        <key :dual="true">
        {<Br>[
    </key>
        <key :dual="true">
        }<br>]
    </key>
    <key type="letter" :dual="true" :slash="true">
        |<br>\
    </key>
    <key type="caps">
        Caps<br>Lock
        </key>
    <key type="letter">
        A
    </key>
        <key type="letter">
        S
    </key>
        <key type="letter">
        D
    </key>
        <key type="letter">
        F
    </key>
        <key type="letter">
        G
    </key>
        <key type="letter">
        H
    </key>
        <key type="letter">
        J
    </key>
        <key type="letter">
        K
    </key>
        <key type="letter">
        L
    </key>
        <key :dual="true">
        :<br>;
    </key>
        <key :dual="true">
        "<br>'
    </key>
        <key type="enter">
        Enter
    </key>

    <key type="shift" :left="true">
        Shift
    </key>
    <key type="letter">
        Z
    </key>
        <key type="letter">
        X
    </key>
        <key type="letter">
        C
    </key>
        <key type="letter">
        V
    </key><key type="letter">
        B
    </key><key type="letter">
        N
    </key><key type="letter">
        M
    </key>
        <key :dual="true">
        &lt; <br>,
    </key>
        <key :dual="true">
        &gt;<br>.
    </key>
        <key :dual="true">
        ?<br>/
    </key>
    <key type="shift" :right="true">
        Shift
    </key>
    <key type="ctrl">
        Ctrl
    </key>
    <key>
        &hearts;
    </key>
    <key>
        Alt
    </key>
    <key type="space">

    </key>
    <key>
        Alt
    </key>
    <key>
        &hearts;
    </key>
    <key>
        Prnt
    </key>
        <key type="ctrl">
        Ctrl
    </key>

  </div>
</template>

<script>
import Key from './Key'

export default {
  name: 'keyboard',
  components: {
    Key
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.keyboard{
  width:620px;
  height: 210px;
  margin: 0px auto;
  padding: 30px;
  color: #444;
}

</style>
