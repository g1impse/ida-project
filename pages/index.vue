<template>
  <div class="container" :class="$style['vehicles-container']">
    <div :class="$style.vehicles">
      <div :class="$style.top">
        <div :class="$style.filter">
          <div :class="$style['filter-text']">Rent</div>
          <div :class="$style['filter-select-wrap']">
            <select name="filter" id="filter" :class="$style['filter-select']" v-model="currentType">
              <option value="whatever">whatever</option>
              <option v-for="item in options" :key="item">{{ item }}</option>
            </select>
          </div>
        </div>
        <div :class="$style.add" @click="add">
          <span :class="$style['add-text']">Add new</span>
          <div :class="$style['add-btn']">
            <img src="~/assets/icons/plus.svg" alt="">
          </div>
        </div>
      </div>
      <div :class="$style.list">
        <nuxt-link
          v-for="(item, key) in filterVehicles" :key="key"
          :to="`/${item.name}/`"
          :class="$style.item"
        >
          <div :class="$style['item-left']">
            <div :class="$style['item-photo-wrap']">
              <div v-show="loading" class="skeleton"></div>
              <img :src="createSrc(item.preview)" alt="" :class="$style['item-photo']" v-show="!loading" @load="showImage">
            </div>
          </div>
          <div :class="$style['item-right']">
            <h4 :class="$style['item-title']">{{ item.name }}</h4>
            <p :class="$style['item-text']">{{ item.description }}</p>
            <p :class="$style['item-price']">{{ item.rent }} $/h</p>
          </div>
        </nuxt-link>
      </div>
    </div>
    <Sidebar :show="sidebarActive" @hide="hideSidebar"/>
  </div>
</template>

<script>
/* eslint-disable import/no-unresolved */
import { mapGetters } from 'vuex';
import Sidebar from '~/components/Sidebar.vue';

export default {
  async fetch({ store, redirect }) {
    return store.dispatch('vehicles/load').catch(() => redirect('/error'));
  },
  components: {
    Sidebar,
  },
  data: () => ({
    loading: true,
    currentType: 'whatever',
    sidebarActive: false,
  }),
  computed: {
    ...mapGetters('vehicles', {
      vehicles: 'all',
      options: 'types',
    }),
    filterVehicles() {
      return this.currentType === 'whatever' ? this.vehicles : this.vehicles.filter((item) => item.type === this.currentType);
    },
  },
  methods: {
    showImage() {
      this.loading = false;
    },
    add() {
      this.sidebarActive = true;
    },
    hideSidebar() {
      this.sidebarActive = false;
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

  .vehicles {
    margin: 44px 0;
    background: #F3F4F7;
    border-radius: 48px;
    padding: 56px 64px;

    @media screen and (max-width: 1264px){
      padding: 40px;
    }

    @media screen and (max-width: 1024px){
      margin: 32px 0;
      padding: 32px;
      border-radius: 32px;
    }

    @media screen and (max-width: 680px){
      padding: 24px 16px;
      border-radius: 24px;
      margin: 22px 0;
    }

    &-container {
      @media screen and (max-width: 680px){
        padding-left: 0;
        padding-right: 0;
      }
    }
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .filter {
    display: flex;

    &-text {
      font-weight: 500;
      font-size: 40px;
      line-height: 120%;
      margin-right: 7px;
      user-select: none;

      @media screen and (max-width: 1024px){
        font-size: 32px;
      }

      @media screen and (max-width: 680px){
        font-size: 24px;
        line-height: 120%;
        margin-right: 6px;
      }
    }

    &-select {
      background: transparent;
      outline: none;
      border: none;
      color: #4959FF;
      font-weight: 500;
      font-size: 40px;
      line-height: 120%;
      -webkit-appearance: none;
      -moz-appearance: none;
      -o-appearance: none;
      appearance: none;
      user-select: none;

      @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
        -webkit-appearance: auto;
        -moz-appearance: auto;
        -o-appearance: auto;
        appearance: auto;
      }

      @media screen and (max-width: 1024px){
        font-size: 32px;
      }

      @media screen and (max-width: 680px){
        font-size: 24px;
        line-height: 120%;
      }

      &-wrap {
        position: relative;

        &::after {
          position: absolute;
          content: url(../assets/icons/arrow.svg);
          right: -25px;
          top: 12px;

          @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
            display: none;
          }

          @media screen and (max-width: 1024px){
            top: 7px;
          }

          @media screen and (max-width: 680px){
            transform: scale(0.8);
            right: -20px;
            top: 2px;
          }
        }
      }
    }
  }

  .add {
    display: flex;
    align-items: center;

    &-text {
      font-weight: 500;
      font-size: 20px;
      line-height: 140%;
      color: #4959FF;
      margin-right: 20px;
      user-select: none;

      @media screen and (max-width: 680px){
        font-size: 16px;
        line-height: 136%;
        margin-right: 12px;
        transform: translateY(1px);
      }
    }

    &-btn {
      cursor: pointer;
      background: #4959FF;
      border-radius: 16px;
      width: 48px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.2s;
      user-select: none;

      &:hover {
        background: #7682FF;
      }

      @media screen and (max-width: 680px){
        width: 32px;
        height: 32px;
        border-radius: 8px;
      }

      img {
        @media screen and (max-width: 680px){
          max-width: 12px;
        }
      }
    }
  }

  .list {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;

    @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    @media screen and (max-width: 1264px){
      grid-gap: 22px;
    }

    @media screen and (max-width: 1024px){
      grid-template-columns: 1fr 1fr;
      grid-gap: 16px;
      margin-top: 24px;
    }

    @media screen and (max-width: 680px){
      grid-template-columns: 1fr;
      grid-gap: 12px;
    }
  }

  .item {
    cursor: pointer;
    background: #FCFCFC;
    border-radius: 32px;
    padding: 25px 32px;
    display: flex;
    transition: all 0.2s;
    text-decoration: none;
    user-select: none;

    @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
      max-width: 323px;
      margin-bottom: 20px;
    }

    @media screen and (max-width: 1024px){
      padding: 20px;
      border-radius: 24px;
    }

    &:hover {
      background: #fff;
      box-shadow: 0px 0px 2px 2px rgba(73, 89, 255, 0.7);
    }

    &-left {
      margin-right: 24px;

      @media screen and (max-width: 1024px){
        margin-right: 20px;
      }
    }

    &-photo {
      max-width: 88px;

      &-wrap {
        width: 88px;
        height: 88px;
        border-radius: 24px;
        overflow: hidden;

        @media screen and (max-width: 1024px){
          border-radius: 16px;
        }
      }
    }

    &-title {
      font-weight: 500;
      font-size: 16px;
      line-height: 14px;
      color: #012345;
      margin-top: 14px;
    }

    &-text {
      font-weight: 300;
      font-size: 12px;
      line-height: 148%;
      color: #677B8F;
      margin-top: 12px;
      margin-bottom: 16px;
    }

    &-price {
      font-weight: 500;
      font-size: 14px;
      line-height: 148%;
      color: #F84AB3;
    }
  }

  :global(.dark) {
    .filter-text {
      color: #fff;
    }

    .item {
      background: #012345;

      &-title {
        color: #fff;
      }
    }

    .vehicles {
      background: #011C37;
    }
  }

</style>
