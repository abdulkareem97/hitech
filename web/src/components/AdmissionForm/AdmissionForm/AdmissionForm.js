import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_ADMISSION_FORM_MUTATION = gql`
  mutation DeleteAdmissionFormMutation($id: Int!) {
    deleteAdmissionForm(id: $id) {
      id
    }
  }
`

const AdmissionForm = ({ admissionForm }) => {
  const [deleteAdmissionForm] = useMutation(DELETE_ADMISSION_FORM_MUTATION, {
    onCompleted: () => {
      toast.success('AdmissionForm deleted')
      navigate(routes.admissionForms())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete admissionForm ' + id + '?')) {
      deleteAdmissionForm({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            AdmissionForm {admissionForm.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{admissionForm.id}</td>
            </tr>
            <tr>
              <th>Student name</th>
              <td>{admissionForm.student_name}</td>
            </tr>
            <tr>
              <th>Photo</th>
              <td>{admissionForm.photo}</td>
            </tr>
            <tr>
              <th>Father name</th>
              <td>{admissionForm.father_name}</td>
            </tr>
            <tr>
              <th>Mother name</th>
              <td>{admissionForm.mother_name}</td>
            </tr>
            <tr>
              <th>Dob</th>
              <td>{timeTag(admissionForm.dob)}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{admissionForm.address}</td>
            </tr>
            <tr>
              <th>Father occupation</th>
              <td>{admissionForm.father_occupation}</td>
            </tr>
            <tr>
              <th>Qualification</th>
              <td>{admissionForm.qualification}</td>
            </tr>
            <tr>
              <th>Mobile no</th>
              <td>{admissionForm.mobile_no}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{admissionForm.email}</td>
            </tr>
            <tr>
              <th>Selected course</th>
              <td>{admissionForm.selected_course}</td>
            </tr>
            <tr>
              <th>Branch id</th>
              <td>{admissionForm.branchId}</td>
            </tr>
            <tr>
              <th>Date of joining</th>
              <td>{timeTag(admissionForm.date_of_joining)}</td>
            </tr>
            <tr>
              <th>Date of ending</th>
              <td>{timeTag(admissionForm.date_of_ending)}</td>
            </tr>
            <tr>
              <th>Course fee</th>
              <td>{admissionForm.course_fee}</td>
            </tr>
            <tr>
              <th>Fee paid</th>
              <td>{admissionForm.fee_paid}</td>
            </tr>
            <tr>
              <th>Balance fee</th>
              <td>{admissionForm.balance_fee}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAdmissionForm({ id: admissionForm.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(admissionForm.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default AdmissionForm
