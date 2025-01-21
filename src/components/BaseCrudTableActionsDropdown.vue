<template>
  <div class="card flex justify-content-center">
    <Button type="button"
            severity="secondary"
            icon="pi pi-ellipsis-v"
            aria-label="Actions"
            @click="toggle"/>
    <Popover ref="op">
      <div class="flex flex-col gap-y-2">
        <slot></slot>
      </div>
    </Popover>
  </div>
</template>

<script setup>
import Button from "primevue/button";
import Popover from "primevue/popover";

import {ref} from "vue";

const op = ref();

const toggle = (event) => {
  op.value.toggle(event);
}
</script>
