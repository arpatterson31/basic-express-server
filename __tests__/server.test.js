'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const mockRequest = supertest(server.app);

describe('SERVER TESTS:', () => {

  it('404 on a bad route', async () => {
    const response = await mockRequest.get('/no-route');
    expect(response.status).toEqual(404);
  });

  it('404 on a bad method', async () => {
    const response = await mockRequest.put('/person');
    expect(response.status).toEqual(404);
  });

  it('500 if no name in the query string', async () => {
    const response = await mockRequest.get('/person');
    expect(response.status).toEqual(500);
  });

  it('200 if name in the query string and output is an object', async () => {
    const response = await mockRequest.get('/person?name=Audrey');
    expect(response.status).toEqual(200);
    expect(typeof response.body).toEqual('object');
  });

});