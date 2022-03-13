export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/Home'),
    children: [],
  },
  {
    path: '/product/:id',
    name: 'productDetail',
    component: () => import('../pages/ProductDetail'),
  },
];
