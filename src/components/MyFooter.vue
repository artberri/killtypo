<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="pure-g">
            <div class="pure-u-1-3">
              <div class="container">
                <h3 v-t="{path: 'footer.about', locale: $route.meta.lang}"></h3>
                <p v-html="$t('footer.abouttext', $route.meta.lang)"></p>
              </div>
            </div>
            <div class="pure-u-1-3">
              <div class="container">
                <h3 v-t="{path: 'footer.contribute', locale: $route.meta.lang}"></h3>
                <p v-html="$t('footer.contributetext', $route.meta.lang)"></p>
              </div>
            </div>
            <div class="pure-u-1-3">
              <div class="container">
                <h3 v-t="{path: 'footer.contact', locale: $route.meta.lang}"></h3>
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
