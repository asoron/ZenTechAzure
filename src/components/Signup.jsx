import React, { useState } from "react";
import { auth } from "../firebaseConfig"; // Ensure correct path
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import "./style/Signup.css"; // Ensure this path is correct

function Signup() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleSignup = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			setError("Passwords do not match.");
			return;
		}

		try {
			await createUserWithEmailAndPassword(auth, email, password);
			console.log("User created successfully.");
			navigate("/"); // Redirect to home page or dashboard
		} catch (error) {
			console.error(error.message);
			setError(error.message);
		}
	};

	return (
		<div className="signup-container">
			<h2>Sign Up</h2>
			{error && <p className="error-message">{error}</p>}
			<form onSubmit={handleSignup}>
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
				<div className="form-group">
					<label htmlFor="confirmPassword">Confirm Password</label>
					<input
						type="password"
						id="confirmPassword"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</div>
				<button
					type="submit"
					className="signup-button">
					Sign Up
				</button>
				<p className="redirect">
					Already have an account? <Link to="/login">Login here</Link>.
				</p>
			</form>
		</div>
	);
}

export default Signup;
