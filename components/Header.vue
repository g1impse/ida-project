<template>
  <div class="container" :class="$style.header">
    <div :class="$style['header-left']">
      <nuxt-link to="/">
        <img src="~/assets/icons/logo.svg" alt="" :class="$style.logo" v-if="!activeDark">
        <img src="~/assets/icons/logo-dark.svg" alt="" :class="$style.logo" v-else>
      </nuxt-link>
      <p :class="$style.text">World's first affordable airsharing</p>
    </div>
    <div :class="$style['header-right']">
      <div :class="$style.buttons">
        <div :class="$style.switchers">
          <div :class="$style.switcher" @click="change" v-if="!activeDark">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :class="$style['switcher-icon']">
              <path d="M10 7C9.9998 8.39064 10.4138 9.74983 11.1892 10.9042C11.9646 12.0586 13.0663 12.9559 14.3538 13.4816C15.6412 14.0073 17.0561 14.1376 18.4179 13.8559C19.7797 13.5742 21.0268 12.8933 22 11.9V12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2H12.1C11.434 2.65113 10.9051 3.42896 10.5445 4.28768C10.1838 5.1464 9.99869 6.06862 10 7ZM4 12C3.99927 13.785 4.59553 15.5189 5.69389 16.926C6.79226 18.333 8.32963 19.3323 10.0614 19.7648C11.7932 20.1974 13.6199 20.0383 15.2508 19.313C16.8818 18.5876 18.2233 17.3377 19.062 15.762C17.5694 16.1136 16.0118 16.0781 14.5368 15.6587C13.0619 15.2394 11.7185 14.4501 10.6342 13.3658C9.54992 12.2815 8.76065 10.9381 8.34128 9.46318C7.92192 7.98821 7.88636 6.43056 8.238 4.938C6.95758 5.62014 5.88678 6.63766 5.14026 7.88164C4.39373 9.12562 3.99958 10.5492 4 12Z" fill="#99A7B5"/>
            </svg>
            <span :class="$style['switcher-text']">Night mod</span>
          </div>
          <div :class="$style.switcher" @click="change" v-else>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" :class="$style['switcher-icon']">
              <path d="M11 17C9.4087 17 7.88258 16.3679 6.75736 15.2426C5.63214 14.1174 5 12.5913 5 11C5 9.4087 5.63214 7.88258 6.75736 6.75736C7.88258 5.63214 9.4087 5 11 5C12.5913 5 14.1174 5.63214 15.2426 6.75736C16.3679 7.88258 17 9.4087 17 11C17 12.5913 16.3679 14.1174 15.2426 15.2426C14.1174 16.3679 12.5913 17 11 17ZM11 15C12.0609 15 13.0783 14.5786 13.8284 13.8284C14.5786 13.0783 15 12.0609 15 11C15 9.93913 14.5786 8.92172 13.8284 8.17157C13.0783 7.42143 12.0609 7 11 7C9.93913 7 8.92172 7.42143 8.17157 8.17157C7.42143 8.92172 7 9.93913 7 11C7 12.0609 7.42143 13.0783 8.17157 13.8284C8.92172 14.5786 9.93913 15 11 15ZM10 0H12V3H10V0ZM10 19H12V22H10V19ZM2.515 3.929L3.929 2.515L6.05 4.636L4.636 6.05L2.515 3.93V3.929ZM15.95 17.364L17.364 15.95L19.485 18.071L18.071 19.485L15.95 17.364ZM18.071 2.514L19.485 3.929L17.364 6.05L15.95 4.636L18.071 2.515V2.514ZM4.636 15.95L6.05 17.364L3.929 19.485L2.515 18.071L4.636 15.95ZM22 10V12H19V10H22ZM3 10V12H0V10H3Z" fill="#99A7B5"/>
            </svg>
            <span :class="$style['switcher-text']">Day mod</span>
          </div>
        </div>
        <div :class="$style.messages">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :class="$style.icon">
            <path d="M2 8.99401C1.99947 8.20621 2.15435 7.42605 2.45577 6.69819C2.75718 5.97034 3.19921 5.30909 3.75655 4.75231C4.31388 4.19553 4.97558 3.75416 5.70373 3.45348C6.43189 3.15279 7.21221 2.99869 8 3.00001H16C19.313 3.00001 22 5.69501 22 8.99401V21H8C4.687 21 2 18.305 2 15.006V8.99401ZM20 19V8.99401C19.9974 7.93451 19.5749 6.91925 18.8251 6.17063C18.0754 5.42201 17.0595 5.00106 16 5.00001H8C7.47485 4.99869 6.9546 5.10106 6.4691 5.30123C5.98359 5.50141 5.54238 5.79546 5.17076 6.16652C4.79914 6.53758 4.50443 6.97835 4.30353 7.46356C4.10262 7.94876 3.99947 8.46886 4 8.99401V15.006C4.00265 16.0655 4.42511 17.0808 5.17486 17.8294C5.9246 18.578 6.9405 18.999 8 19H20ZM14 11H16V13H14V11ZM8 11H10V13H8V11Z" fill="#99A7B5"/>
          </svg>
        </div>
        <div :class="$style.notifications">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :class="$style.icon">
            <circle cx="20" cy="4" r="3" fill="#F84AB3"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9994 10.9292C20.9998 10.9631 21 10.997 21 11.031V20H3V11.031C3 6.043 7.03 2 12 2C12.4291 2 12.8511 2.03013 13.2642 2.08841C13.0921 2.69603 13 3.33726 13 4C13 4.02378 13.0001 4.04753 13.0004 4.07126C12.6736 4.0243 12.3396 4 12 4C8.134 4 5 7.148 5 11.031V18H19V11.031C19 10.9969 18.9998 10.9629 18.9993 10.929C19.3261 10.9758 19.6602 11 20 11C20.3393 11 20.673 10.9759 20.9994 10.9292ZM13.7678 22.7678C14.2366 22.2989 14.5 21.663 14.5 21H9.5C9.5 21.663 9.76339 22.2989 10.2322 22.7678C10.7011 23.2366 11.337 23.5 12 23.5C12.663 23.5 13.2989 23.2366 13.7678 22.7678Z" fill="#99A7B5"/>
          </svg>
        </div>
      </div>
      <div :class="$style.user">
        <span :class="$style.name">Bessie Cooper</span>
        <img src="~/assets/images/avatar.png" alt="" :class="$style.avatar">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
  }),
  computed: {
    ...mapGetters({ activeDark: 'dark' }),
  },
  methods: {
    ...mapActions({ change: 'changeMode' }),
  },
};
</script>

