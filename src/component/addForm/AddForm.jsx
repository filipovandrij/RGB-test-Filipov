import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  author: Yup.string().required("Required"),
  year: Yup.number()
    .integer("Must be an integer")
    .min(1500, "Too old")
    .max(new Date().getFullYear(), "Cannot be in the future")
    .required("Required"),
  rating: Yup.number()
    .min(0, "Minimum rating is 0")
    .max(5, "Maximum rating is 5")
    .required("Required"),
});

const initialValues = {
  title: "",
  author: "",
  year: "",
  rating: "",
};

const AddForm = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post("http://localhost:3001/send-email", values);
      console.log("Email sent successfully");
      resetForm();
    } catch (error) {
      console.error("An error occurred while sending the email:", error);
    }
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="form">
          <div className="form-group">
            <label htmlFor="title" className="label">
              Enter Product Name:
            </label>
            <Field type="text" id="title" name="title" className="input" />
            <ErrorMessage name="title" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="author" className="label">
              Enter Autor:
            </label>
            <Field type="text" id="author" name="author" className="input" />
            <ErrorMessage name="author" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="year" className="label">
              Enter Year:
            </label>
            <Field type="number" id="year" name="year" className="input" />
            <ErrorMessage name="year" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="rating" className="label">
              Enter Rating from 0 to 5:
            </label>
            <Field type="number" id="rating" name="rating" className="input" />
            <ErrorMessage name="rating" component="div" className="error" />
          </div>

          <button type="submit" className="button">
            Add Product
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddForm;
