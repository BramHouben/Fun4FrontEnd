import {
  shallowMount
} from '@vue/test-utils'
import Register from '@/components/Register.vue'
import vuetify from "vuetify"
import Vue from 'vue';

describe('Home.vue', () => {
  //  let wrapper;
  beforeEach(() => {
    Vue.use(vuetify);
    //wrapper = shallowMount(Register);
  })
  it('renders a vue instance', () => {
    expect(shallowMount(Register).isVueInstance()).toBe(true);
  });
})