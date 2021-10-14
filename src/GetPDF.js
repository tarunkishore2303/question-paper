import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = dd + "/" + mm + "/" + yyyy;

function GetPDF({ data, styles }) {
	return (
		<Document>
			<Page size='A4' style={styles.page}>
				<View style={styles.header}>
					<Text style={styles.title}>{data.title}</Text>
					<Text style={styles.subtitle}>{data.subtitle}</Text>
					<Text style={styles.date}>{today}</Text>
				</View>
				<View style={styles.body}>
					<Text style={styles.bodyText}>{data.body}</Text>
				</View>
			</Page>
		</Document>
	);
}

export default GetPDF;
