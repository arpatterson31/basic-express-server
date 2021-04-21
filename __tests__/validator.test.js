'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const mockRequest = supertest(server.app);

describe('VALIDATOR TEST:', () => {

  it('200 if name in the query string and output is an object', async () => {
    const response = await mockRequest.get('/person?name=Audrey');
    expect(response.status).toEqual(200);
    expect(typeof response.body).toEqual('object');
  });

  it('500 if no name in the query string', async () => {
    const response = await mockRequest.get('/person');
    expect(response.status).toEqual(500);
  });
  
});
