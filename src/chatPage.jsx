// App.jsx
import React, { useState } from "react";

import SideMenu from "./components/SideMenu";
import ChatUI from "./components/ChatUI";
import ProfileDropdown from "./components/ProfileDropdown";

function ChatPage() {
	const [selectedAI, setSelectedAI] = useState("Lit");
	const [aiChangeKey, setAiChangeKey] = useState(0);
	const handleAIChange = (aiName) => {
		setSelectedAI(aiName);
		setAiChangeKey((prevKey) => prevKey + 1);
	};

	return (
		<div className="appContainer">
			<SideMenu
				onAIChange={handleAIChange}
				selectedAI={selectedAI}
			/>
			<ProfileDropdown />
			<ChatUI
				selectedAI={selectedAI}
				key={aiChangeKey}
			/>
		</div>
	);
}

export default ChatPage;
