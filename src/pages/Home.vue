<template>
  <div>
    <div class="video">
      <video autoplay loop>
        <source src="/static/intro.webm" type='video/webm; codecs="vp8, vorbis"' />
        <source src="/static/intro.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
        <source src="/static/intro.ogv" type='video/ogg; codecs="theora, vorbis"' />
        Video tag not supported. Download the video <a href="movie.webm">here</a>.
      </video>
      <div class="overlay">
        <div class="container">
          <h2 class="home-claim">{{ $t("home.claim") }}</h2>
          <p class="home-text">
            {{ $t("home.sentence") }}
          </p>
          <router-link class="home-cta button" :to="{ name: 'mode-' + language }">{{ $t("home.cta") }}</router-link>
        </div>
      </div>
    </div>
    <div class="container home-info">
      <div class="pure-g">
          <div class="pure-u-1-3">
            <div class="container">
              <h3>Easy</h3>
              <p class="icon"><i class="fa fa-child" aria-hidden="true"></i></p>
              <p>
                This project has been developed by Alberto Varela in order to learn and test the VueJS JavaScript Framework. I'll try
                to improve it little by little, but you can help also, it is Free Software.
              </p>
            </div>
          </div>
          <div class="pure-u-1-3">
            <div class="container">
              <h3>Real</h3>
              <p class="icon"><i class="fa fa-keyboard-o" aria-hidden="true"></i></p>
              <p>
                Do you want to improve this page or help me writting better code? If you have software development experience
                or if you are willing to make some translations, consider contributing to KillTypo.
              </p>
            </div>
          </div>
          <div class="pure-u-1-3">
            <div class="container">
              <h3>Amusing</h3>
              <p class="icon"><i class="fa fa-gamepad" aria-hidden="true"></i></p>
              <p>
                Copyright &copy; 2016 Alberto Varela. All rights reserved.
                <br><br>
                All code on this site is licensed under the GNU/GPL License unless otherwise stated.
              </p>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import LanguageMixin from '../mixins/LanguageMixin'

export default {
  name: 'home',
  mixins: [LanguageMixin]
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
  }
}

</style>
