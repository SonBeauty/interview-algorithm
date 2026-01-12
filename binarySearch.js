// Bài toán: Search in Rotated Sorted Array (Tìm kiếm trong mảng đã xoay)
// Bạn có một mảng số nguyên nums được sắp xếp tăng dần (Sorted Ascending). Tuy nhiên, trước khi gửi cho bạn, mảng này đã bị xoay (rotated) tại một điểm trục (pivot) nào đó mà bạn không biết trước.

// Ví dụ: [0, 1, 2, 4, 5, 6, 7] có thể bị xoay thành [4, 5, 6, 7, 0, 1, 2].

// Nhiệm vụ: Cho mảng nums (đã xoay) và một số nguyên target. Hãy viết hàm trả về index (vị trí) của target trong nums. Nếu không tìm thấy, trả về -1.

// Ví dụ 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0

// Output: 4

// Ví dụ 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3

// Output: -1

// Ví dụ 3:

// Input: nums = [1], target = 0

// Output: -1

//base binarySearch
// function binarySearch(arr, x) {
//   let low = 0;
//   let high = arr.length - 1;
//   let mid;
//   while (high >= low) {
//     mid = low + Math.floor((high - low) / 2);

//     // If the element is present at the middle
//     // itself
//     if (arr[mid] == x) return mid;

//     // If element is smaller than mid, then
//     // it can only be present in left subarray
//     if (arr[mid] > x) high = mid - 1;
//     // Else the element can only be present
//     // in right subarray
//     else low = mid + 1;
//   }

//   // We reach here when element is not
//   // present in array
//   return -1;
// }

function binarySearch(arr = [], x) {
  let high = arr.length - 1;
  let low = 0;
  let mid;
  while (high >= low) {
    mid = Math.floor((high + low) / 2);

    if (arr[mid] === x) return mid;

    if (arr[low] <= arr[mid]) {
      if (arr[low] <= x && x < arr[mid]) high = mid - 1;
      else low = mid + 1;
    } else {
      if (arr[mid] < x && x <= arr[high]) low = mid + 1;
      else high = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([4, 5, 6, 7, 0, 1, 2], 0));
console.log(binarySearch([4, 5, 6, 7, 0, 1, 2], 3));
console.log(binarySearch([4, 5, 6, 7, 0, 1, 2], 2));
