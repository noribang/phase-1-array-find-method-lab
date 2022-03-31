/* 1st attempt that worked below: */
function superbowlWin(arr) {
    // Callback function.
    function callback(element) {
        // This works.
        // if (element.result === "W") {
        //     return element
        // }
        // This, also, works.
        return element.result === "W"
    }

    const returnedResults = arr.find(callback)
    
    // Original conditions that work.
    // if (returnedResults === undefined) {
    //     return undefined
    // } else {
    //     return returnedResults.year
    // }

    // Refactored.
    if (returnedResults) {
        return returnedResults.year
    }
    
}

////////////////////////////////////////////////////////
/* John Souza example from Workshop lecture 20220328. */
////////////////////////////////////////////////////////
/* function superbowlWin(record) {
    // Call back function takes object (year)
    // as argument from record array
    function isWinningYear(year) {
        if (year.result === "W") {
            return true
        } else {
            return false
        }
    }
    // Returns either object from record array or undefined
    const winningYearObject = record.find(isWinningYear)
    // Alternate way with arrow function
    // const winningYearObject = record.find((object) => {object.result === "W"})
    // If object from record array return value of year key. 
    if (winningYearObject) {
        return winningYearObject.year
    }

} */