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
import { useAuth } from 'src/auth'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const AdmissionFormForm = (props) => {
  const {currentUser} = useAuth()
  const onSubmit = (data) => {
    data['added_by'] = currentUser.email
    data['fee_paid'] = 0
    data['balance_fee'] = data.course_fee
    props.onSave(data, props?.admissionForm?.id)
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
          defaultValue={props.admissionForm?.student_name}
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
          defaultValue={props.admissionForm?.photo}
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
          defaultValue={props.admissionForm?.father_name}
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
          defaultValue={props.admissionForm?.mother_name}
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
          defaultValue={formatDatetime(props.admissionForm?.dob)}
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
          defaultValue={props.admissionForm?.address}
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
          defaultValue={props.admissionForm?.father_occupation}
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
          defaultValue={props.admissionForm?.qualification}
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
          defaultValue={props.admissionForm?.mobile_no}
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
          defaultValue={props.admissionForm?.email}
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
          defaultValue={props.admissionForm?.selected_course}
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
          defaultValue={props.admissionForm?.branchId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="branchId" className="rw-field-error" />

        <Label
          name="date_of_joining"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date of joining
        </Label>

        <DatetimeLocalField
          name="date_of_joining"
          defaultValue={formatDatetime(props.admissionForm?.date_of_joining)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="date_of_joining" className="rw-field-error" />

        <Label
          name="date_of_ending"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date of ending
        </Label>

        <DatetimeLocalField
          name="date_of_ending"
          defaultValue={formatDatetime(props.admissionForm?.date_of_ending)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="date_of_ending" className="rw-field-error" />

        <Label
          name="course_fee"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Course fee
        </Label>

        <TextField
          name="course_fee"
          defaultValue={props.admissionForm?.course_fee}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="course_fee" className="rw-field-error" />

        {/* <Label
          name="fee_paid"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Fee paid
        </Label>

        <TextField
          name="fee_paid"
          defaultValue={props.admissionForm?.fee_paid}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="fee_paid" className="rw-field-error" />

        <Label
          name="balance_fee"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Balance fee
        </Label>

        <TextField
          name="balance_fee"
          defaultValue={props.admissionForm?.balance_fee}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="balance_fee" className="rw-field-error" />

        <Label
          name="added_by"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Added by
        </Label>

        <TextField
          name="added_by"
          defaultValue={props.admissionForm?.added_by}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="added_by" className="rw-field-error" /> */}

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AdmissionFormForm
