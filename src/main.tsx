import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

/**
 * Argument of type 'HTMLElement | null' is not assignable to parameter of type 'Element | DocumentFragment'.
 * So we add "!" so the TS doesn't complain
 */
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
