function longestSubstring(str) {


    if (str.length === 0)
    return 0;


if (str.length === 1)
    return 1;

let maxLength = 0;
let visited = new Array(256).fill(false);


let left = 0, right = 0;
while (right < str.length) {

    // if character is visited
    if (visited[str.charCodeAt(right)]) {

       
        while (visited[str.charCodeAt(right)]) {
            visited[str.charCodeAt(left)] = false;
            left++;
        }
    }

    visited[str.charCodeAt(right)] = true;

    
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
}

return maxLength;
}

module.exports = { longestSubstring };
