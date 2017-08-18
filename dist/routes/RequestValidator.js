'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateRequest;
function validateRequest(req) {
  var reqData = req.body;
  var validationResults = [];
  if (reqData) {
    if (!reqData.runId) {
      validationResults.push('runId is mandatory for evaluation');
    }
    if (!reqData.teamUrl) {
      validationResults.push('teamUrl is mandatory for evaluation');
    }
    if (!reqData.callbackUrl) {
      validationResults.push('callbackUrl is mandatory for evaluation');
    }
  }
  return validationResults;
}