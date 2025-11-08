import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";

function StudentForm({ initialValues, onSubmit, enableReinitialize, children }) {
    const validationSchema = Yup.object({
      name: Yup.string().required("Iltimos ismingizni kiriting"),
      email: Yup.string()
        .email("Iltimos Emailingizni to‘g‘ri kiriting")
        .required("Email yozish majburiy"),
      rollno: Yup.number()
        .typeError("Raqam kiriting")
        .positive("Iltimos to‘g‘ri roll nomerni kiriting")
        .integer("Iltimos butun raqam kiriting")
        .required("Raqam yozish majburiy"),
    });
  
    return (
      <div className="form-wrapper">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize={enableReinitialize}
        >
          {({ isSubmitting }) => (
            <Form>
              <FormGroup className="mb-3">
                <Field name="name" type="text" className="form-control" placeholder="Ism" />
                <ErrorMessage name="name" component="span" className="d-block invalid-feedback" />
              </FormGroup>
  
              <FormGroup className="mb-3">
                <Field name="email" type="text" className="form-control" placeholder="Email" />
                <ErrorMessage name="email" component="span" className="d-block invalid-feedback" />
              </FormGroup>
  
              <FormGroup className="mb-3">
                <Field name="rollno" type="text" className="form-control" placeholder="Roll No" />
                <ErrorMessage name="rollno" component="span" className="d-block invalid-feedback" />
              </FormGroup>
  
              <Button variant="danger" size="lg" className="w-100" type="submit" disabled={isSubmitting}>
                {children}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
  

export default StudentForm;
