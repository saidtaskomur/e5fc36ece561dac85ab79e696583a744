export default {
  getProducts(state) {
    return state.products;
  },
  getProductDetail: (state) => (id) => {
    return state.products.products.find((item) => item.id === id * 1);
  },
};
