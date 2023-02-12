import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_FEE_DETAIL_MUTATION = gql`
  mutation DeleteFeeDetailMutation($id: Int!) {
    deleteFeeDetail(id: $id) {
      id
    }
  }
`

const FeeDetail = ({ feeDetail }) => {
  const [deleteFeeDetail] = useMutation(DELETE_FEE_DETAIL_MUTATION, {
    onCompleted: () => {
      toast.success('FeeDetail deleted')
      navigate(routes.feeDetails())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete feeDetail ' + id + '?')) {
      deleteFeeDetail({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            FeeDetail {feeDetail.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{feeDetail.id}</td>
            </tr>
            <tr>
              <th>Admission form id</th>
              <td>{feeDetail.admissionFormId}</td>
            </tr>
            <tr>
              <th>Student Name</th>
              <td>{feeDetail.admissionFrom.student_name}</td>
            </tr>
            <tr>
              <th>Fee collected</th>
              <td>{feeDetail.fee_collected}</td>
            </tr>
            <tr>
              <th>Collected by</th>
              <td>{feeDetail.collected_by}</td>
            </tr>
            <tr>
              <th>Collected at</th>
              <td>{timeTag(feeDetail.collected_at)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        {/* <Link
          to={routes.editFeeDetail({ id: feeDetail.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(feeDetail.id)}
        >
          Delete
        </button> */}
      </nav>
    </>
  )
}

export default FeeDetail
