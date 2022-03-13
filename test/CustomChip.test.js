import '@testing-library/jest-dom';
import { render } from '@testing-library/vue';
import CustomChip from '../src/components/CustomChip/index.vue';

test('CustomChip props text check', async () => {
  const { getByText } = render(CustomChip, {
    props: { text: '30', icon: 'mdi-currency-usd' },
  });

  getByText('30');
});
