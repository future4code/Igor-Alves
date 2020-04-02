import {
  MiddlewareRequest,
  getMiddlewareRequest
} from "./ExpressMiddlewareRequest";
import { MiddlewareResponseData } from "./ExpressMiddlewareResponse";

export class LambdaMiddlewareMapper {
  private static isBodyJSON(body: any): boolean {
    try {
      JSON.parse(body);
    } catch (err) {
      console.log("Error in JSON.parse(body): ", err.message);
      return false;
    }
    return true;
  }
  static toMiddlewareRequest(event: LambdaEvent): MiddlewareRequest {
    let body = undefined;
    let files = undefined;

    if (this.isBodyJSON(event.body)) {
      body = JSON.parse(event.body);
    } else {
      files = event.body;
    }

    return getMiddlewareRequest({
      url: event.url,
      path: event.path,
      headers: event.headers,
      params: event.pathParams,
      query: event.queryStringParameters,
      method: event.httpMethod,
      body: body,
      files
    });
  }

  static toLambdaResponse(data: MiddlewareResponseData): LambdaResponse {
    return {
      headers: data.headers,
      body: JSON.stringify(data.body),
      statusCode: data.statusCode
    };
  }
}

export interface LambdaEvent {
  url: string;
  path: string;
  headers: string;
  pathParams: string;
  queryStringParameters: string;
  httpMethod: string;
  body: string;
}

export interface LambdaResponse {
  headers: any;
  body: string;
  statusCode: number;
}
