import { Link, routes } from '@redwoodjs/router'

import FeeDetails from 'src/components/FeeDetail/FeeDetails'

export const QUERY = gql`
  query FindFeeDetails {
    feeDetails {
      id
      admissionFormId
      fee_collected
      collected_by
      collected_at
      admissionFrom {
        student_name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No feeDetails yet. '}
      {/* <Link to={routes.newFeeDetail()} className="rw-link">
        {'Create one?'}
      </Link> */}
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ feeDetails }) => {
  return <FeeDetails feeDetails={feeDetails} />
}
