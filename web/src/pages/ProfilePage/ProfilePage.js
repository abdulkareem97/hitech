import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Profile from 'src/components/Profile/Profile'

const ProfilePage = () => {
  return (
    <>
      <MetaTags title="Profile" description="Profile page" />

      <div className='p-4  m-2 shadow-md bg-slate-800 rounded-lg '>


        <Profile />
      </div>
    </>
  )
}

export default ProfilePage
