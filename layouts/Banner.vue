<template>
  <div class="bg-style-1 banner">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <Banks-slider />
        </div>
        <div class="col-lg-6">
          <Calculator
            v-if="(showCalculator && !mobileVersion) || ( showMobileCalculator && mobileVersion )"
          />
          <Choose-bank
            v-if="(showBankChoose && !mobileVersion) || (showMobileBankChoose && mobileVersion)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BanksSlider from "~/components/BanksSlider.vue";
import Calculator from "~/components/Calculator.vue";
import ChooseBank from "~/components/ChooseBank.vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState( {
      mobileVersion: state => state.layouts.mobileVersion,
      showCalculator: state => state.layouts.showCalculator,
      showBankChoose: state => state.layouts.showBankChoose,
      showMobileCalculator: state => state.layouts.showMobileCalculator,
      showMobileBankChoose: state => state.layouts.showMobileBankChoose,
      showInfoForm: state => state.layouts.showInfoForm,
    })
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
  @include respond(md) {
    padding-top: 0;
  }
}
</style>