interface ImportMetaEnv {
    readonly VITE_YOUTUBE_API_KEY: string;
    readonly VITE_CHANNEL_ID: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }