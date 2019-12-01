<template>
  <div>
    <loader v-if="loader" />
    <Header />
    <Banner />
    <Chart />
    <Forecast />
    <Footer />
  </div>
</template>

<script>
import Loader from "~/components/Loader.vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Banner from "~/layouts/Banner.vue";
import Chart from "~/components/Chart.vue";
import Forecast from "~/components/Forecast.vue";
import storeBanksArray from '../plugins/mixins/storeBanksArray.js'
import { mapGetters } from "vuex";
export default {
  middleware: "loadData",
  mixins: [storeBanksArray],
  data() {
    return {
      loadBanks: [],
    };
  },
  computed: {
    ...mapGetters({
      loader: "loader",
      loadData: "loadData",
      mobileVersion: "mobileVersion",
      banks: "banks",
      choosenBanksId: "choosenBanksId"
    })
  },
  mounted() {
    this.hideLoader();
    if (process.client) {
      window.addEventListener("resize", this.handleResize);
    }
    this.handleResize();
    this.storeBanksArray();
  },
  methods: {
    hideLoader() {
      this.$store.commit("loader", false);
    },
    handleResize() {
      if (process.client) {
        let windowWidth = window.innerWidth;
        if (windowWidth < 991) {
          this.$store.commit("mobileVersion", true);
        } else {
          this.$store.commit("mobileVersion", false);
        }
      }
    }
  },
  components: {
    Loader,
    Header,
    Footer,
    Banner,
    Chart,
    Forecast
  },
  head() {
    return {
      htmlAttrs: {
        class: this.loader == true ? "loading" : ""
      }
    };
  }
};
</script>

<style scoped>
body {
  font-family: "FiraGO";
  font-weight: 400;
}
.bg-style-1 {
    background-color: #F7FAFF;
}
</style>
