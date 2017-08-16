import TrainPlannerEvaluator from './TrainPlannerEvaluator';

const evaluators = [];
evaluators.push({ Problem: 'TrainPlanner', Evaluator: TrainPlannerEvaluator });
//  add evaluators for other problems here.

export default function getEvaluator(problemName, reqData, testStore) {
  for (let i = 0; i < evaluators.length; i += 1) {
    if (evaluators[i].Problem === problemName) {
      return new evaluators[i].Evaluator(reqData.runId, reqData.teamUrl,
        reqData.callbackUrl, testStore);
    }
  }
  throw new Error('No evaluator exists for this problem');
}
