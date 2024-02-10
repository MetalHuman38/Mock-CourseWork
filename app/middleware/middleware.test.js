import  appMiddleware  from '../middleware/middleware';
import server from '../app.js';


frontEndtest('Frontend server starts up', () => {
  // Your test code here

  // Test that the frontend server starts up successfully
  expect(server.status).toBe(200);

  // Test that the server returns the expected response
  expect(server.response).toEqual('Server is running');

  // Test that the server response contains the necessary data
  expect(server.data).toHaveProperty('users');
  expect(server.data.users).toHaveLength(5);
});

test('Middleware function calls next', () => {
  const req = {};
  const res = {};
  const next = jest.fn();

  appMiddleware(req, res, next);

  expect(next).toHaveBeenCalled();
});