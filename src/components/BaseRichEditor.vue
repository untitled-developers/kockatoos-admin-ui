<template>
  <div>
    <div class="ckeditor-classic" :key="editorKey">
      <ckeditor v-model="editorData" :editor="editor" :config="editorConfig" :disabled="isReadOnly" ref="ckeditor"
                @ready="onEditorReady"></ckeditor>
      <div class="editor_container__word-count" ref="editorWordCountElement"></div>
      <div v-if="error" class="invalid-feedback" style="display: block">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
/**
 * Created by: Hussein Al Mawla
 */
//ToDo work in progress
import {Ckeditor} from '@ckeditor/ckeditor5-vue';
import {
  ClassicEditor,
  Alignment,
  AutoImage,
  Autoformat,
  AutoLink,
  BlockQuote,
  Bold,
  BalloonToolbar,
  Base64UploadAdapter,
  SimpleUploadAdapter,
  Essentials,
  FindAndReplace,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  GeneralHtmlSupport,
  Heading,
  Highlight,
  HorizontalLine,
  Image,
  ImageBlock,
  ImageCaption,
  ImageInline,
  ImageInsert,
  ImageInsertViaUrl,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  ImageResize,
  ImageCaptionUI,
  ImageTextAlternative,
  Indent,
  IndentBlock,
  Italic,
  Link,
  LinkImage,
  List,
  ListProperties,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextTransformation,
  TodoList,
  Underline,
  WordCount,
  Autosave,
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

export default {
  name: "BaseRichEditor",
  emits: ['update:modelValue', 'ready', 'input'],
  components: {
    ckeditor: Ckeditor,
  },
  props: {
    modelValue: {},
    language: {
      type: String,
      default: 'en'
    },
    error: {
      type: String,
      default: ''
    },
  },

  data() {
    return {
      /**
       * Added this due to glitch where the editor would not display the toolbar correctly when placed inside our edit dialog due to the animation
       */
      editorKey: 0,
      editorInstance: null,
      isReadOnly: false,
      editor: ClassicEditor,
      editorConfig: {
        mediaEmbed: {
          previewsInData: true,
        },
        simpleUpload: {
          // The URL that the images are uploaded to.
          uploadUrl: '/api/articles/uploadImage',

          // Enable the XMLHttpRequest.withCredentials property.
          withCredentials: true,
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            //Get csrf token from meta tag
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content'),
          }
        },
        language: {
          ui: 'en',
          content: this.language
        },
        link: {
          decorators: {
            openInNewTab: {
              mode: 'manual',
              label: 'Open in a new tab',
              attributes: {
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            }
          }
        },
        image: {
          toolbar: [
            'toggleImageCaption',
            'imageTextAlternative',
            '|',
            'imageStyle:inline',
            'imageStyle:wrapText',
            'imageStyle:breakText',
            '|',
            'resizeImage'
          ]
        },
        licenseKey: 'GPL',
        plugins: [
          Alignment,
          AutoImage,
          Autoformat,
          AutoLink,
          Autosave,
          BlockQuote,
          Bold,
          Essentials,
          FindAndReplace,
          FontBackgroundColor,
          FontColor,
          FontFamily,
          FontSize,
          GeneralHtmlSupport,
          Heading,
          Highlight,
          HorizontalLine,
          Image,
          ImageBlock,
          ImageCaption,
          ImageInline,
          ImageInsert,
          ImageInsertViaUrl,
          ImageStyle,
          ImageToolbar,
          ImageUpload,
          ImageResize,
          ImageCaptionUI,
          ImageTextAlternative,
          Indent,
          IndentBlock,
          Italic,
          Link,
          LinkImage,
          List,
          ListProperties,
          MediaEmbed,
          Paragraph,
          PasteFromOffice,
          SimpleUploadAdapter,
          SpecialCharacters,
          SpecialCharactersArrows,
          SpecialCharactersCurrency,
          SpecialCharactersEssentials,
          SpecialCharactersLatin,
          SpecialCharactersMathematical,
          SpecialCharactersText,
          Strikethrough,
          Subscript,
          Superscript,
          Table,
          TableCaption,
          TableCellProperties,
          TableColumnResize,
          TableProperties,
          TableToolbar,
          TextTransformation,
          TodoList,
          Underline,
          WordCount
        ],
        toolbar: {
          items: [
            'findAndReplace',
            '|',
            'heading',
            '|',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            '|',
            'link',
            'fontSize',
            'fontColor',
            'highlight',
            'horizontalLine',
            'bulletedList',
            'numberedList',
            '|',
            'outdent',
            'indent',
            'alignment',
            '|',
            'blockQuote',
            'insertTable',
            'imageInsert',
            'mediaEmbed',
            'undo',
            'redo',
          ]
        },
        placeholder: 'Enter Content',
        // ckfinder: {
        //     uploadUrl: '/api/articles/uploadImage',
        //     withCredentials: true,
        //     headers: {
        //         'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('editorData'),
        //         Authorization: 'Bearer'
        //     }
        // },
      },
    }
  },
  computed: {
    editorData: {
      get() {
        return `${this.modelValue}`
      },
      set(newValue) {
        this.$emit('update:modelValue', `${newValue}`)
      }
    }
  },

  methods: {
    onEditorReady(editor) {
      const editorWordCount = this.$refs.editorWordCountElement;

      [...editorWordCount.children].forEach(child => child.remove());

      const wordCount = editor.plugins.get('WordCount');
      editorWordCount.appendChild(wordCount.wordCountContainer);

      // this.editorInstance = editor;
      this.$emit('ready', editor);
    },
    onEditorInput(value) {
      if (this.editorInstance == null) return;
      this.$emit('input', this.editorInstance.editing.view.document);
    },
  },
  mounted() {
    /**
     * Added this due to glitch where the editor would not display the toolbar correctly when placed inside our edit dialog due to the animation
     */
    setTimeout(() => {
      this.editorKey++
    }, 100)
  }
}
</script>

<style>
.ck-editor__editable_inline {
  height: 500px !important;
}

.ck-word-count div {
  display: inline-block;
}

.ck-word-count__words {
  margin-right: 12px;
}

.ck-word-count__words:after {
  margin-left: 12px;
  content: '|' !important;
}

.ck-content h1, .ck-content h2, .ck-content h3, .ck-content h4, .ck-content h5, .ck-content h6 {
  font-size: revert !important;
}

.ck-content a {
  color: rgb(0, 0, 238);
  text-decoration: underline;
}

.ck-on {
  color: var(--p-primary-color) !important;
}
</style>
<style scoped>

</style>
