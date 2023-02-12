export const schema = gql`
  type Branch {
    id: Int!
    name: String!
    EnquiryForm: [EnquiryForm]!
    admissionForm: [AdmissionForm]!
    # EnquiryForm: [Int]!
    # admissionForm: [Int]!
  }


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
  }
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
    branches: [Branch!]! @requireAuth
    branch(id: Int!): Branch @requireAuth
  }

  input CreateBranchInput {
    name: String!
  }

  input UpdateBranchInput {
    name: String
  }

  type Mutation {
    createBranch(input: CreateBranchInput!): Branch! @requireAuth
    updateBranch(id: Int!, input: UpdateBranchInput!): Branch! @requireAuth
    deleteBranch(id: Int!): Branch! @requireAuth
  }
`
