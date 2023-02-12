// import { gql, Upload } from '@redwoodjs/api'

export const schema = gql`
  type AdmissionForm {
    id: Int!
    brach_name: Branch!
    student_name: String!
    photo: String!
    father_name: String!
    mother_name: String!
    dob: DateTime!
    address: String!
    father_occupation: String!
    qualification: String!
    mobile_no: String!
    email: String!
    selected_course: String!
    branchId: Int!
    date_of_joining: DateTime!
    date_of_ending: DateTime!
    course_fee: Float!
    fee_paid: Float!
    balance_fee: Float!
  }

  type Query {
    admissionForms: [AdmissionForm!]! @requireAuth
    admissionForm(id: Int!): AdmissionForm @requireAuth
  }

  input CreateAdmissionFormInput {
    student_name: String!
    photo: String!
    father_name: String!
    mother_name: String!
    dob: DateTime!
    address: String!
    father_occupation: String!
    qualification: String!
    mobile_no: String!
    email: String!
    selected_course: String!
    branchId: Int!
    date_of_joining: DateTime!
    date_of_ending: DateTime!
    course_fee: Float!
    fee_paid: Float!
    balance_fee: Float!
  }

  input UpdateAdmissionFormInput {
    student_name: String
    photo: String
    father_name: String
    mother_name: String
    dob: DateTime
    address: String
    father_occupation: String
    qualification: String
    mobile_no: String
    email: String
    selected_course: String
    branchId: Int
    date_of_joining: DateTime
    date_of_ending: DateTime
    course_fee: Float
    fee_paid: Float
    balance_fee: Float
  }


  type Mutation {
    createAdmissionForm(input: CreateAdmissionFormInput!): AdmissionForm!
      @requireAuth
    updateAdmissionForm(
      id: Int!
      input: UpdateAdmissionFormInput!
    ): AdmissionForm! @requireAuth
    deleteAdmissionForm(id: Int!): AdmissionForm! @requireAuth
  }
`
