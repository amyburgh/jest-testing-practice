export default function analyzeArray(numArr) {
  return {
    average: numArr.reduce((prev, cur) => prev + cur, 0) / numArr.length,
    min: Math.min(...numArr),
    max: Math.max(...numArr),
    length: numArr.length,
  }
}
