// Bài toán: Longest Substring Without Repeating CharactersCho một chuỗi ký tự s. Hãy tìm độ dài của chuỗi con liên tiếp (substring) dài nhất mà không có ký tự nào bị trùng lặp.
// Ví dụ 1:Input: s = "abcabcbb" Output: 3
// Giải thích: Chuỗi con dài nhất là "abc", độ dài là 3.
// Ví dụ 2:Input: s = "bbbbb" Output: 1
// Giải thích: Chuỗi con là "b". Ví dụ 3:Input: s = "pwwkew" Output: 3 Giải thích: Chuỗi con là "wke".
// Lưu ý là "pwke" là subsequence (chuỗi con không liên tiếp), không phải substring.Yêu cầu:Giả sử độ dài chuỗi có thể lên tới  10^4 ký tự.Bạn hãy trình bày ý tưởng giải quyết, độ phức tạp thời gian/không gian (Time/Space Complexity) và viết code (giả mã hoặc code cụ thể bằng ngôn ngữ bạn mạnh nhất như Java, Go, Python, JS...).

// function substringCharacters(s) {
//   let arr = [...s];
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//     continue;
//   }
//   console.log("Do dai chuoi", result.length);
//   result.join("");
//   console.log("Chuoi con la", result);
//   return result.length;
// }

// function substringCharacters(s) {
//   let arr = [...s];
//   let maxLength = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let result = [];

//     for (let j = i; j < arr.length; j++) {
//       if (result.includes(arr[j])) {
//         break;
//       }
//       result.push(arr[j]);
//       maxLength = Math.max(maxLength, j - i + 1);
//     }
//   }
//   return maxLength;
// }

function substringCharacters(s) {
  let arr = [...s];
  const set = new Set();
  let maxLength = 0;
  let left = 0;
  for (let right = 0; right < arr.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(arr[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
console.log(substringCharacters("abcabcbb"));
console.log(substringCharacters("bbbbb"));
console.log(substringCharacters("pwwkew"));

// Dùng 2 con trỏ: left (bắt đầu cửa sổ) và right (kết thúc cửa sổ). Cả hai bắt đầu ở 0.

// Dịch chuyển right sang phải từng bước để mở rộng cửa sổ.

// Kiểm tra xem ký tự tại right đã có trong cửa sổ chưa (dùng Set).

// Nếu chưa có: Thêm vào Set, tính độ dài cửa sổ (right - left + 1), cập nhật kết quả max.

// Nếu đã có: Có nghĩa là chuỗi con đang bị trùng. Ta phải thu hẹp cửa sổ từ bên trái (left) bằng cách xóa ký tự tại left khỏi Set và tăng left lên, lặp lại cho đến khi không còn trùng ký tự tại right nữa.
