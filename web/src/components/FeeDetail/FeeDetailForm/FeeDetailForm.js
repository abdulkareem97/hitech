import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const FeeDetailForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.feeDetail?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="admissionFormId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Admission form id
        </Label>

        <NumberField
          name="admissionFormId"
          defaultValue={props.feeDetail?.admissionFormId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="admissionFormId" className="rw-field-error" />

        <Label
          name="fee_collected"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Fee collected
        </Label>

        <TextField
          name="fee_collected"
          defaultValue={props.feeDetail?.fee_collected}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="fee_collected" className="rw-field-error" />

        <Label
          name="collected_by"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Collected by
        </Label>

        <TextField
          name="collected_by"
          defaultValue={props.feeDetail?.collected_by}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="collected_by" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default FeeDetailForm
