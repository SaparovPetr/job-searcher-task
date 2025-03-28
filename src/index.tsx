import "./index.scss";

import React, { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./app/app";
import store from "./app/services/store";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</StrictMode>
);
