<template>
  <div class="a">a</div>
</template>
<script setup lang="ts">
const props = defineProps({
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
