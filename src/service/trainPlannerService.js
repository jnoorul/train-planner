import 'isomorphic-fetch';

export default async function execute(url, input) {
  const urlWithoutSlash = url.replace(/\/$/, '');
  const problemUrl = `${urlWithoutSlash}/trainPlanner`;
  const response = await fetch(problemUrl, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  });

  const output = await response.json();
  console.log(`team node url ${problemUrl}`);
  console.log(`output from team node: ${JSON.stringify(output)}`);
  return output;
}

