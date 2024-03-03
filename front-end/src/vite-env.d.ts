/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEB_SOCKET_END_POINT: string;
  readonly VITE_SERVER_PORT: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
