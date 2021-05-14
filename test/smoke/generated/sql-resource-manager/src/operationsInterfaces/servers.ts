/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  Server,
  ServersListByResourceGroupNextOptionalParams,
  ServersListByResourceGroupOptionalParams,
  ServersListNextOptionalParams,
  ServersListOptionalParams,
  ServersGetOptionalParams,
  ServersGetResponse,
  ServersCreateOrUpdateOptionalParams,
  ServersCreateOrUpdateResponse,
  ServersDeleteOptionalParams,
  ServerUpdate,
  ServersUpdateOptionalParams,
  ServersUpdateResponse,
  CheckNameAvailabilityRequest,
  ServersCheckNameAvailabilityOptionalParams,
  ServersCheckNameAvailabilityResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Servers. */
export interface Servers {
  /**
   * Gets a list of servers in a resource groups.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ServersListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Server>;
  /**
   * Gets a list of all servers in the subscription.
   * @param options The options parameters.
   */
  list(options?: ServersListOptionalParams): PagedAsyncIterableIterator<Server>;
  /**
   * Gets a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    options?: ServersGetOptionalParams
  ): Promise<ServersGetResponse>;
  /**
   * Creates or updates a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters The requested server resource state.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    parameters: Server,
    options?: ServersCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ServersCreateOrUpdateResponse>,
      ServersCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters The requested server resource state.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    parameters: Server,
    options?: ServersCreateOrUpdateOptionalParams
  ): Promise<ServersCreateOrUpdateResponse>;
  /**
   * Deletes a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serverName: string,
    options?: ServersDeleteOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Deletes a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serverName: string,
    options?: ServersDeleteOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Updates a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters The requested server resource state.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    serverName: string,
    parameters: ServerUpdate,
    options?: ServersUpdateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<ServersUpdateResponse>, ServersUpdateResponse>
  >;
  /**
   * Updates a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters The requested server resource state.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    parameters: ServerUpdate,
    options?: ServersUpdateOptionalParams
  ): Promise<ServersUpdateResponse>;
  /**
   * Determines whether a resource can be created with the specified name.
   * @param parameters The name availability request parameters.
   * @param options The options parameters.
   */
  checkNameAvailability(
    parameters: CheckNameAvailabilityRequest,
    options?: ServersCheckNameAvailabilityOptionalParams
  ): Promise<ServersCheckNameAvailabilityResponse>;
}
