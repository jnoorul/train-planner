import request from 'supertest';
import app from '../../src/app';

it('evaluate end point should return status code 200', async () => {
  const res = await request(app).post('/evaluate')
    .send({
      runId: '123456',
      teamUrl: 'http://www.abc.heroku.com/sorting',
      callbackUrl: 'http://coordinator.com/result',
    });
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe('request received');
});
