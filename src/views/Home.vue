<template>
  <div>
    <div class="video">
      <video autoplay loop>
        <source src="/intro.webm" type='video/webm; codecs="vp8, vorbis"' />
        <source src="/intro.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
        <source src="/intro.ogv" type='video/ogg; codecs="theora, vorbis"' />
        Video tag not supported. Download the video <a href="movie.webm">here</a>.
      </video>
      <div class="overlay">
        <div class="container">
          <h2 class="home-claim" v-t="{path: 'home.claim', locale: $route.meta.lang}"></h2>
          <p class="home-text" v-t="{path: 'home.sentence', locale: $route.meta.lang}"></p>
          <router-link class="home-cta button" :to="{ name: 'mode-' + $route.meta.lang }" v-t="{path: 'home.cta', locale: $route.meta.lang}"></router-link>
        </div>
      </div>
    </div>
    <div class="container home-info">
      <div class="pure-g">
          <div class="pure-u-1-3">
            <div class="container">
              <h3 v-t="{path: 'home.easy', locale: $route.meta.lang}"></h3>
              <p class="icon"><i class="fa fa-child" aria-hidden="true"></i></p>
              <p v-t="{path: 'home.easytext', locale: $route.meta.lang}"></p>
            </div>
          </div>
          <div class="pure-u-1-3">
            <div class="container">
              <h3 v-t="{path: 'home.real', locale: $route.meta.lang}"></h3>
              <p class="icon"><i class="fa fa-keyboard-o" aria-hidden="true"></i></p>
              <p v-t="{path: 'home.realtext', locale: $route.meta.lang}"></p>
            </div>
          </div>
          <div class="pure-u-1-3">
            <div class="container">
              <h3 v-t="{path: 'home.offline', locale: $route.meta.lang}"></h3>
              <p class="icon"><i class="fa fa-download" aria-hidden="true"></i></p>
              <p v-t="{path: 'home.offlinetext', locale: $route.meta.lang}"></p>
            </div>
          </div>
      </div>
      <div class="pure-g">
          <div class="pure-u-1-3">
            <div class="container">
              <h3 v-t="{path: 'home.free', locale: $route.meta.lang}"></h3>
              <p class="icon"><i class="fa fa-money" aria-hidden="true"></i></p>
              <p v-t="{path: 'home.freetext', locale: $route.meta.lang}"></p>
            </div>
          </div>
          <div class="pure-u-1-3">
            <div class="container">
              <h3 v-t="{path: 'home.open', locale: $route.meta.lang}"></h3>
              <p class="icon"><i class="fa fa-code" aria-hidden="true"></i></p>
              <p v-t="{path: 'home.opentext', locale: $route.meta.lang}"></p>
            </div>
          </div>
          <div class="pure-u-1-3">
            <div class="container">
              <h3 v-t="{path: 'home.amusing', locale: $route.meta.lang}"></h3>
              <p class="icon"><i class="fa fa-gamepad" aria-hidden="true"></i></p>
              <p v-t="{path: 'home.amusingtext', locale: $route.meta.lang}"></p>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
.video {
  height: 400px;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  color: #fff;

  video {
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -960px;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    background: rgba(0, 0, 0, 0.6);
  }
}

.home-info {
  margin-top: 30px;

  h3 {
    font-size: 2rem;
    margin: 0 0 20px;
  }

  .icon {
    margin: 0 auto;
    font-size: 2rem;
    display: block;
    height: 80px;
    line-height: 80px;
    width: 80px;
    background: #2c3e50;
    color: #fff;
    border-radius: 50px;

    i {
      line-height: 80px;
    }
  }

  p {
    font-size: 1.1rem;
  }
}

</style>
