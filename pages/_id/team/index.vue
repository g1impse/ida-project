<template>
  <div>
    <p :class="$style.text">{{ vehicle.team_text }}</p>
    <p :class="$style.title">Qualified specialists</p>
    <div :class="$style.items">
      <div :class="$style.item">
        <img src="~/assets/images/team-1.jpg" alt="" :class="$style['item-img']">
        <div>
          <h4 :class="$style['item-title']">Marvin McKinney</h4>
          <p :class="$style['item-text']">Pilot assistant</p>
        </div>
      </div>
      <div :class="$style.item">
        <img src="~/assets/images/team-2.jpg" alt="" :class="$style['item-img']">
        <div>
          <h4 :class="$style['item-title']">Savannah Nguyen</h4>
          <p :class="$style['item-text']">Mechanic</p>
        </div>
      </div>
      <div :class="$style.item">
        <img src="~/assets/images/team-3.jpg" alt="" :class="$style['item-img']">
        <div>
          <h4 :class="$style['item-title']">Courtney Henry</h4>
          <p :class="$style['item-text']">Stewardess</p>
        </div>
      </div>
    </div>
    <p :class="[$style.text]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
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
  }

  .title {
    font-weight: 500;
    font-size: 24px;
    line-height: 21px;
    color: #012345;
    margin-top: 32px;

    @media screen and (max-width: 900px){
      margin-top: 20px;
    }
  }

  .items {
    margin: 32px 0;
    display: flex;

    @media screen and (max-width: 900px){
      margin: 20px 0;
    }

    @media screen and (max-width: 680px){
      margin: 20px 0;
      display: block;
    }
  }

  .item {
    margin-right: 25px;

    @media screen and (max-width: 680px){
      display: flex;
      margin-right: 0;
      margin-bottom: 12px;
    }

    &:last-child {
      margin-right: 0;

      @media screen and (max-width: 680px){
        margin-bottom: 0;
      }
    }

    &-title {
      font-weight: 500;
      font-size: 16px;
      line-height: 14px;
      color: #012345;
      margin-top: 16px;
      margin-bottom: 8px;
    }

    &-text {
      font-weight: 300;
      font-size: 12px;
      line-height: 148%;
      color: #677B8F;
    }

    &-img {
      max-width: 162px;
      border-radius: 16px;
      display: block;

      @media screen and (max-width: 1024px){
        max-width: 142px;
      }

      @media screen and (max-width: 680px){
        margin-right: 16px;
        max-width: 132px;
      }
    }

    &-left {
      margin-right: 24px;
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
    }
  }

</style>
