import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./AppComponent.css";
import LanguageSelectionComponent from "../LanguageSelection/LanguageSelectionComponent";
import { AppProps } from "../../types/types";

function App() {
	const props: AppProps = {
		items: ["en-US", "en-GB", "pt-BR"],
	};

	return <LanguageSelectionComponent items={props.items} />;
}

export default App;
