import React from "react";
import { Field, Form, Formik } from "formik";

const DropdownChooser = (props) => {
  function onChoose(values, actions) {
    actions.setSubmitting(false);
    props.setFileFunc(values["color"]);
  }
  return (
    <div>
      <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate mb-4">
        Thiagrajar College of Engineering
      </h1>
      <p className="text-xl font-normal leading-normal mt-0 mb-2">
        Choose Question Paper:
      </p>

      <Formik initialValues={{ color: "1" }} onSubmit={onChoose}>
        {(props) => (
          <div className="">
            <Form>
              <Field as="select" name="color">
                <option value="1">Question Paper 1</option>
                <option value="2">Question Paper 2</option>
                <option value="3">Question Paper 3</option>
                <option value="4">Question Paper 4</option>
                <option value="5">Question Paper 5</option>
              </Field>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mx-10 my-5"
              >
                Submit
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default DropdownChooser;
