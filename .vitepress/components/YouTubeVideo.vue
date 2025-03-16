<template>
  <div class="video-container">
    <iframe
      width="560"
      height="315"
      :src="videoUrl"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { videoIds } from "../video-ids";

const props = defineProps<{
  videoKey: keyof typeof videoIds;
}>();

const videoUrl = computed(() => {
  const videoId = videoIds[props.videoKey];
  return `https://www.youtube.com/embed/${videoId}`;
});
</script>

<style scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* Proporção 16:9 */
  height: 0;
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
