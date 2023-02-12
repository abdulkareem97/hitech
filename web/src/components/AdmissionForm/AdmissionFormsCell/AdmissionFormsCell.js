import { Link, routes } from '@redwoodjs/router'

import AdmissionForms from 'src/components/AdmissionForm/AdmissionForms'

export const QUERY = gql`
  query FindAdmissionForms {
    admissionForms {
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
      date_of_joining
      date_of_ending
      course_fee
      fee_paid
      balance_fee
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No admissionForms yet. '}
      <Link to={routes.newAdmissionForm()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ admissionForms }) => {
  return <AdmissionForms admissionForms={admissionForms} />
}
