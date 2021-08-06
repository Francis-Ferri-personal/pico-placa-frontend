import { PicoPlacaData } from "../types/picoPlaca";
import moment from "moment";

const baseURL = process.env.BACKEND_URL || "http://localhost:4000";

export const validateForm = ({ plateNumber, date, time }: PicoPlacaData) => {
	const plateRegExp = new RegExp("^[A-Z]{3}-[0-9]{3}$");
	const plateVal = plateRegExp.test(plateNumber.toUpperCase());

	const dateVal = moment(date, "yyyy-mm-dd").isValid();

	const timeVal = moment(time, "hh:mm").isValid();
	console.log(plateVal, dateVal, timeVal);
	return { plateVal, dateVal, timeVal };
};

export const checkPicoPlaca = async (picoPlacaData: PicoPlacaData) => {
	const apiUrl = `${baseURL}/pico-placa`;
	console.log(picoPlacaData);
	try {
		const resp = await fetch(apiUrl, {
			method: "post",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(picoPlacaData)
		});

		const data = await resp.json();
		return data.allowed;
	} catch (error) {
		throw new Error(error);
	}
};
