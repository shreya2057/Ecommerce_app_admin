import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";
import { colors } from "./colors";
const config = defineConfig({
  theme: {
    tokens: {
      colors: { ...colors },
    },
  },
});
export const theme = createSystem(defaultConfig, config);
