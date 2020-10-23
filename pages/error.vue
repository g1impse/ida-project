<template>
  <div class="container" :class="$style['error-container']">
    <div :class="$style.error">
      <div>
        <h1 :class="$style.title">An error has occurred</h1>
        <p :class="$style.text">Please refresh the page</p>
        <button class="button" @click="reload">Reload page</button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable import/no-unresolved */

export default {
  methods: {
    reload() {
      window.location.href = '/';
    },
  },
};
</script>

<style lang="scss" module>

  .error {
    margin: 44px 0;
    background: #F3F4F7;
    border-radius: 48px;
    padding: 56px 64px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 200px);

    @media screen and (max-width: 1264px){
      padding: 40px;
    }

    @media screen and (max-width: 1024px){
      padding: 32px;
      margin: 32px 0;
      border-radius: 32px;
      height: calc(100vh - 155px);
    }

    @media screen and (max-width: 680px){
      padding: 24px 16px;
      border-radius: 24px;
      margin: 22px 0;
      height: calc(100vh - 100px);
    }

    &-container {

      @media screen and (max-width: 680px){
        padding-left: 0;
        padding-right: 0;
      }
    }
  }

  .title {
    font-weight: 500;
    font-size: 40px;
    line-height: 120%;
    color: #012345;
    margin-bottom: 24px;

    @media screen and (max-width: 900px){
      font-size: 24px;
      line-height: 120%;
      margin-bottom: 16px;
    }
  }

  .text {
    font-weight: 300;
    font-size: 14px;
    line-height: 146%;
    color: #677B8F;
    margin-bottom: 40px;

    @media screen and (max-width: 900px){
      margin-bottom: 32px;
    }
  }

  :global(.dark) {
    .error {
      background: #011C37;
    }

    .title {
      color: #fff;
    }

    .text {
      color: #99A7B5;
    }
  }

</style>
