function twoSum(nums: number[], target: number): number[] {
  let result: number[] = []
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j ++) {
          if(nums[j] === target - nums[i]) {
          result.push(j , i)
          }
      }
  }
  return result
};