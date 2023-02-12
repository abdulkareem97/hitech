import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import FeeDetailForm from 'src/components/FeeDetail/FeeDetailForm'

export const QUERY = gql`
  query EditFeeDetailById($id: Int!) {
    feeDetail: feeDetail(id: $id) {
      id
      admissionFormId
      fee_collected
      collected_by
      collected_at
    }
  }
`
const UPDATE_FEE_DETAIL_MUTATION = gql`
  mutation UpdateFeeDetailMutation($id: Int!, $input: UpdateFeeDetailInput!) {
    updateFeeDetail(id: $id, input: $input) {
      id
      admissionFormId
      fee_collected
      collected_by
      collected_at
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ feeDetail }) => {
  const [updateFeeDetail, { loading, error }] = useMutation(
    UPDATE_FEE_DETAIL_MUTATION,
    {
      onCompleted: () => {
        toast.success('FeeDetail updated')
        navigate(routes.feeDetails())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateFeeDetail({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit FeeDetail {feeDetail?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <FeeDetailForm
          feeDetail={feeDetail}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
