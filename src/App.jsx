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
import SideMenu from "./components/SideMenu";
import ChatUI from "./components/ChatUI"; // Doğru dosya yolu sağlandığından emin olun

function App() {
	const [currentUser, setCurrentUser] = useState(null);
	const [selectedAI, setSelectedAI] = useState("Lit");
	const [showSideMenu, setShowSideMenu] = useState(false);
	const [isLoading, setLoading] = useState(true); // isLoading state'i eklendi

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setShowSideMenu(!!user);
			setLoading(false); // Yükleme durumunu güncelle
		});
		return unsubscribe;
	}, []);

	const handleAIChange = (modelName) => {
		setSelectedAI(modelName);
	};

	return (
		<Router>
			<div className="appContainer">
				{isLoading ? (
					<p>Loading...</p> // Yükleme durumunu göster
				) : currentUser && showSideMenu ? (
					<SideMenu
						onAIChange={handleAIChange}
						selectedAI={selectedAI}
						userId={currentUser?.uid}
					/>
				) : null}
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
