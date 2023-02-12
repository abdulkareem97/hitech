import { db } from 'src/lib/db'

export const admissionForms = () => {
  return db.admissionForm.findMany()
}

export const admissionForm = ({ id }) => {
  return db.admissionForm.findUnique({
    where: { id },
  })
}

export const createAdmissionForm = ({ input }) => {
  return db.admissionForm.create({
    data: input,
  })
}

export const updateAdmissionForm = ({ id, input }) => {
  return db.admissionForm.update({
    data: input,
    where: { id },
  })
}

export const deleteAdmissionForm = ({ id }) => {
  return db.admissionForm.delete({
    where: { id },
  })
}

export const AdmissionForm = {
  brach_name: (_obj, { root }) => {
    return db.admissionForm.findUnique({ where: { id: root?.id } }).brach_name()
  },
  FeeDetails: (_obj, { root }) => {
    return db.admissionForm.findUnique({ where: { id: root?.id } }).FeeDetails()
  },
}
