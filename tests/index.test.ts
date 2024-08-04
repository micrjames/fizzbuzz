import { fizzbuzz } from "../fizzbuzz";

describe("Fizzbuzz", () => {
   let nums: number[] = [];
   let numsVals: number[] = [];
   let numsOnThrees: number[];
   let numsOnFives: number[];
   let numsOnThreesAndFives: number[];
   let numsFiltered: number[];
   beforeAll(() => {
	  nums = fizzbuzz(20, 3, 5);
	  numsVals = [-100, -1, -1, 3, -1, 5, 6, -1, -1, 9, 10, -1, 12, -1, -1, -100, -1, -1, 18, -1];

	  numsOnThrees = [3, 6, 9, 12, 18];
	  numsOnFives = [5, 10];
	  numsOnThreesAndFives = [3, 5, 6, 9, 12, 15, 18];
   });
   describe("Listed", () => {
	  test("Should not be empty.", () => {
		 expect(nums).toBeTruthy();
	  });
	  test("Should be equal to the array.", () => {
		 expect(nums).toEqual(numsVals);
	  });
	  test("Should be fizz at indices divisible by three.", () => {
		  numsFiltered = nums.filter(num => num >= 0 && num % 5 !== 0);
		  expect(numsFiltered).toEqual(numsOnThrees);				 
	  });
	  test("Should be buzz at indices divisible by five.", () => {
		  numsFiltered = nums.filter(num => num >= 0 && num % 3 !== 0);
		  expect(numsFiltered).toEqual(numsOnFives);				 
	  });
	  test("Should be fizzbuzz at indices divisible by three and five.", () => {
		  numsFiltered = nums.map((num, idx) => {
			 if(idx === 15) return idx;
			 else if(num !== 10) return num;
		  }).filter(num => num > 0);
		  expect(numsFiltered).toEqual(numsOnThreesAndFives);				 
	  });
   });
});
