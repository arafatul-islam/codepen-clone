import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import { alias } from "@rollup/plugin-alias";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

//   alias({
//   entries: [
//     {
//       find: /^codemirror$/,
//       replacement: path.resolve(__dirname, "node_modules/codemirror"),
//     },
//   ],
// }),
