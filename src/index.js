import {StrictMode} from "react";
import React from "react";
import ReactDom from "react-dom"
import App from "./App";
import "antd/dist/antd.less";
ReactDom.render(
	<StrictMode>
		<App/>
	</StrictMode>,
	document.getElementById("app")
)