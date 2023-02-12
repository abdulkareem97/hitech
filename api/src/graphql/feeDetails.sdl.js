export const schema = gql`
  type FeeDetail {
    id: Int!
    admissionFrom: AdmissionForm!
    admissionFormId: Int!
    fee_collected: Float!
    collected_by: String!
    collected_at: DateTime!
  }

  type Query {
    feeDetails: [FeeDetail!]! @requireAuth
    feeDetail(id: Int!): FeeDetail @requireAuth
  }

  input CreateFeeDetailInput {
    admissionFormId: Int!
    fee_collected: Float!
    collected_by: String!
    # collected_at: DateTime!
  }

  input UpdateFeeDetailInput {
    admissionFormId: Int
    fee_collected: Float
    collected_by: String
    # collected_at: DateTime
  }

  type Mutation {
    createFeeDetail(input: CreateFeeDetailInput!): FeeDetail! @requireAuth
    updateFeeDetail(id: Int!, input: UpdateFeeDetailInput!): FeeDetail!
      @requireAuth
    deleteFeeDetail(id: Int!): FeeDetail! @requireAuth
  }
`
