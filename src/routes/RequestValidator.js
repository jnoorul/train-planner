export default function validateRequest(req) {
  const reqData = req.body;
  const validationResults = [];
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
