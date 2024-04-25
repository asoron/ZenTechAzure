import { useState, useEffect } from "react";
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
import ChatUI from "./chatPage";

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedAI, setSelectedAI] = useState("Normal");
	const [aiChangeKey, setAiChangeKey] = useState(0);
    const [showSideMenu, setShowSideMenu] = useState(false);
	

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setShowSideMenu(!!user);  // Kullanıcı varsa, yan menüyü göster
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const handleAIChange = (modelName) => {
        setSelectedAI(modelName);
		setAiChangeKey((prevKey) => prevKey + 1);
    };

    return (
        <Router>
            <div className="appContainer">
                {loading ? (
                    <div>Loading...</div>  // Yükleme durumu göster
                ) : currentUser && showSideMenu && (
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
                        path="/"
                        element={
                            currentUser ? (
                                <ChatUI selectedAI={selectedAI} aiChangeKey={aiChangeKey} />
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
