import { createStore } from 'vuex'
import EventService from '@/services/EventService.js'

export default createStore({
  state: {
    students: []
  },
  getters: {
  },
  mutations: {
    SET_STUDENTS(state, students) {
      state.students = students;
    }
  },
  actions: {
    createStudents({ commit }) {
      EventService.getStudents()
      .then(response => {
        commit("SET_STUDENTS", response.data);
      })
      .catch(error => {
        console.log(error);
      });
    }
  },
  modules: {
  }
})
