// vite.config.js

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@azure/openai": "@opai/azure", // Replace with the correct alias for @azure/openai
		},
	},
});
