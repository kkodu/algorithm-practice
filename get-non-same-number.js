// 초기 코드 보다 8ms 정도 더 빠르다
function solution(arr)
{
    var answer = [];
    var before = null;
    
    for(var i=0; i<arr.length; i++) {
        var cur = arr[i];
        if (before != cur) {
            answer.push(cur);            
            before = cur;
        }
    }
    
    return answer;
}

// 기존 코드 - 조금 많이 느리며 문맥도 어설프다.
// function solution(arr)
// {
//     var answer = [];
//     var visited = {};
//     var before;
    
//     for(var i=0; i<arr.length; i++) {
//         var key = arr[i];
//         if (!visited[key]) {
//             visited[key] = true;
//             answer.push(key);
//         }
//         if (before != key) {
//             visited[before] = false;
//             before = key;
//         }
//     }
    
//     return answer;
// }

// 한 줄의 코드 - 깔끔하며 빠르다.
// function solution(arr)
// {
//     return arr.filter((val,index) => val != arr[index+1]);
// }