import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useState } from 'react'

import { QUERY } from 'src/components/AdmissionForm/AdmissionFormsCell'
import SearchTable from 'src/components/SearchTable/SearchTable'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_ADMISSION_FORM_MUTATION = gql`
  mutation DeleteAdmissionFormMutation($id: Int!) {
    deleteAdmissionForm(id: $id) {
      id
    }
  }
`

const AdmissionFormsList = ({ admissionForms }) => {
  const [search_data, setSearch_data] = useState(admissionForms)
  const [rows_count, setRows_count] = useState(admissionForms.length <= 5 ? 5 : 10)
  const [deleteAdmissionForm] = useMutation(DELETE_ADMISSION_FORM_MUTATION, {
    onCompleted: () => {
      toast.success('AdmissionForm deleted')
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
    if (confirm('Are you sure you want to delete admissionForm ' + id + '?')) {
      deleteAdmissionForm({ variables: { id } })
    }
  }
  const change = (search) => {
    const search_val = search.target.value

    let filterData = admissionForms.filter((val) => {
      return (
        val.student_name
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
      Header: 'Form ID',
      accessor: 'id',
    },
    {
      Header: 'Name',
      accessor: 'student_name',
    },
    {
      Header: 'Course Applied',
      accessor: 'selected_course',
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
            to={routes.admissionForm({ id: original.id })}
            title={'Show admissionForm ' + original.id + ' detail'}
            className="rw-button rw-button-small"
          >
            Show
          </Link>
          <Link
            to={routes.editAdmissionForm({ id: original.id })}
            title={'Edit admissionForm ' + original.id}
            className="rw-button rw-button-small rw-button-blue"
          >
            Edit
          </Link>
          <button
            type="button"
            title={'Delete admissionForm ' + original.id}
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
    //         <th>Student name</th>
    //         <th>Photo</th>
    //         <th>Father name</th>
    //         <th>Mother name</th>
    //         <th>Dob</th>
    //         <th>Address</th>
    //         <th>Father occupation</th>
    //         <th>Qualification</th>
    //         <th>Mobile no</th>
    //         <th>Email</th>
    //         <th>Selected course</th>
    //         <th>Branch id</th>
    //         <th>Date of joining</th>
    //         <th>Date of ending</th>
    //         <th>Course fee</th>
    //         <th>Fee paid</th>
    //         <th>Balance fee</th>
    //         <th>Added by</th>
    //         <th>Created at</th>
    //         <th>Updated at</th>
    //         <th>&nbsp;</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {admissionForms.map((admissionForm) => (
    //         <tr key={admissionForm.id}>
    //           <td>{truncate(admissionForm.id)}</td>
    //           <td>{truncate(admissionForm.student_name)}</td>
    //           <td>{truncate(admissionForm.photo)}</td>
    //           <td>{truncate(admissionForm.father_name)}</td>
    //           <td>{truncate(admissionForm.mother_name)}</td>
    //           <td>{timeTag(admissionForm.dob)}</td>
    //           <td>{truncate(admissionForm.address)}</td>
    //           <td>{truncate(admissionForm.father_occupation)}</td>
    //           <td>{truncate(admissionForm.qualification)}</td>
    //           <td>{truncate(admissionForm.mobile_no)}</td>
    //           <td>{truncate(admissionForm.email)}</td>
    //           <td>{truncate(admissionForm.selected_course)}</td>
    //           <td>{truncate(admissionForm.branchId)}</td>
    //           <td>{timeTag(admissionForm.date_of_joining)}</td>
    //           <td>{timeTag(admissionForm.date_of_ending)}</td>
    //           <td>{truncate(admissionForm.course_fee)}</td>
    //           <td>{truncate(admissionForm.fee_paid)}</td>
    //           <td>{truncate(admissionForm.balance_fee)}</td>
    //           <td>{truncate(admissionForm.added_by)}</td>
    //           <td>{timeTag(admissionForm.created_at)}</td>
    //           <td>{timeTag(admissionForm.updated_at)}</td>
    //           <td>
    //             <nav className="rw-table-actions">
    //               <Link
    //                 to={routes.admissionForm({ id: admissionForm.id })}
    //                 title={'Show admissionForm ' + admissionForm.id + ' detail'}
    //                 className="rw-button rw-button-small"
    //               >
    //                 Show
    //               </Link>
    //               <Link
    //                 to={routes.editAdmissionForm({ id: admissionForm.id })}
    //                 title={'Edit admissionForm ' + admissionForm.id}
    //                 className="rw-button rw-button-small rw-button-blue"
    //               >
    //                 Edit
    //               </Link>
    //               <button
    //                 type="button"
    //                 title={'Delete admissionForm ' + admissionForm.id}
    //                 className="rw-button rw-button-small rw-button-red"
    //                 onClick={() => onDeleteClick(admissionForm.id)}
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

export default AdmissionFormsList
