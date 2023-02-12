import CollectFee from "../CollectFee/CollectFee"

export const QUERY = gql`
  query FindStdDetailQuery($id: Int!) {
    stdDetail:   admissionForm(id: $id) {
    id
    student_name
    brach_name {
      name
    }
    selected_course
    course_fee
    fee_paid
    balance_fee
  }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>AdmissionForm not found</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ stdDetail }) => {
  return (
    <CollectFee stdDetail={stdDetail} />
  )
}
