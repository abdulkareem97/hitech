import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useState } from 'react'

import { QUERY } from 'src/components/FeeDetail/FeeDetailsCell'
import SearchTable from 'src/components/SearchTable/SearchTable'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_FEE_DETAIL_MUTATION = gql`
  mutation DeleteFeeDetailMutation($id: Int!) {
    deleteFeeDetail(id: $id) {
      id
    }
  }
`

const FeeDetailsList = ({ feeDetails }) => {
  const [search_data, setSearch_data] = useState(feeDetails)
  const [rows_count, setRows_count] = useState(feeDetails.length <= 5 ? 5 : 10)
  const [deleteFeeDetail] = useMutation(DELETE_FEE_DETAIL_MUTATION, {
    onCompleted: () => {
      toast.success('FeeDetail deleted')
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
    if (confirm('Are you sure you want to delete feeDetail ' + id + '?')) {
      deleteFeeDetail({ variables: { id } })
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
      Header: 'Admission Form ID',
      accessor: 'admissionFormId',
    },
    {
      Header: 'Name',
      accessor: 'admissionFrom.student_name',
    },
    {
      Header: 'Fee Collected',
      accessor: 'fee_collected',
    },
    {
      Header: 'Collected By',
      accessor: 'collected_by',
    },
    {
      Header: 'Collected At',
      accessor: 'collected_at',
      Cell: ({ original }) => (
        timeTag(original.collected_at)
      )
    },

    {
      Header: 'Action',
      accessor: 'actionColumn',
      disableSortBy: true,
      Cell: ({ original }) => (
        <nav className="rw-table-actions">
          <Link
            to={routes.feeDetail({ id: original.id })}
            title={'Show feeDetail ' + original.id + ' detail'}
            className="rw-button rw-button-small"
          >
            Show
          </Link>


        </nav>
      ),
    },
  ]

  return (

    <SearchTable
      change={change}
      placeholder={"Search By Typing Student Name"}
      columns={columns}
      rows_count={rows_count}
      search_data={search_data}

    />
    // <div className="rw-segment rw-table-wrapper-responsive">
    //   <table className="rw-table">
    //     <thead>
    //       <tr>
    //         <th>Id</th>
    //         <th>Admission form id</th>
    //         <th>Student Name</th>
    //         <th>Fee collected</th>
    //         <th>Collected by</th>
    //         <th>Collected at</th>
    //         <th>&nbsp;</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {feeDetails.map((feeDetail) => (
    //         <tr key={feeDetail.id}>
    //           <td>{truncate(feeDetail.id)}</td>
    //           <td>{truncate(feeDetail.admissionFormId)}</td>
    //           <td>{truncate(feeDetail.admissionFrom.student_name)}</td>
    //           <td>{truncate(feeDetail.fee_collected)}</td>
    //           <td>{truncate(feeDetail.collected_by)}</td>
    //           <td>{timeTag(feeDetail.collected_at)}</td>
    //           <td>
    //             <nav className="rw-table-actions">
    //               <Link
    //                 to={routes.feeDetail({ id: feeDetail.id })}
    //                 title={'Show feeDetail ' + feeDetail.id + ' detail'}
    //                 className="rw-button rw-button-small"
    //               >
    //                 Show
    //               </Link>
    //               <Link
    //                 to={routes.editFeeDetail({ id: feeDetail.id })}
    //                 title={'Edit feeDetail ' + feeDetail.id}
    //                 className="rw-button rw-button-small rw-button-blue"
    //               >
    //                 Edit
    //               </Link>
    //               <button
    //                 type="button"
    //                 title={'Delete feeDetail ' + feeDetail.id}
    //                 className="rw-button rw-button-small rw-button-red"
    //                 onClick={() => onDeleteClick(feeDetail.id)}
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

export default FeeDetailsList
