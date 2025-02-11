/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BarApi } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Parameters from "../models/parameters";
import { MediaTypesV3Client } from "../mediaTypesV3Client";
import {
  BarApiPostSendOnDefaultOptionalParams,
  BarApiPostSendOnDefaultResponse
} from "../models";

/** Class containing BarApi operations. */
export class BarApiImpl implements BarApi {
  private readonly client: MediaTypesV3Client;

  /**
   * Initialize a new instance of the class BarApi class.
   * @param client Reference to the service client
   */
  constructor(client: MediaTypesV3Client) {
    this.client = client;
  }

  /**
   * Send payload to Foo service.
   * @param data simple string
   * @param options The options parameters.
   */
  postSendOnDefault(
    data: string,
    options?: BarApiPostSendOnDefaultOptionalParams
  ): Promise<BarApiPostSendOnDefaultResponse> {
    return this.client.sendOperationRequest(
      { data, options },
      postSendOnDefaultOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer({}, /* isXml */ false);

const postSendOnDefaultOperationSpec: coreClient.OperationSpec = {
  path: "/bar/api/v1",
  httpMethod: "POST",
  responses: {
    202: {},
    400: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  requestBody: Parameters.data,
  queryParameters: [Parameters.excluded],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "text",
  serializer
};
