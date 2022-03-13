import axios from 'axios';

export default {
  fetchProducts({ commit }) {
    return axios.get('products').then((products) => {
      commit('SET_PRODUCTS', products.data);
    });
  },
};
