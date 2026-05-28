> If you're an agent, start here.

# kockatoos-admin-ui — Agent Guide

## What this library is

`kockatoos-admin-ui` is a **Vue 3 component library** for Laravel admin panels. It provides ~25 first-party components and 10 composables built on PrimeVue, Tailwind, and Vite. It has **no Laravel runtime dependency** — it is a pure Vue 3 / JavaScript package. It is a sibling to `kockatoos-admin-core` (the Laravel service provider) and is consumed by `template/` (the deployable admin panel app).

## Directory layout

```
src/
  components/   — every first-party Vue component (BaseCard.vue, BaseCrudTable.vue, …)
  composables/  — every composable (useAlerts.js, useCrudApi.js, …)
  stores/       — Pinia stores (DialogStore, LoaderStore)
  views/        — sandbox documentation pages (one view per exported component / composable)
  docs/         — BaseDoc* primitives used by sandbox pages
  router/       — vue-router config (hash history; route meta drives the search index)
```

## How the library is exported

Consumers import directly by path:

```js
import BaseCard from "kockatoos-admin-ui/components/BaseCard.vue";
import useAlerts from "kockatoos-admin-ui/composables/useAlerts.js";
import { useDialogStore } from "kockatoos-admin-ui/stores/DialogStore";
```

## Component and composable catalogue

### Layout
- **`BaseCard`** — white card container with optional header, default, and footer slots.
- **`BaseStackedLayout`** — horizontal tab-bar layout (PrimeVue Menubar) with router-link support and a content slot above the tabs.

### Forms
- **`BaseForm`** — form wrapper that validates against a Zod schema; exposes `getErrors(path)` and `hasError()` to its default slot.
- **`BaseInputContainer`** — wraps any input with a consistent label, optional help text, and field-level error display.

### Inputs
- **`BaseRichEditor`** — CKEditor 5 WYSIWYG editor, `v-model` bound, multi-language content support.
- **`BaseLocationInput`** — Google Maps draggable-marker picker; emits `change` with `{ latitude, longitude }`.
- **`BaseWorkingHoursSchedule`** — weekly schedule editor with open/closed toggles and time pickers; `v-model`.
- **`BaseGroupItemsSelector`** — grouped item picker with search; `v-model:selectedItems`.
- **`BaseTableToggleSelect`** — colour-coded status dropdown; emits `change`.

### Display
- **`BaseAlert`** — PrimeVue Toast outlet (included in BaseApp — use `useAlerts` to trigger messages).
- **`BaseChart`** — reactive ECharts wrapper; requires `echarts` installed in the consumer project.
- **`BaseDescriptionList`** — `<dl>` container with title, subtitle, and configurable column count (sub-component: `BaseDescriptionListItem`).
- **`BaseRecordDetailsCard`** — circular profile image + title + subtitle-slot header card.
- **`BaseLoaderOverlay`** — inline spinner overlay at configurable size and background.
- **`BaseImageDisplay`** — image with PrimeVue lightbox preview or placeholder icon; small/medium/large size presets.

### CRUD Table
- **`BaseCrudTable`** — lazy-loaded CRUD data table with server-side pagination, multi-sort, filtering, and edit dialog integration.
  Sub-components: `BaseCrudTableColumn`, `BaseCrudTableColumnFilter`, `BaseCrudTableFilterButton`, `BaseCrudTableActionsButton`, `BaseCrudTableActionsDropdown`.

### Dialogs
- **`BaseDialog`** — modal with header, `content` slot, and a three-section footer toolbar (sub-component: `BaseDialogTabLabel`).
- **`BaseConfirmDialog`** — severity-styled confirm dialog; use `useConfirmDialog` to trigger.
- **`BaseEditDialog`** — full-featured add/edit dialog with Zod validation, loading overlay, and prev/next navigation (sub-component: `BaseEditDialogNavigationButtons`).

