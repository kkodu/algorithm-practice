// 평균 1.5ms 가량
function solution(arr) {
  var set = arr;
  var length = set.length;
  for (var i=0; i<length-1; i++) {
      var temp = set[i] * set[i+1] / gcd(set[i], set[i+1]);
      set[i+1] = temp;
  }
  return set[length-1];
}

function gcd(a, b) {
  while (b != 0) {
      var r = a % b;
      a = b;
      b = r;
  }
  return a;
}

// reduce 사용 => 코드도 깔끔해지고, 결과도 1.3ms 정도로 많이 향상됨.
// function gcd(a, b) {
//   if (!b) return a;
//   return gcd(b, a%b);
// }

// function lcm(a, b) {
//   return a * b / gcd(a, b);
// }

// function solution(arr) {
//   var answer = arr.reduce((a, b) => lcm(a, b));
//   return answer;
// }