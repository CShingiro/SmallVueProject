import { mount } from '@vue/test-utils'
import StudentList from '@/components/StudentList.vue'

describe('StudentList.vue', () => {
  it("Should give an average out of 100", () => {
    const wrapper = mount(StudentList);
    expect(wrapper.find(averageGrade()).toBeLessThanOrEqualTo(100);
  })
})
