import { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const useUserPermissions = (userId) => {
	const [permissions, setPermissions] = useState({
		Napnite: false,
		Lit: false,
	});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchPermissions = async () => {
			if (!userId) {
				setIsLoading(false); // If there's no userId, nothing to load.
				return;
			}

			const modelsDocRef = doc(db, "aiModels", "users", userId, "Models");

			try {
				const docSnap = await getDoc(modelsDocRef);
				if (docSnap.exists()) {
					setPermissions(docSnap.data());
				} else {
					console.log("No such document!");
					setPermissions({ Napnite: false, Lit: false }); // Reset or set default permissions
				}
			} catch (error) {
				console.error("Error fetching permissions:", error);
			} finally {
				setIsLoading(false); // Done loading, regardless of outcome.
			}
		};

		fetchPermissions();
	}, [userId]);

	// Check if permissions exist and loading is still true, then set isLoading to false
	useEffect(() => {
		if (Object.keys(permissions).length !== 0 && isLoading) {
			setIsLoading(false);
		}
	}, [permissions, isLoading]);

	return { permissions, isLoading };
};

export default useUserPermissions;
