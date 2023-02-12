import { render } from '@redwoodjs/testing/web'

import GetDetailPage from './GetDetailPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GetDetailPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GetDetailPage />)
    }).not.toThrow()
  })
})
