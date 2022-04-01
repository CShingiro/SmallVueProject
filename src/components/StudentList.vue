<template>
  <div class="container">
    <div class="student">
      <div class="student-info">
        <div class="robot">
          <img :src="student.pic">
        </div>
        <button id="plus-minus" class="trigger" @click="trigger = !trigger">
          <div class="line-container">
            <div class="horizontal"></div>
            <div class="vertical" :class="{ tests: trigger }"></div>
          </div>
        </button>
        <h1>{{ student.firstName }} {{ student.lastName }}</h1>
        <p>Email: {{ student.email }}</p><br>
        <p>Company: {{ student.company }}</p><br>
        <p>Skill: {{ student.skill }}</p><br>
        <p>Average: {{ average }}</p>
        <InputTag />
        <br><br>
        <ul v-show="trigger === true">
          <li v-for="(grade, index) in student.grades" :key="grade" >
            Test {{ index + 1 }}: {{ grade }}
          </li>
        </ul><br><br>
      </div>
    </div>
  </div>
</template>

<script>
import InputTag from "@/components/InputTag.vue";
import { sum } from 'lodash';

export default {
  name: 'StudentList',
  components: {
    InputTag
  },
  props: {
    student: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      trigger: false,
      average: (sum(this.student.grades)/this.student.grades.length).toFixed(3) + "%"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .robot {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 0.2px solid black;
    align-self: flex-start;
  }
  .student-info {
    display: flex;
    flex-direction: column;
  }

  .trigger {
    width: 70px;
    height: 70px;
    flex-direction: row-reverse;
    align-self: flex-end;
    background: none;
    border: none !important;
    align-items: center;
  }

  .horizontal, .vertical {
    background-color: grey;
    width: 100%;
    height: 4px;
    pointer-events: auto;
  }

  .vertical {
    transform: rotate(90deg);
  }

  .vertical.tests {
    transform: rotate(180deg);
  }
</style>
