import { Link, navigate, routes } from "@redwoodjs/router";
import { BsPersonCircle } from "react-icons/bs";
import { useAuth } from "src/auth";

const Profile = () => {
  const { isAuthenticated, currentUser, logOut, hasRole } = useAuth()

  return (
    <>
      <div className="grid place-items-center">
        <div>
          <BsPersonCircle className="text-3xl" />
        </div>
        <div className="flex flex-col mt-3">
          <div className="space-x-3">
            <span>
              Email :-
            </span>
            <span>
                {currentUser.email}
            </span>
          </div>
          <div className="space-x-3">
            <span>
              Role :-
            </span>
            <span className="uppercase">
            {currentUser.roles}

            </span>
          </div>
        </div>

        <div className="flex space-x-2 mt-2">
          <Link to={routes.forgotPassword()} className="bg-green-500 p-2 hover:text-green-500 hover:bg-white rounded-lg">Change Password</Link>
          <Link className="bg-red-500 p-2 hover:text-red-500 hover:bg-white rounded-lg">Reset Password</Link>
        </div>



      </div>
    </>
  )
}

export default Profile
