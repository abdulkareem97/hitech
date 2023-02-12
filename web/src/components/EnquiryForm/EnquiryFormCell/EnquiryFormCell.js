import EnquiryForm from 'src/components/EnquiryForm/EnquiryForm'

export const QUERY = gql`
  query FindEnquiryFormById($id: Int!) {
    enquiryForm: enquiryForm(id: $id) {
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

export const Empty = () => <div>EnquiryForm not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ enquiryForm }) => {
  return <EnquiryForm enquiryForm={enquiryForm} />
}
