// App.jsx
import PropTypes from 'prop-types';

import ChatUI from "./components/ChatUI";
import ProfileDropdown from "./components/ProfileDropdown";

function ChatPage({ selectedAI, aiChangeKey }) {


	return (
		<div className="appContainer">
			
			<ProfileDropdown />
			<ChatUI
				selectedAI={selectedAI}
				key={aiChangeKey}
			/>
		</div>
	);
}
ChatPage.propTypes = {
    selectedAI: PropTypes.string.isRequired,
    aiChangeKey: PropTypes.number.isRequired
};
export default ChatPage;
