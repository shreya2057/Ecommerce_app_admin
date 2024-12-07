import { createSystem, defineConfig, defaultConfig } from '@chakra-ui/react';
import { colors } from './colors';
const config = defineConfig({
  theme: {
    tokens: {
      colors: { ...colors },
      fonts: {
        heading: { value: 'Nunito-Regular, sans-serif' },
        body: { value: 'Nunito-Regular, sans-serif' },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: '{colors.brand.500}' },
          contrast: { value: '{colors.brand.100}' },
          fg: { value: '{colors.brand.700}' },
          muted: { value: '{colors.brand.100}' },
          subtle: { value: '{colors.brand.200}' },
          emphasized: { value: '{colors.brand.300}' },
          focusRing: { value: '{colors.brand.500}' },
        },
      },
    },
  },
});
export const theme = createSystem(defaultConfig, config);
