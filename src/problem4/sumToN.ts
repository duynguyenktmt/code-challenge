/*
    Problem 4:
    Input: n - any integer (lesser than Number.MAX_SAFE_INTEGER)
    Output: summation to n, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15
*/

/*
    sum_to_n_a:
    - Time Complexity: O(n)
    - Space Complexity: O(1)
    - Iterative approach  
*/
function sum_to_n_a(n: number): number {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
}

/*
    sum_to_n_b:
    - Time Complexity: O(1)
    - Space Complexity: O(1)
    - Mathematical formula: sum = n * (n + 1) / 2
*/
function sum_to_n_b(n: number): number {
	return (n * (n + 1)) / 2;
}


/*
    sum_to_n_c:
    - Time Complexity: O(n)
    - Space Complexity: O(n)
    - Recursive approach
    - Uses a recursive function to calculate the sum of the first n natural numbers.
*/
function sum_to_n_c(n: number): number {
	if (n <= 1) return n;
	return n + sum_to_n_c(n - 1);
}
