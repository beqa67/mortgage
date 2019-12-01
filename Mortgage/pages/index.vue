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

export default {
  middleware: "loadData",
  components: {
    Loader,
    Header,
    Footer,
    Banner,
    Chart,
    Forecast
  },
  computed: {
    loader() {
      return this.$store.getters.loader;
    },
    mobileVersion() {
      return this.$store.getters.mobileVersion;
    }
  },
  mounted() {
    this.hideLoader();
     if (process.client) {
      window.addEventListener("resize", this.handleResize);
    }
    this.handleResize();
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
        console.log(windowWidth)
      }
    }
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

<style>
body {
  font-family: "FiraGO";
  font-weight: 400;
}
</style>
