import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import "./style/MessageDisplay.css"; // Import CSS file


const MessageDisplay = ({ messages }) => {
	const messagesEndRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]); // Dependency on messages means this runs every time messages change

	return (
		<div className="messageDisplay">
			{Array.isArray(messages) ? (
				messages.map((message, index) => (
					<div
						key={index}
						// Assuming 'role' can be 'user' or 'ai' and you have corresponding CSS classes
						className={`message ${message.role}`}>
						{/* Use 'content' instead of 'text' */}
						<div className="messageContent">{message.content}</div>
					</div>
				))
			) : (
				<div>No messages to display</div>
			)}
			{/* Invisible div at the end of messages */}
			<div ref={messagesEndRef} />
		</div>
	);
};
MessageDisplay.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        role: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    })).isRequired,
};

export default MessageDisplay;
