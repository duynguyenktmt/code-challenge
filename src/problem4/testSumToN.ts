import { sum_to_n_a, sum_to_n_b, sum_to_n_c } from "./sumToN";

function runTests() {
	const testCases = [
		{ input: 0, expected: 0 },
		{ input: 1, expected: 1 },
		{ input: 2, expected: 3 },
		{ input: 5, expected: 15 },
		{ input: 10, expected: 55 },
		{ input: 100, expected: 5050 },
	];

	let failed = 0;

	function assertEqual(fn: (n: number) => number, name: string) {
		for (const { input, expected } of testCases) {
			const result = fn(input);
			if (result !== expected) {
				console.error(
					`❌ ${name}(${input}) => ${result} (expected ${expected})`
				);
				failed++;
			} else {
				console.log(`✅ ${name}(${input}) => ${result}`);
			}
		}
	}

	console.log("🔍 Testing sum_to_n_a");
	assertEqual(sum_to_n_a, "sum_to_n_a");

	console.log("\n🔍 Testing sum_to_n_b");
	assertEqual(sum_to_n_b, "sum_to_n_b");

	console.log("\n🔍 Testing sum_to_n_c");
	assertEqual(sum_to_n_c, "sum_to_n_c");

	if (failed > 0) {
		console.error(`\n❗ ${failed} test(s) failed.`);
		//process.exit(1);
	} else {
		console.log("\n🎉 All tests passed!");
	}
}

// Gọi test ở cuối file
runTests();
