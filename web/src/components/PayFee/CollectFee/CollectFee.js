import { toast } from '@redwoodjs/web/toast'
import { useState } from "react"
import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'


const UPDATE_ADMISSION_FORM_MUTATION = gql`
  mutation UpdateAdmissionFormMutation(
    $id: Int!
    $input: UpdateAdmissionFormInput!
  ) {
    updateAdmissionForm(id: $id, input: $input) {
      id
      student_name
      fee_paid
      balance_fee
    }
  }
`

const CollectFee = ({ stdDetail }) => {
  const [updateAdmissionForm, { loading, error }] = useMutation(
    UPDATE_ADMISSION_FORM_MUTATION,
    {
      onCompleted: () => {
        toast.success('Fee Amount updated')
        navigate(routes.admissionForm({id:stdDetail.id}))
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )



  const [feeCollect, setFeeCollect] = useState()

  const updateFee = ()=>{
    const bal = stdDetail.balance_fee - feeCollect
    const paid = Number(stdDetail.fee_paid) + Number(feeCollect)
    console.log(bal,paid)
    if(bal < 0 || paid > stdDetail.course_fee)
    {
      toast.error("Invalid Amount")
      console.log('here')
      return
    }

    const input = {
      balance_fee : bal,
      fee_paid : paid


    }

    updateAdmissionForm({ variables: { id:stdDetail.id, input } })




  }


  return (
    <>
      <div>
        <div className="flex justify-center text-xl uppercase underline">
          <span>Student Details</span>
        </div>
        <div className="grid grid-cols-2 mt-3 p-3 place-items-center">

          <div>
            <span>Student Name : </span>
            <span>{stdDetail.student_name}</span>
          </div>
          <div>
            <span>Branch Name : </span>
            <span>{stdDetail.brach_name.name}</span>
          </div>
          <div>
            <span>Course Applied : </span>
            <span>{stdDetail.selected_course}</span>
          </div>
          <div>
            <span>Course Fee : </span>
            <span>{stdDetail.course_fee}</span>
          </div>
          <div>
            <span>Fee Paid : </span>
            <span>{stdDetail.fee_paid}</span>
          </div>
          <div>
            <span>Balance Fee : </span>
            <span>{stdDetail.balance_fee}</span>
          </div>


        </div>

        <div className="flex flex-col items-center space-y-2">
          <div>
            <span className="text-xl">Enter The Fee Amount</span>

          </div>

          <div className="flex space-x-3 justify-center">
            <div>
              <input className="text-black px-3 py-2" type="number" name="stdid" id="stdid" value={feeCollect} onChange={(e) => setFeeCollect(e.target.value)} />
            </div>
            <div>
              <button className="bg-green-600 p-2 rounded-lg hover:bg-white hover:text-green-600" onClick={updateFee}>Pay Fee</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default CollectFee
