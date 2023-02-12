import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/AdmissionForm/AdmissionFormsCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_ADMISSION_FORM_MUTATION = gql`
  mutation DeleteAdmissionFormMutation($id: Int!) {
    deleteAdmissionForm(id: $id) {
      id
    }
  }
`

const AdmissionFormsList = ({ admissionForms }) => {
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
            <th>Date of joining</th>
            <th>Date of ending</th>
            <th>Course fee</th>
            <th>Fee paid</th>
            <th>Balance fee</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {admissionForms.map((admissionForm) => (
            <tr key={admissionForm.id}>
              <td>{truncate(admissionForm.id)}</td>
              <td>{truncate(admissionForm.student_name)}</td>
              <td>{truncate(admissionForm.photo)}</td>
              <td>{truncate(admissionForm.father_name)}</td>
              <td>{truncate(admissionForm.mother_name)}</td>
              <td>{timeTag(admissionForm.dob)}</td>
              <td>{truncate(admissionForm.address)}</td>
              <td>{truncate(admissionForm.father_occupation)}</td>
              <td>{truncate(admissionForm.qualification)}</td>
              <td>{truncate(admissionForm.mobile_no)}</td>
              <td>{truncate(admissionForm.email)}</td>
              <td>{truncate(admissionForm.selected_course)}</td>
              <td>{truncate(admissionForm.branchId)}</td>
              <td>{timeTag(admissionForm.date_of_joining)}</td>
              <td>{timeTag(admissionForm.date_of_ending)}</td>
              <td>{truncate(admissionForm.course_fee)}</td>
              <td>{truncate(admissionForm.fee_paid)}</td>
              <td>{truncate(admissionForm.balance_fee)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.admissionForm({ id: admissionForm.id })}
                    title={'Show admissionForm ' + admissionForm.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAdmissionForm({ id: admissionForm.id })}
                    title={'Edit admissionForm ' + admissionForm.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete admissionForm ' + admissionForm.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(admissionForm.id)}
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

export default AdmissionFormsList
