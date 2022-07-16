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
    let resultsArr = []
    
    let windowSize;

    for (let i = 0; i < arr.length; i++) {
        console.log()
        if (i + 1 < n) {
            windowSize = i + 1
        } else {
            windowSize = n
        }
        let window = getCurrentWidow(arr, windowSize, i, n)
        let result = getMedian(window)
        resultsArr.push(result)
    }

    return resultsArr
}


console.log(getMovingMedian([3,1,3,5,10,6,4,3,1]))
console.log(getMovingMedian([5,2,4,6]))
console.log(getMovingMedian([3,0,0,-2,0,2,0,-2]))



