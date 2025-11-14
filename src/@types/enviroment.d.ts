declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_FF_IS_APP_STABLE: "true" | "false";
    }
  }
}

export {};
