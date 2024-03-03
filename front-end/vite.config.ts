import { ConfigEnv, defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  const cwd = process.cwd();
  const env = { ...loadEnv(mode, cwd, "VITE_") };

  const serverConfig = {
    host: true,
    port: Number(env.VITE_SERVER_PORT),
    strictPort: true,
  };

  return {
    plugins: [react()],
    server: serverConfig,
  };
});
