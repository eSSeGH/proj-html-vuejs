<script>
import AppHeader1 from './components/AppHeader1.vue';
import AppHeader2 from './components/AppHeader2.vue';
import AppHero from './components/AppHero.vue';
import AppNetwork from './components/AppNetwork.vue';
import AppBusiness from './components/AppBusiness.vue';
import AppProcess from './components/AppProcess.vue';
import AppTeam from './components/AppTeam.vue';
import AppNews from './components/AppNews.vue';
import AppNewsLetter from './components/AppNewsLetter.vue';
import AppFooter from './components/AppFooter.vue';

import '@fontsource/poppins';

export default {
  components: {
    AppHeader1,
    AppHeader2,
    AppHero,
    AppNetwork,
    AppBusiness,
    AppProcess,
    AppTeam,
    AppNews,
    AppNewsLetter,
    AppFooter,
  },
  data() {
    return {

    }
  }
}
</script>

<template>
  <AppHeader1 />
  <AppHeader2 class="header2" />
  <AppHero class="hero" />
  <AppNetwork />
  <AppBusiness />
  <AppProcess />
  <AppTeam />
  <AppNews />
  <AppNewsLetter />
  <AppFooter />
</template>

<style lang="scss" scoped>
@use './style/general.scss' as *;

.header2 {
  position: sticky;
  top: 0;
  left: 0;
}

.hero {
  margin-top: -84px;
}
</style>
