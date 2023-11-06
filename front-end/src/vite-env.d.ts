/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEB_SOCKET_END_POINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
