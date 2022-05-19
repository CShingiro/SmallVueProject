<template>
    <vue3-input-tags class="tag-input" :tags="tags"
                     placeholder="input tags" />
</template>

<script setup>
import { inject } from 'vue';
import Vue3InputTags from 'vue3-input-tags';

const tags = inject("tags")

</script>

<style scoped>
.tag-input {
  width: 200px;
  align-self: center;
  height: 100px;
}
</style>
