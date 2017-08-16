export default function postResults(url, results) {
  const response = {};
  response.statusCode = 200;
  response.body = { message: 'test results are accepted', results };
  return response;
}
