import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import StdDetailCell from 'src/components/PayFee/StdDetailCell'

const StdDetailPage = ({id}) => {
  return (
    <>
      <MetaTags title="StdDetail" description="StdDetail page" />

      <div className='p-4  m-2 shadow-md bg-slate-800 rounded-lg '>
        <StdDetailCell id={id} />
      </div>
    </>
  )
}

export default StdDetailPage
