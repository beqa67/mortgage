<template>
  <div class="form-block" :class="{ 'form-block--mobile': mobileVersion }">
    <div class="form-block__mobile-close" v-if="mobileVersion">
      <h2 class="form-block__mobile-title">კალკულატორი</h2>
      <div class="form-block__mobile-close-icon" @click="hideMobileCalculator">
        <img src="../assets/images/Close.svg" alt />
      </div>
    </div>
    <div class="form-block__header">
      <h2 class="form-block__title">სესხის კალკულატორი</h2>
      <button class="form-block__sub-title" @click="showBanksChoose">
        აირჩიე ბანკი
        <img src="../assets/images/Arrow-Down.svg" alt />
      </button>
    </div>
    <div class="form-block__content">
      <div class="d-flex">
        <div class="form-group form-group--loan-amount">
          <label class="form-group__label">საჭირო თანხა</label>
          <input
            type="number"
            class="form-group__input"
            :value="loanAmount"
            @input="changeloanAmount"
          />
        </div>
        <div class="form-group form-group--loan-currency">
          <label class="form-group__label">ვალუტა</label>
          <select
            class="form-group__select"
            @change="changeChoosenCurrencyId"
            :value="choosenCurrencyId"
          >
            <option
              :value="item.interest"
              v-for="item in loadCurrency"
              :key="item.id"
            >{{item.name}} {{item.symbol}}</option>
          </select>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div class="form-group__label">აირჩიე თვე</div>
        <div class="rangeslider__sub-title">{{loanPeriod}} თვე</div>
      </div>
      <div class="rangeslider-outter">
        <range-slider
          class="form-rangeslider"
          min="1"
          max="144"
          step="1"
          :value="loanPeriod"
          @input="changeLoanPeriod"
        ></range-slider>
        <div class="rangeslider-outter__line-cont">
          <span class="rangeslider-outter__line"></span>
          <span class="rangeslider-outter__line"></span>
          <span class="rangeslider-outter__line"></span>
          <span class="rangeslider-outter__line"></span>
        </div>
      </div>
    </div>
    <div class="form-block__footer">
      <div class="form-block__footer-info-item d-flex justify-content-between">
        <div class="form-block__footer-key">საპროცენტო გაანკვეთი</div>
        <div
          class="form-block__footer-val"
        >{{interestRate}}% {{ choosenBanksId.length > 1 ? 'დან' : 'წლიური'}}</div>
      </div>

      <div class="form-block__footer-info-item d-flex justify-content-between">
        <div class="form-block__footer-key">ყოველთვიური გადასახადი</div>
        <div
          class="form-block__footer-val form-block__footer-val--green"
        >{{choosenCurrencySymbol}} {{montlyPayment}}</div>
      </div>
      <div class="text-center mt-30">
        <button type="button" class="button button--fluid">შეავსე განაცხადი</button>
      </div>
    </div>
  </div>
</template>

<script>
import RangeSlider from "vue-range-slider";
import "vue-range-slider/dist/vue-range-slider.css";
import storeBanksArray from '../plugins/mixins/storeBanksArray.js';
import { mapGetters } from 'vuex';

export default {
   mixins: [storeBanksArray],
  data() {
    return {
      montlyPaymentValue: 0,
      choosenCurrencySymbol: '',
      loadBanks: [],
    };
  },
  computed: {
    ...mapGetters({
        banks: 'banks',
        loadData: "loadData",
        interestRate: 'interestRate',
        montlyPayment: 'montlyPayment',
        loanAmount: 'loanAmount',
        loanPeriod: 'loanPeriod',
        loadCurrency: 'loadCurrency',
        mobileVersion: 'mobileVersion',
        choosenCurrencyId: 'choosenCurrencyId',
        choosenBanksId: 'choosenBanksId',
    }),
   
  },
  components: {
    RangeSlider
  },
  created() {
       this.checkBanksChoose()
    this.storeBanksArray();
    //  this.storeBanksArray(this.choosenCurrencyId);
    // if(this.choosenCurrencyId != undefined) {
      this.setInterestRate();
        this.calculateMontlyPayment();
        this.changeCurrencySymbol();
     
    // }
 
  },
  methods: {
    checkBanksChoose() {
      console.log('agaraa monishnuli')
      if(!this.choosenBanksId.length > 0 ) {
        this.$store.commit("setChoosenBanksId", [1]);
      }
    },
    changeCurrencySymbol() {
      for (let item of this.loadCurrency) {
          if(item.interest == this.choosenCurrencyId) {
            this.choosenCurrencySymbol = item.symbol 
          }
      }
    },
    changeLoanPeriod(e) {
      this.$store.commit("changeLoanPeriod", e);
      this.calculateMontlyPayment();
    },
    changeloanAmount(e) {
      this.$store.commit("changeloanAmount", e.target.value);
      this.calculateMontlyPayment();
    },
    calculateMontlyPayment() {
      const dataForCalculation = {
        amount: this.loanAmount,
        interestRate: this.interestRate,
        months: this.loanPeriod,
      }
      this.$store.dispatch("calculateLoan", dataForCalculation);
    },
    showBanksChoose() {
      if (this.mobileVersion) {
        this.$store.dispatch("showMobileBankChoose");
      } else {
        this.$store.dispatch("showBankChoose");
      }
    },
    changeChoosenCurrencyId(e) {
      let choosenCurrencyOptionValue =
        e.target.options[e.target.options.selectedIndex].value;

      this.$store.dispatch("setInterestRate", choosenCurrencyOptionValue);
      this.$store.commit("setChoosenCurrencyId", choosenCurrencyOptionValue);
      this.calculateMontlyPayment();
      this.changeCurrencySymbol()
    },
    setInterestRate() {
      this.$store.dispatch("setInterestRate", this.choosenCurrencyId);
      this.calculateMontlyPayment();
    },
    hideMobileCalculator() {
      this.$store.commit('showMobileCalculator', false)
    }
  }
};
</script>

