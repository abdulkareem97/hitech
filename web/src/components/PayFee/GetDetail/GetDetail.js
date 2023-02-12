import { navigate, routes } from "@redwoodjs/router"
import { useState } from "react"

const GetDetail = () => {

  const [stdid,setStdid] = useState()
  const submit = ()=>{
    console.log('here ',stdid)

    if(stdid > 0)
    {
      // routes.stdDetail({id:stdid})
      navigate(routes.stdDetail({id:stdid}))
    }
    // routes.branches()
  }
  return (
    <>
      <div className="flex flex-col items-center space-y-4">
        <div className="text-xl underline">

          <label htmlFor="stdid"> <h3>Enter Student Id</h3> </label>
        </div>
        <div className="">
          <div className="flex space-x-3">
            <input className="text-black px-3" type="number" name="stdid" id="stdid" value={stdid} onChange={(e)=>setStdid(e.target.value)}/>
            <button className="bg-green-600 p-2 rounded-lg hover:bg-white hover:text-green-600" onClick={submit}>Get Details</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default GetDetail
