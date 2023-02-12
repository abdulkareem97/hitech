import {
  feeDetails,
  feeDetail,
  createFeeDetail,
  updateFeeDetail,
  deleteFeeDetail,
} from './feeDetails'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('feeDetails', () => {
  scenario('returns all feeDetails', async (scenario) => {
    const result = await feeDetails()

    expect(result.length).toEqual(Object.keys(scenario.feeDetail).length)
  })

  scenario('returns a single feeDetail', async (scenario) => {
    const result = await feeDetail({ id: scenario.feeDetail.one.id })

    expect(result).toEqual(scenario.feeDetail.one)
  })

  scenario('creates a feeDetail', async (scenario) => {
    const result = await createFeeDetail({
      input: {
        admissionFormId: scenario.feeDetail.two.admissionFormId,
        fee_collected: 4022927.8119727517,
        collected_by: 'String',
      },
    })

    expect(result.admissionFormId).toEqual(
      scenario.feeDetail.two.admissionFormId
    )

    expect(result.fee_collected).toEqual(4022927.8119727517)
    expect(result.collected_by).toEqual('String')
  })

  scenario('updates a feeDetail', async (scenario) => {
    const original = await feeDetail({
      id: scenario.feeDetail.one.id,
    })
    const result = await updateFeeDetail({
      id: original.id,
      input: { fee_collected: 3097120.887910354 },
    })

    expect(result.fee_collected).toEqual(3097120.887910354)
  })

  scenario('deletes a feeDetail', async (scenario) => {
    const original = await deleteFeeDetail({
      id: scenario.feeDetail.one.id,
    })
    const result = await feeDetail({ id: original.id })

    expect(result).toEqual(null)
  })
})
