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
