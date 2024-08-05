import {sep_vals} from "../sepVals";

describe("Separated values", () => {
   let nums: number[] = [];
   let numsVals: number[] = [];
   let numsFiltered: number[];
   beforeAll(() => {
	  nums = sep_vals(20, 3, 5);
	  numsVals = [-100, 1, 2, -1, 4, -10, -1, 7, 8, -1, -10, 11, -1, 13, 14, -100, 16, 17, -1, 19];
   });
   describe("Listed", () => {
	  test("Should not be empty.", () => {
		 expect(nums).toBeTruthy();
	  });
	  test("Should be equal to the array.", () => {
		 expect(nums).toEqual(numsVals);
	  });
	  test("Should be -1 or -100 at indices divisible by three.", () => {
		  numsFiltered = nums.filter((_, idx) => idx !== 0 && idx % 3 === 0);
		  const numsFilteredBut15 = numsFiltered.filter(num => num !== -100);
		  const isNumsFilteredBut15EveryNeg1 = numsFilteredBut15.every(num => num === -1);
		  expect(isNumsFilteredBut15EveryNeg1).toBeTruthy();
		  const whichIdxNumsFiltered15 = numsFiltered.indexOf(-100);
		  expect(whichIdxNumsFiltered15).toBe(4);
	  });
	  test("Should be -10 or -100 at indices divisible by five.", () => {
		  numsFiltered = nums.filter((_, idx) => idx !== 0 && idx % 5 === 0);
		  const numsFilteredBut15 = numsFiltered.filter(num => num !== -100);
		  const isNumsFilteredBut15EveryNeg10 = numsFilteredBut15.every(num => num === -10);
		  expect(isNumsFilteredBut15EveryNeg10).toBeTruthy();
		  const whichIdxNumsFiltered15 = numsFiltered.indexOf(-100);
		  expect(whichIdxNumsFiltered15).toBe(2);
	  });
	  test("Should be -100 at indices divisible by three and five.", () => {
		  numsFiltered = nums.filter((_, idx) => idx !== 0 && idx % 3 === 0 && idx % 5 === 0);
		  const isNumsFilteredEvery100 = numsFiltered.every(num => num === -100);
		  expect(isNumsFilteredEvery100).toBeTruthy();
	  });
   });
});
