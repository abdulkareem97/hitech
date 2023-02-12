import Branch from 'src/components/Branch/Branch'

export const QUERY = gql`
  query FindBranchById($id: Int!) {
    branch: branch(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Branch not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ branch }) => {
  return <Branch branch={branch} />
}
