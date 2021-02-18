<template>
  <div class="gallery">
    <div class="previews">
      <div class="box " :class="{horizontal: project.horizontal}" v-for="(project, key) in projects" :key="key">
        <ProjectPreview
          v-bind="project"
          />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectPreview from '@/components/ProjectPreviews.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Gallery',
  data: () => {
    const projects = []
    let t = 0.5
    for(let i = 0; i < 100; i++) {
        const horizontal = Math.random() > t
        t = horizontal ? (t + 1) / 2 : t / 2 
        projects.push({
          title: "Mindalys", 
          thumbnail: require("@/assets/project-thumbnails/mindalys.png"),
          description: `I analyzed my own diary for words that are used disproportionately in certain periods. 
            The output is a graph with words like 'Sex', 'Love', 'Adventure'. It's in German.`, 
          date: "2019-01-01",
          horizontal
        })
    }
    return {
      projects
    }
  }, 
  components: {
    ProjectPreview,
  },
});
</script>

<style lang='scss'>
/* {
  outline: 1px solid pink;
} /**/


.gallery {
  .previews {
    text-align: center;
    .box {
      $box-width: 25em; 
      position: relative; 
      display: inline-block;
      width: $box-width; 
      height: $box-width*1.61; // golden ratio ;)
      &.horizontal{
        width: $box-width*1.61; // golden ratio ;)
        height: $box-width; 
      }
    }
  }
}

</style>