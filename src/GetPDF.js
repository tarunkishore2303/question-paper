import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = dd + "/" + mm + "/" + yyyy;
const styles = StyleSheet.create({
	page: {
		flexDirection: "column",
		padding: 20,
		fontFamily: "Helvetica",
		fontSize: 12,
		backgroundColor: "#fff",
	},
	header: {
		flexDirection: "column",
		marginBottom: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
	},
	subtitle: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 10,
	},
	date: {
		fontSize: 12,
		marginBottom: 10,
	},
	body: {
		flexDirection: "column",
		marginBottom: 20,
	},
	bodyText: {
		fontSize: 12,
		marginBottom: 10,
	},
});
function GetPDF({ answers }) {
	console.log(answers);
	return (
		<Document>
			<Page size='A4' style={styles.page}>
				<View style={styles.header}>
					<Text style={styles.date}>{today}</Text>
					<Text style={styles.title}>Question Paper Audit</Text>
				</View>
				<View style={styles.body}>
					<Text style={styles.subtitle}>
						1. Questions are clear and defenite without ambiguties
					</Text>
					<Text style={styles.bodyText}>{answers["qn1"]}</Text>
					<Text style={styles.subtitle}>
						2. Course code, course name, date and session are given
						as per CAT timetable
					</Text>
					<Text style={styles.bodyText}>{answers["qn2"]}</Text>
					<Text style={styles.subtitle}>
						3. Use of appropriate keyword for the revised Bloom
						level
					</Text>
					<Text style={styles.bodyText}>{answers["qn3"]}</Text>
					<Text style={styles.subtitle}>
						4. Question paper is set for the Maximum marks allotted
					</Text>
					<Text style={styles.bodyText}>{answers["qn4"]}</Text>
					<Text style={styles.subtitle}>
						5. Correctness of categorization of each Question as per
						CO list given in the Syllabus
					</Text>
					<Text style={styles.bodyText}>{answers["qn5"]}</Text>
					<Text style={styles.subtitle}>
						6. Consistency of mapping of each question w.r.t revised
						Bloom&#39;s level and the CO
					</Text>
					<Text style={styles.bodyText}>{answers["qn6"]}</Text>
					<Text style={styles.subtitle}>
						7. Correctness weightage of each question as per
						assessment pattern
					</Text>
					<Text style={styles.bodyText}>{answers["qn7"]}</Text>
					<Text style={styles.subtitle}>
						8. Split-up marks for each sub-divisions are given
						correctly in the Question paper
					</Text>
					<Text style={styles.bodyText}>{answers["qn8"]}</Text>
					<Text style={styles.subtitle}>9. Coverage of syllabus</Text>
					<Text style={styles.bodyText}>{answers["qn9"]}</Text>
					<Text style={styles.subtitle}>10. Other Remarks :</Text>
					<Text style={styles.bodyText}>{answers["qn10"]}</Text>
				</View>
			</Page>
		</Document>
	);
}

export default GetPDF;
