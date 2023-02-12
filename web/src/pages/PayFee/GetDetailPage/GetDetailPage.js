import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import GetDetail from 'src/components/PayFee/GetDetail/GetDetail'

const GetDetailPage = () => {
  return (
    <>
      <MetaTags title="GetDetail" description="GetDetail page" />

      <div className='p-4  m-2 shadow-md bg-slate-800 rounded-lg '>


        <GetDetail />
      </div>
    </>
  )
}

export default GetDetailPage
