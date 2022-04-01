<template>
  <div class="students">
    <input v-model="entry" class="searches" placeholder="Search by Name"><br>
    <input v-model="tagSearch" class="searches" placeholder="Search by Tag"><br><br>
    <StudentList v-show="student.firstName.toLowerCase().includes(entry.toLowerCase()) ||
    student.lastName.toLowerCase().includes(entry.toLowerCase())"
    v-for="student in students" :key="student.id" :student="student"/>
  </div>
</template>

<script>
// @ is an alias to /src
import StudentList from '@/components/StudentList.vue';

export default {
  name: 'HomeView',
  components: {
    StudentList
  },
  data() {
    return {
      entry: "",
      tagSearch: ""
    }
  },
  created() {
    this.$store.dispatch("createStudents");
  },
  computed: {
    students() {
      return this.$store.state.students.students;
    }
  }
}
</script>

<style scoped>
.searches {
  display: flex;
}
</style>
