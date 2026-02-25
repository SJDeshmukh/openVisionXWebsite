// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import { componentTagger } from "lovable-tagger";

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => ({
//   server: {
//     host: "::",
//     port: 8081,
//     allowedHosts: [".ngrok-free.dev"],
//     headers: {
//       "ngrok-skip-browser-warning": "true",
//     },
//     hmr: {
//       overlay: false,
//     },
//   },
//   plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// }));
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  return {
    server: {
      host: true,
      port: 8081,

      // ✅ allow all hosts (Cloudflare, ngrok, etc.)
      allowedHosts: true,

      headers: {
        "ngrok-skip-browser-warning": "true",
      },

      hmr: {
        protocol: "ws",
      },
    },

    plugins: [
      react(),
      mode === "development" ? componentTagger() : undefined,
    ].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});