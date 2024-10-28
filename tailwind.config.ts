import type { Config } from 'tailwindcss';
import withMT from '@material-tailwind/react/utils/withMT';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      mobile: '376px',
      tablet: '745px',
      desktop: '1921px',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default withMT(config);