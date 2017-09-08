import 'isomorphic-fetch';

export default async function execute(url, input) {
    const problemUrl = url + '/trainPlanner';
    const response = await fetch(problemUrl, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input),
    });

    const output = await response.json();
    console.log('team node url'+problemUrl);
    console.log('output from team node:'+output);
    return output;
}

