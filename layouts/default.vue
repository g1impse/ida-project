<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
/* eslint-disable import/no-unresolved */
import { mapGetters } from 'vuex';
import Header from '~/components/Header.vue';

export default {
  head() {
    return {
      bodyAttrs: {
        class: this.active ? 'dark' : '',
      },
    };
  },
  components: {
    Header,
  },
  computed: {
    ...mapGetters({ active: 'dark' }),
  },
};

</script>

<style lang="scss">
  @font-face {
    font-family: 'Codec Pro';
    src: url('../assets/fonts/CodecPro-News.eot');
    src: local('Codec Pro News'), local('CodecPro-News'),
        url('../assets/fonts/CodecPro-News.eot?#iefix') format('embedded-opentype'),
        url('../assets/fonts/CodecPro-News.woff2') format('woff2'),
        url('../assets/fonts/CodecPro-News.woff') format('woff'),
        url('../assets/fonts/CodecPro-News.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Codec Pro';
    src: url('../assets/fonts/CodecPro-Bold.eot');
    src: local('Codec Pro Bold'), local('CodecPro-Bold'),
        url('../assets/fonts/CodecPro-Bold.eot?#iefix') format('embedded-opentype'),
        url('../assets/fonts/CodecPro-Bold.woff2') format('woff2'),
        url('../assets/fonts/CodecPro-Bold.woff') format('woff'),
        url('../assets/fonts/CodecPro-Bold.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  * {
    padding: 0;
    margin: 0;
    font-family: 'Codec Pro';
    font-weight: 300;
    box-sizing: border-box;
    transition: background 0.2s, color 0.2s, fill 0.2s;
  }

  ::placeholder {
    color: #677B8F;
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: #677B8F;
  }

  ::-ms-input-placeholder {
    color: #677B8F;
  }

  .dark {
    background: #012345;
  }

  .container {
    max-width: 1312px;
    margin: 0 auto;
    padding-left: 64px;
    padding-right: 64px;

    @media screen and (max-width: 1264px){
      padding-left: 32px;
      padding-right: 32px;
    }

    @media screen and (max-width: 680px){
      padding-left: 16px;
      padding-right: 16px;
    }
  }

  .button {
    cursor: pointer;
    outline: none;
    border: none;
    color: #fff;
    padding: 17px 32px;
    font-size: 16px;
    line-height: 14px;
    font-weight: 500;
    transition: all 0.2s;
    background: #4959FF;
    border-radius: 12px;
    user-select: none;

    &:hover {
      background: #7682FF;
    }

    @media screen and (max-width: 900px){
      font-size: 14px;
      line-height: 12px;
      padding: 16px 24px;
    }
  }

  .skeleton {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border-radius: 24px;
    position: relative;
    overflow: hidden;
    background: #CCD3DA;
    opacity: 0.5;

    &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(#fff, 0) 0,
      rgba(#fff, 0.2) 20%,
      rgba(#fff, 0.5) 60%,
      rgba(#fff, 0)
    );
    animation: shimmer 1s infinite;
    content: '';
    }
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }

</style>
