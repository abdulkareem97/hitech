import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_ENQUIRY_FORM_MUTATION = gql`
  mutation DeleteEnquiryFormMutation($id: Int!) {
    deleteEnquiryForm(id: $id) {
      id
    }
  }
`

const EnquiryForm = ({ enquiryForm }) => {
  const [deleteEnquiryForm] = useMutation(DELETE_ENQUIRY_FORM_MUTATION, {
    onCompleted: () => {
      toast.success('EnquiryForm deleted')
      navigate(routes.enquiryForms())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete enquiryForm ' + id + '?')) {
      deleteEnquiryForm({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            EnquiryForm {enquiryForm.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{enquiryForm.id}</td>
            </tr>
            <tr>
              <th>Student name</th>
              <td>{enquiryForm.student_name}</td>
            </tr>
            <tr>
              <th>Photo</th>
              <td>{enquiryForm.photo}</td>
            </tr>
            <tr>
              <th>Father name</th>
              <td>{enquiryForm.father_name}</td>
            </tr>
            <tr>
              <th>Mother name</th>
              <td>{enquiryForm.mother_name}</td>
            </tr>
            <tr>
              <th>Dob</th>
              <td>{timeTag(enquiryForm.dob)}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{enquiryForm.address}</td>
            </tr>
            <tr>
              <th>Father occupation</th>
              <td>{enquiryForm.father_occupation}</td>
            </tr>
            <tr>
              <th>Qualification</th>
              <td>{enquiryForm.qualification}</td>
            </tr>
            <tr>
              <th>Mobile no</th>
              <td>{enquiryForm.mobile_no}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{enquiryForm.email}</td>
            </tr>
            <tr>
              <th>Selected course</th>
              <td>{enquiryForm.selected_course}</td>
            </tr>
            <tr>
              <th>Branch id</th>
              <td>{enquiryForm.branchId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editEnquiryForm({ id: enquiryForm.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(enquiryForm.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default EnquiryForm
