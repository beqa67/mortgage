<template>
  <div class="form-block" :class="{ 'form-block--mobile': mobileVersion }">
    <div class="form-block__mobile-close" v-if="mobileVersion">
      <h2 class="form-block__mobile-title">განცხადების შევსება</h2>
      <div class="form-block__mobile-close-icon" @click="hideMobileBankChoose">
        <img src="../assets/images/Close.svg" alt />
      </div>
    </div>
    <div class="form-block__header">
      <h2 class="form-block__title">აირჩიე სასურველი ბანკი</h2>
      <button type="button" class="form-block__sub-title" @click="showBanksChoose">კალკულატორი</button>
    </div>
    <div class="form-block__content form-block__content--bm-none">
      <div class="bank-choose">
        <div class="bank-choose__item" v-for="item in loadData.banks" :key="item.id">
          <input
            type="checkbox"
            :value="item.id"
            :id="item.id"
            class="bank-choose__input"
            v-model="checkedCategories"
            @change="changeBank"
          />
          <label for="item.id" class="bank-choose__label"></label>
          <div class="bank-choose__img-container">
            <img src="../assets/images/vtb.png" alt />
          </div>
          <div class="bank-choose__interests">
            <div class="d-flex flex-column align-items-center justify-content-center w100-p">
              <p class="currency-info-key">GEL</p>
              <p class="currency-info-val">{{ item[1] }}%</p>
            </div>
            <div class="d-flex flex-column align-items-center justify-content-center w100-p">
              <p class="currency-info-key">USD</p>
              <p class="currency-info-val">{{ item[2] }}%</p>
            </div>
            <div class="d-flex flex-column align-items-center justify-content-center w100-p">
              <p class="currency-info-key">EUR</p>
              <p class="currency-info-val">{{ item.percent_eur }}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="form-block__footer">
      <div class="text-center mt-30">
        <button type="button" class="button button--fluid" @click="showBanksChoose">შეავსე განაცხადი</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      checkedCategories: [1]
    };
  },
  computed: {
    ...mapGetters({
      loadData: 'loadData',
      choosenBanksId: 'choosenBanksId',
      mobileVersion: 'mobileVersion'
    })
   
  },
  created() {
    this.setCheckedCategories();
  },
  methods: {
    showBanksChoose() {
      if(this.mobileVersion){
        this.$store.dispatch("showMobileCalculator");
      } else {
        this.$store.dispatch("showCalculator");
      }
      
    },
    changeBank(e) {
      
      this.$store.commit("setChoosenBanksId", this.checkedCategories);
    },
    setCheckedCategories() {
      this.checkedCategories = JSON.parse(JSON.stringify(this.choosenBanksId));
      if(this.checkedCategories.length < 1 ){
        console.log(this.checkedCategories.length)
        this.checkedCategories = [1]
      }
    },
    hideMobileBankChoose() {
      this.$store.commit('showMobileBankChoose', false)
    }
  }
};
</script>

<style lang="scss">
.bank-choose {
  &__input {
    opacity: 0;
    position: absolute;
    width: calc(100% + 45px);
    height: 100%;
    z-index: 5;
    left: -45px;
    top: 0;
    cursor: pointer;
    &:checked + .bank-choose__label {
      background: url('../assets/images/check.svg')  #0045FF;
      background-repeat: no-repeat;
      background-position: center;
      border-color: #0045FF;
    }
  }
  &__label {
    position: absolute;
    left: -40px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    border: 2px solid #DFE3E9;
    border-radius: 5px;
    
  }
  &__item {
    display: flex;
    height: 40px;
    width: calc(100% - 40px);
    padding: 30px 0;
    border-bottom: 1px solid #F2F4F8;
    box-sizing: content-box;
    margin-left: 40px;
    position: relative;
    &:last-child {
      border-bottom: none;
    }
  }
  &__interests {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  &__img-container {
    width: 50%;
    img {
      height: 100%;
      object-fit: contain
    }
  }
}
</style>