/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import {
  OperationsImpl,
  DeploymentsImpl,
  ProvidersImpl,
  ResourcesImpl,
  ResourceGroupsImpl,
  TagsImpl,
  DeploymentOperationsImpl
} from "./operations";
import {
  Operations,
  Deployments,
  Providers,
  Resources,
  ResourceGroups,
  Tags,
  DeploymentOperations
} from "./operationsInterfaces";
import { ResourceManagementClientOptionalParams } from "./models";

export class ResourceManagementClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the ResourceManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: ResourceManagementClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: ResourceManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-package-resources-2019-08/1.0.0-beta.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "https://management.azure.com"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2019-08-01";
    this.operations = new OperationsImpl(this);
    this.deployments = new DeploymentsImpl(this);
    this.providers = new ProvidersImpl(this);
    this.resources = new ResourcesImpl(this);
    this.resourceGroups = new ResourceGroupsImpl(this);
    this.tags = new TagsImpl(this);
    this.deploymentOperations = new DeploymentOperationsImpl(this);
  }

  operations: Operations;
  deployments: Deployments;
  providers: Providers;
  resources: Resources;
  resourceGroups: ResourceGroups;
  tags: Tags;
  deploymentOperations: DeploymentOperations;
}
