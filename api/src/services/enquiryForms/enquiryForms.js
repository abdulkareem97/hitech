import { db } from 'src/lib/db'

export const enquiryForms = () => {
  return db.enquiryForm.findMany()
}

export const enquiryForm = ({ id }) => {
  return db.enquiryForm.findUnique({
    where: { id },
  })
}

export const createEnquiryForm = ({ input }) => {
  return db.enquiryForm.create({
    data: input,
  })
}

export const updateEnquiryForm = ({ id, input }) => {
  return db.enquiryForm.update({
    data: input,
    where: { id },
  })
}

export const deleteEnquiryForm = ({ id }) => {
  return db.enquiryForm.delete({
    where: { id },
  })
}

export const EnquiryForm = {
  brach_name: (_obj, { root }) => {
    return db.enquiryForm.findUnique({ where: { id: root?.id } }).brach_name()
  },
}
