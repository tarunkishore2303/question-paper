import React from "react";
import { Field, Form, Formik, FormikProps } from "formik";

const MyInput = ({ field, form, ...props }) => {
  return <input {...field} {...props} />;
};

const Basic = (props) => {
  function onChoose(values, actions) {
    actions.setSubmitting(false);
    props.setFileFunc(values["color"]);
  }
  return (
    <div>
      <h1>My Form</h1>
      <Formik initialValues={{ color: "1" }} onSubmit={onChoose}>
        {(props) => (
          <Form>
            <Field as="select" name="color">
              <option value="1">QP 1</option>
              <option value="2">QP 2</option>
              <option value="3">QP 3</option>
            </Field>

            <button type="submit">Sub</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Basic;
