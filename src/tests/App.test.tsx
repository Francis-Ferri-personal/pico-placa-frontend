import { mount } from "enzyme";
import App from "../App";

describe("Test in App", () => {
	const wrapper = mount(<App />);

	test("Should match with the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
