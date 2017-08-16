import 'isomorphic-fetch';

export default async function postResults(url, results) {
  return fetch(url, {
    method: 'post',
    body: JSON.stringify(results),
  });
}
