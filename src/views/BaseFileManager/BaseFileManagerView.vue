<template>
  <BasePageContent>
    <BaseDoc>
      <BaseDocSection title="Import">
        <BaseDocCodePreview title="Import" language="JavaScript" :source="importCode" />
      </BaseDocSection>

      <BaseDocSection title="Props">
        <table class="w-full text-sm border-collapse">
          <thead class="text-left text-stone-500">
            <tr>
              <th class="py-2 pr-4">Name</th>
              <th class="py-2 pr-4">Type</th>
              <th class="py-2 pr-4">Required</th>
              <th class="py-2 pr-4">Default</th>
              <th class="py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="p in propsTable" :key="p.name" class="border-t border-gray-100">
              <td class="py-2 pr-4"><code>{{ p.name }}</code></td>
              <td class="py-2 pr-4"><code>{{ p.type }}</code></td>
              <td class="py-2 pr-4">{{ p.required ? 'Yes' : 'No' }}</td>
              <td class="py-2 pr-4"><code>{{ p.default ?? '—' }}</code></td>
              <td class="py-2">{{ p.description }}</td>
            </tr>
          </tbody>
        </table>
      </BaseDocSection>

      <BaseDocSection title="Emits">
        <table class="w-full text-sm border-collapse">
          <thead class="text-left text-stone-500">
            <tr><th class="py-2 pr-4">Name</th><th class="py-2 pr-4">Payload</th><th class="py-2">When</th></tr>
          </thead>
          <tbody>
            <tr v-for="e in emitsTable" :key="e.name" class="border-t border-gray-100">
              <td class="py-2 pr-4"><code>{{ e.name }}</code></td>
              <td class="py-2 pr-4"><code>{{ e.payload }}</code></td>
              <td class="py-2">{{ e.when }}</td>
            </tr>
          </tbody>
        </table>
      </BaseDocSection>

      <BaseDocSection title="Slots">
        <table class="w-full text-sm border-collapse">
          <thead class="text-left text-stone-500">
            <tr><th class="py-2 pr-4">Name</th><th class="py-2">Purpose</th></tr>
          </thead>
          <tbody>
            <tr v-for="s in slotsTable" :key="s.name" class="border-t border-gray-100">
              <td class="py-2 pr-4"><code>{{ s.name }}</code></td>
              <td class="py-2">{{ s.purpose }}</td>
            </tr>
          </tbody>
        </table>
      </BaseDocSection>

      <BaseDocSection title="Example">
        <BaseDocFunctionalityPreview>
          <div class="h-[700px]">
            <BaseFileManager
              :blobs="sampleBlobs"
              :is-loading="isLoading"
              @file-click="onFileClick"
              @folder-click="onFolderClick"
              @navigate="onNavigate"
            >
              <template #toolbar>
                <div class="flex items-center gap-2">
                  <Button
                    :label="isLoading ? 'Stop Loading' : 'Simulate Loading'"
                    :icon="isLoading ? 'pi pi-stop' : 'pi pi-spin pi-spinner'"
                    :severity="isLoading ? 'danger' : 'secondary'"
                    @click="isLoading = !isLoading"
                  />
                  <Button label="Upload" icon="pi pi-upload" size="small" />
                  <Button label="New Folder" icon="pi pi-folder-plus" size="small" severity="secondary" />
                </div>
              </template>
            </BaseFileManager>
          </div>

          <div v-if="log.length > 0" class="bg-white border rounded-lg p-4 mt-2">
            <p class="text-sm font-semibold text-gray-600 mb-2">Event Log</p>
            <ul class="space-y-1">
              <li v-for="(entry, i) in log" :key="i" class="text-xs font-mono text-gray-500">{{ entry }}</li>
            </ul>
          </div>
        </BaseDocFunctionalityPreview>
      </BaseDocSection>

      <BaseDocSection title="Sub-components">
        <BaseDocSection title="FolderTreeNode">
          <BaseDocCodePreview title="Import" language="JavaScript" :source="subImportCode" />
          <p class="text-sm text-gray-600 my-2">
            A recursive folder tree item used inside the sidebar of BaseFileManager. Renders a chevron toggle, folder icon, name, and file count. Emits select when clicked and toggle when the caret is clicked.
          </p>
          <table class="w-full text-sm border-collapse mt-2">
            <thead class="text-left text-stone-500">
              <tr><th class="py-2 pr-4">Name</th><th class="py-2 pr-4">Type</th><th class="py-2 pr-4">Required</th><th class="py-2 pr-4">Default</th><th class="py-2">Description</th></tr>
            </thead>
            <tbody>
              <tr v-for="p in subPropsTable" :key="p.name" class="border-t border-gray-100">
                <td class="py-2 pr-4"><code>{{ p.name }}</code></td>
                <td class="py-2 pr-4"><code>{{ p.type }}</code></td>
                <td class="py-2 pr-4">{{ p.required ? 'Yes' : 'No' }}</td>
                <td class="py-2 pr-4"><code>{{ p.default ?? '—' }}</code></td>
                <td class="py-2">{{ p.description }}</td>
              </tr>
            </tbody>
          </table>
          <p class="text-sm text-gray-500 mt-3 font-medium">Emits</p>
          <table class="w-full text-sm border-collapse mt-1">
            <thead class="text-left text-stone-500"><tr><th class="py-2 pr-4">Name</th><th class="py-2 pr-4">Payload</th><th class="py-2">When</th></tr></thead>
            <tbody>
              <tr class="border-t border-gray-100"><td class="py-2 pr-4"><code>select</code></td><td class="py-2 pr-4"><code>path: string</code></td><td class="py-2">Row clicked — navigate to this folder.</td></tr>
              <tr class="border-t border-gray-100"><td class="py-2 pr-4"><code>toggle</code></td><td class="py-2 pr-4"><code>path: string</code></td><td class="py-2">Caret clicked — expand or collapse this folder.</td></tr>
            </tbody>
          </table>
        </BaseDocSection>
      </BaseDocSection>
    </BaseDoc>
  </BasePageContent>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import BasePageContent from "../../components/BasePageContent.vue";
