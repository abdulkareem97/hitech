import {
  enquiryForms,
  enquiryForm,
  createEnquiryForm,
  updateEnquiryForm,
  deleteEnquiryForm,
} from './enquiryForms'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('enquiryForms', () => {
  scenario('returns all enquiryForms', async (scenario) => {
    const result = await enquiryForms()

    expect(result.length).toEqual(Object.keys(scenario.enquiryForm).length)
  })

  scenario('returns a single enquiryForm', async (scenario) => {
    const result = await enquiryForm({ id: scenario.enquiryForm.one.id })

    expect(result).toEqual(scenario.enquiryForm.one)
  })

  scenario('creates a enquiryForm', async (scenario) => {
    const result = await createEnquiryForm({
      input: {
        student_name: 'String',
        photo: 'String',
        father_name: 'String',
        mother_name: 'String',
        dob: '2023-02-10T22:25:31.245Z',
        address: 'String',
        father_occupation: 'String',
        qualification: 'String',
        mobile_no: 'String',
        email: 'String',
        selected_course: 'String',
        branchId: scenario.enquiryForm.two.branchId,
      },
    })

    expect(result.student_name).toEqual('String')
    expect(result.photo).toEqual('String')
    expect(result.father_name).toEqual('String')
    expect(result.mother_name).toEqual('String')
    expect(result.dob).toEqual(new Date('2023-02-10T22:25:31.245Z'))
    expect(result.address).toEqual('String')
    expect(result.father_occupation).toEqual('String')
    expect(result.qualification).toEqual('String')
    expect(result.mobile_no).toEqual('String')
    expect(result.email).toEqual('String')
    expect(result.selected_course).toEqual('String')
    expect(result.branchId).toEqual(scenario.enquiryForm.two.branchId)
  })

  scenario('updates a enquiryForm', async (scenario) => {
    const original = await enquiryForm({
      id: scenario.enquiryForm.one.id,
    })
    const result = await updateEnquiryForm({
      id: original.id,
      input: { student_name: 'String2' },
    })

    expect(result.student_name).toEqual('String2')
  })

  scenario('deletes a enquiryForm', async (scenario) => {
    const original = await deleteEnquiryForm({
      id: scenario.enquiryForm.one.id,
    })
    const result = await enquiryForm({ id: original.id })

    expect(result).toEqual(null)
  })
})
