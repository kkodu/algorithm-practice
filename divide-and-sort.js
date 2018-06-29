// 굿굿 테스트 실행에서 결과 출력 속도가 매우 빨랐다.
function solution(arr, divisor) {
  var divided = [];
  divided = arr.filter(function (x) { return x % divisor == 0; });
  if (!divided.length) {
      divided.push(-1);
      return divided;
  } else {
      divided.sort(function (x, y) { return x - y; });
      return divided;
  } 
}

// 세 줄로 줄여본 결과 속도는 기존과 비슷, 조금 더 느렸다.
// function solution(arr, divisor) {
//   let divided = [];
//   divided = arr.filter(x => x % divisor === 0)
//   return divided.length? divided.sort((x, y) => x - y) : divided.concat(-1)
// }