import '@testing-library/jest-dom';
import { render } from '@testing-library/vue';
import CustomCarousel from '../src/components/CustomCarousel/index.vue';

test('CustomCarousel render image check', async () => {
  const { findByTestId } = render(CustomCarousel, {
    props: {
      items: [
        {
          id: '000000000',
          src: 'https://cdn.shopify.com/s/files/1/0631/9122/0443/products/15100100000154_1_297x720_72_RGB.jpg?v=1645622493',
        },
      ],
    },
  });

  findByTestId('000000000');
});
