import AdmissionForm from 'src/components/AdmissionForm/AdmissionForm'

export const QUERY = gql`
  query FindAdmissionFormById($id: Int!) {
    admissionForm: admissionForm(id: $id) {
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
      added_by
      created_at
      updated_at
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>AdmissionForm not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ admissionForm }) => {
  return <AdmissionForm admissionForm={admissionForm} />
}
