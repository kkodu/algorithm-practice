function solution(s) {
  var answer = '';
  var splited = s.split('');
  var length = splited.length;
  var mid = Number.parseInt(length / 2); 

  if (length % 2) {
      answer = splited[mid];    
  } else {
      answer = splited[mid-1].concat(splited[mid]).toString();
  }

  return answer;
}

// 한 줄의 알고리즘 해결 풀이, 작은 문자열에 대해서는 성능 차이가 별로 나지 않는다.
// function solution(s) {
//   return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 ? 1 : 2);
// }

// 이게 조금 더 빠른 결과를 보여줌 평균 1.28?
// return s.length % 2 == 0 ? s.substr(s.length / 2 - 1, 2) : s.substr(Math.floor(s.length / 2), 1);