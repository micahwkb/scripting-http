('use strict')

module.exports = function print_1337(input) {
  console.log(input.replace(/e/ig, 3).replace(/i/ig, 1).replace(/t/ig, 7).replace(/s/ig, 5))
}