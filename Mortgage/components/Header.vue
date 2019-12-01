<template>
  <div>
    <img v-if="!mobileVersion" src="../assets/images/Header.png" alt class="header" />
    <div v-if="mobileVersion" class="container">
      <div  class="header header--mobile">
        <img src="../assets/images/logo.svg" alt class="logo" />
        <div class="bars" @click="showMobileCalculator">
          <img src="../assets/images/bars.svg" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
   ...mapGetters({
      mobileVersion: 'mobileVersion'
    })
  },
  methods: {
      showMobileCalculator() {
          this.$store.dispatch("showMobileCalculator");
      }
  }
};
</script>

<style lang="scss">
.header {
  width: 100%;
}
.header--mobile {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  .logo {
    width: 80px;
  }
  .bars {
    width: 22px;
    height: 18px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>