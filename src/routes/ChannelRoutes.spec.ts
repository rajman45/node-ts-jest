import { Request, Response } from 'express';
import { addChannel, getChannel } from '../controller/ChannelControllers';

describe('Channel test cases', () => {
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

  test('200 - Channel/getChannel', () => {
    const exceptedStatusCode = 200;
    const exceptedResponse: any[] = [];

    getChannel(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.statusCode).toBe(exceptedStatusCode);
    expect(responseObject).toEqual(exceptedResponse);
  });
  test('201 - Channel/addChannel', () => {
    const exceptedStatusCode = 201;
    const exceptedResponse = {
      name: 'MK',
      id: 'MID',
      price: 100
    };
    mockRequest = {
      method: 'Post',
      body: {
        name: 'MK',
        id: 'MID',
        price: 100
      }
    };
    addChannel(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.statusCode).toBe(exceptedStatusCode);
    expect(responseObject).toEqual(exceptedResponse);
  });
});
