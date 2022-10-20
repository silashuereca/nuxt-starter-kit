import { resolve } from "path";
import { createCommonJS } from "mlly";
const { __dirname } = createCommonJS(import.meta.url);

export const routes = [
  {
    path: "/",
    name: "home",
    file: resolve(__dirname, "/pages/home.vue"),
  },
  {
    path: "/about",
    name: "about",
    file: resolve(__dirname, "./pages/about.vue"),
  },
];
