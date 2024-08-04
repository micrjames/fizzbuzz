import { Range } from "../range/range";

export const sep_vals = (bounds: number, ...sep_pts: number[]): number[] => {
   let nums: number[] = [];
   [...new Range(bounds)].forEach(num => {
	   nums = [...nums, sep_val(num, ...sep_pts)];
   });
   return nums;
};

const sep_val = (num: number, ...sep_pts: number[]): number => {
	return num % sep_pts[0] === 0 && num % sep_pts[1] === 0 ? -100 :
	(num % sep_pts[0] === 0 ? num :
	(num % sep_pts[1] == 0 ? num : -1));
}; 
