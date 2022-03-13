<template>
  <v-carousel height="700" v-model="model">
    <v-carousel-item
      v-for="(image, i) in items"
      :key="i"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-sheet height="100%">
        <v-img :data-testid="image.id" contain max-height="700" height="700" :src="image.src" :alt="image.src"></v-img>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "CustomCarousel",
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      model: 0,
    };
  },
};
</script>