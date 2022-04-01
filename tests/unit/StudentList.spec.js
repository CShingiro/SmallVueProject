import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'


describe('HomeView.vue', () => {
  test("Reads entries on search", () => {
    const wrapper = mount(HomeView);
    expect(wrapper.find(entry)).toHaveReturned()
  });
});
