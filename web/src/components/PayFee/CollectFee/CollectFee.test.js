import { render } from '@redwoodjs/testing/web'

import CollectFee from './CollectFee'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CollectFee', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CollectFee />)
    }).not.toThrow()
  })
})
