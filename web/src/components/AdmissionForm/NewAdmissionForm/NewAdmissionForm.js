import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AdmissionFormForm from 'src/components/AdmissionForm/AdmissionFormForm'

const CREATE_ADMISSION_FORM_MUTATION = gql`
  mutation CreateAdmissionFormMutation($input: CreateAdmissionFormInput!) {
    createAdmissionForm(input: $input) {
      id
    }
  }
`

const NewAdmissionForm = () => {
  const [createAdmissionForm, { loading, error }] = useMutation(
    CREATE_ADMISSION_FORM_MUTATION,
    {
      onCompleted: () => {
        toast.success('AdmissionForm created')
        navigate(routes.admissionForms())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createAdmissionForm({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New AdmissionForm</h2>
      </header>
      <div className="rw-segment-main">
        <AdmissionFormForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAdmissionForm
