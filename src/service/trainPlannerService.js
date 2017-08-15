import 'isomorphic-fetch';

export default async function execute(url, input) {
  return fetch(url, {
    method: 'post',
    body: JSON.stringify(input),
  });
}

