import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EnquiryFormForm from 'src/components/EnquiryForm/EnquiryFormForm'

const CREATE_ENQUIRY_FORM_MUTATION = gql`
  mutation CreateEnquiryFormMutation($input: CreateEnquiryFormInput!) {
    createEnquiryForm(input: $input) {
      id
    }
  }
`

const NewEnquiryForm = () => {
  const [createEnquiryForm, { loading, error }] = useMutation(
    CREATE_ENQUIRY_FORM_MUTATION,
    {
      onCompleted: () => {
        toast.success('EnquiryForm created')
        navigate(routes.enquiryForms())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createEnquiryForm({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New EnquiryForm</h2>
      </header>
      <div className="rw-segment-main">
        <EnquiryFormForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewEnquiryForm
