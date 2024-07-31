import Button from './button.vue'
import type { ComponentPublicInstance } from 'vue'

export { Button }

export type ButtonExposed = ComponentPublicInstance & InstanceType<typeof Button>
