import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";
import { colors } from "./colors";
const config = defineConfig({
  theme: {
    tokens: {
      colors: { ...colors },
      fonts: {
        heading: { value: "Nunito-Regular, sans-serif" },
        body: { value: "Nunito-Regular, sans-serif" },
      },
    },
  },
});
export const theme = createSystem(defaultConfig, config);
