<template>
  <div>
    <IconField>
      <InputIcon class="pi pi-search"/>
      <InputText @input="handleSearchQueryChange" v-model="searchQuery" placeholder="Search" style="width: 400px"/>
    </IconField>
    <Popover ref="searchResultPopover" @hide="handlePopoverHide">
      <div style="width: 400px">
        <ul>
          <li v-for="searchItem in searchResults">
            <router-link :to="{name: searchItem.item.route.name}"
                         class="flex flex-col hover:bg-gray-100 p-2 rounded-sm">
              <div class="text-lg font-medium">{{ searchItem.item.title }}</div>
              <div>{{ searchItem.item.description }}</div>
            </router-link>
          </li>
        </ul>
      </div>
    </Popover>
  </div>

</template>

<script setup>

import {IconField, InputIcon, InputText, Popover} from "primevue";

import Fuse from "fuse.js";
import {ref} from "vue";
import {useDocsStore} from "../docs/DocsStore.js";

const searchResultPopover = ref(null);
const searchQuery = ref("")
const searchResults = ref(null);
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
    "description"
  ]
};
const fuse = new Fuse(docsList, fuseOptions);

function handleSearchQueryChange(event) {
  searchQuery.value = event.target.value
  searchResults.value = fuse.search(searchQuery.value)
  if (searchResults.value.length > 0) {
    searchResultPopover.value.show(event);
  } else {
    searchResultPopover.value.hide();
  }
}

function handlePopoverHide() {
  searchQuery.value = "";
  searchResults.value = null;
}

</script>

<style scoped>

</style>