// 기존의 쉬운 코드로는 테스트-2를 통과하기 어려울 것이다. 그래서 문자열을 하나 하나 다 쪼개서 정수 집합으로 만들고 더했다.
function solution(s) {
  var splited = s.split('');
  var temp = "";
  var list = [];
  var sum = 0;
  
  for (var i=0; i<splited.length; i++) {
      if (splited[i] == '+' || splited[i] == '-') {
          temp = splited[i];
      } else {
          temp += splited[i];
          if (splited[i+1] == undefined || splited[i+1] == '+' || splited[i+1] == '-') {
              list.push(Number(temp));
              temp = "";
          }
      }
  }
  
  for (var j=0; j<list.length; j++) {
      sum += list[j];
  }
  return sum;
}