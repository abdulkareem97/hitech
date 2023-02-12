import { Link, routes } from '@redwoodjs/router'

import EnquiryForms from 'src/components/EnquiryForm/EnquiryForms'

export const QUERY = gql`
  query FindEnquiryForms {
    enquiryForms {
      id
      student_name
      photo
      father_name
      mother_name
      dob
      address
      father_occupation
      qualification
      mobile_no
      email
      selected_course
      branchId
      added_by
      created_at
      updated_at
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No enquiryForms yet. '}
      <Link to={routes.newEnquiryForm()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ enquiryForms }) => {
  return <EnquiryForms enquiryForms={enquiryForms} />
}
