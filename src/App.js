import React, { Component } from "react";
import "./App.css";

class App extends Component {
	state = {
		user: "",
		email: "",
		pass: "",
		accept: false,
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
		console.log("OK");
	};
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

					<button>Sing in</button>
				</form>
			</div>
		);
	}
}

export default App;
