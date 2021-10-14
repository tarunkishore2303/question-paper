import React, { useState } from "react";
import { PDFDownloadLink } from "react-pdf";
import GetPDF from "./GetPDF";
import { useFormik } from "formik";
import "./form.css";

function Form({ course }) {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			phone: "",
			message: "",
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});
	return (
		<div className='form'>
			<h1> THIAGARJAR COLLEGE OF ENGINEERING </h1>

			<div className='form-container'>
				<form>
					<fieldset>
						<legend>COURSE NAME</legend>
						<p>
							1. Questions are clear and defenite without
							ambiguties
						</p>
						 {" "}
						<input
							type='radio'
							id='Yes'
							name='qn-1'
							value='Yes'
							required
						/>
						  <label for='Yes'>Yes</label> {" "}
						<input
							type='radio'
							id='No'
							name='qn-1'
							value='No'
							required
						/>
						  <label for='Yes'>No</label>
						<p>
							2. Course code, course name, date and session are
							given as per CAT timetable
						</p>
						 {" "}
						<input
							type='radio'
							id='Yes'
							name='1qn-2'
							value='Yes'
							required
						/>
						  <label for='Yes'>Yes</label> {" "}
						<input
							type='radio'
							id='No'
							name='qn-2'
							value='No'
							required
						/>
						  <label for='No'>No</label>
						<p>
							3. Use of appropriate keyword for the revised Bloom
							level
						</p>
						 {" "}
						<input
							type='radio'
							id='Yes'
							name='qn-3'
							value='Yes'
							required
						/>
						  <label for='Yes'>Yes</label> {" "}
						<input
							type='radio'
							id='No'
							name='qn-3'
							value='No'
							required
						/>
						  <label for='No'>No</label>
						<p>
							4. Question paper is set for the Maximum marks
							allotted
						</p>
						 {" "}
						<input type='radio' id='Yes' name='qn-4' value='Yes' /> {" "}
						<label for='Yes'>Yes</label>
						  <input
							type='radio'
							id='No'
							name='qn-4'
							value='No'
						/>  <label for='No'>No</label>
						<p>
							5. Correctness of categorization of each Question as
							per CO list given in the Syllabus
						</p>
						 {" "}
						<input type='radio' id='Yes' name='qn-5' value='Yes' /> {" "}
						<label for='Yes'>Yes</label>
						  <input
							type='radio'
							id='No'
							name='qn-5'
							value='No'
						/>  <label for='No'>No</label>
						<p>
							6. Consistency of mapping of each question w.r.t
							revised Bloom&#39;s level and the CO
						</p>
						 {" "}
						<input type='radio' id='Yes' name='qn-6' value='Yes' /> {" "}
						<label for='Yes'>Yes</label>
						  <input
							type='radio'
							id='No'
							name='qn-6'
							value='No'
						/>  <label for='No'>No</label>
						<p>
							7. Correctness weightage of each question as per
							assessment pattern
						</p>
						 {" "}
						<input type='radio' id='Yes' name='qn-7' value='Yes' /> {" "}
						<label for='Yes'>Yes</label>
						  <input
							type='radio'
							id='No'
							name='qn-7'
							value='No'
						/>  <label for='No'>No</label>
						<p>
							8. Split-up marks for each sub-divisions are given
							correctly in the Question paper
						</p>
						 {" "}
						<input type='radio' id='Yes' name='qn-8' value='Yes' /> {" "}
						<label for='Yes'>Yes</label>
						  <input
							type='radio'
							id='No'
							name='qn-8'
							value='No'
						/>  <label for='No'>No</label>
						<p>9. Coverage of syllabus </p> {" "}
						<input type='radio' id='Yes' name='qn-9' value='Yes' /> {" "}
						<label for='Yes'>Yes</label>
						  <input
							type='radio'
							id='No'
							name='qn-9'
							value='No'
						/>  <label for='No'>No</label>
						<p>10. Other Remarks :</p>
						<textarea rows='5' cols='50'></textarea>
						<p>
							<button type='submit' class='btn'>
								<PDFDownloadLink
									document={
										<GetPDF
											data={patient}
											styles={styles}
										/>
									}
									//data={formik.values}
									fileName={`${course.Name}`}
									className='downlad-btn'
								>
									{({ blob, url, loading, error }) =>
										loading
											? "Loading document..."
											: "Download"
									}
								</PDFDownloadLink>
							</button>
						</p>
					</fieldset>
				</form>
			</div>
		</div>
	);
}

export default Form;
