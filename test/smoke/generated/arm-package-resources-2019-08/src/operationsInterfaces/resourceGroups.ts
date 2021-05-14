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
  ResourceGroup,
  ResourceGroupsListNextOptionalParams,
  ResourceGroupsListOptionalParams,
  ResourceGroupsCheckExistenceOptionalParams,
  ResourceGroupsCreateOrUpdateOptionalParams,
  ResourceGroupsCreateOrUpdateResponse,
  ResourceGroupsDeleteOptionalParams,
  ResourceGroupsGetOptionalParams,
  ResourceGroupsGetResponse,
  ResourceGroupPatchable,
  ResourceGroupsUpdateOptionalParams,
  ResourceGroupsUpdateResponse,
  ExportTemplateRequest,
  ResourceGroupsExportTemplateOptionalParams,
  ResourceGroupsExportTemplateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ResourceGroups. */
export interface ResourceGroups {
  /**
   * Gets all the resource groups for a subscription.
   * @param options The options parameters.
   */
  list(
    options?: ResourceGroupsListOptionalParams
  ): PagedAsyncIterableIterator<ResourceGroup>;
  /**
   * Checks whether a resource group exists.
   * @param resourceGroupName The name of the resource group to check. The name is case insensitive.
   * @param options The options parameters.
   */
  checkExistence(
    resourceGroupName: string,
    options?: ResourceGroupsCheckExistenceOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Creates or updates a resource group.
   * @param resourceGroupName The name of the resource group to create or update. Can include
   *                          alphanumeric, underscore, parentheses, hyphen, period (except at end), and Unicode characters that
   *                          match the allowed characters.
   * @param parameters Parameters supplied to the create or update a resource group.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    parameters: ResourceGroup,
    options?: ResourceGroupsCreateOrUpdateOptionalParams
  ): Promise<ResourceGroupsCreateOrUpdateResponse>;
  /**
   * When you delete a resource group, all of its resources are also deleted. Deleting a resource group
   * deletes all of its template deployments and currently stored operations.
   * @param resourceGroupName The name of the resource group to delete. The name is case insensitive.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    options?: ResourceGroupsDeleteOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * When you delete a resource group, all of its resources are also deleted. Deleting a resource group
   * deletes all of its template deployments and currently stored operations.
   * @param resourceGroupName The name of the resource group to delete. The name is case insensitive.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    options?: ResourceGroupsDeleteOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Gets a resource group.
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    options?: ResourceGroupsGetOptionalParams
  ): Promise<ResourceGroupsGetResponse>;
  /**
   * Resource groups can be updated through a simple PATCH operation to a group address. The format of
   * the request is the same as that for creating a resource group. If a field is unspecified, the
   * current value is retained.
   * @param resourceGroupName The name of the resource group to update. The name is case insensitive.
   * @param parameters Parameters supplied to update a resource group.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    parameters: ResourceGroupPatchable,
    options?: ResourceGroupsUpdateOptionalParams
  ): Promise<ResourceGroupsUpdateResponse>;
  /**
   * Captures the specified resource group as a template.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters Parameters for exporting the template.
   * @param options The options parameters.
   */
  beginExportTemplate(
    resourceGroupName: string,
    parameters: ExportTemplateRequest,
    options?: ResourceGroupsExportTemplateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ResourceGroupsExportTemplateResponse>,
      ResourceGroupsExportTemplateResponse
    >
  >;
  /**
   * Captures the specified resource group as a template.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters Parameters for exporting the template.
   * @param options The options parameters.
   */
  beginExportTemplateAndWait(
    resourceGroupName: string,
    parameters: ExportTemplateRequest,
    options?: ResourceGroupsExportTemplateOptionalParams
  ): Promise<ResourceGroupsExportTemplateResponse>;
}
