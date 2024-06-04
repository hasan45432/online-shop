import react from "@vitejs/plugin-react";
import nodeResolve from "@rollup/plugin-node-resolve";

export default defineConfig({
  plugins: [
    react(),
    {
      ...nodeResolve(),
      custom: {
        moduleDirectory: ["node_modules", "node_modules/swiper"],
      },
    },
  ],
});
