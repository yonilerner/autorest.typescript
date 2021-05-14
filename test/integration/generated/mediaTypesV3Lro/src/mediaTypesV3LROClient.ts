/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { LROPoller, shouldDeserializeLRO } from "./lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import * as Parameters from "./models/parameters";
import { MediaTypesV3LROClientContext } from "./mediaTypesV3LROClientContext";
import {
  MediaTypesV3LROClientOptionalParams,
  MediaTypesV3LROClientSendOnDefault$binaryOptionalParams,
  MediaTypesV3LROClientSendOnDefault$textOptionalParams,
  MediaTypesV3LROClientSend$binaryOptionalParams,
  MediaTypesV3LROClientSend$textOptionalParams,
  MediaTypesV3LROClientSendResponse
} from "./models";

export class MediaTypesV3LROClient extends MediaTypesV3LROClientContext {
  /**
   * Initializes a new instance of the MediaTypesV3LROClient class.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor($host: string, options?: MediaTypesV3LROClientOptionalParams) {
    super($host, options);
  }

  private getOperationOptions<TOptions extends coreHttp.OperationOptions>(
    options: TOptions | undefined,
    finalStateVia?: string
  ): coreHttp.RequestOptionsBase {
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia)
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
  }

  /**
   * Send payload to Foo service.
   * @param contentType Upload file type
   * @param data
   * @param options The options parameters.
   */
  beginSendOnDefault(
    contentType: "application/octet-stream",
    data: coreHttp.HttpRequestBody,
    options?: MediaTypesV3LROClientSendOnDefault$binaryOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Send payload to Foo service.
   * @param contentType Upload file type
   * @param data simple string
   * @param options The options parameters.
   */
  beginSendOnDefault(
    contentType: "text/plain",
    data: string,
    options?: MediaTypesV3LROClientSendOnDefault$textOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Send payload to Foo service.
   * @param args Includes all the parameters for this operation.
   */
  async beginSendOnDefault(
    ...args:
      | [
          "application/octet-stream",
          coreHttp.HttpRequestBody,
          MediaTypesV3LROClientSendOnDefault$binaryOptionalParams?
        ]
      | [
          "text/plain",
          string,
          MediaTypesV3LROClientSendOnDefault$textOptionalParams?
        ]
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  > {
    let operationSpec: coreHttp.OperationSpec;
    let operationArguments: coreHttp.OperationArguments;
    let options;
    if (args[0] === "application/octet-stream") {
      operationSpec = sendOnDefault$binaryOperationSpec;
      operationArguments = {
        contentType: args[0],
        data: args[1],
        options: args[2]
      };
      options = args[2];
    } else if (args[0] === "text/plain") {
      operationSpec = sendOnDefault$textOperationSpec;
      operationArguments = {
        contentType: args[0],
        data: args[1],
        options: args[2]
      };
      options = args[2];
    } else {
      throw new TypeError(
        `"contentType" must be a valid value but instead was "${args[0]}".`
      );
    }
    operationArguments.options = this.getOperationOptions(options, "undefined");
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      operationArguments,
      operationSpec,
      sendOperation
    );
  }

  /**
   * Send payload to Foo service.
   * @param args Includes all the parameters for this operation.
   */
  async beginSendOnDefaultAndWait(
    ...args:
      | [
          "application/octet-stream",
          coreHttp.HttpRequestBody,
          MediaTypesV3LROClientSendOnDefault$binaryOptionalParams?
        ]
      | [
          "text/plain",
          string,
          MediaTypesV3LROClientSendOnDefault$textOptionalParams?
        ]
  ): Promise<coreHttp.RestResponse> {
    if (args[0] === "application/octet-stream") {
      const poller = await this.beginSendOnDefault(...args);
      return poller.pollUntilDone();
    } else if (args[0] === "text/plain") {
      const poller = await this.beginSendOnDefault(...args);
      return poller.pollUntilDone();
    }
    throw new Error("Impossible case");
  }

  /**
   * Send payload to targetted thing in Foo service.
   * @param thing Target thing name
   * @param contentType Upload file type
   * @param data
   * @param options The options parameters.
   */
  send(
    thing: string,
    contentType: "application/octet-stream",
    data: coreHttp.HttpRequestBody,
    options?: MediaTypesV3LROClientSend$binaryOptionalParams
  ): Promise<MediaTypesV3LROClientSendResponse>;
  /**
   * Send payload to targetted thing in Foo service.
   * @param thing Target thing name
   * @param contentType Upload file type
   * @param data simple string
   * @param options The options parameters.
   */
  send(
    thing: string,
    contentType: "text/plain",
    data: string,
    options?: MediaTypesV3LROClientSend$textOptionalParams
  ): Promise<MediaTypesV3LROClientSendResponse>;
  /**
   * Send payload to targetted thing in Foo service.
   * @param args Includes all the parameters for this operation.
   */
  send(
    ...args:
      | [
          string,
          "application/octet-stream",
          coreHttp.HttpRequestBody,
          MediaTypesV3LROClientSend$binaryOptionalParams?
        ]
      | [
          string,
          "text/plain",
          string,
          MediaTypesV3LROClientSend$textOptionalParams?
        ]
  ): Promise<MediaTypesV3LROClientSendResponse> {
    let operationSpec: coreHttp.OperationSpec;
    let operationArguments: coreHttp.OperationArguments;
    let options;
    if (args[1] === "application/octet-stream") {
      operationSpec = send$binaryOperationSpec;
      operationArguments = {
        thing: args[0],
        contentType: args[1],
        data: args[2],
        options: args[3]
      };
      options = args[3];
    } else if (args[1] === "text/plain") {
      operationSpec = send$textOperationSpec;
      operationArguments = {
        thing: args[0],
        contentType: args[1],
        data: args[2],
        options: args[3]
      };
      options = args[3];
    } else {
      throw new TypeError(
        `"contentType" must be a valid value but instead was "${args[1]}".`
      );
    }
    operationArguments.options = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      operationArguments,
      operationSpec
    ) as Promise<MediaTypesV3LROClientSendResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer({}, /* isXml */ false);

const sendOnDefault$binaryOperationSpec: coreHttp.OperationSpec = {
  path: "/foo/api/v1",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  requestBody: Parameters.data,
  queryParameters: [Parameters.excluded],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "binary",
  serializer
};
const sendOnDefault$textOperationSpec: coreHttp.OperationSpec = {
  path: "/foo/api/v1",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  requestBody: Parameters.data1,
  queryParameters: [Parameters.excluded],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  mediaType: "text",
  serializer
};
const send$binaryOperationSpec: coreHttp.OperationSpec = {
  path: "/foo/api/v1/things/{thing}",
  httpMethod: "POST",
  responses: {
    204: {},
    400: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  requestBody: Parameters.data,
  queryParameters: [Parameters.excluded],
  urlParameters: [Parameters.$host, Parameters.thing],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "binary",
  serializer
};
const send$textOperationSpec: coreHttp.OperationSpec = {
  path: "/foo/api/v1/things/{thing}",
  httpMethod: "POST",
  responses: {
    204: {},
    400: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  requestBody: Parameters.data1,
  queryParameters: [Parameters.excluded],
  urlParameters: [Parameters.$host, Parameters.thing],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  mediaType: "text",
  serializer
};
