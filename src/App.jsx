import React, { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SideMenu from "./components/SideMenu";
import ChatUI from "./chatPage";

function App() {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [selectedAI, setSelectedAI] = useState("Lit");
	const [showSideMenu, setShowSideMenu] = useState(false); // The new state: visibility of the side menu.

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setShowSideMenu(!!user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	const handleAIChange = (modelName) => {
		setSelectedAI(modelName);
	};

	return (
		<Router>
			<div className="appContainer">
				{currentUser && showSideMenu && (
					<SideMenu
						onAIChange={handleAIChange}
						selectedAI={selectedAI}
						userId={currentUser?.uid}
					/>
				)}
				<Routes>
					<Route
						path="/login"
						element={
							!currentUser ? (
								<Login />
							) : (
								<Navigate
									replace
									to="/"
								/>
							)
						}
					/>
					<Route
						path="/signup"
						element={
							!currentUser ? (
								<Signup />
							) : (
								<Navigate
									replace
									to="/"
								/>
							)
						}
					/>
					<Route
						path="/"
						element={
							currentUser ? (
								<ChatUI selectedAI={selectedAI} />
							) : (
								<Navigate
									replace
									to="/login"
								/>
							)
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
