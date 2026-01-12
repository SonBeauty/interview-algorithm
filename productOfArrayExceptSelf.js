// Bài toán: Product of Array Except Self (Tích của mảng trừ chính nó)Cho một mảng số nguyên nums. Hãy trả về một mảng result sao cho result[i] bằng tích của tất cả các phần tử trong nums ngoại trừ nums[i].
// Ví dụ: Input: nums = [1, 2, 3, 4] Output: [24, 12, 8, 6]

function productOfArrayExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}

console.log(productOfArrayExceptSelf([1, 2, 3, 4]));
