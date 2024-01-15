import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useForm from "../customHook";
import "./ContactStyle.css";

const Contact = () => {
  const initialValues = {
    firstname: "",
    email: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.number()
      .min(10, "Number must be at least 10 digits")
      .max(10, "Number should not more than 10 digits")
      .required("Phone Number is required"),
  });

  const { values, handleChange, handleSubmit } = useForm(
    initialValues,
    (values) => {
      console.log("Submitting:", values);
    }
  );

  return (
    <div className="form-container">
      <h2 className="form-title">Contact Us</h2>
      <Formik
        initialValues={values}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form">
          <div className="form-group">
            <label className="label" htmlFor="name">
              Name
            </label>
            <Field
              type="text"
              id="Name"
              name="Name"
              className="text-input"
              placeholder="Enter Full Name"
              onChange={handleChange}
              value={values.username}
            />
            <ErrorMessage className="error" name="Name" />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="email">
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="text-input"
              placeholder="Enter your email address"
              onChange={handleChange}
              value={values.email}
            />
            <ErrorMessage className="error" name="email" />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="phone">
              Phone No.
            </label>
            <Field
              type="number"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              className="text-input"
              onChange={handleChange}
              value={values.password}
            />
            <ErrorMessage className="error" name="phone" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Contact;
