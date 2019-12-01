<template>
  <div class="info-section-chart">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <h1 class="main-title">პროცენტის დინამიკა</h1>
          <div class="text-holder">
            <p>გადახედე ან შეადარე თუ როგორ იცვლებოდა იპოთეკური სესხის პროცენტი თვიდან თვემდე.</p>
          </div>
          <button type="button" class="button mt-20" v-if="!mobileVersion">შეავსე განაცხადი</button>
        </div>
        <div class="col-md-7 " :class="{ 'mt-20': mobileVersion }">
          <Statistics :chart-data="datacollection" />
          <button type="button" class="button button--fluid mt-20" v-if="mobileVersion">მოითხოვე სესხი</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Statistics from "../Statistics";
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      datacollection: null,
      PercentDynamics: []
    };
  },
  computed: {
    ...mapGetters({
      loadData: 'loadData',
      mobileVersion: 'mobileVersion'
    })
  },
  mounted() {
    this.fillData();
    this.loadPercentDynamics();
  },
  methods: {
    loadPercentDynamics() {
      for (let item in this.loadData.percent_dynamics) {
        this.PercentDynamics.push(
          this.loadData.percent_dynamics[item].percent_gel
        );
      }
    },
    fillData() {
      this.datacollection = {
        labels: ["აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი"],
        datasets: [
          {
            backgroundColor: "rgba(0, 69, 255, .2)",
            data: this.PercentDynamics
          }
        ]
      };
    }
  },
  components: {
    Statistics
  }
};
</script>

<style lang="scss">
.info-section-chart {
  padding: 120px 0;
  @include media-breakpoint-down(md) {
    padding: 50px 0
  }
}
</style>