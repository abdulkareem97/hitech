import {
  admissionForms,
  admissionForm,
  createAdmissionForm,
  updateAdmissionForm,
  deleteAdmissionForm,
} from './admissionForms'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('admissionForms', () => {
  scenario('returns all admissionForms', async (scenario) => {
    const result = await admissionForms()

    expect(result.length).toEqual(Object.keys(scenario.admissionForm).length)
  })

  scenario('returns a single admissionForm', async (scenario) => {
    const result = await admissionForm({ id: scenario.admissionForm.one.id })

    expect(result).toEqual(scenario.admissionForm.one)
  })

  scenario('creates a admissionForm', async (scenario) => {
    const result = await createAdmissionForm({
      input: {
        student_name: 'String',
        photo: 'String',
        father_name: 'String',
        mother_name: 'String',
        dob: '2023-02-12T11:34:37.885Z',
        address: 'String',
        father_occupation: 'String',
        qualification: 'String',
        mobile_no: 'String',
        email: 'String',
        selected_course: 'String',
        branchId: scenario.admissionForm.two.branchId,
        date_of_joining: '2023-02-12T11:34:37.885Z',
        date_of_ending: '2023-02-12T11:34:37.885Z',
        course_fee: 3601566.654360946,
        fee_paid: 6868614.558591204,
        balance_fee: 3467244.7621918414,
        added_by: 'String',
        updated_at: '2023-02-12T11:34:37.885Z',
      },
    })

    expect(result.student_name).toEqual('String')
    expect(result.photo).toEqual('String')
    expect(result.father_name).toEqual('String')
    expect(result.mother_name).toEqual('String')
    expect(result.dob).toEqual(new Date('2023-02-12T11:34:37.885Z'))
    expect(result.address).toEqual('String')
    expect(result.father_occupation).toEqual('String')
    expect(result.qualification).toEqual('String')
    expect(result.mobile_no).toEqual('String')
    expect(result.email).toEqual('String')
    expect(result.selected_course).toEqual('String')
    expect(result.branchId).toEqual(scenario.admissionForm.two.branchId)
    expect(result.date_of_joining).toEqual(new Date('2023-02-12T11:34:37.885Z'))
    expect(result.date_of_ending).toEqual(new Date('2023-02-12T11:34:37.885Z'))
    expect(result.course_fee).toEqual(3601566.654360946)
    expect(result.fee_paid).toEqual(6868614.558591204)
    expect(result.balance_fee).toEqual(3467244.7621918414)
    expect(result.added_by).toEqual('String')
    expect(result.updated_at).toEqual(new Date('2023-02-12T11:34:37.885Z'))
  })

  scenario('updates a admissionForm', async (scenario) => {
    const original = await admissionForm({
      id: scenario.admissionForm.one.id,
    })
    const result = await updateAdmissionForm({
      id: original.id,
      input: { student_name: 'String2' },
    })

    expect(result.student_name).toEqual('String2')
  })

  scenario('deletes a admissionForm', async (scenario) => {
    const original = await deleteAdmissionForm({
      id: scenario.admissionForm.one.id,
    })
    const result = await admissionForm({ id: original.id })

    expect(result).toEqual(null)
  })
})
