import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StateProvider } from "./components/StateProvider";
import { BrowserRouter as Router } from "react-router-dom";
import "bootswatch/dist/darkly/bootstrap.min.css";
import "react-datetime/css/react-datetime.css";
import "./modules/style.css";

ReactDOM.render(
	<React.StrictMode>
		<StateProvider>
			<Router>
				<App />
			</Router>
		</StateProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
