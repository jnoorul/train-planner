import 'isomorphic-fetch';

export default async function postResults(url, results) {
  const parts = url.split('://');
  const newUrl = `${parts[0]}://cisadmin:soltandpepper@${parts[1]}`;
  return fetch(newUrl, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(results),
  });
}
