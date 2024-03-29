import React, { useEffect, useState } from "react";
import useUserPermissions from "../useUserPermissions";
import "./style/SideMenu.css";

const SideMenu = ({ onAIChange, selectedAI, userId }) => {
	const { permissions, isLoading } = useUserPermissions(userId);
	const [firstAvailableButton, setFirstAvailableButton] = useState("");

	useEffect(() => {
		// Find the name of the first available button
		const firstButton = buttons.find((button) => button.visible)?.name || "";
		setFirstAvailableButton(firstButton);
	}, [permissions]);

	const buttons = [
		{ name: "Napnite", roles: ["admin", "user"], visible: permissions.Napnite },
		{ name: "Lit", roles: ["editor", "user"], visible: permissions.Lit },
		// Add more buttons as needed
	];

	return (
		<div className="sideMenu">
			{isLoading ? (
				<div className="loadingContainer">Loading...</div>
			) : (
				buttons
					.filter((button) => button.visible)
					.map((button, index) => (
						<button
							key={index}
							className={`menuButton ${
								selectedAI === button.name ||
								(selectedAI === "" && button.name === firstAvailableButton)
									? "selected"
									: ""
							}`}
							onClick={() => onAIChange(button.name)}>
							{button.name}
						</button>
					))
			)}
		</div>
	);
};

export default SideMenu;
