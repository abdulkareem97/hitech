import { render } from '@redwoodjs/testing/web'

import PayfeeLayout from './PayfeeLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PayfeeLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PayfeeLayout />)
    }).not.toThrow()
  })
})
