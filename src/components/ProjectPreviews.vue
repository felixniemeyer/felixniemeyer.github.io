<template>
  <div class="project-preview" :class="{horizontal}" :style="{left: offset.x, top: offset.y}">
    <img :alt="title" :src="thumbnail">
    <div class="label">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectPreview',
  props: {
    title: String,
    thumbnail: String, 
    description: String,
    horizontal: Boolean
  },
  data: () => {
    const relativeWidth = 80
    const minPadding = 3
    const randomOffset = () => (Math.floor(Math.random() * (100 - relativeWidth + 0.999 - 2* minPadding)) + minPadding) + "%"
    return {
      offset: {
        x: randomOffset(), 
        y: randomOffset()
      }
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.project-preview{
  position: absolute; 
  width: 80%; 
  height: 80%; 
  text-align: left;
  h2 {
    font-size: 1.5em;
    text-indent: 0.7em;
  }
  img {
    width: 100%;
    box-shadow: 0 0 2em #8888;
  }
  &.horizontal {
    .label{
      position: absolute;
      left: calc(1em + 100% / 1.61);
      top: 0; 
    }
    img {
      height: 100%; 
      width: unset;
    }
  }
}
</style>
