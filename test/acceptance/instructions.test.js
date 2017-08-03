import request from 'supertest';
import app from '../../src/app';


it('should get instructions page', async () => {
  const res = await request(app).get('/instructions');
  expect(res.statusCode).toBe(200);
});
