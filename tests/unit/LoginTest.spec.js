import {
    shallowMount,
    createLocalVue
} from '@vue/test-utils'
import Login from '@/components/Login.vue'
import vuetify from "vuetify"
import Vue from 'vue';
import Vuex from 'vuex'



const localVue = createLocalVue();

localVue.use(Vuex)

describe('Login.vue', () => {
    let store
    let actions
    let getters
    let wrapper

    beforeEach(() => {
        Vue.use(vuetify);
        actions = {
                loginUser: jest.fn()
            },
            // store = new Vuex.Store({
            //     actions
            // }),

            store = new Vuex.Store({
                actions,
                getters,
                store

            })
        wrapper = shallowMount(Login, {
            store,
            localVue,
            propsData: {
                email: "test123@test.com",
                password: "test123!",
                valid: true
            }
        });
    });

    // it('renders a vue instance', () => {
    //     expect(shallowMount(Login).isVueInstance()).toBe(true);
    // });
    // it('html should render correctly', () => {
    //     expect(wrapper.html()).toMatchSnapshot()
    // })
    it('renders', () => {

        expect(wrapper.exists()).toBe(true);
    });

    it('Bestaat h1', () => {

        expect(wrapper.find("h1").text().includes("Login")).toBe(true);
    });
    it('renders tags', () => {

        expect(wrapper.find("h1").text().includes("Login")).toBe(true);
    });

    it(' Button exists', () => {
        expect(wrapper.find('#buttonLogin').exists()).toBe(true);

    });
    it('has a textfieldUserame', () => {
        expect(wrapper.contains('#textFieldUsername')).toBe(true)
    });
    it('has a textfieldPassword', () => {
        expect(wrapper.contains('#textFieldPassword')).toBe(true)
    });
    it('has a textfieldAlert', () => {
        expect(wrapper.contains('#alertLogin')).toBe(true)
    });
    it('btn click', () => {

        const button = wrapper.find('#buttonLogin')
        button.trigger('click')
        expect(wrapper.vm.email).toBe("")
    });
    // it(' test', () => {

    //     wrapper.find('#buttonLogin').trigger('click')

    //     expect(actions.loginUser).toHaveBeenCalled()
    // })
});