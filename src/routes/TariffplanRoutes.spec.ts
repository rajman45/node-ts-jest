import { Request, Response } from 'express';
import {
  addTariffPlan,
  addChannel,
  getTariffPlan
} from '../controller/TariffplanControllers';

describe('Tariffplan test cases', () => {
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

  test('200 - tariffplan/getTariffPlan', () => {
    const exceptedStatusCode = 200;
    const exceptedResponse: any[] = [];

    getTariffPlan(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.statusCode).toBe(exceptedStatusCode);
    expect(responseObject).toEqual(exceptedResponse);
  });
  test('201 - tariffplan/addTariffPlan', () => {
    const exceptedStatusCode = 201;
    const exceptedResponse = {
      name: 'Plan',
      id: 'TID',
      price: 100
    };
    mockRequest = {
      method: 'Post',
      body: {
        name: 'Plan',
        id: 'TID',
        price: 100
      }
    };
    addTariffPlan(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.statusCode).toBe(exceptedStatusCode);
    expect(responseObject).toEqual(exceptedResponse);
  });

  test('200 - tariffplan/addChannel', () => {
    const exceptedStatusCode = 200;
    const exceptedResponse = {
      channelId: 'CID',
      tariffPlanId: 'TID'
    };
    mockRequest = {
      method: 'get',
      params: { id: 'TID' },
      body: { channelId: 'CID' }
    };
    addChannel(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.statusCode).toBe(exceptedStatusCode);
    expect(responseObject).toEqual(exceptedResponse);
  });
});
