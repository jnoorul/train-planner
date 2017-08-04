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
  expect(res.body.message).toBe('request received');
});

it('evaluate should return 400 if invalid json payload is sent', async () => {
  const res = await request(app).post('/trainPlanner/evaluate')
    .send({
      runId: '123456',
      teamUrl: '123',
      callbackUrl: '456',
    });

  expect(res.statusCode).toBe(400);
  expect(res.body.message).toBe('invalid input received');
});
