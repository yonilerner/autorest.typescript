/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PacketCaptures } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  PacketCaptureResult,
  PacketCapturesListOptionalParams,
  PacketCapture,
  PacketCapturesCreateOptionalParams,
  PacketCapturesCreateResponse,
  PacketCapturesGetOptionalParams,
  PacketCapturesGetResponse,
  PacketCapturesDeleteOptionalParams,
  PacketCapturesStopOptionalParams,
  PacketCapturesGetStatusOptionalParams,
  PacketCapturesGetStatusResponse,
  PacketCapturesListResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a PacketCaptures. */
export class PacketCapturesImpl implements PacketCaptures {
  private readonly client: NetworkManagementClientContext;

  /**
   * Initialize a new instance of the class PacketCaptures class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all packet capture sessions within the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the Network Watcher resource.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    networkWatcherName: string,
    options?: PacketCapturesListOptionalParams
  ): PagedAsyncIterableIterator<PacketCaptureResult> {
    const iter = this.listPagingAll(
      resourceGroupName,
      networkWatcherName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(
          resourceGroupName,
          networkWatcherName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    networkWatcherName: string,
    options?: PacketCapturesListOptionalParams
  ): AsyncIterableIterator<PacketCaptureResult[]> {
    let result = await this._list(
      resourceGroupName,
      networkWatcherName,
      options
    );
    yield result.value || [];
  }

  private async *listPagingAll(
    resourceGroupName: string,
    networkWatcherName: string,
    options?: PacketCapturesListOptionalParams
  ): AsyncIterableIterator<PacketCaptureResult> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      networkWatcherName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Create and start a packet capture on the specified VM.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param packetCaptureName The name of the packet capture session.
   * @param parameters Parameters that define the create packet capture operation.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    networkWatcherName: string,
    packetCaptureName: string,
    parameters: PacketCapture,
    options?: PacketCapturesCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<PacketCapturesCreateResponse>,
      PacketCapturesCreateResponse
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      packetCaptureName,
      parameters,
      options: this.getOperationOptions(options, "azure-async-operation")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        PacketCapturesCreateResponse
      >;
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      operationArguments,
      createOperationSpec,
      sendOperation,
      "azure-async-operation"
    );
  }

  /**
   * Create and start a packet capture on the specified VM.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param packetCaptureName The name of the packet capture session.
   * @param parameters Parameters that define the create packet capture operation.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    networkWatcherName: string,
    packetCaptureName: string,
    parameters: PacketCapture,
    options?: PacketCapturesCreateOptionalParams
  ): Promise<PacketCapturesCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      networkWatcherName,
      packetCaptureName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a packet capture session by name.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param packetCaptureName The name of the packet capture session.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkWatcherName: string,
    packetCaptureName: string,
    options?: PacketCapturesGetOptionalParams
  ): Promise<PacketCapturesGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      packetCaptureName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<PacketCapturesGetResponse>;
  }

  /**
   * Deletes the specified packet capture session.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param packetCaptureName The name of the packet capture session.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    networkWatcherName: string,
    packetCaptureName: string,
    options?: PacketCapturesDeleteOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      packetCaptureName,
      options: this.getOperationOptions(options, "location")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      operationArguments,
      deleteOperationSpec,
      sendOperation,
      "location"
    );
  }

  /**
   * Deletes the specified packet capture session.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param packetCaptureName The name of the packet capture session.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    networkWatcherName: string,
    packetCaptureName: string,
    options?: PacketCapturesDeleteOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      networkWatcherName,
      packetCaptureName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Stops a specified packet capture session.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param packetCaptureName The name of the packet capture session.
   * @param options The options parameters.
   */
  async beginStop(
    resourceGroupName: string,
    networkWatcherName: string,
    packetCaptureName: string,
    options?: PacketCapturesStopOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      packetCaptureName,
      options: this.getOperationOptions(options, "location")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      operationArguments,
      stopOperationSpec,
      sendOperation,
      "location"
    );
  }

  /**
   * Stops a specified packet capture session.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param packetCaptureName The name of the packet capture session.
   * @param options The options parameters.
   */
  async beginStopAndWait(
    resourceGroupName: string,
    networkWatcherName: string,
    packetCaptureName: string,
    options?: PacketCapturesStopOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const poller = await this.beginStop(
      resourceGroupName,
      networkWatcherName,
      packetCaptureName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Query the status of a running packet capture session.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the Network Watcher resource.
   * @param packetCaptureName The name given to the packet capture session.
   * @param options The options parameters.
   */
  async beginGetStatus(
    resourceGroupName: string,
    networkWatcherName: string,
    packetCaptureName: string,
    options?: PacketCapturesGetStatusOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<PacketCapturesGetStatusResponse>,
      PacketCapturesGetStatusResponse
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      packetCaptureName,
      options: this.getOperationOptions(options, "location")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        PacketCapturesGetStatusResponse
      >;
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      operationArguments,
      getStatusOperationSpec,
      sendOperation,
      "location"
    );
  }

  /**
   * Query the status of a running packet capture session.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the Network Watcher resource.
   * @param packetCaptureName The name given to the packet capture session.
   * @param options The options parameters.
   */
  async beginGetStatusAndWait(
    resourceGroupName: string,
    networkWatcherName: string,
    packetCaptureName: string,
    options?: PacketCapturesGetStatusOptionalParams
  ): Promise<PacketCapturesGetStatusResponse> {
    const poller = await this.beginGetStatus(
      resourceGroupName,
      networkWatcherName,
      packetCaptureName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists all packet capture sessions within the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the Network Watcher resource.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    networkWatcherName: string,
    options?: PacketCapturesListOptionalParams
  ): Promise<PacketCapturesListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<PacketCapturesListResponse>;
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

const createOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/packetCaptures/{packetCaptureName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PacketCaptureResult
    },
    201: {
      bodyMapper: Mappers.PacketCaptureResult
    },
    202: {
      bodyMapper: Mappers.PacketCaptureResult
    },
    204: {
      bodyMapper: Mappers.PacketCaptureResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters34,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName,
    Parameters.packetCaptureName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/packetCaptures/{packetCaptureName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PacketCaptureResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName,
    Parameters.packetCaptureName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/packetCaptures/{packetCaptureName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName,
    Parameters.packetCaptureName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const stopOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/packetCaptures/{packetCaptureName}/stop",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName,
    Parameters.packetCaptureName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getStatusOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/packetCaptures/{packetCaptureName}/queryStatus",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PacketCaptureQueryStatusResult
    },
    201: {
      bodyMapper: Mappers.PacketCaptureQueryStatusResult
    },
    202: {
      bodyMapper: Mappers.PacketCaptureQueryStatusResult
    },
    204: {
      bodyMapper: Mappers.PacketCaptureQueryStatusResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName,
    Parameters.packetCaptureName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/packetCaptures",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PacketCaptureListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
