const V = process.env;

export const ENV = {
  appId: V.VITE_APP_ID ?? "",
  oAuthServerUrl: V.VITE_OAUTH_SERVER_URL ?? "",
  forgeApiUrl: V.VITE_FORGE_API_URL ?? "",
  isProduction: V.NODE_ENV === "production",
};
