<template>
  <div>
    <div
      class="flex items-center gap-1.5 py-1.5 pr-3 rounded-md mx-1 my-0.5 select-none text-sm cursor-pointer"
      :style="{ paddingLeft: `${depth * 16}px` }"
      :class="node.path === currentPath
        ? 'bg-primary-50 text-primary-700 font-medium'
        : 'hover:bg-gray-100 text-gray-700'"
      @click.stop="handleRowClick"
    >
      <span
        class="w-4 h-4 flex items-center justify-center flex-shrink-0"
        @click.stop="handleCaretClick"
      >
        <i
          v-if="hasSubfolders"
          :class="isExpanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'"
          class="text-[10px] text-gray-400"
        />
      </span>
      <i class="pi pi-folder flex-shrink-0" :class="node.path === currentPath ? 'text-primary' : 'text-gray-400'" />
      <span class="flex-1 truncate">{{ node.name }}</span>
      <i
        v-if="statusMeta"
        class="pi pi-circle-fill text-[7px] flex-shrink-0"
        :class="statusMeta.color"
        :title="statusMeta.label"
      />
      <span class="text-xs text-gray-400 flex-shrink-0">({{ totalCount }})</span>
    </div>
    <template v-if="isExpanded && hasSubfolders">
      <FolderTreeNode
        v-for="child in subfoldersArray"
        :key="child.path"
        :node="child"
        :current-path="currentPath"
        :expanded-folders="expandedFolders"
        :depth="depth + 1"
        @select="$emit('select', $event)"
        @toggle="$emit('toggle', $event)"
      />
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  node: { type: Object, required: true },
  currentPath: { type: String, required: true },
  expandedFolders: { type: Object, required: true },
  depth: { type: Number, default: 0 },
})

const emit = defineEmits(['select', 'toggle'])

const hasSubfolders = computed(() => Object.keys(props.node.subfolders).length > 0)
const isExpanded = computed(() => props.expandedFolders.has(props.node.path))
const subfoldersArray = computed(() => Object.values(props.node.subfolders))

function recursiveCount(node) {
  let n = node.files.length
  for (const c of Object.values(node.subfolders)) n += recursiveCount(c)
  return n
}

const totalCount = computed(() => recursiveCount(props.node))

const FOLDER_STATUS_META = {
  'ok': null,
  'has-untracked': { color: 'text-amber-500', label: 'Contains untracked files' },
  'all-untracked': { color: 'text-amber-600', label: 'Entirely untracked' },
  'has-missing': { color: 'text-red-500', label: 'Contains files missing on disk' },
}
const statusMeta = computed(() => FOLDER_STATUS_META[props.node.status] ?? null)

function handleCaretClick(e) {
  e.stopPropagation()
  if (hasSubfolders.value) emit('toggle', props.node.path)
}

function handleRowClick() {
  emit('select', props.node.path)
}
</script>