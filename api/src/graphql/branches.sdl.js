export const schema = gql`
  type Branch {
    id: Int!
    name: String!
    EnquiryForm: [EnquiryForm]!
    admissionForm: [AdmissionForm]!
    added_by: String!
    created_at: DateTime!
    updated_at: DateTime!
  }

  type Query {
    branches: [Branch!]! @requireAuth
    branch(id: Int!): Branch @requireAuth
  }

  input CreateBranchInput {
    name: String!
    added_by: String!
  }

  input UpdateBranchInput {
    name: String
    added_by: String
  }

  type Mutation {
    createBranch(input: CreateBranchInput!): Branch! @requireAuth
    updateBranch(id: Int!, input: UpdateBranchInput!): Branch! @requireAuth
    deleteBranch(id: Int!): Branch! @requireAuth
  }
`
