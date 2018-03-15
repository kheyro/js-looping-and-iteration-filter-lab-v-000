// Code your solution in this file

function findMatching(arr, name) {
  arr.filter(function (driver) { return driver.toLowerCase() === name.toLowerCase() })
}
