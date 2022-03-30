<template>
  <div class="students">
    <input v-model="entry" class="searches" placeholder="Search by Name"><br>
    <input v-model="tag" class="searches" placeholder="Search by Tag"><br><br>
    <StudentList v-show="student.firstName.includes(entry) || student.lastName.includes(entry)" v-for="student in students.students" :key="student.id" :student="student"/>
  </div>
</template>

<script>
// @ is an alias to /src
import StudentList from '@/components/StudentList.vue'
import EventService from '@/services/EventService.js'

export default {
  name: 'HomeView',
  components: {
    StudentList
  },
  data() {
    return {
      students: null,
      entry: ""
    }
  },
  created() {
    EventService.getEvents()
    .then(response => {
      this.students = response.data;
    })
    .catch(error => {
      console.log(error);
    });
  }
}
</script>

<style scoped>
.searches {
  display: flex;
}
</style>
