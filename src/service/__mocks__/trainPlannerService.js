function getMockOutput(input) {
  if (input.id === 1) {
    return { numberOfTrains: {
      greenLine: 5,
      redLine: 2,
    } };
  }

  if (input.id === 2) {
    return { numberOfTrains: {
      greenLine: 3,
      redLine: 1,
    } };
  }
  return {};
}

export default async function execute(url, input) {
  return getMockOutput(input);
}

