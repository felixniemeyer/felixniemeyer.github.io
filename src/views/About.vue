<template>
  <div class="about">
    <h1>Felix Paul Niemeyer</h1>
    <p v-for="(msg, i) in log.slice().reverse()" :key="i" :style="{fontSize: 9/(9+i) + 'em'}">
      {{msg}}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data: () => ({ log: [
      'was hiding his desire to create and experiment for so long',
      'now it is bursts free',
      'every code is a poem',
    ]
  })
})
</script>