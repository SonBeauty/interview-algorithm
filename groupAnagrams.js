// Bài toán: Group Anagrams (Nhóm các từ đảo chữ)Cho một mảng các chuỗi strs. Hãy gom nhóm các chuỗi là Anagram của nhau lại. Bạn có thể trả về kết quả theo bất kỳ thứ tự nào.Định nghĩa: Anagram là một từ hoặc cụm từ được tạo ra bằng cách sắp xếp lại các chữ cái của một từ hoặc cụm từ khác, thường sử dụng tất cả các chữ cái gốc chính xác một lần. (Ví dụ: "listen" và "silent").
// Ví dụ 1:
// Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
// Giải thích: "eat", "tea", "ate" đều cấu tạo từ 3 chữ cái 'a', 'e', 't' -> gom thành 1 nhóm.
// Ví dụ 2:Input: strs = [""]Output: [[""]]Ví dụ 3:Input: strs = ["a"]Output: [["a"]]
// Yêu cầu:Độ dài mảng strs lên tới $10^4$.Độ dài mỗi chuỗi trong mảng lên tới 100 ký tự.Vui lòng giải thích giải pháp của bạn để đảm bảo Performance tốt nhất (tránh $O(N^2)$).Bạn hãy suy nghĩ và viết code (JavaScript/Node.js) nhé. Tôi đang chờ xem cách bạn chọn Key cho bài toán này.

// const groupAnagrams = (strs) => {
//   let result = [];
//   for (let i = 0; i < strs.length; i++) {
//     if (result.some((str) => str.includes(strs[i]))) continue;
//     const subArray = [];
//     const str = strs[i];
//     const arrI = [...str].sort();
//     for (let j = 0; j < strs.length; j++) {
//       const arrJ = [...strs[j]].sort();
//       if (arrJ.every((v, i) => v === arrI[i])) subArray.push(strs[j]);
//     }
//     result.push(subArray);
//   }
//   return result;
// };

const groupAnagrams = (strs = []) => {
  const map = new Map();
  for (let str of strs) {
    // 1. Tạo key bằng cách sort các ký tự của chuỗi
    // "eat" -> ['e','a','t'] -> ['a','e','t'] -> "aet"
    const key = str.split("").sort().join("");

    // 2. Nếu key chưa có trong map thì tạo mảng rỗng
    if (!map.has(key)) map.set(key, []);

    // 3. Push từ gốc vào nhóm tương ứng
    map.get(key).push(str);
  }

  // Trả về danh sách các value (các nhóm đã gom)
  // Array.from(map.values()) chuyển các values của Map thành Array
  return Array.from(map.values());
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
