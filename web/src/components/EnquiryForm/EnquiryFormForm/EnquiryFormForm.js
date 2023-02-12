import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const EnquiryFormForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.enquiryForm?.id)
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
          name="student_name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Student name
        </Label>

        <TextField
          name="student_name"
          defaultValue={props.enquiryForm?.student_name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="student_name" className="rw-field-error" />

        <Label
          name="photo"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Photo
        </Label>

        <TextField
          name="photo"
          defaultValue={props.enquiryForm?.photo}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="photo" className="rw-field-error" />

        <Label
          name="father_name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Father name
        </Label>

        <TextField
          name="father_name"
          defaultValue={props.enquiryForm?.father_name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="father_name" className="rw-field-error" />

        <Label
          name="mother_name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Mother name
        </Label>

        <TextField
          name="mother_name"
          defaultValue={props.enquiryForm?.mother_name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="mother_name" className="rw-field-error" />

        <Label
          name="dob"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Dob
        </Label>

        <DatetimeLocalField
          name="dob"
          defaultValue={formatDatetime(props.enquiryForm?.dob)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="dob" className="rw-field-error" />

        <Label
          name="address"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Address
        </Label>

        <TextField
          name="address"
          defaultValue={props.enquiryForm?.address}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="address" className="rw-field-error" />

        <Label
          name="father_occupation"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Father occupation
        </Label>

        <TextField
          name="father_occupation"
          defaultValue={props.enquiryForm?.father_occupation}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="father_occupation" className="rw-field-error" />

        <Label
          name="qualification"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Qualification
        </Label>

        <TextField
          name="qualification"
          defaultValue={props.enquiryForm?.qualification}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="qualification" className="rw-field-error" />

        <Label
          name="mobile_no"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Mobile no
        </Label>

        <TextField
          name="mobile_no"
          defaultValue={props.enquiryForm?.mobile_no}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="mobile_no" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.enquiryForm?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="selected_course"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Selected course
        </Label>

        <TextField
          name="selected_course"
          defaultValue={props.enquiryForm?.selected_course}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="selected_course" className="rw-field-error" />

        <Label
          name="branchId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Branch id
        </Label>

        <NumberField
          name="branchId"
          defaultValue={props.enquiryForm?.branchId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="branchId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default EnquiryFormForm
