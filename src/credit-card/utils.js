
const parseInput = (value) => parseInt(value.replace('$', ''));

// https://jsperf.com/credit-card-validator/7
const validateCard = (function(arr) {
  return function(ccNum) {
    let
      len = ccNum.length,
      bit = 1,
      sum = 0,
      val;

    while (len) {
      val = parseInt(ccNum.charAt(--len), 10);
      sum += (bit ^= 1) ? arr[val] : val;
    }

    if (sum && sum % 10 === 0) {
      return ccNum;
    } else {
      return false;
    };
  };
}([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]));

export {
  parseInput,
  validateCard,
}
