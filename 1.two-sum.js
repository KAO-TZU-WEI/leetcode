/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//O(n²)重層回圈
// let array = [];
// let twoSum = function (nums, target) {
//   let array = [];
//   for (i = 0; i < nums.length; i++) {
//     for (j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         array.push(i, j);
//       }
//     }
//   }
//   return array;
// };
//O(n)以空間換取時間
let twoSum = function (nums, target) {
  let hash_table = {};
  let res;
  for (let i = 0; i < nums.length; i++) {
    res = target - [nums[i]];
    if (hash_table[res] !== undefined) {
      return [hash_table[res], i];
    } else {
      hash_table[nums[i]] = i;
    }
  }
};
// @lc code=end
