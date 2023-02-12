import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BranchForm from 'src/components/Branch/BranchForm'

const CREATE_BRANCH_MUTATION = gql`
  mutation CreateBranchMutation($input: CreateBranchInput!) {
    createBranch(input: $input) {
      id
    }
  }
`

const NewBranch = () => {
  const [createBranch, { loading, error }] = useMutation(
    CREATE_BRANCH_MUTATION,
    {
      onCompleted: () => {
        toast.success('Branch created')
        navigate(routes.branches())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createBranch({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Branch</h2>
      </header>
      <div className="rw-segment-main">
        <BranchForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBranch
