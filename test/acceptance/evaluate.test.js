import request from 'supertest';
import app from '../../src/app';

it('evaluate end point should return status code 200', async () => {
  const res = await request(app).post('/trainPlanner/evaluate')
    .send({
      runId: '123456',
      teamUrl: 'http://www.abc.heroku.com/sorting',
      callbackUrl: 'http://coordinator.com/result',
    });
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe('PASS');
  expect(res.body.score).toBe(100);
  expect(res.body.testCases.length).toBe(4);
});

it('evaluate should return 400 if input payload is empty', async () => {
  const res = await request(app).post('/trainPlanner/evaluate');

  expect(res.statusCode).toBe(400);
  expect(res.body.errors.length).toBe(3);
  expect(res.body.errors[0]).toBe('runId is mandatory for evaluation');
  expect(res.body.errors[1]).toBe('teamUrl is mandatory for evaluation');
  expect(res.body.errors[2]).toBe('callbackUrl is mandatory for evaluation');
});

it('evaluate should return 400 if teamUrl is not empty', async () => {
  const res = await request(app).post('/trainPlanner/evaluate')
    .send({
      runId: '123456',
      teamUrl: '',
      callbackUrl: 'http://coordinator.com/result',
    });

  expect(res.statusCode).toBe(400);
  expect(res.body.errors.length).toBe(1);
  expect(res.body.errors[0]).toBe('teamUrl is mandatory for evaluation');
});

it('evaluate should return 400 if teamUrl is not empty', async () => {
  const res = await request(app).post('/trainPlanner/evaluate')
    .send({
      runId: '123456',
      teamUrl: 'http://www.abc.heroku.com/sorting',
    });

  expect(res.statusCode).toBe(400);
  expect(res.body.errors.length).toBe(1);
  expect(res.body.errors[0]).toBe('callbackUrl is mandatory for evaluation');
});