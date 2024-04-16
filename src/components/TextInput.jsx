// TextInput.jsx
import React, { useState } from "react";
import "./style/TextInput.css"; // Import CSS file

const TextInput = ({ onSendMessage, isLoading }) => {
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!isLoading && message.trim() !== "") {
			onSendMessage(message);
			setMessage("");
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="textInputForm">
			<input
				type="text"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				className="textInput"
				placeholder="Mesajınızı yazın..."
				disabled={isLoading}
			/>
			<button
				type="submit"
				className="sendButton"
				disabled={isLoading}>
				{isLoading ? "Yükleniyor..." : "Gönder"}
			</button>
		</form>
	);
};

export default TextInput;
