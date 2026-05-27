<template>
  <BaseFileManager
    :blobs="blobs"
    :is-loading="isLoading"
    @file-click="(b) => emit('file-click', b)"
    @folder-click="(p) => emit('folder-click', p)"
    @navigate="(p) => emit('navigate', p)"
  >
    <template v-if="$slots.toolbar" #toolbar>
      <slot name="toolbar" />
    </template>
    <template v-if="$slots['empty-state']" #empty-state>
      <slot name="empty-state" />
    </template>
  </BaseFileManager>
</template>

<script setup>
/**
 * BaseMediaManager
 *
 * Smart wrapper around BaseFileManager. The single-component embed (FR-7) that
 * admin panels mount at their /blobs route. Fetches the full blob library in
 * one round-trip (`paginate=false`) plus per-row file-existence info
 * (`withExistence=1`) and feeds BaseFileManager.
 *
 * Deliberately props-less — embedding the Media Manager is a one-liner:
 * `<BaseMediaManager />`. Forwards toolbar + empty-state slots and the
 * file-click / folder-click / navigate events so callers can still hook in.
 *
 * @emits file-click(blob)
 * @emits folder-click(path)
 * @emits navigate(path)
 *
 * @slot toolbar
 * @slot empty-state
 */

import { onMounted, ref } from 'vue'
import BaseFileManager from './BaseFileManager.vue'
import useMediaApi from '../composables/useMediaApi.js'

const emit = defineEmits(['file-click', 'folder-click', 'navigate'])

const blobs = ref([])
const isLoading = ref(true)

onMounted(async () => {
  try {
    const { get } = useMediaApi()
    const response = await get({ paginate: false, withExistence: 1 })
    blobs.value = response.data?.data ?? []
  } finally {
    isLoading.value = false
  }
})
</script>