<style lang="scss" >
.form-block {
  background-color: #fff;
  padding: 32px 40px;
  box-shadow: 0 3px 26px rgba(#4a6693, 0.16);
  border-radius: 10px;
  min-height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @include respond(md) {
    padding: 32px 20px;
  }
  &--mobile {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  &__header {
    display: flex;
    justify-content: space-between;
  }
  &__title {
    font-size: 18px;
    color: #1a2738;
    @include respond(md) {
      font-size: 16px;
    }
  }
  &__sub-title {
    font-size: 14px;
    line-break: 1;
    font-weight: 400;
    margin: 0;
    padding: 0;
    color: #0045ff;
    border: none;
    background: none;
  }
  &__content {
    border-top: 1px solid #f2f4f8;
    border-bottom: 1px solid #f2f4f8;
    padding: 28px 0;
    margin: 28px 0;
    &--bm-none {
      border-bottom: none;
    }
  }
  &__footer-info-item {
    margin-bottom: 30px;
    &:first-child {
      margin-bottom: 20px;
    }
  }
  &__footer-key {
    font-size: 16px;
  }
  &__footer-val {
    font-weight: 500;
    color: #5a6679;
    &--green {
      color: #86e029;
    }
  }
  &__mobile-close {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px 0;
    border-bottom: 1px solid #f2f4f8;
  }
  &__mobile-close-icon {
    width: 12px;
    height: 12px;
    margin-left: auto;
    display: flex;
    img {
      width: 100%;
    }
  }
  &__mobile-title {
    font-size: 14px;
    text-align: center;
    margin-left: auto;
  }
}
.form-group {
  &--loan-amount {
    width: 75%;
    margin-right: 10px;
    margin-bottom: 27px !important;
  }
  &--loan-currency {
    width: 25%;
  }
  &__label {
    font-size: 14px;
    font-weight: 500;
    color: #5a6679;
    display: block;
    margin-bottom: 15px;
  }
  &__input,
  &__select {
    width: 100%;
    border: 1px solid #dfe3e9;
    border-radius: 4px;
    height: 40px;
    color: #5a6679;
    font-size: 14px;
    font-weight: 400;
    &:focus {
      outline: none;
    }
  }
  &__input {
    padding: 0 20px;
  }
  &__select {
    padding: 0 15px;
    background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='5.247' viewBox='0 0 9 5.247'%3E%3Cpath id='Arrow-Down' d='M1.811,4.5,5.006,1.3A.775.775,0,0,0,5.223.972a.546.546,0,0,0,0-.321A.775.775,0,0,0,5.006.32L4.927.242A.775.775,0,0,0,4.6.024a.545.545,0,0,0-.321,0,.775.775,0,0,0-.331.218L.22,3.969a.751.751,0,0,0,0,1.061L3.945,8.758a.775.775,0,0,0,.331.218.545.545,0,0,0,.321,0,.775.775,0,0,0,.331-.218l.078-.078a.775.775,0,0,0,.218-.331.546.546,0,0,0,0-.321A.775.775,0,0,0,5.006,7.7Z' transform='translate(0 5.247) rotate(-90)' fill='%23C0C7D2' fill-rule='evenodd'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-size: 12px;
    background-position: right 15px center;
    -webkit-appearance: none;
  }
}
.range-slider {
  padding: 0;
}
.form-rangeslider {
  width: 100%;
}
.range-slider-fill {
  background-color: #0045ff;
}
.range-slider-rail,
.range-slider-fill {
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  height: 3px;
  border-radius: 2px;
  border-top: 5px solid #fff;
  border-bottom: 5px solid #fff;
  box-sizing: content-box;
  z-index: 5;
}
.range-slider-knob {
  z-index: 6;
}
.range-slider-rail {
  background-color: #e2e7ee;
}
.rangeslider-outter {
  position: relative;
  &__line-cont {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -5px;
  }
  &__line {
    position: absolute;
    height: 30px;
    width: 1px;
    background-color: #e2e7ee;
    &:nth-child(1) {
      left: 0;
    }
    &:nth-child(2) {
      left: 33%;
    }
    &:nth-child(3) {
      right: 33%;
    }
    &:nth-child(4) {
      right: 0;
    }
  }
}
</style>