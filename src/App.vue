<script>
import AppHeader1 from './components/AppHeader1.vue';
import AppHeader2 from './components/AppHeader2.vue';
import AppHero from './components/AppHero.vue';
import AppNetwork from './components/AppNetwork.vue';
import AppBusiness from './components/AppBusiness.vue';

import '@fontsource/poppins';

export default {
  components: {
    AppHeader1,
    AppHeader2,
    AppHero,
    AppNetwork,
    AppBusiness,
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
