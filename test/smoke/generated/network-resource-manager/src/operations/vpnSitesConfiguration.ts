/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { VpnSitesConfiguration } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  GetVpnSitesConfigurationRequest,
  VpnSitesConfigurationDownloadOptionalParams
} from "../models";

/** Class representing a VpnSitesConfiguration. */
export class VpnSitesConfigurationImpl implements VpnSitesConfiguration {
  private readonly client: NetworkManagementClientContext;

  /**
   * Initialize a new instance of the class VpnSitesConfiguration class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Gives the sas-url to download the configurations for vpn-sites in a resource group.
   * @param resourceGroupName The resource group name.
   * @param virtualWANName The name of the VirtualWAN for which configuration of all vpn-sites is needed.
   * @param request Parameters supplied to download vpn-sites configuration.
   * @param options The options parameters.
   */
  async beginDownload(
    resourceGroupName: string,
    virtualWANName: string,
    request: GetVpnSitesConfigurationRequest,
    options?: VpnSitesConfigurationDownloadOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      virtualWANName,
      request,
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
      downloadOperationSpec,
      sendOperation,
      "location"
    );
  }

  /**
   * Gives the sas-url to download the configurations for vpn-sites in a resource group.
   * @param resourceGroupName The resource group name.
   * @param virtualWANName The name of the VirtualWAN for which configuration of all vpn-sites is needed.
   * @param request Parameters supplied to download vpn-sites configuration.
   * @param options The options parameters.
   */
  async beginDownloadAndWait(
    resourceGroupName: string,
    virtualWANName: string,
    request: GetVpnSitesConfigurationRequest,
    options?: VpnSitesConfigurationDownloadOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const poller = await this.beginDownload(
      resourceGroupName,
      virtualWANName,
      request,
      options
    );
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

const downloadOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualWans/{virtualWANName}/vpnConfiguration",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.request1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.virtualWANName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