### Media
- **`BaseFileManager`** — display-only file manager: sidebar folder tree + card grid from a flat blob array (sub-component: `FolderTreeNode`).
- **`BaseMediaManager`** — props-less smart wrapper around `BaseFileManager`; auto-fetches `api/blobs`.
- **`BaseGallery`** — sortable, selectable image gallery with drag-and-drop reordering; `v-model`.
- **`BaseSingleImageUploader`** — click-to-upload single image with inline preview; emits `change` (File).
- **`BaseMultiImageUploader`** — drop-zone multi-image uploader with per-file upload-status tracking.
- **`BaseVideoUploader`** — video file picker with inline preview and duration display; emits `change` (File).

### Composables
- **`useAlerts`** — `const { alertSuccess, alertError, alertWarning, alertInfo } = useAlerts()`
- **`useConfirmDialog`** — `const { confirmDanger, confirmSuccess, confirmWarning, confirmInfo } = useConfirmDialog()`
- **`useCreateFormSchema`** — `const { createFormSchema } = useCreateFormSchema({ props })` — auto-omits password on edit.
- **`useCrudApi`** — `const { get, create, destroy, update } = useCrudApi(endpoint)`
- **`useCrudTable`** — `const { fetchTableData, startRowLoading, stopRowLoading, updateRecordData, … } = useCrudTable(crudTableRef)`
- **`useDialog`** — `const { openDialog, closeDialog, updateDialogProps, refreshDialog } = useDialog()`
- **`useEditDialog`** — `const { startDialogLoading, stopDialogLoading } = useEditDialog(dialogRef)`
- **`useForm`** — `const { errors, getErrors, hasErrors } = useForm(formRef, formSchema)`
- **`useGlobalLoader`** — `const { startLoader, stopLoader } = useGlobalLoader()`
- **`useMediaApi`** — `const { get, update } = useMediaApi()` — pre-wired to `api/blobs`.

## Authoritative reference

When the dev server is running (`npm run dev` in `ui/`, or `php artisan serve` + `npm run dev` in `template/`), the **live in-app sandbox** is the authoritative reference for every component's props, emits, slots, and interactive examples:

- Standalone: `http://localhost:5173/#/<component-name>`
- Inside consumer template: `http://localhost:8000/admin-ui/#/<component-name>`

## Conventions

- **Components** use the `Base*` prefix. App-shell components (`BaseApp`, `BaseMainLayout`, `BasePageContent`, `BaseDialogFactory`, `BaseGlobalLoader`) are excluded from the sandbox.
- **Composables** use the `use*` prefix.
- One component per file. File name matches component name exactly.
- **Adding a new component:** create the `.vue` in `src/components/`, create a sandbox view at `src/views/<Name>/<Name>View.vue` following the BaseDoc skeleton, add a route entry in `src/router/index.js` with full `meta` (title, description, url, tags), and add a nav entry in `src/App.vue` under the correct category.
- **Sub-components** (tightly coupled to a parent, not used standalone) are documented as additional sections inside their parent's sandbox page — not as separate routes. See the sub-component → parent mapping in the spec (FR-6).

## Constitution rules (key principles for this project)

- **§1 P6:** Follow PrimeVue and Vue 3 idioms. Use PrimeVue components rather than rolling custom equivalents.
- **§1 P10:** Respect project boundaries. Do not import `ui` internals from `template/` beyond the published `package.json` exports.
- **§1 P11:** Public API contracts are sacred. Never rename props, remove emits, or change composable return shapes without a spec.
- **§3:** `ui/` has no automated test runner. Verification is screenshots and manual steps.

## Workflow

Changes to this library follow the sindri workflow:

1. `sindri:specify` — write a spec (what/why)
2. `sindri:plan` — design the approach (how)
3. `sindri:implement` — build with evidence
4. `sindri:verify` — prove every requirement is met

Specs live in `specs/` at the admin-panel monorepo root (`admin-panel/specs/<slug>/`).