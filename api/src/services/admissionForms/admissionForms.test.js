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
        dob: '2023-02-10T23:02:24.789Z',
        address: 'String',
        father_occupation: 'String',
        qualification: 'String',
        mobile_no: 'String',
        email: 'String',
        selected_course: 'String',
        branchId: scenario.admissionForm.two.branchId,
        date_of_joining: '2023-02-10T23:02:24.789Z',
        date_of_ending: '2023-02-10T23:02:24.789Z',
        course_fee: 7230092.984172371,
        fee_paid: 4359702.052591472,
        balance_fee: 6031414.514577851,
      },
    })

    expect(result.student_name).toEqual('String')
    expect(result.photo).toEqual('String')
    expect(result.father_name).toEqual('String')
    expect(result.mother_name).toEqual('String')
    expect(result.dob).toEqual(new Date('2023-02-10T23:02:24.789Z'))
    expect(result.address).toEqual('String')
    expect(result.father_occupation).toEqual('String')
    expect(result.qualification).toEqual('String')
    expect(result.mobile_no).toEqual('String')
    expect(result.email).toEqual('String')
    expect(result.selected_course).toEqual('String')
    expect(result.branchId).toEqual(scenario.admissionForm.two.branchId)
    expect(result.date_of_joining).toEqual(new Date('2023-02-10T23:02:24.789Z'))
    expect(result.date_of_ending).toEqual(new Date('2023-02-10T23:02:24.789Z'))
    expect(result.course_fee).toEqual(7230092.984172371)
    expect(result.fee_paid).toEqual(4359702.052591472)
    expect(result.balance_fee).toEqual(6031414.514577851)
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
