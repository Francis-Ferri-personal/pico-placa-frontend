import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { createSerializer } from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });

//@ts-ignore
// enzyme-to-json and "@types/jest" seem to conflict
// INFO:https://stackoverflow.com/questions/54794454/jestserializer-is-not-assignable-to-parameter-of-type-snapshotserializerplugi
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
