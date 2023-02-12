import { db } from 'src/lib/db'

export const branches = () => {
  return db.branch.findMany()
}

export const branch = ({ id }) => {
  return db.branch.findUnique({
    where: { id },
  })
}

export const createBranch = ({ input }) => {
  return db.branch.create({
    data: input,
  })
}

export const updateBranch = ({ id, input }) => {
  return db.branch.update({
    data: input,
    where: { id },
  })
}

export const deleteBranch = ({ id }) => {
  return db.branch.delete({
    where: { id },
  })
}

export const Branch = {
  EnquiryForm: (_obj, { root }) => {
    return db.branch.findUnique({ where: { id: root?.id } }).EnquiryForm()
  },
  admissionForm: (_obj, { root }) => {
    return db.branch.findUnique({ where: { id: root?.id } }).admissionForm()
  },
}
