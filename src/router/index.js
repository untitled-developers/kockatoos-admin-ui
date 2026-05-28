import {createRouter, createWebHashHistory} from 'vue-router'
import App from "../App.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: App,
            redirect: '/playground',
        },

        // ── Layout ────────────────────────────────────────────────────────────
        {
            path: '/base-card',
            name: 'BaseCard',
            component: () => import('../views/BaseCard/BaseCardView.vue'),
            meta: {
                title: 'BaseCard',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/components/BaseCard.vue',
                description: 'A simple white card container with optional header, default, and footer slots. Wraps content in a rounded, shadowed box consistent with the admin panel design.',
                tags: ['layout', 'card', 'container'],
            },
        },
        {
            path: '/base-stacked-layout',
            name: 'BaseStackedLayout',
            component: () => import('../views/BaseStackedLayout/BaseStackedLayoutView.vue'),
            meta: {
                title: 'BaseStackedLayout',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/components/BaseStackedLayout.vue',
                description: 'A horizontal tab-bar layout that wraps PrimeVue Menubar with router-link support. Renders a top navigation strip plus a default content slot beneath it.',
                tags: ['layout', 'stacked', 'navigation', 'tabs'],
            },
        },

        // ── Forms ─────────────────────────────────────────────────────────────
        {
            path: '/base-form',
            name: 'base-form',
            component: () => import('../views/BaseForm/BaseFormView.vue'),
            meta: {
                title: 'BaseForm',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/components/BaseForm.vue',
                description: 'A form wrapper that handles Zod schema validation. Exposes getErrors and hasError to its default slot so child inputs can display field-level validation messages.',
                tags: ['forms', 'validation', 'zod'],
            },
        },
        {
            path: '/base-input-container',
            name: 'base-input-container',
            component: () => import('../views/BaseInputContainer/BaseInputContainerView.vue'),
            meta: {
                title: 'BaseInputContainer',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/components/BaseInputContainer.vue',
                description: 'Wraps any input element with a consistent label, optional help text, and validation error messages. Use inside BaseForm to wire up field-level errors automatically.',
                tags: ['forms', 'input', 'validation', 'label'],
            },
        },

        // ── Inputs ────────────────────────────────────────────────────────────
        {
            path: '/base-rich-editor',
            name: 'BaseRichEditor',
            component: () => import('../views/BaseRichEditor/BaseRichEditorView.vue'),
            meta: {
                title: 'BaseRichEditor',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/components/BaseRichEditor.vue',
                description: 'A full-featured WYSIWYG rich text editor powered by CKEditor 5. Supports v-model binding, multi-language content, and a comprehensive toolbar.',
                tags: ['inputs', 'editor', 'wysiwyg', 'ckeditor'],
            },
        },
        {
            path: '/base-location-input',
            name: 'BaseLocationInput',
            component: () => import('../views/BaseLocationInput/BaseLocationInputView.vue'),
            meta: {
                title: 'BaseLocationInput',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/components/BaseLocationInput.vue',
                description: 'An interactive Google Maps picker that lets users drag a marker to select a latitude/longitude. Emits a change event with the new coordinates.',
                tags: ['inputs', 'location', 'map', 'google-maps'],
            },
        },
        {
            path: '/base-working-hours-schedule',
            name: 'BaseWorkingHoursSchedule',
            component: () => import('../views/BaseWorkingHoursSchedule/BaseWorkingHoursScheduleView.vue'),
            meta: {
                title: 'BaseWorkingHoursSchedule',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/components/BaseWorkingHoursSchedule.vue',
                description: 'A weekly schedule editor. Provides a table of days with open/closed toggles and time pickers for opening and closing times. Uses v-model to bind the schedule array.',
                tags: ['inputs', 'schedule', 'working-hours'],
            },
        },
        {
            path: '/base-group-items-selector',
            name: 'BaseGroupItemsSelector',
            component: () => import('../views/BaseGroupItemsSelector/BaseGroupItemsSelectorView.vue'),
            meta: {
                title: 'BaseGroupItemsSelector',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/components/BaseGroupItemsSelector.vue',
                description: 'A grouped item picker with a searchable list. Users select a group from a dropdown then pick items from that group; selected items accumulate in a v-model array.',
                tags: ['inputs', 'selector', 'group'],
            },
        },
        {
            path: '/base-table-toggle-select',
            name: 'BaseTableToggleSelect',
            component: () => import('../views/BaseTableToggleSelect/BaseTableToggleSelectView.vue'),
            meta: {
                title: 'BaseTableToggleSelect',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/components/BaseTableToggleSelect.vue',
                description: 'A styled dropdown select that applies colour-coded styles per value via a colorMapping prop. Emits a change event when the selection changes.',
                tags: ['inputs', 'table', 'toggle', 'select'],
            },
        },

        // ── Display ───────────────────────────────────────────────────────────
        {
            path: '/base-alert',
            name: 'BaseAlert',
            component: () => import('../views/BaseAlert/BaseAlertView.vue'),
            meta: {
                title: 'BaseAlert',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/components/BaseAlert.vue',
                description: 'A thin wrapper around PrimeVue Toast configured for use across the admin panel. Rendered once in BaseApp; interact with it via the useAlerts composable.',
                tags: ['display', 'alert', 'notification', 'toast'],
            },
        },
        {
            path: '/base-chart',
            name: 'BaseChart',
            component: () => import('../views/BaseChart/BaseChartView.vue'),
            meta: {
                title: 'BaseChart',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/components/BaseChart.vue',
                description: 'A reactive ECharts wrapper. Accepts an options object (any ECharts chart spec), auto-resizes on window resize, and cleanly disposes on unmount. Requires echarts to be installed in your project.',
                tags: ['display', 'chart', 'echarts', 'visualization'],
            },
        },
        {
            path: '/base-description-list',
            name: 'BaseDescriptionList',
            component: () => import('../views/BaseDescriptionList/BaseDescriptionListView.vue'),
            meta: {
                title: 'BaseDescriptionList',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/components/BaseDescriptionList.vue',
                description: 'A definition list container with a title, optional subtitle, and configurable column count. Pair with BaseDescriptionListItem for each row.',
                tags: ['display', 'description-list', 'details'],
            },
        },
        {
            path: '/base-record-details-card',
            name: 'BaseRecordDetailsCard',
            component: () => import('../views/BaseRecordDetailsCard/BaseRecordDetailsCardView.vue'),
            meta: {
                title: 'BaseRecordDetailsCard',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/components/BaseRecordDetailsCard.vue',
                description: 'A header card for a record detail page. Shows a circular profile image, a primary title, and a subtitle slot for secondary metadata.',
                tags: ['display', 'record', 'card', 'details'],
            },
        },
        {
            path: '/base-loader-overlay',
            name: 'BaseLoaderOverlay',
            component: () => import('../views/BaseLoaderOverlay/BaseLoaderOverlayView.vue'),
            meta: {
                title: 'BaseLoaderOverlay',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/components/BaseLoaderOverlay.vue',
                description: 'An inline spinner overlay rendered at a configurable size. Useful for wrapping a relative-positioned container while content is loading.',
                tags: ['display', 'loader', 'overlay', 'loading'],
            },
        },
        {
            path: '/base-image-display',
            name: 'BaseImageDisplay',
            component: () => import('../views/BaseImageDisplay/BaseImageDisplayView.vue'),
            meta: {
                title: 'BaseImageDisplay',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/components/BaseImageDisplay.vue',
                description: 'Renders an image with a click-to-preview lightbox when a URL is provided, or a placeholder icon when the URL is empty. Supports small / medium / large size presets or any Tailwind class.',
                tags: ['display', 'image', 'media'],
            },
        },

        // ── CRUD Table ────────────────────────────────────────────────────────
        {
            path: '/base-crud-table',
            name: 'BaseCrudTable',
            component: () => import('../views/BaseCrudTable/BaseCrudTableView.vue'),
            meta: {
                title: 'BaseCrudTable',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/components/BaseCrudTable.vue',
                description: 'A full-featured lazy-loaded CRUD data table backed by a REST endpoint. Provides server-side pagination, sorting, filtering, row actions, and an integrated edit dialog.',
                tags: ['crud', 'table', 'data', 'pagination'],
            },
        },

        // ── Dialogs ───────────────────────────────────────────────────────────
        // {
        //     path: '/base-dialog',
        //     name: 'BaseDialog',
        //     component: () => import('../views/BaseDialog/BaseDialogView.vue'),
        //     meta: {
        //         title: 'BaseDialog',
        //         url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/components/BaseDialog.vue',
        //         description: 'A modal dialog with a header, content slot, and a three-section footer toolbar. Typically opened via the useDialog composable.',
        //         tags: ['dialogs', 'dialog', 'modal'],
        //     },
        // },
        {
            path: '/base-confirm-dialog',
            name: 'BaseConfirmDialog',
            component: () => import('../views/BaseConfirmDialog/BaseConfirmDialogView.vue'),
            meta: {
                title: 'BaseConfirmDialog',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/components/BaseConfirmDialog.vue',
                description: 'A styled confirmation dialog with a severity-coloured icon, header, message body, and accept / reject buttons. Interact with it via the useConfirmDialog composable.',
                tags: ['dialogs', 'confirm', 'modal'],
            },
        },
        {
            path: '/base-edit-dialog',
            name: 'BaseEditDialog',
            component: () => import('../views/BaseEditDialog/BaseEditDialogView.vue'),
            meta: {
                title: 'BaseEditDialog',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/components/BaseEditDialog.vue',
                description: 'Dialog component designed to work with BaseCrudTable for adding, editing, or viewing table records',
                tags: ['dialog', 'crud', 'table', 'edit'],
            },
        },

        // ── Media ─────────────────────────────────────────────────────────────
        {
            path: '/base-file-manager',
            name: 'BaseFileManager',
            component: () => import('../views/BaseFileManager/BaseFileManagerView.vue'),
            meta: {
                title: 'BaseFileManager',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/components/BaseFileManager.vue',
                description: 'File manager with sidebar folder tree and card grid. Display-only; takes a flat list of blobs.',
                tags: ['file-manager', 'media', 'gallery'],
            },
        },
        {
            path: '/base-media-manager',
            name: 'BaseMediaManager',
            component: () => import('../views/BaseMediaManager/BaseMediaManagerView.vue'),
            meta: {
                title: 'BaseMediaManager',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/components/BaseMediaManager.vue',
                description: 'Props-less wrapper around BaseFileManager that auto-fetches the full blob library from the consumer backend (api/blobs). The one-liner embed for an admin media page.',
                tags: ['media', 'media-manager', 'blobs'],
            },
        },
        {
            path: '/base-gallery',
            name: 'BaseGallery',
            component: () => import('../views/BaseGallery/BaseGalleryView.vue'),
            meta: {
                title: 'BaseGallery',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/components/BaseGallery.vue',
                description: 'A sortable, selectable image gallery with drag-and-drop reordering. Supports multi-select and bulk delete. Bind an array of image objects via v-model.',
                tags: ['media', 'gallery', 'images'],
            },
        },
        {
            path: '/base-single-image-uploader',
            name: 'BaseSingleImageUploader',
            component: () => import('../views/BaseSingleImageUploader/BaseSingleImageUploaderView.vue'),
            meta: {
                title: 'BaseSingleImageUploader',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/components/BaseSingleImageUploader.vue',
                description: 'A click-to-upload single image field with inline preview. Validates size against maxImageSize and emits a change event with the selected File object.',
                tags: ['media', 'uploader', 'image'],
            },
        },
        {
            path: '/base-multi-image-uploader',
            name: 'BaseMultiImageUploader',
            component: () => import('../views/BaseMultiImageUploader/BaseMultiImageUploaderView.vue'),
            meta: {
                title: 'BaseMultiImageUploader',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/components/BaseMultiImageUploader.vue',
                description: 'A drop-zone uploader for multiple images with per-file upload status (uploading / success / error). Supports drag-and-drop and compact mode.',
                tags: ['media', 'uploader', 'multi', 'images'],
            },
        },
        {
            path: '/base-video-uploader',
            name: 'BaseVideoUploader',
            component: () => import('../views/BaseVideoUploader/BaseVideoUploaderView.vue'),
            meta: {
                title: 'BaseVideoUploader',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/components/BaseVideoUploader.vue',
                description: 'A video file picker with inline preview and duration display. Validates MIME type and file size against maxUploadSize. Emits a change event with the selected File.',
                tags: ['media', 'uploader', 'video'],
            },
        },

        // ── Composables ───────────────────────────────────────────────────────
        {
            path: '/use-alerts',
            name: 'useAlerts',
            component: () => import('../views/useAlerts/useAlertsView.vue'),
            meta: {
                title: 'useAlerts',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/composables/useAlerts.js',
                description: 'Shows PrimeVue toast notifications with a consistent 3-second lifetime. Returns alertSuccess, alertError, alertWarning, alertInfo helpers.',
                tags: ['composables', 'alerts', 'notifications'],
            },
        },
        {
            path: '/use-confirm-dialog',
            name: 'useConfirmDialog',
            component: () => import('../views/useConfirmDialog/useConfirmDialogView.vue'),
            meta: {
                title: 'useConfirmDialog',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/composables/useConfirmDialog.js',
                description: 'Opens a BaseConfirmDialog with accept/reject callbacks. Returns confirmDanger, confirmSuccess, confirmWarning, confirmInfo helpers.',
                tags: ['composables', 'confirm', 'dialog'],
            },
        },
        {
            path: '/use-create-form-schema',
            name: 'useCreateFormSchema',
            component: () => import('../views/useCreateFormSchema/useCreateFormSchemaView.vue'),
            meta: {
                title: 'useCreateFormSchema',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/composables/useCreateFormSchema.js',
                description: 'Wraps a Zod schema to apply standard admin conventions: auto-omits the password field when editing an existing record, and extends the schema with per-language sub-schemas.',
                tags: ['composables', 'form', 'schema', 'zod'],
            },
        },
        {
            path: '/use-crud-api',
            name: 'useCrudApi',
            component: () => import('../views/useCrudApi/useCrudApiView.vue'),
            meta: {
                title: 'useCrudApi',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/composables/useCrudApi.js',
                description: 'Thin HTTP wrapper around a REST endpoint. Returns get, create, update, destroy methods that call the configured endpoint via axios.',
                tags: ['composables', 'crud', 'api', 'http'],
            },
        },
        {
            path: '/use-crud-table',
            name: 'useCrudTable',
            component: () => import('../views/useCrudTable/useCrudTableView.vue'),
            meta: {
                title: 'useCrudTable',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/composables/useCrudTable.js',
                description: 'Controls a BaseCrudTable from outside. Pass a ref to the table and call fetchTableData, startRowLoading, stopRowLoading, updateRecordData, startTableLoading, stopTableLoading, refreshEditDialog.',
                tags: ['composables', 'crud', 'table'],
            },
        },
        {
            path: '/use-dialog',
            name: 'useDialog',
            component: () => import('../views/useDialog/useDialogView.vue'),
            meta: {
                title: 'useDialog',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/composables/useDialog.js',
                description: 'Opens any Vue component as a managed dialog. Returns openDialog (returns a dialogId), closeDialog, updateDialogProps, and refreshDialog.',
                tags: ['composables', 'dialog'],
            },
        },
        {
            path: '/use-edit-dialog',
            name: 'useEditDialog',
            component: () => import('../views/useEditDialog/useEditDialogView.vue'),
            meta: {
                title: 'useEditDialog',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/composables/useEditDialog.js',
                description: 'Controls a BaseEditDialog ref from inside the dialog content component. Returns startDialogLoading and stopDialogLoading to show/hide the dialog\'s loading overlay.',
                tags: ['composables', 'edit-dialog'],
            },
        },
        {
            path: '/use-form',
            name: 'useForm',
            component: () => import('../views/useForm/useFormView.vue'),
            meta: {
                title: 'useForm',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/composables/useForm.js',
                description: 'Validates a reactive form object against a Zod schema. Returns errors (computed), getErrors(path) for field-level messages, and hasErrors().',
                tags: ['composables', 'form'],
            },
        },
        {
            path: '/use-global-loader',
            name: 'useGlobalLoader',
            component: () => import('../views/useGlobalLoader/UseGlobalLoaderView.vue'),
            meta: {
                title: 'useGlobalLoader',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/composables/useGlobalLoader.js',
                description: 'Displays a full-screen loader overlay on top of the entire admin panel. Returns startLoader(message?) and stopLoader().',
                tags: ['composables', 'loader', 'global'],
            },
        },
        {
            path: '/use-media-api',
            name: 'useMediaApi',
            component: () => import('../views/useMediaApi/useMediaApiView.vue'),
            meta: {
                title: 'useMediaApi',
                url: 'https://github.com/untitled-developers/kockatoos-admin-ui/blob/main/src/composables/useMediaApi.js',
                description: 'Pre-configured useCrudApi for the api/blobs endpoint. Returns get and update methods for the media library.',
                tags: ['composables', 'media', 'api', 'http'],
            },
        },

        // ── Legacy / other ────────────────────────────────────────────────────
        {
            path: '/functions',
            name: 'functions',
            component: () => import('../views/Functions/FunctionsView.vue'),
        },
    ],
})

export default router
