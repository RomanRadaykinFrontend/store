import { shallowMount } from '@vue/test-utils'
import EmptyNothing from '@/components/Slide.vue'

describe( 'Slide.vue', () => {
  it( 'EmptyNothing must be empty', () => {
    const wrapper = shallowMount( EmptyNothing )
    expect( wrapper.isEmpty() ).toBe( true )
  })
})
