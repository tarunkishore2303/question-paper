import React, { useState } from "react";
import { PDFDownloadLink } from "react-pdf";
import GetPDF from "./GetPDF";
import { useFormik } from "formik";
import "./form.css";
import { Field, Formik } from "formik";

function Form() {
	return (
		<div className='form'>
			<h1> THIAGARJAR COLLEGE OF ENGINEERING </h1>

			<div className='form-container'>
				<Formik
					initialValues={{
						qn1: "",
						qn2: "",
						qn3: "",
						qn4: "",
						qn5: "",
						qn6: "",
						qn7: "",
						qn8: "",
						qn9: "",
					}}
					onSubmit={async (values) => {
						await new Promise((r) => setTimeout(r, 500));
						alert(JSON.stringify(values, null, 2));
					}}
				>
					{({ values }) => (
						<form>
							<fieldset>
								<legend>COURSE NAME</legend>

								<p>
									1. Questions are clear and defenite without
									ambiguties
								</p>
								<div
									role='group'
									aria-labelledby='my-radio-group'
								>
									 {" "}
									<Field
										type='radio'
										id='Yes'
										name='qn1'
										value='Yes'
										required
									/>
									  <label for='Yes'>Yes</label>
									 {" "}
									<Field
										type='radio'
										id='No'
										name='qn1'
										value='No'
										required
									/>
									  <label for='Yes'>No</label>
								</div>
								{values.qn1}

								<p>
									2. Course code, course name, date and
									session are given as per CAT timetable
								</p>
								<div
									role='group'
									aria-labelledby='my-radio-group'
								>
									 {" "}
									<Field
										type='radio'
										id='Yes'
										name='qn2'
										value='Yes'
										required
									/>
									  <label for='Yes'>Yes</label>
									 {" "}
									<Field
										type='radio'
										id='No'
										name='qn2'
										value='No'
										required
									/>
									  <label for='No'>No</label>
								</div>
								{values.qn2}

								<p>
									3. Use of appropriate keyword for the
									revised Bloom level
								</p>
								<div
									role='group'
									aria-labelledby='my-radio-group'
								>
									 {" "}
									<Field
										type='radio'
										id='Yes'
										name='qn3'
										value='Yes'
										required
									/>
									  <label for='Yes'>Yes</label>
									 {" "}
									<Field
										type='radio'
										id='No'
										name='qn3'
										value='No'
										required
									/>
									  <label for='No'>No</label>
								</div>
								{values.qn3}

								<p>
									4. Question paper is set for the Maximum
									marks allotted
								</p>
								<div
									role='group'
									aria-labelledby='my-radio-group'
								>
									 {" "}
									<Field
										type='radio'
										id='Yes'
										name='qn4'
										value='Yes'
									/>
									  <label for='Yes'>Yes</label>
									 {" "}
									<Field
										type='radio'
										id='No'
										name='qn4'
										value='No'
									/>
									  <label for='No'>No</label>
								</div>

								<p>
									5. Correctness of categorization of each
									Question as per CO list given in the
									Syllabus
								</p>
								<div
									role='group'
									aria-labelledby='my-radio-group'
								>
									 {" "}
									<Field
										type='radio'
										id='Yes'
										name='qn5'
										value='Yes'
									/>
									  <label for='Yes'>Yes</label>
									 {" "}
									<Field
										type='radio'
										id='No'
										name='qn5'
										value='No'
									/>
									  <label for='No'>No</label>
								</div>

								<p>
									6. Consistency of mapping of each question
									w.r.t revised Bloom&#39;s level and the CO
								</p>
								<div
									role='group'
									aria-labelledby='my-radio-group'
								>
									 {" "}
									<Field
										type='radio'
										id='Yes'
										name='qn6'
										value='Yes'
									/>
									  <label for='Yes'>Yes</label>
									 {" "}
									<Field
										type='radio'
										id='No'
										name='qn6'
										value='No'
									/>
									  <label for='No'>No</label>
								</div>

								<p>
									7. Correctness weightage of each question as
									per assessment pattern
								</p>
								<div
									role='group'
									aria-labelledby='my-radio-group'
								>
									 {" "}
									<Field
										type='radio'
										id='Yes'
										name='qn7'
										value='Yes'
									/>
									  <label for='Yes'>Yes</label>
									 {" "}
									<Field
										type='radio'
										id='No'
										name='qn7'
										value='No'
									/>
									  <label for='No'>No</label>
								</div>

								<p>
									8. Split-up marks for each sub-divisions are
									given correctly in the Question paper
								</p>
								<div
									role='group'
									aria-labelledby='my-radio-group'
								>
									 {" "}
									<Field
										type='radio'
										id='Yes'
										name='qn8'
										value='Yes'
									/>
									  <label for='Yes'>Yes</label>
									 {" "}
									<Field
										type='radio'
										id='No'
										name='qn8'
										value='No'
									/>
									  <label for='No'>No</label>
								</div>

								<p>9. Coverage of syllabus </p>
								<div
									role='group'
									aria-labelledby='my-radio-group'
								>
									 {" "}
									<Field
										type='radio'
										id='Yes'
										name='qn9'
										value='Yes'
									/>
									  <label for='Yes'>Yes</label>
									 {" "}
									<Field
										type='radio'
										id='No'
										name='qn9'
										value='No'
									/>
									  <label for='No'>No</label>
								</div>

								<p>10. Other Remarks :</p>
								<textarea rows='5' cols='50'></textarea>

								<p>
									<button type='submit' class='btn'>
										Submit{" "}
									</button>
								</p>
							</fieldset>
						</form>
					)}
				</Formik>
			</div>
		</div>
	);
}

export default Form;
