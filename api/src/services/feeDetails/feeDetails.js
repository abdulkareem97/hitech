import { db } from 'src/lib/db'

export const feeDetails = () => {
  return db.feeDetail.findMany()
}

export const feeDetail = ({ id }) => {
  return db.feeDetail.findUnique({
    where: { id },
  })
}

export const createFeeDetail = ({ input }) => {
  return db.feeDetail.create({
    data: input,
  })
}

export const updateFeeDetail = ({ id, input }) => {
  return db.feeDetail.update({
    data: input,
    where: { id },
  })
}

export const deleteFeeDetail = ({ id }) => {
  return db.feeDetail.delete({
    where: { id },
  })
}

export const FeeDetail = {
  admissionFrom: (_obj, { root }) => {
    return db.feeDetail.findUnique({ where: { id: root?.id } }).admissionFrom()
  },
}
