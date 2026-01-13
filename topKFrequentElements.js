// nums = [1,1,1,2,2,3]
// k = 2
// output: [1,2]

// function topKFrequent(arr = [], k = 1) {
//   // create Map[key] : frequent
//   const map = new Map(); // O(1)

//   // check nums in array
//   for (let i = 0; i < arr.length; i++) {
//     //O(n)
//     // defaut count = 0 + 1;
//     map.set(arr[i], (map.get(arr[i]) || 0) + 1); //O(1)
//   }
//   // return map = {1:3,2:2,3:1}

//   // O(m)
//   const frequent = [...map].sort((a, b) => b[1] - a[1]); // O(n log n)

//   return frequent.slice(0, k).map((item) => item[0]);
// }

function topKFrequent(arr = [], k = 1) {
  // bucket sort;
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }

  const buckets = Array.from({ length: arr.length + 1 }, () => []);
  for (const [num, count] of map) {
    buckets[count].push(num);
  }

  const result = [];
  for (let i = buckets.length - 1; i >= 0; i--) {
    if (buckets[i].length === 0) continue;
    for (const num of buckets[i]) {
      result.push(num);
      if (result.length === k) return result;
    }
  }

  return result;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
