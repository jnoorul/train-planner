import request from 'supertest';
import app from '../../src/app';


it('should get instructions page', async () => {
  const res = await request(app).get('/instructions');
  expect(res.statusCode).toBe(200);
});

it('should get instructions page with data', async () => {
  const res = await request(app).get('/instructions');
  expect(res.statusCode).toBe(200);
  expect(res.type).toBe('text/html');
  expect(res.text.length).toBeGreaterThan(100);
});
