const { getByDate } = require("../util/function");

describe("Get region data by Date", () => {
	test("Valid date", () => {
		expect(getByDate("2021-08-20")).not.toBeUndefined();
	});

	test("Valid Date, Valid Region (Name)", () => {
		expect(getByDate("2021-08-20", "Sidikalang")).not.toBeUndefined();
		expect(getByDate("2021-08-20", "SIDIKALANG")).not.toBeUndefined();
		expect(getByDate("2021-08-20", "sIDIkaLang")).not.toBeUndefined();
	});

	test("Valid Date, Valid Region (Id string/number)", () => {
		expect(getByDate("2021-08-20", "0")).not.toBeUndefined();
		expect(getByDate("2021-08-20", 0)).not.toBeUndefined();
	});

	test("Valid date, In-valid Region", () => {
		expect(getByDate("2021-08-20", "test")).not.toBeUndefined();
		expect(getByDate("2021-08-20", 999)).not.toBeUndefined();
	});

	test("In-valid Date, Valid Region", () => {
		expect(getByDate("1", "Sidikalang")).toBeUndefined();
	});
});
