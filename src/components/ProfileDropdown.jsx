import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import "./style/ProfileDropdown.css";

function ProfileDropdown() {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);
	const navigate = useNavigate();

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [dropdownRef]);

	const handleLogout = async () => {
		await signOut(auth);
		navigate("/login");
	};

	return (
		<div
			className="profileDropdown"
			ref={dropdownRef}>
			<button onClick={() => setIsOpen(!isOpen)}></button>
			{isOpen && (
				<div className="dropdownMenu">
					<button onClick={handleLogout}>Logout</button>
				</div>
			)}
		</div>
	);
}

export default ProfileDropdown;
