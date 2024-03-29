import React, { useState } from "react";
import { auth } from "../firebaseConfig"; // Adjust the path according to your project structure
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import "./style/Login.css";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		setError(""); // Reset error message

		try {
			await signInWithEmailAndPassword(auth, email, password);
			navigate("/"); // Redirect to ChatUI or homepage after successful login
		} catch (error) {
			setError("Failed to log in. Please check your email and password."); // Update error message based on real scenarios
			console.error(error.message);
		}
	};

	return (
		<div className="login-container">
			<h2>Login</h2>
			{error && <p className="error">{error}</p>}
			<form onSubmit={handleLogin}>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button
					type="submit"
					className="login-button">
					Login
				</button>
			</form>
		</div>
	);
}

export default Login;
