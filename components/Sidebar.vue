<template>
  <div :class="overlayClass">
    <form :class="sidebarClass" @submit.prevent="save()">
      <div :class="$style.top">
        <h2 :class="$style.title">Add new vehicle</h2>
        <div :class="$style.close" @click="close">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.99999 5.58599L11.95 0.635986L13.364 2.04999L8.41399 6.99999L13.364 11.95L11.95 13.364L6.99999 8.41399L2.04999 13.364L0.635986 11.95L5.58599 6.99999L0.635986 2.04999L2.04999 0.635986L6.99999 5.58599Z" fill="#012345"/>
          </svg>
        </div>
      </div>
      <div class="image-output" :class="$style.image">
        <input type="file" id="image" @change="handleFileSelect($event)" :class="$style['image-hide']">
        <div>
          <label for="image" class="image-add-btn" :class="$style['image-add']">
            <img src="~/assets/icons/add-photo.svg" alt="">
          </label>
        </div>
      </div>
      <input :class="$style.input" type="text" name="name" placeholder="Name" v-model="vehicle.name" @input="hideBorder($event)">
      <input :class="$style.input" type="text" name="description" placeholder="Description" v-model="vehicle.description" @input="hideBorder($event)">
      <div :class="$style['input-rent']">
        <input :class="$style.input" type="text" name="price" placeholder="Rent price" v-model="vehicle.rent" @input="hideBorder($event)">
      </div>
      <button class="button" :class="$style.save">Complete</button>
    </form>
  </div>
</template>

<script>
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
export default {
  mounted() {
    this.vehicle.id = this.makeid(24);
  },
  props: ['show'],
  data: () => ({
    vehicle: {
      id: '',
      name: '',
      type: 'custom',
      description: '',
      specifications_text: '',
      team_text: '',
      term_text: '',
      rent: null,
      preview: '',
      image: '',
    },
  }),
  computed: {
    sidebarClass() {
      return {
        [this.$style.sidebar]: true,
        [this.$style.active]: this.show,
      };
    },
    overlayClass() {
      return {
        [this.$style.overlay]: true,
        [this.$style.active]: this.show,
      };
    },
    valid() {
      return (this.vehicle.image !== '' && this.vehicle.name !== '' && this.vehicle.description !== '' && this.vehicle.rent !== null);
    },
  },
  methods: {
    makeid(length) {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    },
    save() {
      if (this.valid) {
        this.$store.dispatch('vehicles/addVehicle', this.vehicle);
        this.close();
      } else {
        const inputs = document.querySelectorAll('input');
        for (const input of inputs) {
          if (input.value === '') {
            input.classList.add([this.$style.invalid]);
          }
        }
        if (this.vehicle.image === '') {
          document.querySelector('.image-output').classList.add([this.$style.invalid]);
        }
      }
    },
    hideBorder(event) {
      event.target.classList.remove([this.$style.invalid]);
    },
    close() {
      this.$emit('hide');
    },
    handleFileSelect(evt) {
      const file = evt.target.files;
      const f = file[0];

      this.vehicle.preview = f;
      this.vehicle.image = f;
      // Only process image files.
      if (!f.type.match('image.*')) {
        alert('Image only please');
      }
      const reader = new FileReader();
      reader.onload = (function () {
        return function (e) {
          document.querySelector('.image-output').style.backgroundImage = `url(${e.target.result})`;
          document.querySelector('.image-output').style.border = 'none';
          document.querySelector('.image-add-btn').style.display = 'none';
        };
      }(f));
      reader.readAsDataURL(f);
    },
  },
};
</script>

