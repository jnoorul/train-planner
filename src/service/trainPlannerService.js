import 'isomorphic-fetch';

export default async function execute(url, input) {
  const problemUrl = url + '/trainPlanner';
  const response = await fetch(problemUrl, {
    method: 'post',
    body: JSON.stringify(input),
  });

  const output = await response.text();
  return JSON.parse(output);
}

