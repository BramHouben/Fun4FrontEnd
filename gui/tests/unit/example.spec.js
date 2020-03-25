import { shallowMount } from "@vue/test-utils";
import Mainpage from "@/components/Mainpage.vue";

describe("Mainpage.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new messages";
    const wrapper = shallowMount(Mainpage, {
      propsData: {
        msg
      }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
