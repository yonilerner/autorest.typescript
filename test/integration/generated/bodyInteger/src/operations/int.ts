/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyIntegerClient } from "../bodyIntegerClient";
import {
  IntGetNullResponse,
  IntGetInvalidResponse,
  IntGetOverflowInt32Response,
  IntGetUnderflowInt32Response,
  IntGetOverflowInt64Response,
  IntGetUnderflowInt64Response,
  IntGetUnixTimeResponse,
  IntGetInvalidUnixTimeResponse,
  IntGetNullUnixTimeResponse
} from "../models";

/**
 * Class representing a Int.
 */
export class Int {
  private readonly client: BodyIntegerClient;

  /**
   * Initialize a new instance of the class Int class.
   * @param client Reference to the service client
   */
  constructor(client: BodyIntegerClient) {
    this.client = client;
  }

  /**
   * Get null Int value
   * @param options The options parameters.
   */
  getNull(options?: coreHttp.OperationOptions): Promise<IntGetNullResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getNullOperationSpec
    ) as Promise<IntGetNullResponse>;
  }

  /**
   * Get invalid Int value
   * @param options The options parameters.
   */
  getInvalid(
    options?: coreHttp.OperationOptions
  ): Promise<IntGetInvalidResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getInvalidOperationSpec
    ) as Promise<IntGetInvalidResponse>;
  }

  /**
   * Get overflow Int32 value
   * @param options The options parameters.
   */
  getOverflowInt32(
    options?: coreHttp.OperationOptions
  ): Promise<IntGetOverflowInt32Response> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getOverflowInt32OperationSpec
    ) as Promise<IntGetOverflowInt32Response>;
  }

  /**
   * Get underflow Int32 value
   * @param options The options parameters.
   */
  getUnderflowInt32(
    options?: coreHttp.OperationOptions
  ): Promise<IntGetUnderflowInt32Response> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getUnderflowInt32OperationSpec
    ) as Promise<IntGetUnderflowInt32Response>;
  }

  /**
   * Get overflow Int64 value
   * @param options The options parameters.
   */
  getOverflowInt64(
    options?: coreHttp.OperationOptions
  ): Promise<IntGetOverflowInt64Response> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getOverflowInt64OperationSpec
    ) as Promise<IntGetOverflowInt64Response>;
  }

  /**
   * Get underflow Int64 value
   * @param options The options parameters.
   */
  getUnderflowInt64(
    options?: coreHttp.OperationOptions
  ): Promise<IntGetUnderflowInt64Response> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getUnderflowInt64OperationSpec
    ) as Promise<IntGetUnderflowInt64Response>;
  }

  /**
   * Put max int32 value
   * @param intBody
   * @param options The options parameters.
   */
  putMax32(
    intBody: number,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { intBody, options: operationOptions },
      putMax32OperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Put max int64 value
   * @param intBody
   * @param options The options parameters.
   */
  putMax64(
    intBody: number,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { intBody, options: operationOptions },
      putMax64OperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Put min int32 value
   * @param intBody
   * @param options The options parameters.
   */
  putMin32(
    intBody: number,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { intBody, options: operationOptions },
      putMin32OperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Put min int64 value
   * @param intBody
   * @param options The options parameters.
   */
  putMin64(
    intBody: number,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { intBody, options: operationOptions },
      putMin64OperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get datetime encoded as Unix time value
   * @param options The options parameters.
   */
  getUnixTime(
    options?: coreHttp.OperationOptions
  ): Promise<IntGetUnixTimeResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getUnixTimeOperationSpec
    ) as Promise<IntGetUnixTimeResponse>;
  }

  /**
   * Put datetime encoded as Unix time
   * @param intBody date in seconds since 1970-01-01T00:00:00Z.
   * @param options The options parameters.
   */
  putUnixTimeDate(
    intBody: Date,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { intBody, options: operationOptions },
      putUnixTimeDateOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get invalid Unix time value
   * @param options The options parameters.
   */
  getInvalidUnixTime(
    options?: coreHttp.OperationOptions
  ): Promise<IntGetInvalidUnixTimeResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getInvalidUnixTimeOperationSpec
    ) as Promise<IntGetInvalidUnixTimeResponse>;
  }

  /**
   * Get null Unix time value
   * @param options The options parameters.
   */
  getNullUnixTime(
    options?: coreHttp.OperationOptions
  ): Promise<IntGetNullUnixTimeResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getNullUnixTimeOperationSpec
    ) as Promise<IntGetNullUnixTimeResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getNullOperationSpec: coreHttp.OperationSpec = {
  path: "/int/null",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const getInvalidOperationSpec: coreHttp.OperationSpec = {
  path: "/int/invalid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const getOverflowInt32OperationSpec: coreHttp.OperationSpec = {
  path: "/int/overflowint32",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const getUnderflowInt32OperationSpec: coreHttp.OperationSpec = {
  path: "/int/underflowint32",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const getOverflowInt64OperationSpec: coreHttp.OperationSpec = {
  path: "/int/overflowint64",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const getUnderflowInt64OperationSpec: coreHttp.OperationSpec = {
  path: "/int/underflowint64",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putMax32OperationSpec: coreHttp.OperationSpec = {
  path: "/int/max/32",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.intBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  serializer
};
const putMax64OperationSpec: coreHttp.OperationSpec = {
  path: "/int/max/64",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.intBody1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  serializer
};
const putMin32OperationSpec: coreHttp.OperationSpec = {
  path: "/int/min/32",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.intBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  serializer
};
const putMin64OperationSpec: coreHttp.OperationSpec = {
  path: "/int/min/64",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.intBody1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  serializer
};
const getUnixTimeOperationSpec: coreHttp.OperationSpec = {
  path: "/int/unixtime",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "UnixTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putUnixTimeDateOperationSpec: coreHttp.OperationSpec = {
  path: "/int/unixtime",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.intBody2,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  serializer
};
const getInvalidUnixTimeOperationSpec: coreHttp.OperationSpec = {
  path: "/int/invalidunixtime",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "UnixTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const getNullUnixTimeOperationSpec: coreHttp.OperationSpec = {
  path: "/int/nullunixtime",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "UnixTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
