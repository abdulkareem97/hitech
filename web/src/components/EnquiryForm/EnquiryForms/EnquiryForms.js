import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/EnquiryForm/EnquiryFormsCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_ENQUIRY_FORM_MUTATION = gql`
  mutation DeleteEnquiryFormMutation($id: Int!) {
    deleteEnquiryForm(id: $id) {
      id
    }
  }
`

const EnquiryFormsList = ({ enquiryForms }) => {
  const [deleteEnquiryForm] = useMutation(DELETE_ENQUIRY_FORM_MUTATION, {
    onCompleted: () => {
      toast.success('EnquiryForm deleted')
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
    if (confirm('Are you sure you want to delete enquiryForm ' + id + '?')) {
      deleteEnquiryForm({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Student name</th>
            <th>Photo</th>
            <th>Father name</th>
            <th>Mother name</th>
            <th>Dob</th>
            <th>Address</th>
            <th>Father occupation</th>
            <th>Qualification</th>
            <th>Mobile no</th>
            <th>Email</th>
            <th>Selected course</th>
            <th>Branch id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {enquiryForms.map((enquiryForm) => (
            <tr key={enquiryForm.id}>
              <td>{truncate(enquiryForm.id)}</td>
              <td>{truncate(enquiryForm.student_name)}</td>
              <td>{truncate(enquiryForm.photo)}</td>
              <td>{truncate(enquiryForm.father_name)}</td>
              <td>{truncate(enquiryForm.mother_name)}</td>
              <td>{timeTag(enquiryForm.dob)}</td>
              <td>{truncate(enquiryForm.address)}</td>
              <td>{truncate(enquiryForm.father_occupation)}</td>
              <td>{truncate(enquiryForm.qualification)}</td>
              <td>{truncate(enquiryForm.mobile_no)}</td>
              <td>{truncate(enquiryForm.email)}</td>
              <td>{truncate(enquiryForm.selected_course)}</td>
              <td>{truncate(enquiryForm.branchId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.enquiryForm({ id: enquiryForm.id })}
                    title={'Show enquiryForm ' + enquiryForm.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editEnquiryForm({ id: enquiryForm.id })}
                    title={'Edit enquiryForm ' + enquiryForm.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete enquiryForm ' + enquiryForm.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(enquiryForm.id)}
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

export default EnquiryFormsList
