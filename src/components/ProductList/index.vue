<template>
  <v-container fluid>
    
    <v-data-iterator
      :items="getProducts.products"
      :items-per-page.sync="itemsPerPage"
      :page.sync="page"
      :search="search"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar color="primary lighten-1" dark flat>
          <v-row>
            <v-col cols="4" sm="6" md="4" lg="3">
              <v-text-field
                v-model="search"
                clearable
                flat
                solo-inverted
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="Search Product"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <ProductItem :product="item" />
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row align="center" justify="center" class="mx-2 pt-4">
          <span class="black--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                color="primary"
                class="ml-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span class="mr-4 black--text">
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            fab
            dark
            color="primary"
            class="mr-1"
            @click="formerPage"
            small
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab dark color="primary" small class="ml-1" @click="nextPage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import ProductItem from "../ProductItem/index.vue";
import { mapGetters } from "vuex";
export default {
  name: "ProductList",
  components: {
    ProductItem,
  },
  data() {
    return {
      itemsPerPage: 10,
      itemsPerPageArray: [10, 20, 30, 50],
      page: 1,
      search: "",
    };
  },
  computed: {
    ...mapGetters("home", ["getProducts"]),
    numberOfPages() {
      return Math.ceil(this.getProducts.products.length / this.itemsPerPage);
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage () {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
  },
};
</script>