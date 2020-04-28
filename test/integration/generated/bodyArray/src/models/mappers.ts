/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const ErrorModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      status: { type: { name: "Number" }, serializedName: "status" },
      message: { type: { name: "String" }, serializedName: "message" }
    }
  }
};

export const Product: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Product",
    modelProperties: {
      integer: { type: { name: "Number" }, serializedName: "integer" },
      string: { type: { name: "String" }, serializedName: "string" }
    }
  }
};
