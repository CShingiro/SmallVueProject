<template>
  <div class="students">
    <input v-model="entry" class="searches" placeholder="Search by Name"><br>
    <input v-model="tagSearch" class="searches" placeholder="Search by Tag"><br><br>
    <StudentList
      v-for="student in studentStore.students" :key="student.id" :student="student"
      :average="average = student.grades + '%'" :fullName="fullName = student.firstName + ' ' + student.lastName"
      v-show="fullName.toLowerCase().includes(entry.toLowerCase()) || tags.toLowerCase().includes(tagSearch.toLowerCase())"
    />
  </div>
</template>

<script setup>
// @ is an alias to /src
import StudentList from '@/components/StudentList.vue';
import { ref, reactive, provide, onMounted, computed, watch } from "vue";
import { useStudentStore } from "@/store/StudentStore";
import { sum } from "lodash";

const tags = reactive([])
const entry = ref("")
const tagSearch =  ref("")
const array = reactive([])
const firstName = ref("")
const lastName = ref("")
const studentStore = useStudentStore()

onMounted(()=> {
  studentStore.createStudents()
})

const average = computed({
  get() {
    return (sum(array)/array.length).toFixed(3)
  },
  set(input) {
    input = array
  }
})

const fullName = computed({
  get() {
    return firstName.value + " " + lastName.value
  },
  set(fullName) {
    [firstName.value,lastName.value] = fullName.split(" ")
  }
})

provide("tags",tags)
</script>

<style scoped>
.searches {
  display: flex;
}
</style>
