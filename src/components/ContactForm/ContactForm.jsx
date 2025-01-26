import { addContact } from "../../redux/operations";

import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
// import { addContact } from "../../redux/contactsSlice";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const ValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short")
      .max(50, "Too Long")
      .required("Name is required"),
    number: Yup.string()
      .min(3, "Too Short")
      .max(50, "Too Long")
      .required("Number is required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ValidationSchema}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <label>
            Name
            <div>
              <Field className={css.field} type="text" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: "tomato" }}
              />
            </div>
          </label>
          <label>
            Number
            <div>
              <Field
                className={css.field}
                type="tel"
                inputMode="tel"
                name="number"
              />
              <ErrorMessage
                name="number"
                component="div"
                style={{ color: "tomato" }}
              />
            </div>
          </label>
          <button type="submit" disabled={isSubmitting}>
            Add contact{" "}
          </button>
        </Form>
      )}
    </Formik>
  );
}
