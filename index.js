function getCurrentWidow(arr, windowSize, index, n) {

    let arrCopy = [...arr]
    
    let currentWidow = []
    if (n >= index + 1) {
        currentWidow = arrCopy.splice(0,windowSize)
    } else {
        currentWidow = arrCopy.splice((index - (n-1)), windowSize)
    }

    return currentWidow
}


function getMedian(window) {

    window.sort((a,b)=>{
        return a - b
    })

    let Median

    if (window.length % 2 === 0) {
        i1 = window.length / 2 - 1
        i2 = i1 + 1   
        median = (window[i1] + window[i2]) / 2

    } else {
        median = window[Math.floor(window.length/2)]
    }

    return median
}

function getMovingMedian(arr) {
    
    let n = arr[0]
    arr.shift()
    let resultsStr = ''
    
    let windowSize;

    for (let i = 0; i < arr.length; i++) {
        if (i + 1 < n) {
            windowSize = i + 1
        } else {
            windowSize = n
        }
        let window = getCurrentWidow(arr, windowSize, i, n)
        let result = getMedian(window)
        i === arr.length - 1 ?  resultsStr += result : resultsStr += result + ',' 
    }

    return resultsStr
}

// Find the Moving Median for each item of an array based on N-1 and its predecessors where N is the sliding window size. The first item in the array is the sliding window size. 
// The median will be calculated from a smaller window size until the window size is reached.
// The final output should be a string with the moving median corresponding to each item in the original array separated by commas

console.log(getMovingMedian([3,1,3,5,10,6,4,3,1]))
// output: 1,2,3,5,6,6,4,3

console.log(getMovingMedian([5,2,4,6]))
// output: 2,3,4

console.log(getMovingMedian([3,0,0,-2,0,2,0,-2]))
// output: 0,0,0,0,0,0,0



