import { PicoPlacaData } from "../types/picoPlaca";

const baseURL = process.env.BACKEND_URL || "http://localhost:4000";

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
