<template>
  <div>
    <p :class="$style.text">{{ vehicle.specifications_text }}</p>
    <p :class="$style.title">Features:</p>
    <div :class="$style.items">
      <div :class="$style.item">
        <div :class="$style['item-left']">
          <div :class="$style['item-icon']">
            <img src="~/assets/icons/cup.svg" alt="">
          </div>
        </div>
        <div :class="$style['item-right']">
          <h4 :class="$style['item-title']">A challenge for a true champion</h4>
          <p :class="$style['item-text']">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>
      </div>
      <div :class="$style.item">
        <div :class="$style['item-left']">
          <div :class="$style['item-icon']">
            <img src="~/assets/icons/pilot.svg" alt="">
          </div>
        </div>
        <div :class="$style['item-right']">
          <h4 :class="$style['item-title']">Pilot's sweaty hands</h4>
          <p :class="$style['item-text']">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['vehicle'],
};
</script>

<style lang="scss" module>
  .text {
    font-weight: 300;
    font-size: 14px;
    line-height: 146%;
    color: #677B8F;
    margin-bottom: 32px;

    @media screen and (max-width: 900px){
      margin-bottom: 20px;
    }
  }

  .title {
    font-weight: 500;
    font-size: 24px;
    line-height: 21px;
    color: #012345;
  }

  .items {
    margin-top: 32px;

    @media screen and (max-width: 900px){
      margin-top: 20px;
    }
  }

  .item {
    display: flex;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }

    &-title {
      font-weight: 500;
      font-size: 16px;
      line-height: 152%;
      color: #012345;
      margin-top: 12px;
      margin-bottom: 8px;

      @media screen and (max-width: 900px){
        margin-top: 0px;
      }
    }

    &-text {
      font-weight: 300;
      font-size: 14px;
      line-height: 146%;
      color: #677B8F;
    }

    &-icon {
      width: 80px;
      height: 96px;
      background: #F3F4F7;
      border-radius: 16px;
      display: flex;
      justify-content: center;
      align-items: center;

      @media screen and (max-width: 900px){
        width: 64px;
        height: 80px;
      }

      img {
        @media screen and (max-width: 900px){
          transform: scale(0.8);
        }
      }
    }

    &-left {
      margin-right: 24px;

      @media screen and (max-width: 900px){
        margin-right: 16px;
      }
    }
  }

  :global(.dark) {
    .text {
      color: #99A7B5;
    }

    .title {
      color: #fff;
    }

    .item {

      &-title {
        color: #fff;
      }

      &-text {
        color: #99A7B5;
      }

      &-icon {
        background: #011C37;
      }
    }
  }

</style>
