import { sep_vals } from "./sepVals";

export const fizzbuzz = (bounds: number): (number | string)[] => {
	const nums = sep_vals(bounds, 3, 5);
	return nums.map((num, idx) =>
	   num === -1 ? "fizz" :
		  (num === -10 ? "buzz" :
		  (num  == -100 && idx !== 0 ? "fizzbuzz" : num))
	);
};
