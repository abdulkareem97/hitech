import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EnquiryFormForm from 'src/components/EnquiryForm/EnquiryFormForm'

export const QUERY = gql`
  query EditEnquiryFormById($id: Int!) {
    enquiryForm: enquiryForm(id: $id) {
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
    }
  }
`
const UPDATE_ENQUIRY_FORM_MUTATION = gql`
  mutation UpdateEnquiryFormMutation(
    $id: Int!
    $input: UpdateEnquiryFormInput!
  ) {
    updateEnquiryForm(id: $id, input: $input) {
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
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ enquiryForm }) => {
  const [updateEnquiryForm, { loading, error }] = useMutation(
    UPDATE_ENQUIRY_FORM_MUTATION,
    {
      onCompleted: () => {
        toast.success('EnquiryForm updated')
        navigate(routes.enquiryForms())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateEnquiryForm({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit EnquiryForm {enquiryForm?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <EnquiryFormForm
          enquiryForm={enquiryForm}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
