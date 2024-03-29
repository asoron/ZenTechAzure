// vite.config.js

import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			external: ["@azure/openai"],
		},
	},
});
