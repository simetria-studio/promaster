/**
 * Compatível com `#internal/nuxt/paths` do bundle SSR em `.nuxt/dist/server/`.
 * Não use este arquivo em produção: rode `node .output/server/index.mjs` ou `nuxt preview`.
 */
import { joinRelativeURL } from 'ufo'
import { useRuntimeConfig } from 'nitropack/runtime'

export function baseURL() {
  return useRuntimeConfig().app.baseURL
}

export function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir
}

export function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path)
}

export function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app
  const publicBase = app.cdnURL || app.baseURL
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase
}
