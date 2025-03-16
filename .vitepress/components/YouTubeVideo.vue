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

<script setup>
import { computed } from "vue";

const props = defineProps({
  videoId: {
    type: String,
    required: true,
  },
});

const videoUrl = computed(() => {
  const link = `https://www.youtube.com/embed/${props.videoId}`;
  console.log(link);
  return link;
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
