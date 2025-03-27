// Recreated GetInfo.tsx in a way that follows the instructions --Dan
import React from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Formik } from "formik";
import * as Yup from 'yup';

const getInfoSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(2, "Min 2 Characters")
		.max(50, "Max 50 Characters")
		.required("First Name is Required"),
	lastName: Yup.string()
		.min(2, "Min 2 Characters")
		.max(50, "Max 50 Characters")
		.required("Last Name is Required"),
	email: Yup.string()
		.email('Invalid Email')
		.required("Email is required"),
	phoneNumber: Yup.string()
		.matches(/^\d{10}$/, "Phone number must be 10 digits")
		.required("Phone Number is Required"),
	location: Yup.string()
		.min(8, "location must be at least 8 characters")
		.max(50, "location length is 50 characters")
		.required("location is Required"),

});

export default function GetInfo({ navigation }: any) {
	return (
		<View style={styles.wrapper}>
			<View style={styles.getInfoBox}>
				<Text style={styles.textHeader}>Employee Information</Text>
				<Formik
					initialValues={{
						firstName: '',
						lastName: '',
						email: '',
						phoneNumber: '',
						location: '',
					}}
					validationSchema={getInfoSchema}
					onSubmit={(values) => {
						const message = Object.entries(values)
							.map(([key, val]) => `${key}: ${val}`)
							.join('\n');
						Alert.alert("Form Data", message);
					}}
				>
					{({ handleChange, handleBlur, touched, handleSubmit, values, errors }) => (
						<View>
							<TextInput
								style={styles.input}
								placeholder="First Name"
								placeholderTextColor="#B0B0B0"
								onChangeText={handleChange("firstName")}
								onBlur={handleBlur("firstName")}
								value={values.firstName}
							/>
							{touched.firstName && errors.firstName && (
								<Text style={styles.error}>{errors.firstName}</Text>
							)}

							<TextInput
								style={styles.input}
								placeholder="Last Name"
								placeholderTextColor="#B0B0B0"
								onChangeText={handleChange("lastName")}
								onBlur={handleBlur("lastName")}
								value={values.lastName}
							/>
							{touched.lastName && errors.lastName && (
								<Text style={styles.error}>{errors.lastName}</Text>
							)}

							<TextInput
								style={styles.input}
								placeholder="Email"
								placeholderTextColor="#B0B0B0"
								onChangeText={handleChange("email")}
								onBlur={handleBlur("email")}
								value={values.email}
							/>
							{touched.email && errors.email && (
								<Text style={styles.error}>{errors.email}</Text>
							)}

							<TextInput
								style={styles.input}
								placeholder="Phone Number"
								placeholderTextColor="#B0B0B0"
								onChangeText={handleChange("phoneNumber")}
								onBlur={handleBlur("phoneNumber")}
								value={values.phoneNumber}
							/>
							{touched.phoneNumber && errors.phoneNumber && (
								<Text style={styles.error}>{errors.phoneNumber}</Text>
							)}

							<TextInput
								style={styles.input}
								placeholder="Enter location"
								placeholderTextColor="#B0B0B0"
								onChangeText={handleChange("location")}
								onBlur={handleBlur("location")}
								value={values.location}
							/>
							{touched.location && errors.location && (
								<Text style={styles.error}>{errors.location}</Text>
							)}

							<TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
								<Text style={styles.buttonText}>Sign Up</Text>
							</TouchableOpacity>
						</View>
					)}
				</Formik>

				{/* getInfoBox */}
			</View>

			{/* wrapper */}
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#B4B4B4",
	},
	getInfoBox: {
		backgroundColor: "#FAF9F6",
		padding: 30,
		borderRadius: 10,
	},
	textHeader: {
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
		paddingBottom: 5,
	},
	textPlaceHolder: {
		color: '#A0A0A0'
	},
	input: {
		width: 300,
		padding: 12,
		borderWidth: 1,
		borderColor: '#CCCCCC',
		borderRadius: 8,
		backgroundColor: "#FFFFFF",
		marginVertical: 5,
	},
	error: {
		color: 'red',
	},
	button: {
		width: 300,
		padding: 12,
		borderWidth: 1,
		borderColor: '#CCCCCC',
		borderRadius: 8,
		backgroundColor: "#1E90FF",
		marginVertical: 5,
	},
	buttonText: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontSize: 15,
	},
})