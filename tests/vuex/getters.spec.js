/* eslint-disable no-undef */
// getters.spec.js
import getters from './store/getters'

test('returns first 20 items if state.page value is 1', () => {
    const items = Array(20)
      .fill()
      .map((v, i) => i)
  
    const state = {
      items,
      page: 1
    }
  
    const result = getters.displayItems({page: state.page, items: state.items})
  
    expect(result).toHaveLength(20)
    expect(result).toEqual(items.slice(0, 20))
  })