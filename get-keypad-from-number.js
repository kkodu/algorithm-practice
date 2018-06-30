// 조금만 더 쉽고 간단히 생각했으면 풀 수 있었을텐데.. 정말로 아쉬웠던 문제였다
function solution(s) {
  var keypad = {
      1 : '.QZ',
      2 : 'ABC',
      3 : 'DEF',
      4 : 'GHI',
      5 : 'JKL',
      6 : 'MNO',
      7 : 'PRS',
      8 : 'TUV',
      9 : 'WXY',
      '*' : '*',
      0 : '_',
      '#' : '#'
  }
  var numList = s;
  var length = numList.length;
  var curValue = numList[0];
  var count = 1;
  var result = [];

  for (var i=1; i<=length; i++) {
    if (numList[i] == 0) {
      var temp = keypad[curValue];
      var value = temp[count-1];
      result.push(value);
      count = 1;
      curValue = numList[i];
      continue;
    }
    if (curValue != numList[i]) {
      var temp = keypad[curValue];
      var value = temp[count-1];
      result.push(value);
      count = 1;
    } else {
      count++;
    }
    curValue = numList[i];
  }
  
  var answer = result.filter(function (x) {
    return x != '_';
  });
  return answer.join('');
}
