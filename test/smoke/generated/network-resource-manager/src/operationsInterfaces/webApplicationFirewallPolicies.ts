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
  WebApplicationFirewallPolicy,
  WebApplicationFirewallPoliciesListNextOptionalParams,
  WebApplicationFirewallPoliciesListOptionalParams,
  WebApplicationFirewallPoliciesListAllNextOptionalParams,
  WebApplicationFirewallPoliciesListAllOptionalParams,
  WebApplicationFirewallPoliciesGetOptionalParams,
  WebApplicationFirewallPoliciesGetResponse,
  WebApplicationFirewallPoliciesCreateOrUpdateOptionalParams,
  WebApplicationFirewallPoliciesCreateOrUpdateResponse,
  WebApplicationFirewallPoliciesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a WebApplicationFirewallPolicies. */
export interface WebApplicationFirewallPolicies {
  /**
   * Lists all of the protection policies within a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: WebApplicationFirewallPoliciesListOptionalParams
  ): PagedAsyncIterableIterator<WebApplicationFirewallPolicy>;
  /**
   * Gets all the WAF policies in a subscription.
   * @param options The options parameters.
   */
  listAll(
    options?: WebApplicationFirewallPoliciesListAllOptionalParams
  ): PagedAsyncIterableIterator<WebApplicationFirewallPolicy>;
  /**
   * Retrieve protection policy with specified name within a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param policyName The name of the policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    policyName: string,
    options?: WebApplicationFirewallPoliciesGetOptionalParams
  ): Promise<WebApplicationFirewallPoliciesGetResponse>;
  /**
   * Creates or update policy with specified rule set name within a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param policyName The name of the policy.
   * @param parameters Policy to be created.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    policyName: string,
    parameters: WebApplicationFirewallPolicy,
    options?: WebApplicationFirewallPoliciesCreateOrUpdateOptionalParams
  ): Promise<WebApplicationFirewallPoliciesCreateOrUpdateResponse>;
  /**
   * Deletes Policy.
   * @param resourceGroupName The name of the resource group.
   * @param policyName The name of the policy.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    policyName: string,
    options?: WebApplicationFirewallPoliciesDeleteOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Deletes Policy.
   * @param resourceGroupName The name of the resource group.
   * @param policyName The name of the policy.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    policyName: string,
    options?: WebApplicationFirewallPoliciesDeleteOptionalParams
  ): Promise<coreHttp.RestResponse>;
}
