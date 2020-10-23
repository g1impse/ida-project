<template>
  <div>
    <p :class="$style.text">{{ vehicle.term_text }}</p>
    <p :class="$style.title">Additional conditions:</p>
    <ul :class="$style.list">
      <li :class="$style.item">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</li>
      <li :class="$style.item">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</li>
      <li :class="$style.item">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</li>
    </ul>
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
    font-size: 16px;
    line-height: 152%;
    color: #012345;
  }

  .list {
    margin-top: 24px;
    list-style: none;

    @media screen and (max-width: 900px){
      margin-top: 16px;
    }
  }

  .item {
    position: relative;
    padding-left: 24px;
    font-size: 14px;
    line-height: 146%;
    color: #677B8F;
    margin-bottom: 16px;

    @media screen and (max-width: 900px){
      padding-left: 16px;
      margin-bottom: 8px;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &:before {
      position: absolute;
      content: '';
      width: 4px;
      height: 4px;
      background: #F84AB3;
      border-radius: 50%;
      left: 0;
      top: 8px;
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
      color: #99A7B5;
    }
  }

</style>