<style module lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 55px;

    @media screen and (max-width: 1024px){
      padding-top: 35px;
    }

    @media screen and (max-width: 680px){
      padding-top: 22px;
    }
  }

  .header-left,
  .header-right,
  .buttons {
    display: flex;
    align-items: center;
  }

  .logo {
    user-select: none;

    @media screen and (max-width: 680px){
      max-width: 114px;
    }
  }

  .text {
    font-size: 16px;
    line-height: 152%;
    color: #677B8F;
    margin-left: 64px;

    @media screen and (max-width: 1264px){
      margin-left: 40px;
    }

    @media screen and (max-width: 1024px){
      display: none;
    }
  }

  .switchers {
    margin-right: 107px;

    @media screen and (max-width: 1400px){
      margin-right: 50px;
    }

    @media screen and (max-width: 1264px){
      margin-right: 29px;
    }

    @media screen and (max-width: 680px){
      margin-right: 20px;
    }
  }

  .switcher {
    cursor: pointer;
    font-size: 16px;
    line-height: 152%;
    color: #677B8F;
    position: relative;
    display: flex;
    align-items: center;
    transition: all 0.2s;

    &:hover .switcher-text{
      color: #4959FF;
    }

    &:hover .switcher-icon path{
      fill: #4959FF;
    }

    &-icon {
      transform: translateY(-1px);

      @media screen and (max-width: 680px){
        max-width: 20px;
      }
    }

    &-text {
      margin-left: 18px;
      user-select: none;

      @media screen and (max-width: 1264px){
        display: none;
      }
    }
  }

  .messages {
    cursor: pointer;
    margin-right: 29px;

    @media screen and (max-width: 680px){
      margin-right: 20px;
    }
  }

  .icon {

    &:hover path{
      fill: #4959FF;
    }

    @media screen and (max-width: 680px){
      max-width: 20px;
    }
  }

  .notifications {
    cursor: pointer;
  }

  .user {
    display: flex;
    align-items: center;
    margin-left: 59px;

    @media screen and (max-width: 1024px){
      margin-left: 49px;
    }

    @media screen and (max-width: 680px){
      margin-left: 26px;
    }
  }

  .name {
    color: #012345;
    font-weight: 500;
    font-size: 16px;
    line-height: 152%;
    margin-right: 16px;

    @media screen and (max-width: 680px){
      display: none;
    }
  }

  .avatar {
    border-radius: 50%;
    max-width: 56px;

    @media screen and (max-width: 680px){
      max-width: 32px;
    }
  }

  :global(.dark) {
    .switcher:hover .switcher-text {
      color: #fff;
    }

    .switcher:hover .switcher-icon path {
      fill: #fff;
    }

    .icon:hover path {
      fill: #fff;
    }

    .name {
      color: #fff;
    }
  }
</style>
