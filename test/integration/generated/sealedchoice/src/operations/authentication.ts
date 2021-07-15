/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Authentication } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SealedChoiceClientContext } from "../sealedChoiceClientContext";
import {
  TokenGrantType,
  AuthenticationExchangeAcrRefreshTokenForAcrAccessTokenOptionalParams
} from "../models";

/** Class representing a Authentication. */
export class AuthenticationImpl implements Authentication {
  private readonly client: SealedChoiceClientContext;

  /**
   * Initialize a new instance of the class Authentication class.
   * @param client Reference to the service client
   */
  constructor(client: SealedChoiceClientContext) {
    this.client = client;
  }

  /**
   * Exchange ACR Refresh token for an ACR Access Token
   * @param grantType Grant type is expected to be refresh_token
   * @param options The options parameters.
   */
  exchangeAcrRefreshTokenForAcrAccessToken(
    grantType: TokenGrantType,
    options?: AuthenticationExchangeAcrRefreshTokenForAcrAccessTokenOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { grantType, options },
      exchangeAcrRefreshTokenForAcrAccessTokenOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const exchangeAcrRefreshTokenForAcrAccessTokenOperationSpec: coreClient.OperationSpec = {
  path: "/oauth2/token",
  httpMethod: "POST",
  responses: { 200: {}, default: {} },
  formDataParameters: [Parameters.grantType],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  serializer
};
