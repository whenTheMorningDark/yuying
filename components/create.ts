import type { App } from 'vue'

export interface InstallOptions {
  prefix?: string
}

export type CapitalCase<T extends string> = T extends `${infer First} ${infer Rest}`
  ? CapitalCase<`${First}-${Rest}`>
  : T extends `${infer First}-${infer Rest}`
  ? `${Capitalize<First>}${CapitalCase<Rest>}`
  : Capitalize<T>

export function toCapitalCase<T extends string>(value: T) {
  value = value.trim().replace(/\s+/g, '-') as T
  value = value.replace(/-+(\w)/g, (_, char) => (char ? char.toUpperCase() : '')) as T

  return (value.charAt(0).toLocaleUpperCase() + value.slice(1)).replace(
    /[^\w]/g,
    ''
  ) as CapitalCase<T>
}

export function buildInstall(components: any[] = []) {
  return function install(app: App, options: InstallOptions = {}) {
    const { prefix = '' } = options

    const normalizedPrefix = toCapitalCase(prefix || '')

    components.forEach((component) => {
      if (typeof component === 'function' || typeof component.install === 'function') {
        app.use(component)
      } else {
        app.component(`${normalizedPrefix}${component.name}`, component)
      }
    })
  }
}
