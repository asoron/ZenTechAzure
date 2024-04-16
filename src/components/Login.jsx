import { useState } from "react";
import { auth } from "../firebaseConfig"; // Proje yapısına göre yol ayarlayın
import { signInWithEmailAndPassword } from "firebase/auth";
import "./style/Login.css";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleLogin = async (e) => {
		e.preventDefault();
		setError(""); // Hata mesajını sıfırlayın

		try {
			await signInWithEmailAndPassword(auth, email, password);
			// Başarılı girişten sonra ChatUI veya anasayfaya yönlendirin
		} catch (error) {
			setError("Giriş yapılamadı. Lütfen e-posta ve şifrenizi kontrol edin."); // Gerçek senaryolara göre hata mesajını güncelleyin
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
				<div
					className="login-button"
					onClick={handleLogin}>
					Login
				</div>
			</form>
		</div>
	);
}

export default Login;
