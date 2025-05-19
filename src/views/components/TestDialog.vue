<template>

  <BaseEditDialog ref="test" :loading="loading" header="TEST" @submit="isLoadingFn">
    <template #content>
      <BaseRichEditor v-model="test"></BaseRichEditor>
      <button @click="isLoadingFn">test</button>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a libero sagittis, interdum turpis eu, rutrum
      mi. Nam pulvinar lectus sit amet enim fringilla tempus. Fusce fermentum massa vitae turpis feugiat iaculis. In
      posuere lacus quis erat sagittis, nec pellentesque erat hendrerit. Aliquam sit amet aliquet nisi. Pellentesque
      rhoncus convallis nibh, sit amet ornare diam vulputate mollis. Aenean elementum facilisis dui, sit amet tempus
      urna interdum in. Nulla lobortis sodales nisl, a elementum turpis fringilla quis. Sed faucibus, lectus ultricies
      viverra vestibulum, nibh metus sagittis lacus, ac porta enim erat ut dui. Fusce porta sagittis maximus. Nullam
      varius rutrum diam, vitae convallis ante tincidunt sit amet. Nulla facilisi. Integer mi ipsum, suscipit in
      porttitor non, malesuada vitae odio.

      In vel pretium erat, id convallis libero. Fusce sit amet placerat sapien. Nunc aliquam enim ac fringilla
      scelerisque. Nam sit amet tellus et nulla posuere finibus vitae a massa. Aenean interdum nulla nec condimentum
      consequat. Aliquam sed aliquet ipsum. Suspendisse nec semper neque, eget tincidunt justo. Morbi nunc ex, pharetra
      nec massa cursus, ullamcorper molestie urna. Aliquam erat volutpat. Pellentesque egestas elit sed nisl ultricies
      dictum. Maecenas a rutrum diam, sit amet accumsan magna. Suspendisse potenti. Curabitur gravida velit eget sapien
      tincidunt feugiat. Phasellus non nisi condimentum, vulputate purus eget, gravida lorem. Integer feugiat elit nec
      justo eleifend, vitae tristique dolor pharetra.

      Sed ut augue sit amet dui pellentesque lacinia quis id eros. Donec ullamcorper, nisi eu lacinia placerat, velit
      magna rhoncus felis, non consectetur ligula felis malesuada justo. Sed nec justo velit. Pellentesque mattis sit
      amet elit et imperdiet. Aenean nec ornare sapien, sit amet faucibus mi. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Pellentesque ut gravida tortor, vel dignissim felis.

      Praesent placerat lobortis velit et faucibus. Morbi congue auctor sem. Fusce mollis, velit nec molestie convallis,
      enim ipsum imperdiet justo, sit amet semper ante justo vitae ante. Phasellus ut nunc sit amet turpis tincidunt
      aliquam. Vivamus sed diam et tellus blandit hendrerit et a quam. Morbi vehicula nulla neque, eget feugiat tortor
      imperdiet sollicitudin. Etiam a ante imperdiet, laoreet arcu ac, porta augue. Aenean eu scelerisque leo.

      Sed ut augue sit amet dui pellentesque lacinia quis id eros. Donec ullamcorper, nisi eu lacinia placerat, velit
      magna rhoncus felis, non consectetur ligula felis malesuada justo. Sed nec justo velit. Pellentesque mattis sit
      amet elit et imperdiet. Aenean nec ornare sapien, sit amet faucibus mi. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Pellentesque ut gravida tortor, vel dignissim felis.

      Praesent placerat lobortis velit et faucibus. Morbi congue auctor sem. Fusce mollis, velit nec molestie convallis,
      enim ipsum imperdiet justo, sit amet semper ante justo vitae ante. Phasellus ut nunc sit amet turpis tincidunt
      aliquam. Vivamus sed diam et tellus blandit hendrerit et a quam. Morbi vehicula nulla neque, eget feugiat tortor
      imperdiet sollicitudin. Etiam a ante imperdiet, laoreet arcu ac, porta augue. Aenean eu scelerisque leo.

      Sed ut augue sit amet dui pellentesque lacinia quis id eros. Donec ullamcorper, nisi eu lacinia placerat, velit
      magna rhoncus felis, non consectetur ligula felis malesuada justo. Sed nec justo velit. Pellentesque mattis sit
      amet elit et imperdiet. Aenean nec ornare sapien, sit amet faucibus mi. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Pellentesque ut gravida tortor, vel dignissim felis.

      Praesent placerat lobortis velit et faucibus. Morbi congue auctor sem. Fusce mollis, velit nec molestie convallis,
      enim ipsum imperdiet justo, sit amet semper ante justo vitae ante. Phasellus ut nunc sit amet turpis tincidunt
      aliquam. Vivamus sed diam et tellus blandit hendrerit et a quam. Morbi vehicula nulla neque, eget feugiat tortor
      imperdiet sollicitudin. Etiam a ante imperdiet, laoreet arcu ac, porta augue. Aenean eu scelerisque leo.
    </template>
  </BaseEditDialog>
</template>

<script setup>
import BaseEditDialog from "../../components/BaseEditDialog.vue";
import {onMounted, ref} from "vue";
import useEditDialog from "../../composables/useEditDialog.js";
import BaseRichEditor from "../../components/BaseRichEditor.vue";

const test = ref(null)

const {startDialogLoading} = useEditDialog(test)

</script>

<style scoped>


</style>