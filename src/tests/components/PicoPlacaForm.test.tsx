import { shallow } from "enzyme";
import PicoPlacaForm from "../../components/PicoPlacaForm";

describe("Test in PicoPlacaForm", () => {
	const wrapper = shallow(<PicoPlacaForm />);

	test("Should match with the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("should show error below the inputs if those are empty", () => {
		const expErrorPlate = "Please provide a valid plate number.";
		const expErrorDate = "Please provide a valid date.";
		const expErrorTime = "Please provide a valid time.";

		wrapper.find("button").simulate("click");
		const errorPlate = wrapper.find(".invalid-feedback").at(0).text();
		const errorDate = wrapper.find(".invalid-feedback").at(1).text();
		const errorTime = wrapper.find(".invalid-feedback").at(2).text();

		expect(errorPlate).toBe(expErrorPlate);
		expect(errorDate).toBe(expErrorDate);
		expect(errorTime).toBe(expErrorTime);
	});

	test("should passes the validation", () => {
		wrapper.find('input[name="plateNumber"]').simulate("change", {
			target: {
				name: "plateNumber",
				value: "ABC-123"
			}
		});
		wrapper.find('input[name="date"]').simulate("change", {
			target: {
				name: "date",
				value: "2021-08-12"
			}
		});
		wrapper.find('input[name="time"]').simulate("change", {
			target: {
				name: "time",
				value: "16:28"
			}
		});

		wrapper.find("button").simulate("click");
		expect(wrapper.find(".is-invalid").exists()).toBe(false);
	});

	// We can add more test but those could be harder to implement and require more time
});