<style module lang="scss">
  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(52, 79, 106, 0.32);
    backdrop-filter: blur(12px);
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -2;
    transition: opacity 0.3s, z-index 3.5s;

    &.active {
      opacity: 1;
      z-index: 0;
      transition: opacity 0.3s, z-index 0s;
    }
  }

  .sidebar {
    width: 41%;
    max-width: 600px;
    padding: 64px 72px;
    position: fixed;
    top: 0;
    right: -600px;
    background: #FCFCFC;
    border-top-left-radius: 48px;
    border-bottom-left-radius: 48px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.2s;

    @media screen and (max-width: 1400px){
      padding: 44px 52px;
    }

    @media screen and (max-width: 1024px){
      padding: 38px 38px;
      top: auto;
      bottom: -100%;
      height: 81%;
      width: 100%;
      max-width: 100%;
      border-bottom-left-radius: 0px;
      border-top-right-radius: 24px;
      border-top-left-radius: 24px;
      right: auto;
    }

    @media screen and (max-width: 680px){
      padding: 28px 16px;
    }

    &.active {
      right: 0px;
      transition: all 0.2s;

      @media screen and (max-width: 1024px){
        bottom: 0px;
      }
    }
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    @media screen and (max-width: 1400px){
      margin-bottom: 30px;
    }

    @media screen and (max-width: 680px){
      margin-bottom: 24px;
    }
  }

  .close {
    cursor: pointer;
    width: 48px;
    height: 48px;
    background: #F3F4F7;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;

    &:hover {
      background: #D1D5FF;
    }

    @media screen and (max-width: 1024px){
      width: 40px;
      height: 40px;
      border-radius: 12px;
    }

    @media screen and (max-width: 680px){
      width: 32px;
      height: 32px;
      border-radius: 8px;
    }

    img {
      @media screen and (max-width: 680px){
        transform: scale(0.8);
      }
    }
  }

  .title {
    font-weight: 500;
    font-size: 40px;
    line-height: 120%;
    color: #012345;

    @media screen and (max-width: 1400px){
      font-size: 32px;
    }

    @media screen and (max-width: 680px){
      font-weight: 500;
      font-size: 24px;
      line-height: 120%;
    }
  }

  .image {
    max-height: 348px;
    height: 100%;
    background: #F3F4F7;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center center;

    &-hide {
      display: none;
    }

    &-add {
      cursor: pointer;
      width: 48px;
      height: 48px;
      background: #FCFCFC;
      border-radius: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.2s;
      user-select: none;

      &:hover {
        background: #D1D5FF;
      }
    }

    &-edit {
      display: none;
    }

    &.invalid {
      border: 2px solid #C51780;;
    }
  }

  .input {
    outline: none;
    width: 100%;
    height: 56px;
    min-height: 56px;
    border: none;
    display: block;
    background: #F3F4F7;
    border-radius: 12px;
    padding: 21px 24px;
    font-weight: 300;
    font-size: 16px;
    line-height: 14px;
    color: #677B8F;
    margin-top: 24px;

    @media screen and (max-width: 680px){
      margin-top: 16px;
      height: 52px;
      min-height: 52px;
      font-size: 14px;
      line-height: 12px;
    }

    &-rent {
      position: relative;

      &::after {
        position: absolute;
        content: '$/h';
        right: 24px;
        top: 45px;
        color: #677B8F;

        @media screen and (max-width: 680px){
          top: 37px;
          font-size: 14px;
        }
      }
    }

    &.invalid {
      border: 2px solid #C51780;;
    }
  }

  .save {
    margin-top: 40px;
    width: 100%;
    padding: 21px auto;
    height: 56px;
    min-height: 56px;

    @media screen and (max-width: 680px){
      margin-top: 24px;
      height: 52px;
      min-height: 52px;
    }
  }

  :global(.dark) {
    .overlay {
      background: rgba(0, 7, 14, 0.32);
    }

    .sidebar {
      background: #012345;
    }

    .title {
      color: #fff;
    }

    .close {
      background: #011C37;

      &:hover {
        background: #4959FF;
      }

      path {
        fill: #fff;
      }
    }

    .image {
      background: #011C37;
      background-size: cover;
      background-position: center center;

      &-add {
        background: #012345;

        &:hover {
          background: #fcfcfc;
        }
      }
    }

    .input {
      color: #99A7B5;
      background: #011C37;
    }

  }
</style>
