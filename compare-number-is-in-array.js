function solution(arr) {
  var answer = true;
  var sorted = arr.sort(function (x, y) { return x- y; });
  var length = arr.length;
  for (var i=1; i<=length; i++) {
      if (i != sorted[i-1]) {
          answer = false;
          break;
      }
  }
  
  return answer;
}