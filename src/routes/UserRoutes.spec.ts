import { Request, Response } from 'express';
import { addUser, getBalance, getUser } from '../controller/UserControllers';

describe('Test User test cases', () => {
  let mockRequest: any;
  let mockResponse: any;
  let responseObject: any;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      statusCode: 0,
      send: jest.fn().mockImplementation((result) => {
        responseObject = result;
      })
    };
  });

  test('200 - users/getUser', () => {
    const exceptedStatusCode = 200;
    const exceptedResponse = {
      message: 'Hello World'
    };

    getUser(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.statusCode).toBe(exceptedStatusCode);
    expect(responseObject).toEqual(exceptedResponse);
  });
  test('201 - users/addUser', () => {
    const exceptedStatusCode = 201;
    const exceptedResponse = {
      name: 'MK',
      id: 'MID'
    };
    mockRequest = {
      method: 'Post',
      body: { name: 'MK', id: 'MID' }
    };
    addUser(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.statusCode).toBe(exceptedStatusCode);
    expect(responseObject).toEqual(exceptedResponse);
  });

  test('200 - users/getBalance', () => {
    const exceptedStatusCode = 200;
    const exceptedResponse = {
      balance: 0
    };
    mockRequest = {
      method: 'get',
      params: { id: 'MID' }
    };
    getBalance(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.statusCode).toBe(exceptedStatusCode);
    expect(responseObject).toEqual(exceptedResponse);
  });
});
