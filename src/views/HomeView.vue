<template>
  <div class="students">
    <input v-model="entry" class="searches" placeholder="Search by Name"><br>
    <input v-model="tagSearch" class="searches" placeholder="Search by Tag"><br><br>
    <StudentList
      v-for="student in studentStore.students" :key="student.id" :student="student.id"
      :average="average(student.grades)" :fullName="fullName(student.firstName, student.lastName)"
      v-show="fullName(student.firstName, student.lastName).toLowerCase().includes(entry.toLowerCase()) || tags.toLowerCase().includes(tagSearch.toLowerCase())"
    />
  </div>
</template>

<script setup>
// @ is an alias to /src
import StudentList from '@/components/StudentList.vue';
import { ref, reactive, provide } from "vue";
import { useStudentStore } from "@/store/StudentStore";
import { sum } from "lodash";

const tags = reactive([])
const entry = ref("")
const tagSearch =  ref("")
const studentStore = useStudentStore()

studentStore.createStudents()

function average(...input) {
  return sum(input)/input.length + "%"
}

function fullName(firstName,lastName) {
  return firstName + " " + lastName
}

provide("tags",tags)
</script>

<style scoped>
.searches {
  display: flex;
}
</style>
