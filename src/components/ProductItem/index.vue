<template>
  <v-card @click="goProductDetail" class="mx-auto mt-2" @mouseover="elevationActive = true" @mouseleave="elevationActive = false" :elevation="elevationActive ? '15': '5'">
    <template slot="progress">
      <v-progress-linear
        color="primary"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
   
    <v-img max-height="400" height="400" contain :src="product.image.src"></v-img>

    <v-card-title>{{ product.title }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <div class="my-4 text-subtitle-1">
          <strong>Vendor</strong>: {{ product.vendor }}
        </div>
        <v-spacer></v-spacer>
         <CustomChip
            :text="product.variants[0].price"
            icon="mdi-currency-usd"
          />
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import CustomChip from '../../components/CustomChip'

export default {
  name: "ProductItem",
  components: {
    CustomChip,
  },
  props: {
    product: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      elevationActive: false,
    };
  },
  methods: {
    goProductDetail() {
      this.$router.push(`/product/${this.product.id}`)
    }
  }
};
</script>
