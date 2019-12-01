<template>
    <div class="loader">
        <img src="../assets/images/loader.svg" alt="">
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .loader {
        position: fixed;
        z-index: 9999;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        display: block;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center
    }
</style>