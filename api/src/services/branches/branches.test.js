import {
  branches,
  branch,
  createBranch,
  updateBranch,
  deleteBranch,
} from './branches'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('branches', () => {
  scenario('returns all branches', async (scenario) => {
    const result = await branches()

    expect(result.length).toEqual(Object.keys(scenario.branch).length)
  })

  scenario('returns a single branch', async (scenario) => {
    const result = await branch({ id: scenario.branch.one.id })

    expect(result).toEqual(scenario.branch.one)
  })

  scenario('creates a branch', async () => {
    const result = await createBranch({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a branch', async (scenario) => {
    const original = await branch({ id: scenario.branch.one.id })
    const result = await updateBranch({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a branch', async (scenario) => {
    const original = await deleteBranch({
      id: scenario.branch.one.id,
    })
    const result = await branch({ id: original.id })

    expect(result).toEqual(null)
  })
})
