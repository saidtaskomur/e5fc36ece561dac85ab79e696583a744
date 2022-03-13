export default {
  SET_PRODUCTS(state, data) {
    state.products = data;
  },
  SET_SELECTED_PRODUCT_ID(state, payload) {
    state.selectedProductID = payload;
  },
};
