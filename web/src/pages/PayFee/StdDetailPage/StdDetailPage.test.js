import { render } from '@redwoodjs/testing/web'

import StdDetailPage from './StdDetailPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StdDetailPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StdDetailPage />)
    }).not.toThrow()
  })
})
