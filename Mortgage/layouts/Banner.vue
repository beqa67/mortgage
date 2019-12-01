<template>
  <div class="bg-style-1 banner">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <Banks-slider />
        </div>
        <div class="col-lg-6">
          <Calculator v-if="(showCalculator && !mobileVersion) || ( showMobileCalculator && mobileVersion )" />
          <Choose-bank v-if="(showBankChoose && !mobileVersion) || (showMobileBankChoose && mobileVersion)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BanksSlider from "~/components/BanksSlider.vue";
import Calculator from "~/components/Calculator.vue";
import ChooseBank from "~/components/ChooseBank.vue";

export default {
  data() {
    return {
     
    };
  },
  computed: {
     mobileVersion() {
      return this.$store.getters.mobileVersion;
    },
    showCalculator() {
      return this.$store.state.showCalculator;
    },
    showBankChoose() {
      return this.$store.state.showBankChoose;
    },
     showMobileCalculator() {
      return this.$store.state.showMobileCalculator;
    },
    showMobileBankChoose() {
      return this.$store.state.showMobileBankChoose;
    },
    showInfoForm() {
      return this.$store.state.showInfoForm;
    },
    loadData() {
      return this.$store.getters.loadData;
    },
    choosenBanksId() {
      return this.$store.getters.choosenBanksId;
    },
    loadCurrency() {
      return this.$store.getters.loadCurrency;
    }
  },
  created() {
    this.setInterestRate();
  },
  methods: {
  
    setInterestRate() {
     
      
      // let choosenBanksInterestRates = [];
     
    }
  },
  components: {
    BanksSlider,
    Calculator,
    ChooseBank
  }
};
</script>


<style lang="scss">
.banner {
  padding-top: 100px;
  @include media-breakpoint-down(md) {
    padding-top: 0;
  }
}

</style>