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
