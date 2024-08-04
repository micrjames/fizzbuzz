import { Range } from "../range/range";

export const fizzbuzz = (bounds: number, ...sep_pts: number[]): number[] => {
   let nums: number[] = [];
   [...new Range(bounds)].forEach(num => {
	   nums = [...nums,
		  num % sep_pts[0] === 0 && num % sep_pts[1] === 0 ? -100 :
		  (num % sep_pts[0] === 0 ? num :
		  (num % sep_pts[1] == 0 ? num : -1))];
   });
   return nums;
};
