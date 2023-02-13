import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { BsPersonCircle } from "react-icons/bs";

import { timeTag } from 'src/lib/formatters'

const DELETE_USER_MUTATION = gql`
  mutation DeleteUserMutation($id: Int!) {
    deleteUser(id: $id) {
      id
    }
  }
`

const User = ({ user }) => {
  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User deleted')
      navigate(routes.users())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete user ' + id + '?')) {
      deleteUser({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            User {user.id} Detail
          </h2>
        </header>
        <div className="grid place-items-center bg-slate-700 text-white py-4">
          <div>
            <BsPersonCircle className="text-3xl" />
          </div>
          <div className="flex flex-col mt-3">
            <div className="space-x-3">
              <span>
                Email :-
              </span>
              <span>
              {user.email}
              </span>
            </div>
            <div className="space-x-3">
              <span>
                Role :-
              </span>
              <span className="uppercase">
                {user.roles}

              </span>
            </div>
            <div className="space-x-3">
              <span>
                Created At :-
              </span>
              <span className="uppercase">
              {timeTag(user.created_at)}

              </span>
            </div>
            <div className="space-x-3">
              <span>
                Updated At :-
              </span>
              <span className="uppercase">
              {timeTag(user.updated_at)}

              </span>
            </div>
          </div>
{/*
          <div className="flex space-x-2 mt-2">
            <Link to={routes.forgotPassword()} className="bg-green-500 p-2 hover:text-green-500 hover:bg-white rounded-lg">Change Password</Link>
            <Link className="bg-red-500 p-2 hover:text-red-500 hover:bg-white rounded-lg">Reset Password</Link>
          </div> */}



        </div>
        {/* <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{user.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{user.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th>Hashed password</th>
              <td>{user.hashedPassword}</td>
            </tr>
            <tr>
              <th>Salt</th>
              <td>{user.salt}</td>
            </tr>
            <tr>
              <th>Reset token</th>
              <td>{user.resetToken}</td>
            </tr>
            <tr>
              <th>Reset token expires at</th>
              <td>{timeTag(user.resetTokenExpiresAt)}</td>
            </tr>
            <tr>
              <th>Roles</th>
              <td>{user.roles}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(user.created_at)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(user.updated_at)}</td>
            </tr>
          </tbody>
        </table> */}
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.users()}
          className="rw-button rw-button-blue"
        >
          Go Back
        </Link>
        {/* <Link
          to={routes.editUser({ id: user.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(user.id)}
        >
          Delete
        </button> */}
      </nav>
    </>
  )
}

export default User
