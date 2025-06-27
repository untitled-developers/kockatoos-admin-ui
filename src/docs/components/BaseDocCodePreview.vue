<template>
  <div>
    <div class="bg-stone-800 text-white font-medium flex items-center justify-between p-2 px-4 rounded-t-lg">
      <div>
        {{ title }}
      </div>
      <button type="button"
              @click="copyToClipboard"
              class="group/button cursor-pointer overflow-hidden rounded-full py-1 pr-3 pl-2 text-2xs font-medium backdrop-blur-sm transition group-hover:opacity-100 focus:opacity-100 bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5">
        <span aria-hidden="false"
              class="pointer-events-none flex items-center gap-0.5 text-zinc-300 transition duration-300"><svg
            viewBox="0 0 20 20" aria-hidden="true"
            class="h-5 w-5 fill-zinc-400/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400"><path
            stroke-width="0"
            d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"></path><path
            fill="none" stroke-linejoin="round"
            d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"></path></svg>Copy</span>
      </button>
    </div>
    <pre :class="['rounded-b-lg !mt-0', `language-${language}`]"><code ref="code">{{ source }}</code>
  </pre>
  </div>
</template>

<script setup>
import Prism from 'prismjs'
import {onMounted, ref} from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  language: {
    type: String,
    default: 'javascript'
  }
})

const code = ref()

function copyToClipboard() {
  if (code.value) {
    const text = code.value.innerText;
    navigator.clipboard.writeText(text).then(() => {
      console.log('Code copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy code: ', err);
    });
  }
}

onMounted(() => {
  if (!window.Prism) {
    window.Prism = {}
    window.Prism.manual = true
  }
  Prism.highlightElement(code.value)
})


</script>

<style scoped>

</style>