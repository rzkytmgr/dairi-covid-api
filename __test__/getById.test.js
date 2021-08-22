const { getById } = require("../util/function");

describe("Get region data by id", () => {
	test("Valid id", () => {
		expect(getById("1")).not.toBeUndefined();
		expect(getById(1)).not.toBeUndefined();
	});

	test("Valid Id, Valid Region (Name)", () => {
		expect(getById(1, "Sidikalang")).not.toBeUndefined();
		expect(getById("1", "SIDIKALANG")).not.toBeUndefined();
		expect(getById(1, "sIDIkaLang")).not.toBeUndefined();
	});

	test("Valid Id, Valid Region (Id string/number)", () => {
		expect(getById(1, "0")).not.toBeUndefined();
		expect(getById("1", 0)).not.toBeUndefined();
	});

	test("Valid date, In-valid Region", () => {
		expect(getById(1, "test")).not.toBeUndefined();
		expect(getById("1", 999)).not.toBeUndefined();
	});

	test("In-valid Date, Valid Region", () => {
		expect(getById("something wrong", "Sidikalang")).toBeUndefined();
		expect(getById(999, "Sidikalang")).toBeUndefined();
	});
});
