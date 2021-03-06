import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";

const loginSchema = yup.object().shape({
	// email: yup.string().email("Invalid email address").required("Email required"),
	password: yup
		.string()
		.min(6, `Password must be 6 characters or longer`)
		.required("Password required"),
});

function Login() {
	const [form, setForm] = useState({
		username: "",
		password: "",
	});
	const [buttonOn, setButtonOn] = useState(false);
	const history = useHistory();
	useEffect(() => {
		loginSchema.isValid(form).then((validity) => {
			setButtonOn(validity);
		});
	}, [form]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
		console.log(form);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		//	However you want to handle new user registration
		axios
			.post(
				"https://marketplace-backend-webft-70.herokuapp.com/api/auth/login",
				form
			)
			.then((res) => {
				window.localStorage.setItem("token", res.data.token);
				console.log("success!");
				history.push("/Dashboard");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Container>
			<h1>Login</h1>
			<Row className="align-items-center">
				<Col>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="loginEmail">
							<Form.Label>Username</Form.Label>
							<Form.Control
								name="username"
								type="text"
								placeholder="Enter Username"
								onChange={handleChange}
							></Form.Control>
						</Form.Group>
						<Form.Group controlId="loginPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								name="password"
								type="password"
								placeholder="Enter password"
								onChange={handleChange}
							></Form.Control>
						</Form.Group>
						<Button variant="primary" type="submit" disabled={!buttonOn}>
							Login
						</Button>
					</Form>
				</Col>
				<Col md="auto">
					<span>or </span>
					<Link to={"/register"}>
						<Button>Register</Button>
					</Link>
				</Col>
			</Row>
		</Container>
	);
}

export default Login;
