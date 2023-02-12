import FeeDetail from 'src/components/FeeDetail/FeeDetail'

export const QUERY = gql`
  query FindFeeDetailById($id: Int!) {
    feeDetail: feeDetail(id: $id) {
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

export const Empty = () => <div>FeeDetail not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ feeDetail }) => {
  return <FeeDetail feeDetail={feeDetail} />
}
