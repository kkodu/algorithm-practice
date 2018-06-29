// 에라토스체네스의 체로 구현..어렵다 잘 모르겠음
function solution(n) {
  var arr = [];
  var i;
  
  for (i=2; i<=n; i++) {
      arr[i] = i;
  }
  
  for (i=2; i<=Math.sqrt(n); i++) {
      if (arr[i] == 0) {
          continue;
      }
      for (var j = i + i; j <= n; j += i) {
          arr[j] = 0;
      }
  }
  
  var count = arr.filter(function (x) {
      return x != 0;
  })
  return count.length;
}