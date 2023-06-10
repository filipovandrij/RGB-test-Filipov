import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  user_name: Yup.string()
    .min(2, "Too short")
    .max(50, "Too long")
    .required("Required"),
  user_mail: Yup.string().email("Invalid email").required("Required"),
  user_phone: Yup.string(),
});

const initialValues = {
  user_name: "",
  user_mail: "",
  user_phone: "",
};

const AddForm = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      values.user_phone = value;
      await axios.post("http://localhost:3001/send-email", values);
      console.log("Email sent successfully");
      resetForm();
    } catch (error) {
      console.error("An error occurred while sending the email:", error);
    }
    resetForm();
  };
  const [value, setValue] = useState();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="form">
          <div className="form-group">
            <label htmlFor="user_name" className="label">
              Ваше имя и фамилия
            </label>
            <Field
              type="text"
              id="user_name"
              name="user_name"
              className="input"
            />
            <ErrorMessage name="user_name" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="user_mail" className="label">
              Ваш email
            </label>
            <Field
              type="text"
              id="user_mail"
              name="user_mail"
              className="input"
            />
            <ErrorMessage name="user_mail" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="user_phone" className="label">
              Ваш номер телефона
            </label>

            <PhoneInput
              defaultCountry="US"
              id="user_phone"
              name="user_phone"
              value={value}
              onChange={setValue}
            />
            <ErrorMessage name="user_phone" component="div" className="error" />
          </div>

          <button type="submit" className="button">
            Записаться бесплатно
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddForm;
