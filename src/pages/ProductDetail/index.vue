<template>
  <div class="pa-10 product" v-if="product.id">
    <v-row>
      <v-col cols="4" xs="0" sm="0" md="1" lg="2" />
      <v-col cols="12" xs="12" sm="12" md="10" lg="8">
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="12" lg="12" class="px-4" align="end" justify="end">
            <v-btn
            dark
            color="primary"
            class="mr-1"
            @click="goBack"
            small
          > 
            <v-icon left>mdi-chevron-left</v-icon>
            Go Back
          </v-btn>
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="8" lg="8" class="px-4">
            <CustomCarousel :items="product.images" />
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-4">
            <v-row>
              <v-col
                align="center"
                justify="center"
                cols="12"
                xs="12"
                sm="12"
                md="12"
                lg="12"
              >
                <h2 class="product__title">{{ product.title }}</h2>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                <strong class="product__subTitle--left">Vendor: </strong>
                <span class="product__subTitle--right">{{
                  product.vendor
                }}</span>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                <strong class="product__subTitle--left">Status: </strong>
                <span
                  class="product__subTitle--right"
                  v-if="product.status === 'active'"
                  >Active</span
                >
                <span class="product__subTitle--right" v-else>Not active</span>
              </v-col>
              <v-col
                align="end"
                justify="end"
                cols="12"
                xs="12"
                sm="12"
                md="12"
                lg="12"
              >
                <strong class="product__subTitle--left">Price: </strong>
                <CustomChip
                  :text="product.variants[0].price"
                  icon="mdi-currency-usd"
                />
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                <span v-html="product.body_html"></span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" xs="0" sm="0" md="1" lg="2" />
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import CustomChip from "../../components/CustomChip";
import CustomCarousel from "../../components/CustomCarousel";
export default {
  name: "ProductDetail",
  components: {
    CustomChip,
    CustomCarousel,
  },
  data() {
    return {
      model: 0,
      isLoading: true,
      product: {},
    };
  },
  computed: {
    ...mapState("home", {
      products: "products",
    }),
    ...mapGetters("home", {
      getProductDetail: "getProductDetail",
    }),
  },
  created() {
    if (!this.products.length) {
      this.fetchProducts().then(() => {
        this.getProduct();
      });
    } else {
      this.getProduct();
    }
  },
  methods: {
    ...mapActions("home", {
      fetchProducts: "fetchProducts",
    }),
    getProduct() {
      this.product = this.getProductDetail(this.$route.params.id);
    },
    goBack() {
      this.$router.push('/');
    }
  },
};
</script>

<style scoped lang="scss">
.product {
  &__title {
    color: #007bff;
  }
  &__subTitle {
    font-size: 1rem !important;
    line-height: 1.5rem;
    letter-spacing: 0.03125em !important;
    font-family: "Roboto", sans-serif !important;
  }
  &__subTitle--left {
    font-weight: 600;
  }
  &__subTitle--right {
    font-weight: 400;
  }
}
</style>