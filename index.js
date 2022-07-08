// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

  const superbowlWin = function(array) {
    let winObject = array.find(element => {
    return element.result === "W";
  })
    // console.log(winObject)
  if (winObject === undefined) {
    return undefined;
  } else {
    return winObject.year;
  }
  }
console.log(superbowlWin(record));