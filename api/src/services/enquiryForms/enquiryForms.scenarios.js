export const standard = defineScenario({
  enquiryForm: {
    one: {
      data: {
        student_name: 'String',
        photo: 'String',
        father_name: 'String',
        mother_name: 'String',
        dob: '2023-02-10T22:25:31.268Z',
        address: 'String',
        father_occupation: 'String',
        qualification: 'String',
        mobile_no: 'String',
        email: 'String',
        selected_course: 'String',
        brach_name: { create: { name: 'String' } },
      },
    },
    two: {
      data: {
        student_name: 'String',
        photo: 'String',
        father_name: 'String',
        mother_name: 'String',
        dob: '2023-02-10T22:25:31.268Z',
        address: 'String',
        father_occupation: 'String',
        qualification: 'String',
        mobile_no: 'String',
        email: 'String',
        selected_course: 'String',
        brach_name: { create: { name: 'String' } },
      },
    },
  },
})
