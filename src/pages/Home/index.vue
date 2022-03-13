<template>
  <div>
    <v-row>
      <v-col v-if="pageBreakpoint !== 'xs'" cols="4" sm="0" md="1" lg="2" />
      <v-col cols="12" xs="12" sm="12" md="10" lg="8">
        <ProductList />
      </v-col>
      <v-col v-if="pageBreakpoint !== 'xs'" cols="4" sm="0" md="1" lg="2" />
    </v-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ProductList from "@/components/ProductList";
export default {
  name: "Home",
  components: {
    ProductList,
  },
  data() {
    return {
      data: "Home",
      pageBreakpoint: this.$vuetify.breakpoint.name,
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    ...mapActions("home", {
      fetchProducts: "fetchProducts",
    }),
  },
};
</script>