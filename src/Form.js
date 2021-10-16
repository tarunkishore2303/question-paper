import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import GetPDF from "./GetPDF";
import "./form.css";
import { useFormik } from "formik";

function Form() {
	const [answers, setAnswers] = useState({});
	console.log(answers);
	const formik = useFormik({
		initialValues: {
			qn1: "",
			qn2: "",
			qn3: "",
			qn4: "",
			qn5: "",
			qn6: "",
			qn7: "",
			qn8: "",
			qn9: "",
		},
		onSubmit: async (values) => {
			await new Promise((resolve, reject) => {
				resolve(setAnswers(values));
				console.log(JSON.stringify(values, null, 2));
			});
		},
	});
	return (
		<div className='form'>
			<h1> THIAGARJAR COLLEGE OF ENGINEERING </h1>
			<div className='form-container'>
				<form onSubmit={formik.handleSubmit}>
					<fieldset>
						<legend>COURSE NAME</legend>

						<p>
							1. Questions are clear and defenite without
							ambiguties
						</p>
						<div role='group' aria-labelledby='my-radio-group'>
							 {" "}
							<input
								type='radio'
								id='Yes'
								name='qn1'
								value='Yes'
								required
								onChange={formik.handleChange}
							/>
							  <label for='Yes'>Yes</label> {" "}
							<input
								type='radio'
								id='No'
								name='qn1'
								value='No'
								required
								onChange={formik.handleChange}
							/>
							  <label for='Yes'>No</label>
						</div>
						<p>
							2. Course code, course name, date and session are
							given as per CAT timetable
						</p>
						<div role='group' aria-labelledby='my-radio-group'>
							 {" "}
							<input
								type='radio'
								id='Yes'
								name='qn2'
								value='Yes'
								required
								onChange={formik.handleChange}
							/>
							  <label for='Yes'>Yes</label> {" "}
							<input
								type='radio'
								id='No'
								name='qn2'
								value='No'
								required
								onChange={formik.handleChange}
							/>
							  <label for='No'>No</label>
						</div>

						<p>
							3. Use of appropriate keyword for the revised Bloom
							level
						</p>
						<div role='group' aria-labelledby='my-radio-group'>
							 {" "}
							<input
								type='radio'
								id='Yes'
								name='qn3'
								value='Yes'
								required
								onChange={formik.handleChange}
							/>
							  <label for='Yes'>Yes</label> {" "}
							<input
								type='radio'
								id='No'
								name='qn3'
								value='No'
								required
								onChange={formik.handleChange}
							/>
							  <label for='No'>No</label>
						</div>

						<p>
							4. Question paper is set for the Maximum marks
							allotted
						</p>
						<div role='group' aria-labelledby='my-radio-group'>
							 {" "}
							<input
								type='radio'
								id='Yes'
								name='qn4'
								value='Yes'
								onChange={formik.handleChange}
							/>
							  <label for='Yes'>Yes</label> {" "}
							<input
								type='radio'
								id='No'
								name='qn4'
								value='No'
								onChange={formik.handleChange}
							/>
							  <label for='No'>No</label>
						</div>

						<p>
							5. Correctness of categorization of each Question as
							per CO list given in the Syllabus
						</p>
						<div role='group' aria-labelledby='my-radio-group'>
							 {" "}
							<input
								type='radio'
								id='Yes'
								name='qn5'
								onChange={formik.handleChange}
								value='Yes'
							/>
							  <label for='Yes'>Yes</label> {" "}
							<input
								type='radio'
								id='No'
								name='qn5'
								value='No'
								onChange={formik.handleChange}
							/>
							  <label for='No'>No</label>
						</div>

						<p>
							6. Consistency of mapping of each question w.r.t
							revised Bloom&#39;s level and the CO
						</p>
						<div role='group' aria-labelledby='my-radio-group'>
							 {" "}
							<input
								type='radio'
								id='Yes'
								name='qn6'
								value='Yes'
								onChange={formik.handleChange}
							/>
							  <label for='Yes'>Yes</label> {" "}
							<input
								type='radio'
								id='No'
								name='qn6'
								value='No'
								onChange={formik.handleChange}
							/>
							  <label for='No'>No</label>
						</div>

						<p>
							7. Correctness weightage of each question as per
							assessment pattern
						</p>
						<div role='group' aria-labelledby='my-radio-group'>
							 {" "}
							<input
								type='radio'
								id='Yes'
								name='qn7'
								value='Yes'
								onChange={formik.handleChange}
							/>
							  <label for='Yes'>Yes</label> {" "}
							<input
								type='radio'
								id='No'
								name='qn7'
								value='No'
								onChange={formik.handleChange}
							/>
							  <label for='No'>No</label>
						</div>

						<p>
							8. Split-up marks for each sub-divisions are given
							correctly in the Question paper
						</p>
						<div role='group' aria-labelledby='my-radio-group'>
							 {" "}
							<input
								type='radio'
								id='Yes'
								name='qn8'
								value='Yes'
								onChange={formik.handleChange}
							/>
							  <label for='Yes'>Yes</label> {" "}
							<input
								type='radio'
								id='No'
								name='qn8'
								value='No'
								onChange={formik.handleChange}
							/>
							  <label for='No'>No</label>
						</div>

						<p>9. Coverage of syllabus </p>
						<div role='group' aria-labelledby='my-radio-group'>
							 {" "}
							<input
								type='radio'
								id='Yes'
								name='qn9'
								value='Yes'
								onChange={formik.handleChange}
							/>
							  <label for='Yes'>Yes</label> {" "}
							<input
								type='radio'
								id='No'
								name='qn9'
								value='No'
								onChange={formik.handleChange}
							/>
							  <label for='No'>No</label>
						</div>

						<p>10. Other Remarks :</p>
						<textarea
							rows='5'
							cols='50'
							onChange={formik.handleChange}
						></textarea>

						<p>
							<button type='submit' className='btn'>
								Submit
							</button>{" "}
							<button className='btn'>
								{formik.isSubmitting ? (
									<div className='loader'></div>
								) : (
									<PDFDownloadLink
										document={<GetPDF answers={answers} />}
										// data={formik.values}
										fileName='InfoSec_2021'
										className='downlad-btn'
									>
										{({ blob, url, loading, error }) =>
											loading
												? "Loading document..."
												: "Print Document"
										}
									</PDFDownloadLink>
								)}
							</button>
						</p>
					</fieldset>
				</form>
			</div>
		</div>
	);
}

export default Form;