import BaseDoc from "../../docs/components/BaseDoc.vue";
import BaseDocSection from "../../docs/components/BaseDocSection.vue";
import BaseDocCodePreview from "../../docs/components/BaseDocCodePreview.vue";
import BaseDocFunctionalityPreview from "../../docs/components/BaseDocFunctionalityPreview.vue";
import BaseFileManager from '../../components/BaseFileManager.vue';

const isLoading = ref(false);
const log = ref([]);

function addLog(msg) {
  log.value.unshift(`[${new Date().toLocaleTimeString()}] ${msg}`);
  if (log.value.length > 20) log.value.pop();
}

function onFileClick(blob) { addLog(`file-click: ${blob.name} (${blob.type})`); }
function onFolderClick(path) { addLog(`folder-click: "${path}"`); }
function onNavigate(path) { addLog(`navigate: "${path || '/'}"`); }

const sampleBlobs = [
  { id: 1,  name: 'readme.md',        url: null,                                 directory: null,              type: 'text/markdown',   size: 1024,    ext: 'md',  created_at: '2025-11-12T08:30:00Z', updated_at: '2025-11-12T09:00:00Z', exists: true },
  { id: 2,  name: 'logo.png',         url: 'https://picsum.photos/seed/a/400',   directory: null,              type: 'image/png',       size: 45000,   ext: 'png', created_at: '2025-11-13T10:15:00Z', updated_at: '2025-11-13T10:20:00Z', exists: true },
  { id: 3,  name: 'report.pdf',       url: null,                                 directory: 'blobs',           type: 'application/pdf', size: 102400,  ext: 'pdf', created_at: '2025-11-14T11:00:00Z', updated_at: '2025-11-14T11:05:00Z', exists: true },
  { id: 4,  name: 'photo.jpg',        url: 'https://picsum.photos/seed/b/400',   directory: 'blobs',           type: 'image/jpeg',      size: 230400,  ext: 'jpg', created_at: '2025-11-15T12:30:00Z', updated_at: '2025-11-15T12:35:00Z', exists: true },
  { id: 5,  name: 'promo.mp4',        url: null,                                 directory: 'blobs',           type: 'video/mp4',       size: 5242880, ext: 'mp4', created_at: '2025-11-16T13:45:00Z', updated_at: '2025-11-16T13:50:00Z', exists: false },
  { id: 6,  name: 'jingle.mp3',       url: null,                                 directory: 'blobs',           type: 'audio/mpeg',      size: 3145728, ext: 'mp3', created_at: '2025-11-17T14:00:00Z', updated_at: '2025-11-17T14:10:00Z', exists: true },
  { id: 7,  name: 'product-1.jpg',    url: 'https://picsum.photos/seed/c/400',   directory: 'products/images', type: 'image/jpeg',      size: 125000,  ext: 'jpg', created_at: '2025-11-18T15:20:00Z', updated_at: '2025-11-18T15:25:00Z', exists: true },
  { id: 8,  name: 'product-2.jpg',    url: 'https://picsum.photos/seed/d/400',   directory: 'products/images', type: 'image/jpeg',      size: 118000,  ext: 'jpg', created_at: '2025-11-19T16:00:00Z', updated_at: '2025-11-19T16:05:00Z', exists: null },
  { id: 9,  name: 'product-3.png',    url: 'https://picsum.photos/seed/e/400',   directory: 'products/images', type: 'image/png',       size: 200000,  ext: 'png', created_at: '2025-11-20T08:00:00Z', updated_at: '2025-11-20T08:30:00Z', exists: true },
  { id: 10, name: 'banner.jpg',       url: 'https://picsum.photos/seed/f/400',   directory: 'products/images', type: 'image/jpeg',      size: 350000,  ext: 'jpg', created_at: '2025-11-21T09:15:00Z', updated_at: '2025-11-21T09:20:00Z', exists: true },
  { id: 11, name: 'manual-a.pdf',     url: null,                                 directory: 'products/manuals',type: 'application/pdf', size: 2097152, ext: 'pdf', created_at: '2025-11-22T10:30:00Z', updated_at: '2025-11-22T10:35:00Z', exists: true },
  { id: 12, name: 'manual-b.pdf',     url: null,                                 directory: 'products/manuals',type: 'application/pdf', size: 1572864, ext: 'pdf', created_at: '2025-11-23T11:45:00Z', updated_at: '2025-11-23T11:50:00Z', exists: true },
  { id: 13, name: 'avatar-alice.jpg', url: 'https://picsum.photos/seed/g/400',   directory: 'users/avatars',   type: 'image/jpeg',      size: 25000,   ext: 'jpg', created_at: '2025-11-24T12:00:00Z', updated_at: '2025-11-24T12:05:00Z', exists: true },
  { id: 14, name: 'avatar-bob.jpg',   url: 'https://picsum.photos/seed/h/400',   directory: 'users/avatars',   type: 'image/jpeg',      size: 32000,   ext: 'jpg', created_at: '2025-11-25T13:15:00Z', updated_at: '2025-11-25T13:20:00Z', exists: true },
  { id: 15, name: 'avatar-carol.png', url: 'https://picsum.photos/seed/i/400',   directory: 'users/avatars',   type: 'image/png',       size: 28000,   ext: 'png', created_at: '2025-11-26T14:30:00Z', updated_at: '2025-11-26T14:35:00Z', exists: true },
];

