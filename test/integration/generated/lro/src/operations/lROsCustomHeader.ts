/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { LROsCustomHeader } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { LROClientContext } from "../lROClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  LROsCustomHeaderPutAsyncRetrySucceededOptionalParams,
  LROsCustomHeaderPutAsyncRetrySucceededResponse,
  LROsCustomHeaderPut201CreatingSucceeded200OptionalParams,
  LROsCustomHeaderPut201CreatingSucceeded200Response,
  LROsCustomHeaderPost202Retry200OptionalParams,
  LROsCustomHeaderPost202Retry200Response,
  LROsCustomHeaderPostAsyncRetrySucceededOptionalParams,
  LROsCustomHeaderPostAsyncRetrySucceededResponse
} from "../models";

/** Class representing a LROsCustomHeader. */
export class LROsCustomHeaderImpl implements LROsCustomHeader {
  private readonly client: LROClientContext;

  /**
   * Initialize a new instance of the class LROsCustomHeader class.
   * @param client Reference to the service client
   */
  constructor(client: LROClientContext) {
    this.client = client;
  }

  /**
   * x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all
   * requests. Long running put request, service returns a 200 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation
   * header for operation status
   * @param options The options parameters.
   */
  async beginPutAsyncRetrySucceeded(
    options?: LROsCustomHeaderPutAsyncRetrySucceededOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LROsCustomHeaderPutAsyncRetrySucceededResponse>,
      LROsCustomHeaderPutAsyncRetrySucceededResponse
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        LROsCustomHeaderPutAsyncRetrySucceededResponse
      >;
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      operationArguments,
      putAsyncRetrySucceededOperationSpec,
      sendOperation
    );
  }

  /**
   * x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all
   * requests. Long running put request, service returns a 200 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation
   * header for operation status
   * @param options The options parameters.
   */
  async beginPutAsyncRetrySucceededAndWait(
    options?: LROsCustomHeaderPutAsyncRetrySucceededOptionalParams
  ): Promise<LROsCustomHeaderPutAsyncRetrySucceededResponse> {
    const poller = await this.beginPutAsyncRetrySucceeded(options);
    return poller.pollUntilDone();
  }

  /**
   * x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all
   * requests. Long running put request, service returns a 201 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a
   * ‘200’ with ProvisioningState=’Succeeded’
   * @param options The options parameters.
   */
  async beginPut201CreatingSucceeded200(
    options?: LROsCustomHeaderPut201CreatingSucceeded200OptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LROsCustomHeaderPut201CreatingSucceeded200Response>,
      LROsCustomHeaderPut201CreatingSucceeded200Response
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        LROsCustomHeaderPut201CreatingSucceeded200Response
      >;
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      operationArguments,
      put201CreatingSucceeded200OperationSpec,
      sendOperation
    );
  }

  /**
   * x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all
   * requests. Long running put request, service returns a 201 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a
   * ‘200’ with ProvisioningState=’Succeeded’
   * @param options The options parameters.
   */
  async beginPut201CreatingSucceeded200AndWait(
    options?: LROsCustomHeaderPut201CreatingSucceeded200OptionalParams
  ): Promise<LROsCustomHeaderPut201CreatingSucceeded200Response> {
    const poller = await this.beginPut201CreatingSucceeded200(options);
    return poller.pollUntilDone();
  }

  /**
   * x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all
   * requests. Long running post request, service returns a 202 to the initial request, with 'Location'
   * and 'Retry-After' headers, Polls return a 200 with a response body after success
   * @param options The options parameters.
   */
  async beginPost202Retry200(
    options?: LROsCustomHeaderPost202Retry200OptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LROsCustomHeaderPost202Retry200Response>,
      LROsCustomHeaderPost202Retry200Response
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        LROsCustomHeaderPost202Retry200Response
      >;
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      operationArguments,
      post202Retry200OperationSpec,
      sendOperation
    );
  }

  /**
   * x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all
   * requests. Long running post request, service returns a 202 to the initial request, with 'Location'
   * and 'Retry-After' headers, Polls return a 200 with a response body after success
   * @param options The options parameters.
   */
  async beginPost202Retry200AndWait(
    options?: LROsCustomHeaderPost202Retry200OptionalParams
  ): Promise<LROsCustomHeaderPost202Retry200Response> {
    const poller = await this.beginPost202Retry200(options);
    return poller.pollUntilDone();
  }

  /**
   * x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all
   * requests. Long running post request, service returns a 202 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation
   * header for operation status
   * @param options The options parameters.
   */
  async beginPostAsyncRetrySucceeded(
    options?: LROsCustomHeaderPostAsyncRetrySucceededOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LROsCustomHeaderPostAsyncRetrySucceededResponse>,
      LROsCustomHeaderPostAsyncRetrySucceededResponse
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        LROsCustomHeaderPostAsyncRetrySucceededResponse
      >;
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      operationArguments,
      postAsyncRetrySucceededOperationSpec,
      sendOperation
    );
  }

  /**
   * x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all
   * requests. Long running post request, service returns a 202 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation
   * header for operation status
   * @param options The options parameters.
   */
  async beginPostAsyncRetrySucceededAndWait(
    options?: LROsCustomHeaderPostAsyncRetrySucceededOptionalParams
  ): Promise<LROsCustomHeaderPostAsyncRetrySucceededResponse> {
    const poller = await this.beginPostAsyncRetrySucceeded(options);
    return poller.pollUntilDone();
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
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const putAsyncRetrySucceededOperationSpec: coreHttp.OperationSpec = {
  path: "/lro/customheader/putasync/retry/succeeded",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Product,
      headersMapper: Mappers.LROsCustomHeaderPutAsyncRetrySucceededHeaders
    },
    201: {
      bodyMapper: Mappers.Product,
      headersMapper: Mappers.LROsCustomHeaderPutAsyncRetrySucceededHeaders
    },
    202: {
      bodyMapper: Mappers.Product,
      headersMapper: Mappers.LROsCustomHeaderPutAsyncRetrySucceededHeaders
    },
    204: {
      bodyMapper: Mappers.Product,
      headersMapper: Mappers.LROsCustomHeaderPutAsyncRetrySucceededHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.product,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const put201CreatingSucceeded200OperationSpec: coreHttp.OperationSpec = {
  path: "/lro/customheader/put/201/creating/succeeded/200",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Product
    },
    201: {
      bodyMapper: Mappers.Product
    },
    202: {
      bodyMapper: Mappers.Product
    },
    204: {
      bodyMapper: Mappers.Product
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.product,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const post202Retry200OperationSpec: coreHttp.OperationSpec = {
  path: "/lro/customheader/post/202/retry/200",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.LROsCustomHeaderPost202Retry200Headers
    },
    201: {
      headersMapper: Mappers.LROsCustomHeaderPost202Retry200Headers
    },
    202: {
      headersMapper: Mappers.LROsCustomHeaderPost202Retry200Headers
    },
    204: {
      headersMapper: Mappers.LROsCustomHeaderPost202Retry200Headers
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.product,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const postAsyncRetrySucceededOperationSpec: coreHttp.OperationSpec = {
  path: "/lro/customheader/postasync/retry/succeeded",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.LROsCustomHeaderPostAsyncRetrySucceededHeaders
    },
    201: {
      headersMapper: Mappers.LROsCustomHeaderPostAsyncRetrySucceededHeaders
    },
    202: {
      headersMapper: Mappers.LROsCustomHeaderPostAsyncRetrySucceededHeaders
    },
    204: {
      headersMapper: Mappers.LROsCustomHeaderPostAsyncRetrySucceededHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.product,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
