import { render } from '@redwoodjs/testing/web'

import GetDetail from './GetDetail'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GetDetail', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GetDetail />)
    }).not.toThrow()
  })
})
