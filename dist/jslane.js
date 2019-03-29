(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.jslane = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = require('./lib/jslane.js');

},{"./lib/jslane.js":3}],2:[function(require,module,exports){
(function () {
  'use strict';

  const array = exports;

  // Sum of an array
  array.sum = function (arr) {
    let result = 0;

    for (let i = 0; i < arr.length; ++i) {
      result += arr[i];
    }

    return result;
  };

  // Mean of an array
  array.mean = function (arr) {
    return array.sum(arr) / arr.length;
  };

  // Summary of an array
  array.summary = function (arr) {
    return {
      sum: array.sum(arr),
      mean: array.mean(arr)
    };
  };

  // Multiply all values by a scalar
  array.multiply = function (arr, value) {
    const result = arr.slice();

    if (value === undefined) {
      return result;
    }

    for (let i = 0; i < arr.length; ++i) {
      result[i] = arr[i] * value;
    }

    return result;
  };
}());

},{}],3:[function(require,module,exports){
(function () {
  'use strict';

  const jslane = exports;

  // Load dependent libraries
  jslane.array = require('./array.js');
}());

},{"./array.js":2}]},{},[1])(1)
});
