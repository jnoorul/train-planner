import 'isomorphic-fetch';

export default async function postResults(url, results) {
  return fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(results),
  });
}
