import React, { Component } from "react";
import "./App.css";

class App extends Component {
	state = {
		user: "",
		email: "",
		pass: "",
		accept: false,

		errors: {
			user: false,
			email: false,
			pass: false,
			accept: false,
		},
	};

	messages = {
		name_incorrect: "name must contain 8 characters and cannot contain spaces",
		email_incorrect: "email must contain the @ sign",
		password_incorrect: "password must contain 8 characters",
		accept_incorrect: "check the accept box",
	};
	handleChange = (e) => {
		const name = e.target.name;
		const type = e.target.type;

		if (type === "text" || type === "email" || type === "password") {
			const value = e.target.value;
			this.setState({
				[name]: value,
			});
		} else if (type === "checkbox") {
			const checked = e.target.checked;
			this.setState({
				[name]: checked,
			});
		}
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const validation = this.formValidation();
		console.log(validation);
		if (validation.correct) {
			this.setState({
				user: "",
				email: "",
				pass: "",
				accept: false,
				message: "The form has been sent",

				errors: {
					user: false,
					email: false,
					pass: false,
					accept: false,
				},
			});
		} else {
			this.setState({
				errors: {
					user: !validation.user,
					email: !validation.email,
					pass: !validation.pass,
					accept: !validation.accept,
				},
			});
		}
	};

	formValidation = () => {
		let user = false;
		let email = false;
		let pass = false;
		let accept = false;
		let correct = false;

		if (this.state.user.length > 7 && this.state.user.indexOf(" ") === -1) {
			user = true;
		}
		if (this.state.email.indexOf("@") !== -1) {
			email = true;
		}
		if (this.state.pass.length > 7) {
			pass = true;
		}
		if (this.state.accept) {
			accept = true;
		}
		if (user && email && pass && accept) {
			correct = true;
		}

		return {
			user,
			email,
			pass,
			accept,
			correct,
		};
	};

	componentDidUpdate() {
		if (this.state.message) {
			setTimeout(() => this.setState({ message: "" }), 4000);
		}
	}
	render() {
		return (
			<div className='App'>
				<h1>Registration form</h1>
				<form onSubmit={this.handleSubmit} noValidate>
					<label htmlFor='username'>
						Name:
						<input
							type='text'
							id='username'
							name='user'
							value={this.state.user}
							onChange={this.handleChange}
						/>
					</label>
					{this.state.errors.user && (
						<span>{this.messages.name_incorrect}</span>
					)}
					<label htmlFor='email'>
						e-mail:
						<input
							type='email'
							id='email'
							name='email'
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</label>
					{this.state.errors.email && (
						<span>{this.messages.email_incorrect}</span>
					)}
					<label htmlFor='password'>
						Password:
						<input
							type='password'
							id='password'
							name='pass'
							value={this.state.pass}
							onChange={this.handleChange}
						/>
					</label>
					{this.state.errors.pass && (
						<span>{this.messages.password_incorrect}</span>
					)}
					<label htmlFor='accept'>
						<input
							type='checkbox'
							id='accept'
							name='accept'
							checked={this.state.accept}
							onChange={this.handleChange}
						/>{" "}
						Accept
					</label>
					{this.state.errors.accept && (
						<span>{this.messages.accept_incorrect}</span>
					)}
					<button>Sing in</button>
				</form>
				{this.state.message && <h3>{this.state.message}</h3>}
			</div>
		);
	}
}

export default App;
