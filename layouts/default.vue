<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">

body {
    background-color: #fff;
    color: #1A2738;
    font-family: 'firaGo'
}
p {
    margin-bottom: 0;
}
@media (min-width: 1200px) {
    .container {
        max-width: 1315px;
    }
}
.form-group {
    margin-bottom: 0;
}
button {
    &:focus {
        outline: none;
    }
}

.main-title {
    font-size: 28px;
    margin-bottom: 20px;
}
.text-holder {
    font-size: 16px;
}
.w100-p {
    width: 100%;
}
.mt-30 {
    margin-top: 30px;
}
.mt-20 {
    margin-top: 20px;
}

.button {
    background-color: #0045FF;
    border-radius: 6px;
    padding: 21px 35px;
    color: #fff;
    font-size: 14px;
    line-height: 1;
    border: none;
    font-weight: 500;
    transition: .3s;
    &--fluid {
        width: 100%;
    }
    &:hover {
        background-color: lighten(#0045FF,10);
    }
    @include respond(md) {
        padding: 14px;
      }
      &--gray {
          background-color: #DFE3E9;
          color: #1A2738;
      }
}

html.loading {
    overflow-y: scroll;
    body {
        overflow: hidden;
    }
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
}
h1,
h2,
h3,
h4,
h5,
h6 {
    margin-bottom: 0;
}

</style>
