import App from "../../App.vue"
import mount from "@vue/test-utils"

test('display message', () => { 
    const wrapper = mount(App, {
        propsData: {
            example: 'Example test'
        }
    })

    expect(wrapper.text()).toContain('Example test')
 })