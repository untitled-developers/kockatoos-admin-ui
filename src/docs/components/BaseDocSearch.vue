<template>
  <div>
    <IconField>
      <InputIcon class="pi pi-search"/>
      <InputText @input="handleSearchQueryChange"
                 @focus="handleSearchInputFocus"
                 @blur="handleSearchInputBlur"
                 v-model="searchQuery"
                 placeholder="Search"
                 style="width: 400px"/>
    </IconField>
    <Popover ref="searchResultPopover" :dismissable="false">
      <div style="width: 400px">
        <ul v-if="searchResults.length">
          <li v-for="searchItem in searchResults">
            <router-link :to="{name: searchItem.item.route.name}"
                         class="flex flex-col hover:bg-gray-100 p-2 rounded-sm">
              <div class="text-lg font-medium">{{ searchItem.item.title }}</div>
              <div>{{ searchItem.item.description }}</div>
            </router-link>
          </li>
        </ul>
        <p class="whitespace-normal break-words" v-else>
          <template v-if="searchQuery">
            No results found for <strong>{{ searchQuery }}</strong>.
          </template>
          <template v-else>
            Start typing to search documentation.
          </template>
        </p>
      </div>
    </Popover>
  </div>

</template>

<script setup>

import {IconField, InputIcon, InputText, Popover} from "primevue";

import Fuse from "fuse.js";
import {ref} from "vue";
import {useDocsStore} from "../DocsStore.js";

const searchResultPopover = ref();
const searchQuery = ref("")
const searchResults = ref([]);
const {docsList} = useDocsStore()
const fuseOptions = {
  // isCaseSensitive: false,
  // includeScore: false,
  // ignoreDiacritics: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  // threshold: 0.6,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: [
    "title",
    "description",
    "tags"
  ]
};
const fuse = new Fuse(docsList, fuseOptions);

function handleSearchInputFocus(event) {
  searchResultPopover.value.show(event);
}

function handleSearchInputBlur() {
  setTimeout(() => {
    if (searchQuery.value.length === 0 || searchResults.value.length === 0) {
      searchResultPopover.value.hide();
    }
  }, 100);
}

function handleSearchQueryChange(event) {

  searchQuery.value = event.target.value
  searchResults.value = fuse.search(searchQuery.value)
}


</script>

<style scoped>

</style>