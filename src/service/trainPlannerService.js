import 'isomorphic-fetch';

export default async function execute(url, input) {
  const response = await fetch(url, {
    method: 'post',
    body: JSON.stringify(input),
  });

  const output = await response.text();
  return JSON.parse(output);
}

