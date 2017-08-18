'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = postResults;
function postResults(url, results) {
  var response = {};
  response.statusCode = 200;
  response.body = { message: 'test results are accepted', results: results };
  return response;
}