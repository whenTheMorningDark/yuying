<template>
  <div class="a">ffff</div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'YuButton'
})
defineProps({
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>
