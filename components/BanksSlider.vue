<template>
  <div class="d-flex flex-column-reverse d-lg-block">
    <div class="banks-slider-outter-container d-flex flex-column-reverse d-lg-block">
      <div class="d-flex justify-content-between" v-if="mobileVersion">
          <button type="button" class="button button--gray" @click="showMobileCalculator">კალკულატორი</button>
          <button type="button" class="button">განაცხადის შევსება</button>
      </div>
      <h1 class="main-title">მოითხოვე იპოთეკური სესხი საუკეთესო პროცენტში!</h1>
      <div class="text-holder" v-if="!mobileVersion">
        <p>ჩვენ გთავაზობთ შესაძლებლობას, რომ მოითხოვოთ სესხი საქართველოში არსებული ბანკების იპოთეკური სესხის საპროცენტო განაკვეთების მიხედვით</p>
      </div>
      <div class="banks-carousel-wrapper">
        <div v-swiper:mySwiper="swiperOption" class="banks-carousel">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="bank in loadData.banks" :key="bank.id">
              <div class="banks-carousel__item">
                <div class="d-flex justify-content-between align-items-center w100-p">
                  <img src="../assets/images/vtb.png" class="banks-carousel__img" />
                  <div class="d-flex flex-column flex-lg-row w100-p">
                    <div
                      class="d-flex flex-column align-items-center justify-content-center w100-p"
                    >
                      <p class="currency-info-key" v-if="!mobileVersion">GEL</p>
                      <p class="currency-info-val"><span v-if="mobileVersion">₾ - </span> {{ bank[1] }}%</p>
                    </div>
                    <div
                      class="d-flex flex-column align-items-center justify-content-center w100-p"
                    >
                      <p class="currency-info-key" v-if="!mobileVersion">USD</p>
                      <p class="currency-info-val"><span v-if="mobileVersion">$ - </span> {{ bank[2] }}%</p>
                    </div>
                    <div
                      class="d-flex flex-column align-items-center justify-content-center w100-p"
                    >
                      <p class="currency-info-key" v-if="!mobileVersion">EUR</p>
                      <p class="currency-info-val"><span v-if="mobileVersion">€ - </span> {{ bank.percent_eur }}%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="banks-carousel__btn banks-carousel__btn--prev"></div>
        <div class="banks-carousel__btn banks-carousel__btn--next"></div>
      </div>
    </div>
    <div class="banner-img-contaiener">
      <img src="../assets/images/banner.svg" alt />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        navigation: {
          nextEl: ".banks-carousel__btn--prev",
          prevEl: ".banks-carousel__btn--next"
        }
        // some swiper options...
      }
    };
    
  },
  computed: {
     ...mapGetters({
        loadData: 'loadData',
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
.banner-img-contaiener {
  img {
    height: 350px;
    object-fit: contain;
    @include respond(md) {
      width: 100%;
      height: 200px;
    }
  }
}
.banks-slider-outter-container {
  max-width: 450px;
}
.banks-carousel-wrapper {
  padding: 0 60px !important;
  position: relative;
  height: 40px;
  margin-top: 40px;
  margin-bottom: 60px;
  @include respond(md) {
    height: 100px;
    margin-top: 0;
    padding: 15px 0 !important;
    background-color: #fff;
    width: calc(100% + 30px);
    margin-left: -15px;
    margin-right: -15px;
  }
}
.banks-carousel {
  width: 100%;
  height: 100%;
  &__img {
    max-height: 30px;
    object-fit: contain;
    @include respond(md) {
      margin-left: 20%;
    }
  }
  &__item {
    height: 40px;
  }
  &__btn {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 2px solid #f2f4f8;
    position: absolute;
    z-index: 5;
    top: 50%;
    transform: translateY(-50%);
    background: url("../assets/images/left-arrow.svg") #fff no-repeat;
    background-size: 16px;
    background-position: center;
    cursor: pointer;
    &--prev {
      left: 0;
    }
    &--next {
      right: 0;
      transform: translateY(-50%) rotate(180deg);
    }
    &:focus {
      outline: none;
    }
    &:hover {
      background-color: #0045ff;
      background-image: url("../assets/images/left-arrow--w.svg");
    }
  }
}
.currency-info {
  &-key {
    font-size: 14px;
    font-weight: 700;
  }
  &-val {
    font-size: 16px;
  }
}
</style>