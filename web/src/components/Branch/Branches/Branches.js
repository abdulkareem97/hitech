import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Branch/BranchesCell'
import { truncate } from 'src/lib/formatters'

const DELETE_BRANCH_MUTATION = gql`
  mutation DeleteBranchMutation($id: Int!) {
    deleteBranch(id: $id) {
      id
    }
  }
`

const BranchesList = ({ branches }) => {
  const [deleteBranch] = useMutation(DELETE_BRANCH_MUTATION, {
    onCompleted: () => {
      toast.success('Branch deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete branch ' + id + '?')) {
      deleteBranch({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {branches.map((branch) => (
            <tr key={branch.id}>
              <td>{truncate(branch.id)}</td>
              <td>{truncate(branch.name)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.branch({ id: branch.id })}
                    title={'Show branch ' + branch.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editBranch({ id: branch.id })}
                    title={'Edit branch ' + branch.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete branch ' + branch.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(branch.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BranchesList
