<template>
  <div class="info-section-forecast bg-style-1">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="forecast-info">
            <div>
              <h1 class="main-title">ჩვენი პროგნოზი</h1>
              <div class="text-holder">
                <p>ჩვენ გთავაზობთ შესაძლებლობას, რომ მოითხოვოთ სესხი საქართველოში არსებული ბანკების იპოთეკური სესხის საპროცენტო განაკვეთების მიხედვით</p>
              </div>
            </div>

            <button type="button" class="button mt-20" v-if="!mobileVersion">შეავსე განაცხადი</button>
          </div>
        </div>
        <div class="col-md-7">
          <div class="forecast-banner">
            <img src="../assets/images/forecast.svg" alt />
          </div>
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
  }
};
</script>

<style lang="scss">
.forecast-banner {
  img {
    max-width: 100%;
    object-fit: contain;
  }
}
.info-section-forecast {
  padding-top: 40px;
  @include media-breakpoint-down(md) {
   padding-top: 30px;
  }
}
.forecast-info {
  padding-top: 60px;
  @include media-breakpoint-down(md) {
    display: flex;
    flex-direction: column-reverse;
    padding-top: 0;
  }
}
</style>