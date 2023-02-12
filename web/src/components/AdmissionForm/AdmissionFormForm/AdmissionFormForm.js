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
import axios from 'axios'
import { useState } from 'react'
import Dropzone from 'react-dropzone'


const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const AdmissionFormForm = (props) => {


  const [photo, setPhoto] = useState(null)

  const [photoDataURL, setPhotoDataURL] = useState(null)

const handlePhotoDrop = (acceptedFiles) => {
  const reader = new FileReader()
  reader.onload = () => {
    setPhotoDataURL(reader.result)
  }
  reader.readAsDataURL(acceptedFiles[0])
  setPhoto(acceptedFiles[0])
}


  const onSubmit = async (data) => {
    try {

      console.log('hello')

      console.log('here 2')
      // const baseUrl = window.location.origin

      // const contentLength = formData.toString().length;
      // const headers = {
      //   'Content-Length': contentLength
      // };

      console.log(photo)

      const pic = {
        'file':photo
      }

      // const response = await fetch(`/.redwood/functions/upload`, {
      //   method: 'POST',
      //   body: formData,
      //   headers: headers,
      // })

      const formData = new FormData()
      formData.append('file', photo)
      formData.append('filename', photo.name)
      const headers = new Headers();
headers.delete('Content-Length'); // Remove the Content-Length header

      // const response = await axios.post(`/.redwood/functions/upload`,formData ,{
      //   headers: { 'Content-Type': 'multipart/form-data' },
      // })
      const contentLength = 10 * 1024 * 1024; // 10 MB in bytes

      const response = await axios.post('/.redwood/functions/practise', formData,{
        headers:{
          "Content-Length":formData.length
        }
      })
      console.log('here 3')

      // console.log(response)


      // if (!response.ok) {
      //   throw new Error(`Failed to upload file: ${response.statusText}`)
      // }

      const data = await response.data
      console.log(data)

      // const postData = {
      //   title: data.title,
      //   photoUrl: `/static/${filename}`,
      // }

      // const response = await fetch('/api/posts', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ input: postData }),
      // })

      // if (!response.ok) {
      //   throw new Error(`Failed to create post: ${response.statusText}`)
      // }

      // navigate(routes.home())
    } catch (error) {
      console.error('this is error ',error)
    }

    // props.onSave(data, props?.admissionForm?.id)

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

        <Dropzone onDrop={handlePhotoDrop}>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag and drop a photo here, or click to select a photo</p>
        </div>
      )}
    </Dropzone>
    {photoDataURL && (
      <img src={photoDataURL} alt="Selected photo preview" />
    )}

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

        <Label
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
