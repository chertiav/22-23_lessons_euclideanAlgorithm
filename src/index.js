'use strict';
const euclideanAlgorithm = (a, b) => b === 0 ? Math.abs(a) : euclideanAlgorithm(b, a % b);
console.log(euclideanAlgorithm(45,18)); // 9







