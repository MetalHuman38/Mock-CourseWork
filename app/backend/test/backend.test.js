import app, { listen } from '../backend';
import request from 'supertest';

describe('Server', () => {
  let server;

  beforeAll(() => {
    server = listen(3000);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should start the server', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Server is running');
  });
});
