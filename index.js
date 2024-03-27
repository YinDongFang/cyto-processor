const stringToNumberArray = require('./stringToNumberArray')
const isPrime = require('./isPrime')
const reverseString = require('./reverseString')
const isEven = require('./isEven')

module.exports = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }