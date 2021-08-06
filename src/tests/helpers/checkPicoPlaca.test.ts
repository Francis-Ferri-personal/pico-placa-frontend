import { validateForm, checkPicoPlaca } from "../../helpers/checkPicoPlaca";

describe("Tests in checkPicoPlaca", () => {
	const values = {
		plateNumber: "ABC-123",
		date: "2021-08-21",
		time: "10:50"
	};

	test("should return no errors", () => {
		const expected = { plateVal: true, dateVal: true, timeVal: true };

		const resp = validateForm(values);

		expect(resp).toEqual(expected);
	});

	test("should return tru if data is correct", async () => {
		// The backend has to be up to pass this test
		const resp = await checkPicoPlaca(values);
		expect(resp).toBe(true);
	});
});
