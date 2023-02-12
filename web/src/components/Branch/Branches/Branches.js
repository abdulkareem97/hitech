import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useState } from 'react'

import { QUERY } from 'src/components/Branch/BranchesCell'
import SearchTable from 'src/components/SearchTable/SearchTable'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_BRANCH_MUTATION = gql`
  mutation DeleteBranchMutation($id: Int!) {
    deleteBranch(id: $id) {
      id
    }
  }
`

const BranchesList = ({ branches }) => {
  const [search_data, setSearch_data] = useState(branches)
  const [rows_count, setRows_count] = useState(branches.length <= 5 ? 5 : 10)
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


  const change = (search) => {
    const search_val = search.target.value

    let filterData = branches.filter((val) => {
      return (
        val.name
          .toString()
          .toLowerCase()
          .includes(search_val.toLowerCase())
      )
    })
    setRows_count(filterData.length <= 5 ? 5 : 10)
    setSearch_data(filterData)
  }
  const columns = [
    // {
    //   Header: 'id',
    //   accessor: 'id',
    // },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Added by',
      accessor: 'added_by',
    },
    {
      Header: 'Created At',
      accessor: 'created_At',
      Cell: ({ original }) => (
        timeTag(original.created_at)
      )
    },

    {
      Header: 'Action',
      accessor: 'actionColumn',
      disableSortBy: true,
      Cell: ({ original }) => (
        <nav className="rw-table-actions">
          <Link
            to={routes.branch({ id: original.id })}
            title={'Show branch ' + original.id + ' detail'}
            className="rw-button rw-button-small"
          >
            Show
          </Link>
          <Link
            to={routes.editBranch({ id: original.id })}
            title={'Edit branch ' + original.id}
            className="rw-button rw-button-small rw-button-blue"
          >
            Edit
          </Link>
          <button
            type="button"
            title={'Delete branch ' + original.id}
            className="rw-button rw-button-small rw-button-red"
            onClick={() => onDeleteClick(original.id)}
          >
            Delete
          </button>
        </nav>
      ),
    },
  ]


  return (
    <SearchTable
        change={change}
    placeholder={"Search By Typing Branch Name"}
    columns={columns}
    rows_count={rows_count}
    search_data={search_data}

    />
    // <div className="rw-segment rw-table-wrapper-responsive">
    //   <table className="rw-table">
    //     <thead>
    //       <tr>
    //         <th>Id</th>
    //         <th>Name</th>
    //         <th>Added by</th>
    //         <th>Created at</th>
    //         <th>Updated at</th>
    //         <th>&nbsp;</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {branches.map((branch) => (
    //         <tr key={branch.id}>
    //           <td>{truncate(branch.id)}</td>
    //           <td>{truncate(branch.name)}</td>
    //           <td>{truncate(branch.added_by)}</td>
    //           <td>{timeTag(branch.created_at)}</td>
    //           <td>{timeTag(branch.updated_at)}</td>
    //           <td>
    //             <nav className="rw-table-actions">
    //               <Link
    //                 to={routes.branch({ id: branch.id })}
    //                 title={'Show branch ' + branch.id + ' detail'}
    //                 className="rw-button rw-button-small"
    //               >
    //                 Show
    //               </Link>
    //               <Link
    //                 to={routes.editBranch({ id: branch.id })}
    //                 title={'Edit branch ' + branch.id}
    //                 className="rw-button rw-button-small rw-button-blue"
    //               >
    //                 Edit
    //               </Link>
    //               <button
    //                 type="button"
    //                 title={'Delete branch ' + branch.id}
    //                 className="rw-button rw-button-small rw-button-red"
    //                 onClick={() => onDeleteClick(branch.id)}
    //               >
    //                 Delete
    //               </button>
    //             </nav>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  )
}

export default BranchesList
