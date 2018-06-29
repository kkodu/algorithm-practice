function solution(n, m) {
  var answer = [];
  var a = n;
  var b = m;
  while (b != 0) {
      var r = a % b;
      a = b;
      b = r;
  }
  answer.push(a);
  answer.push(n * m / a);
  return answer;
}