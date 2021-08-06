import { PicoPlacaData } from "../types/picoPlaca";

export const checkPicoPlaca = async (picoPlacaData: PicoPlacaData) => {
	const apiUrl = ``;

	const resp = await fetch(apiUrl, {
		method: "post",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json"
		},
		body: JSON.stringify(picoPlacaData)
	});

	const { data } = await resp.json();

	console.log(data);
	return data;
};
