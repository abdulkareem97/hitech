import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import FeeDetailForm from 'src/components/FeeDetail/FeeDetailForm'

const CREATE_FEE_DETAIL_MUTATION = gql`
  mutation CreateFeeDetailMutation($input: CreateFeeDetailInput!) {
    createFeeDetail(input: $input) {
      id
    }
  }
`

const NewFeeDetail = () => {
  const [createFeeDetail, { loading, error }] = useMutation(
    CREATE_FEE_DETAIL_MUTATION,
    {
      onCompleted: () => {
        toast.success('FeeDetail created')
        navigate(routes.feeDetails())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createFeeDetail({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New FeeDetail</h2>
      </header>
      <div className="rw-segment-main">
        <FeeDetailForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewFeeDetail
