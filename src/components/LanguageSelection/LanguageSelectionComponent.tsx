import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";
import "./LanguageSelectionComponent.css";
import moment from "moment-timezone";
import { AppProps, Language } from "src/types/types";

const LanguageSelectionComponent = ({ items }: AppProps) => {
	const [selectedLanguage, setSelectedLanguage] = useState(items[0]);

	useEffect(() => {
		const languageToTimezone: Record<Language, string> = {
			"en-US": "America/New_York",
			"en-GB": "Europe/London",
			"pt-BR": "America/Sao_Paulo",
		};
		const timezone = languageToTimezone[selectedLanguage];

		// Use moment-timezone to get the current time in the selected timezone
		const currentTime = moment().tz(timezone);

		// Construct the date/time string using moment to avoid using native
		// JavaScript Date object, which uses local time
		const date = currentTime.format("YYYY-MM-DD");
		const time = currentTime.format("HH:mm:ss");

		const formattedTime = Intl.DateTimeFormat(selectedLanguage, {
			year: "numeric",
			month: "numeric",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			second: "numeric",
		}).format(new Date(`${date}T${time}`));

		console.log(formattedTime);
	}, [selectedLanguage]);

	const handleChange = (e: SelectChangeEvent): void => {
		const newLanguage = e.target.value as Language;

		setSelectedLanguage(newLanguage);
	};

	return (
		<div id="language-selection-component">
			<FormControl sx={{ width: 300 }}>
				<InputLabel id="language-select-label">Select a Language</InputLabel>
				<Select
					labelId="language-select-label"
					id="language-select"
					value={selectedLanguage}
					label="Select a Language"
					onChange={handleChange}
				>
					{items.map((item: string) => {
						return (
							<MenuItem key={item} value={item}>
								{item}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</div>
	);
};

export default LanguageSelectionComponent;
