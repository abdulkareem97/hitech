import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AdmissionFormForm from 'src/components/AdmissionForm/AdmissionFormForm'

export const QUERY = gql`
  query EditAdmissionFormById($id: Int!) {
    admissionForm: admissionForm(id: $id) {
      id
      student_name
      photo
      father_name
      mother_name
      dob
      address
      father_occupation
      qualification
      mobile_no
      email
      selected_course
      branchId
      date_of_joining
      date_of_ending
      course_fee
      fee_paid
      balance_fee
      added_by
      created_at
      updated_at
    }
  }
`
const UPDATE_ADMISSION_FORM_MUTATION = gql`
  mutation UpdateAdmissionFormMutation(
    $id: Int!
    $input: UpdateAdmissionFormInput!
  ) {
    updateAdmissionForm(id: $id, input: $input) {
      id
      student_name
      photo
      father_name
      mother_name
      dob
      address
      father_occupation
      qualification
      mobile_no
      email
      selected_course
      branchId
      date_of_joining
      date_of_ending
      course_fee
      fee_paid
      balance_fee
      added_by
      created_at
      updated_at
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ admissionForm }) => {
  const [updateAdmissionForm, { loading, error }] = useMutation(
    UPDATE_ADMISSION_FORM_MUTATION,
    {
      onCompleted: () => {
        toast.success('AdmissionForm updated')
        navigate(routes.admissionForms())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateAdmissionForm({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit AdmissionForm {admissionForm?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <AdmissionFormForm
          admissionForm={admissionForm}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
