export const schema = gql`
  type EnquiryForm {
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
    added_by: String!
    created_at: DateTime!
    updated_at: DateTime!
  }

  type Query {
    enquiryForms: [EnquiryForm!]! @requireAuth
    enquiryForm(id: Int!): EnquiryForm @requireAuth
  }

  input CreateEnquiryFormInput {
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
    added_by: String!
  }

  input UpdateEnquiryFormInput {
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
    added_by: String
  }

  type Mutation {
    createEnquiryForm(input: CreateEnquiryFormInput!): EnquiryForm! @requireAuth
    updateEnquiryForm(id: Int!, input: UpdateEnquiryFormInput!): EnquiryForm!
      @requireAuth
    deleteEnquiryForm(id: Int!): EnquiryForm! @requireAuth
  }
`
