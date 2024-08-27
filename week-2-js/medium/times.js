/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    curtime = Date.now()
    sum=0
    for (let index = 0; index < n; index++) {
        sum+=index
    }
    elapsedtime = Date.now()
    console.log(curtime , elapsedtime,elapsedtime-curtime);
}
calculateTime(1000)