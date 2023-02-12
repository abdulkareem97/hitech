import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_BRANCH_MUTATION = gql`
  mutation DeleteBranchMutation($id: Int!) {
    deleteBranch(id: $id) {
      id
    }
  }
`

const Branch = ({ branch }) => {
  const [deleteBranch] = useMutation(DELETE_BRANCH_MUTATION, {
    onCompleted: () => {
      toast.success('Branch deleted')
      navigate(routes.branches())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete branch ' + id + '?')) {
      deleteBranch({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Branch {branch.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{branch.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{branch.name}</td>
            </tr>
            <tr>
              <th>Added by</th>
              <td>{branch.added_by}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(branch.created_at)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(branch.updated_at)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editBranch({ id: branch.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(branch.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Branch
