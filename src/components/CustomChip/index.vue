<template>
  <v-chip color="primary">
    {{ text }}
    <v-icon v-if="icon" small right> {{ icon }} </v-icon>
  </v-chip>
</template>

<script>
export default {
  name: "CustomChip",
  props: {
    text: {
      type: String,
      Number,
      default: "",
      required: true,
    },
    icon: {
      type: String,
      default: null,
      required: false,
    },
  },
};
</script>