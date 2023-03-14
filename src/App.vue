<script>
import AppHeader1 from './components/AppHeader1.vue';
import AppHeader2 from './components/AppHeader2.vue';

export default {
  components: {
    AppHeader1,
    AppHeader2,
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
</template>

<style lang="scss" scoped>
@use './style/general.scss' as *;

.header2 {
  position: sticky;
  top: 0;
  left: 0;
}
</style>
