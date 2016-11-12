<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="pure-g">
            <div class="pure-u-1-3">
              <div class="container">
                <h3>{{ $t("footer.about") }}</h3>
                <p v-html="$t('footer.abouttext')"></p>
              </div>
            </div>
            <div class="pure-u-1-3">
              <div class="container">
                <h3>{{ $t("footer.contribute") }}</h3>
                <p v-html="$t('footer.contributetext')"></p>
              </div>
            </div>
            <div class="pure-u-1-3">
              <div class="container">
                <h3>{{ $t("footer.contact") }}</h3>
                <p>
                  <a href="http://www.berriart.com">hello@killtypo.com</a>
                </p>
                <p class="copy">
                  Copyright &copy; 2016 Alberto Varela. All rights reserved.
                  <br><br>
                  All code on this site is licensed under the GNU/GPL License unless otherwise stated.
                </p>
              </div>
            </div>
        </div>
        <div class="pure-g">
            <div class="pure-u-1">
              <p class="miniclaim">Only free software was used and no kitties were harmed in the making of this website.</p>
            </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'my-footer'
}
</script>
