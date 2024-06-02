// vite.config.ts
import { defineConfig } from "file:///D:/recent/Studyfied/node_modules/vite/dist/node/index.js";
import react from "file:///D:/recent/Studyfied/node_modules/@vitejs/plugin-react/dist/index.mjs";
import mkcert from "file:///D:/recent/Studyfied/node_modules/vite-plugin-mkcert/dist/mkcert.mjs";
import EnvironmentPlugin from "file:///D:/recent/Studyfied/node_modules/vite-plugin-environment/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [react(), mkcert(), EnvironmentPlugin("all")],
  base: "/Studyfied/"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxyZWNlbnRcXFxcU3R1ZHlmaWVkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxyZWNlbnRcXFxcU3R1ZHlmaWVkXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9yZWNlbnQvU3R1ZHlmaWVkL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgbWtjZXJ0IGZyb20gXCJ2aXRlLXBsdWdpbi1ta2NlcnRcIjtcclxuaW1wb3J0IEVudmlyb25tZW50UGx1Z2luIGZyb20gXCJ2aXRlLXBsdWdpbi1lbnZpcm9ubWVudFwiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKSwgbWtjZXJ0KCksIEVudmlyb25tZW50UGx1Z2luKFwiYWxsXCIpXSxcclxuICBiYXNlOiBcIi9TdHVkeWZpZWQvXCIsXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlQLFNBQVMsb0JBQW9CO0FBQzlRLE9BQU8sV0FBVztBQUNsQixPQUFPLFlBQVk7QUFDbkIsT0FBTyx1QkFBdUI7QUFHOUIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxPQUFPLEdBQUcsa0JBQWtCLEtBQUssQ0FBQztBQUFBLEVBQ3JELE1BQU07QUFDUixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=