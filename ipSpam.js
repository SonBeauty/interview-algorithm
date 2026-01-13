// const logs = [
//   { ip: "1.1.1.1", timestamp: 1000 },
//   { ip: "1.1.1.1", timestamp: 1200 },
//   { ip: "2.2.2.2", timestamp: 1300 },
//   { ip: "1.1.1.1", timestamp: 1500 },
//   { ip: "1.1.1.1", timestamp: 1800 },
//   { ip: "2.2.2.2", timestamp: 1900 },
//   { ip: "1.1.1.1", timestamp: 2200 },
// ];

// const K = 1000; // time window
// const N = 3;
// return ["1.1.1.1"]

// wrong domain
// function detectSpamIPs(logs, K, N) {
//   const map = new Map();
//   for (const log of logs) {
//     map.set(log.ip, (map.get(log.ip) || 0) + 1);
//   }

//   const bucketSorts = Array.from({ length: logs.length + 1 }, () => []);

//   for (const [ip, count] of map) {
//     bucketSorts[count].push(ip);
//   }

//   const result = [];
//   bucketSorts.slice(N, bucketSorts.length).flat();
//   return result;
// }

function detectSpamIPs(logs = [], K, N) {
  const map = new Map();
  for (const log of logs) {
    if (!log.ip && !log.timestamp) continue;
    const { ip, timestamp } = log;
    map.set(ip, map.get(ip) || []);

    map.get(ip).push(timestamp);
  }
  const spammers = [];
  for (let [ip, timestamps] of map) {
    let left = 0;
    for (let right = 0; right < timestamps.length; right++) {
      while (timestamps[right] - timestamps[left] > K) {
        left++;
      }

      const countInWindow = right - left + 1;

      if (countInWindow > N) {
        spammers.push(ip);
        break;
      }
    }
  }
  return spammers;
}
console.log(
  detectSpamIPs(
    [
      { ip: "1.1.1.1", timestamp: 1000 },
      { ip: "1.1.1.1", timestamp: 1200 },
      { ip: "2.2.2.2", timestamp: 1300 },
      { ip: "1.1.1.1", timestamp: 1500 },
      { ip: "1.1.1.1", timestamp: 1800 },
      { ip: "2.2.2.2", timestamp: 1900 },
      { ip: "1.1.1.1", timestamp: 2200 },
    ],
    1000,
    3
  )
);
