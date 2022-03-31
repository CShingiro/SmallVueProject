<template>
    <vue3-input-tags class="tag-input" :tags="tags"
                     placeholder="input tags" />
</template>

<script>
import { defineComponent } from 'vue';
import Vue3InputTags from 'vue3-input-tags';

export default defineComponent({
  components: {
    Vue3InputTags
  },

  data() {
    return {
      tags: []
    }
  },
})
</script>

<style scoped>
.tag-input {
  width: 200px;
  align-self: center;
}
</style>
