(function() {
  'use strict';

  const array = exports;

  // Sum of an array
  array.sum = function(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; ++i) {
      result += arr[i];
    }

    return result;
  };

  // Mean of an array
  array.mean = function(arr) {
    return array.sum(arr) / arr.length;
  };

  // Summary of an array
  array.summary = function(arr) {
    return {
      sum: array.sum(arr),
      mean: array.mean(arr)
    };
  };

  // Multiply all values by a scalar
  array.multiply = function(arr, value) {
    const result = arr.slice();

    if (value === undefined) {
      return result;
    }

    for (let i = 0; i < arr.length; ++i) {
      result[i] = arr[i] * value;
    }

    return result;
  };
})();
