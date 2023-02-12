import { Link, routes } from '@redwoodjs/router'

import Branches from 'src/components/Branch/Branches'

export const QUERY = gql`
  query FindBranches {
    branches {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No branches yet. '}
      <Link to={routes.newBranch()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ branches }) => {
  return <Branches branches={branches} />
}
