import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BranchForm from 'src/components/Branch/BranchForm'

export const QUERY = gql`
  query EditBranchById($id: Int!) {
    branch: branch(id: $id) {
      id
      name
    }
  }
`
const UPDATE_BRANCH_MUTATION = gql`
  mutation UpdateBranchMutation($id: Int!, $input: UpdateBranchInput!) {
    updateBranch(id: $id, input: $input) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ branch }) => {
  const [updateBranch, { loading, error }] = useMutation(
    UPDATE_BRANCH_MUTATION,
    {
      onCompleted: () => {
        toast.success('Branch updated')
        navigate(routes.branches())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateBranch({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Branch {branch?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <BranchForm
          branch={branch}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
