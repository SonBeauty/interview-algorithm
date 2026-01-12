// Bài toán: Valid Parentheses (Kiểm tra ngoặc hợp lệ)Giả sử bạn đang viết một module để validate cú pháp của file JSON hoặc file config.Cho một chuỗi s chỉ chứa các ký tự (, ), {, }, [, ]. Hãy xác định xem chuỗi đầu vào có hợp lệ hay không.Chuỗi hợp lệ khi:Ngoặc mở phải được đóng bằng ngoặc đóng cùng loại.Ngoặc mở phải được đóng theo đúng thứ tự (Last In, First Out).Ví dụ:
// Input: s = "()" -> Output: true
// Input: s = "()[]{}" -> Output: true
// Input: s = "(]" -> Output: false
// Input: s = "([)]" -> Output: false
//  (Lưu ý: sai vì ngoặc tròn đóng trước ngoặc vuông)Input: s = "{[]}" -> Output: true

function validParentheses(s) {
  const stack = [];
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let ch of s) {
    // ngoặc mở
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    }
    // ngoặc đóng
    else {
      if (stack.pop() !== map[ch]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(validParentheses("()")); // true
console.log(validParentheses("()[]{}")); // true
console.log(validParentheses("(]")); // false
console.log(validParentheses("([)]")); // false
console.log(validParentheses("{[]}"));
