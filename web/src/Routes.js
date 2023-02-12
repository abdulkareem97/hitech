// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'
import PayfeeLayout from './layouts/PayfeeLayout/PayfeeLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>









      <Route path="/login" page={LoginPage} name="login" />


      <Route path="/signup" page={SignupPage} name="signup" />


      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />


      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />

      <Private unauthenticated='login' >



        <Set wrap={DashboardLayout}>

          <Route path="/" page={HomePage} name="home" />
          <Route path="/profile" page={ProfilePage} name="profile" />




          <Set wrap={PayfeeLayout} title="Pay Fee" titleTo="getDetail">
            <Route path="/std-detail/{id:Int}" page={PayFeeStdDetailPage} name="stdDetail" />
            <Route path="/get-detail" page={PayFeeGetDetailPage} name="getDetail" />

          </Set>
          <Set wrap={ScaffoldLayout} title="Branches" titleTo="branches" buttonLabel="New Branch" buttonTo="newBranch">
            <Route path="/branches/new" page={BranchNewBranchPage} name="newBranch" />
            <Route path="/branches/{id:Int}/edit" page={BranchEditBranchPage} name="editBranch" />
            <Route path="/branches/{id:Int}" page={BranchBranchPage} name="branch" />
            <Route path="/branches" page={BranchBranchesPage} name="branches" />
          </Set>

          <Set wrap={ScaffoldLayout} title="EnquiryForms" titleTo="enquiryForms" buttonLabel="New EnquiryForm" buttonTo="newEnquiryForm">
            <Route path="/enquiry-forms/new" page={EnquiryFormNewEnquiryFormPage} name="newEnquiryForm" />
            <Route path="/enquiry-forms/{id:Int}/edit" page={EnquiryFormEditEnquiryFormPage} name="editEnquiryForm" />
            <Route path="/enquiry-forms/{id:Int}" page={EnquiryFormEnquiryFormPage} name="enquiryForm" />
            <Route path="/enquiry-forms" page={EnquiryFormEnquiryFormsPage} name="enquiryForms" />
          </Set>

          <Set wrap={ScaffoldLayout} title="AdmissionForms" titleTo="admissionForms" buttonLabel="New AdmissionForm" buttonTo="newAdmissionForm">
            <Route path="/admission-forms/new" page={AdmissionFormNewAdmissionFormPage} name="newAdmissionForm" />
            <Route path="/admission-forms/{id:Int}/edit" page={AdmissionFormEditAdmissionFormPage} name="editAdmissionForm" />
            <Route path="/admission-forms/{id:Int}" page={AdmissionFormAdmissionFormPage} name="admissionForm" />
            <Route path="/admission-forms" page={AdmissionFormAdmissionFormsPage} name="admissionForms" />
          </Set>

          <Set wrap={ScaffoldLayout} title="FeeDetails" titleTo="feeDetails" buttonLabel="New FeeDetail" buttonTo="newFeeDetail" hidden='true'>
            <Route path="/fee-details/new" page={FeeDetailNewFeeDetailPage} name="newFeeDetail" />
            <Route path="/fee-details/{id:Int}/edit" page={FeeDetailEditFeeDetailPage} name="editFeeDetail" />
            <Route path="/fee-details/{id:Int}" page={FeeDetailFeeDetailPage} name="feeDetail" />
            <Route path="/fee-details" page={FeeDetailFeeDetailsPage} name="feeDetails" />
          </Set>







        </Set>
      </Private>

      {/* <Route path="/" page={HomePage} name="home" /> */}
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