const importCode = `import BaseFileManager from "kockatoos-admin-ui/components/BaseFileManager.vue";`;
const subImportCode = `import FolderTreeNode from "kockatoos-admin-ui/components/FolderTreeNode.vue";`;

const propsTable = [
  { name: 'blobs', type: 'Array', required: true, default: null, description: 'Flat list of blob objects. The component derives the folder hierarchy from each blob\'s directory field.' },
  { name: 'idPath', type: 'String', required: false, default: "'id'", description: 'Key path to the unique id on each blob.' },
  { name: 'namePath', type: 'String', required: false, default: "'name'", description: 'Key path to the display name.' },
  { name: 'urlPath', type: 'String', required: false, default: "'url'", description: 'Key path to the file URL (used for image preview and copy-to-clipboard).' },
  { name: 'directoryPath', type: 'String', required: false, default: "'directory'", description: 'Key path to the folder path string (e.g. "products/images").' },
  { name: 'typePath', type: 'String', required: false, default: "'type'", description: 'Key path to the MIME type string.' },
  { name: 'sizePath', type: 'String', required: false, default: "'size'", description: 'Key path to the file size in bytes.' },
  { name: 'extPath', type: 'String', required: false, default: "'ext'", description: 'Key path to the file extension.' },
  { name: 'createdAtPath', type: 'String', required: false, default: "'created_at'", description: 'Key path to the created-at timestamp.' },
  { name: 'updatedAtPath', type: 'String', required: false, default: "'updated_at'", description: 'Key path to the updated-at timestamp.' },
  { name: 'existsPath', type: 'String', required: false, default: "'exists'", description: 'Key path to the file-existence flag (true/false/null). false → missing-file badge shown.' },
  { name: 'initialPath', type: 'String', required: false, default: "''", description: 'Folder to open on mount. Empty string = root.' },
  { name: 'isLoading', type: 'Boolean', required: false, default: 'false', description: 'Show skeleton UI while true.' },
];

const emitsTable = [
  { name: 'file-click', payload: 'blob', when: 'A file card is clicked.' },
  { name: 'folder-click', payload: 'path: string', when: 'A folder card is clicked (fires before internal navigation).' },
  { name: 'navigate', payload: 'path: string', when: 'Current folder changed (sidebar, card, or breadcrumb).' },
];

const slotsTable = [
  { name: 'toolbar', purpose: 'Rendered above the breadcrumb, full width. No slot props. Intended for Upload / New Folder buttons.' },
  { name: 'empty-state', purpose: 'Rendered when the current folder has no files or sub-folders. Defaults to "This folder is empty."' },
];

const subPropsTable = [
  { name: 'node', type: 'Object', required: true, default: null, description: 'Folder node object with { name, path, subfolders, files }.' },
  { name: 'currentPath', type: 'String', required: true, default: null, description: 'Currently active folder path. Used to highlight the active row.' },
  { name: 'expandedFolders', type: 'Object (Set)', required: true, default: null, description: 'Set of expanded folder paths.' },
  { name: 'depth', type: 'Number', required: false, default: '0', description: 'Nesting depth — drives the left indent (depth × 16px).' },
];
</script>