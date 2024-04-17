// ChatUI.jsx
import { useState, useEffect, useRef } from "react";
import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import MessageDisplay from "./MessageDisplay";
import TextInput from "./TextInput";
import PropTypes from 'prop-types';
import "./style/ChatUI.css"; // Ensure this import is correct

const azureApiKey = "bcc85e30e3044e0b9fe9e1dbc4cc2c7c"; // API anahtarınızı buraya girin
const endpoint = "https://zenchatzengpt.openai.azure.com/";



const ChatUI = ({ selectedAI }) => {
	const [messages, setMessages] = useState([]);
	const [AIModelData, setAIModelData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const chatBoxRef = useRef(null);

	useEffect(() => {
		const loadModelData = async () => {
			try {
				const modelData = await import(`./assets/${selectedAI}.js`);
				setAIModelData(modelData.default);
			} catch (error) {
				console.error("Failed to load AI model data:", error);
			}
		};

		if (selectedAI) {
			loadModelData();
		}
	}, [selectedAI]);

	useEffect(() => {
		setMessages([]);
	}, [selectedAI]);

	const handleSendMessage = async (text) => {
		setIsLoading(true);
		const newMessages = [...messages, { role: "user", content: text }];
		setMessages(newMessages);

		const client = new OpenAIClient(
			endpoint,
			new AzureKeyCredential(azureApiKey)
		);

		try {
			const chatMessages = [
				{
					role: "system",
					content: AIModelData.systemPrompt,
				},
				{
					role: "user",
					content: text,
				},
			];

			const response = await client.getChatCompletions(
				AIModelData.chatParameters.deploymentName,
				chatMessages,
				{
					maxTokens: AIModelData.chatParameters.maxResponseLength,
					temperature: AIModelData.chatParameters.temperature,
					topP: AIModelData.chatParameters.topProbabilities,
					frequencyPenalty: AIModelData.chatParameters.frequencyPenalty,
					presencePenalty: AIModelData.chatParameters.presencePenalty,
				}
			);
			if (response.choices && response.choices.length > 0) {
				const aiText = response.choices[0].message.content;

				setMessages((prevMessages) => [
					...prevMessages,
					{ role: "ai", content: aiText }, // Ensure this matches the expected structure
				]);
			}
		} catch (error) {
			console.error("An error occurred:", error);
			setMessages((prevMessages) => [
				...prevMessages,
				{ role: "ai", content: "An error occurred. Please try again later." },
			]);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (chatBoxRef.current) {
			chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
		}
	}, [messages]);

	return (
		<div className="chatUI">
			<div
				className="chatContent"
				ref={chatBoxRef}>
				<MessageDisplay messages={messages} />
			</div>
			<TextInput
				onSendMessage={handleSendMessage}
				isLoading={isLoading}
			/>
		</div>
	);
};
ChatUI.propTypes = {
    selectedAI: PropTypes.string.isRequired,
};
export default ChatUI;
