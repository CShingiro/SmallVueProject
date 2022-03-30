<template>
  <div class="hello">
    <div class="student">
      <div class="robot">
        <img :src="student.pic">
        <button class="trigger" @click="trigger = !trigger"></button>
      </div>
      <div class="student-info">
        <h1>{{ student.firstName }} {{ student.lastName }}</h1>
        <p>Email: {{ student.email }}</p><br>
        <p>Company: {{ student.company }}</p><br>
        <p>Skill: {{ student.skill }}</p><br>
        <p>Average: {{ averageGrade(student.grades) }}</p>
        <input v-model="tag" placeholder="Add a tag"><br><br>
        <ul v-show="trigger === true">
          <li v-for="grade in student.grades" :key="grade" >
            Test {{ testvalue++ }}: {{ grade }}
          </li>
        </ul><br><br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentList',
  props: {
    student: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      testvalue: 1,
      trigger: false
    }
  },
  methods: {
    averageGrade(numbers) {
      var sum = 0;
      for(let number in numbers) {
        sum += numbers[number];
      }
      return (sum/numbers.length).toFixed(3) + "%";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .student-info {

  }
  .robot {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 0.2px solid black;
    justify-content: space-between;
  }
  .student-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .trigger {
    width: 70px;
    height: 30px;
  }

</style>
