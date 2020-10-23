<template>
  <div class="container" :class="$style.vehicle">
    <div v-show="loading" class="skeleton"></div>
    <img :src="createSrc(vehicle.image)" alt="" :class="$style.image" v-show="!loading" @load="showImage">
    <div :class="$style.block">
      <h2 :class="$style.title">{{ vehicle.name }}</h2>
      <div :class="$style.tabs">
        <nuxt-link :to="`/${vehicle.name}/specifications`" :class="$style.tab" :active-class="$style.active">
          Specifications
        </nuxt-link>
        <nuxt-link :to="`/${vehicle.name}/team`" :class="$style.tab" :active-class="$style.active">
          Team
        </nuxt-link>
        <nuxt-link :to="`/${vehicle.name}/terms`" :class="$style.tab" :active-class="$style.active">
          Rent terms
        </nuxt-link>
      </div>
      <nuxt-child :vehicle="vehicle"></nuxt-child>
      <div :class="$style['rent-wrap']">
        <div :class="$style.rent">
          <div :class="$style['rent-text']">Rent for <span :class="$style.pink">{{ vehicle.rent }} $/h</span></div>
          <button class="button">Rent now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable import/no-unresolved */
import { mapGetters } from 'vuex';

export default {
  middleware({ route, redirect }) {
    if (route.path === `/${route.params.id}/`) {
      return redirect(`/${route.params.id}/specifications/`);
    }
    return false;
  },
  async fetch({ store, redirect }) {
    return store.dispatch('vehicles/load').catch(() => redirect('/error'));
  },
  data: () => ({
    loading: true,
  }),
  computed: {
    ...mapGetters('vehicles', {
      vehicleProxy: 'one',
    }),
    id() {
      return this.$route.params.id;
    },
    vehicle() {
      return this.vehicleProxy(this.id);
    },
  },
  methods: {
    showImage() {
      this.loading = false;
    },
    createSrc(src) {
      if (typeof src === 'object') {
        const URL = window.URL || window.webkitURL;
        const imgURL = URL.createObjectURL(src);
        return imgURL;
      }
      return src;
    },
  },
};
</script>

<style lang="scss" module>

  .vehicle {
    background: #fff;
    margin: 44px auto;
    display: -ms-grid;
    display: grid;
    grid-template-columns: 700px 1fr;
    -ms-grid-columns: 700px 64px auto;
    grid-column-gap: 64px;

    @media screen and (max-width: 1400px){
      grid-template-columns: 50% 1fr;
       -ms-grid-columns: 50% 40px 1fr;
      grid-column-gap: 40px;
    }

    @media screen and (max-width: 1264px){
      grid-template-columns: 40% 1fr;
      grid-column-gap: 32px;
    }

    @media screen and (max-width: 900px){
      display: block;
      margin: 30px auto;
    }

    @media screen and (max-width: 680px){
      margin: 20px auto;
    }
  }

  .image {
    border-radius: 24px;
    max-width: 712px;
    max-height: 700px;
    width: 100%;
    height: auto;

    @media screen and (max-width: 900px){
      display: block;
      margin: 0 auto;
    }

  }

  .block {
    position: relative;
    -ms-grid-column: 3;

    @media screen and (max-width: 900px){
      padding-bottom: 110px;
    }
  }

  .title {
    font-weight: 500;
    font-size: 40px;
    line-height: 120%;
    color: #012345;

    @media screen and (max-width: 900px) {
      margin-top: 32px;
      font-size: 32px;
    }

    @media screen and (max-width: 680px){
      margin-top: 22px;
      font-size: 24px;
      line-height: 120%;
    }
  }

  .tabs {
    margin: 32px 0;
    display: flex;

    @media screen and (max-width: 900px){
      margin-top: 16px;
      margin-bottom: 20px;
    }
  }

  .tab {
    font-weight: 500;
    font-size: 16px;
    line-height: 14px;
    color: #677B8F;
    margin-right: 32px;
    text-decoration: none;
    user-select: none;

    @media screen and (max-width: 900px){
      margin-right: 20px;
    }

    &.active {
      color: #4959FF;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  .pink {
    color: #F84AB3;
    font-weight: 500;
  }

  .rent {
    margin-top: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px;
    background: #F3F4F7;
    border-radius: 16px;

    @media screen and (max-width: 900px){
      margin-top: 0px;
      padding: 12px 24px;
      position: fixed;
      bottom: 32px;
      left: 16px;
      right: 16px;
      z-index: 1;
    }

    &-wrap {
      @media screen and (max-width: 900px){
        position: fixed;
      }

      &:before {
        @media screen and (max-width: 900px){
          position: fixed;
          content: '';
          background: linear-gradient(180deg, rgba(252, 252, 252, 0) 0%, #FCFCFC 100%);
          height: 34px;
          width: 100%;
          bottom: 92px;
          left: 0;
          z-index: -1;
        }
      }

      &:after {
        @media screen and (max-width: 900px){
          position: fixed;
          content: '';
          background: #FCFCFC;
          height: 92px;
          width: 100%;
          bottom: 0;
          left: 0;
          z-index: -1;
        }
      }
    }

    &-text {
      font-weight: 500;
      font-size: 20px;
      line-height: 140%;
      color: #012345;

      @media screen and (max-width: 900px){
        font-size: 16px;
        line-height: 140%;
      }
    }
  }

  :global(.dark) {
    .vehicle {
      background: #012345;
    }

    .title {
      color: #fff;
    }

    .tab {
      color: #99A7B5;

      &.active {
        color: #4959FF;
      }
    }

    .rent {
      background: #011C37;

      &-text {
        color: #fff;
      }

      &-wrap:before {
        background: linear-gradient(180deg, rgba(1, 35, 69, 0) 0%, #012345 100%);
      }

      &-wrap:after {
        background: #012345;
      }
    }
  }

</style>
