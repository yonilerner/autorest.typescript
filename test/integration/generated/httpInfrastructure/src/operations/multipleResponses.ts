/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { MultipleResponses } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HttpInfrastructureClient } from "../httpInfrastructureClient";
import {
  MultipleResponsesGet200Model204NoModelDefaultError200ValidOptionalParams,
  MultipleResponsesGet200Model204NoModelDefaultError200ValidResponse,
  MultipleResponsesGet200Model204NoModelDefaultError204ValidOptionalParams,
  MultipleResponsesGet200Model204NoModelDefaultError204ValidResponse,
  MultipleResponsesGet200Model204NoModelDefaultError201InvalidOptionalParams,
  MultipleResponsesGet200Model204NoModelDefaultError201InvalidResponse,
  MultipleResponsesGet200Model204NoModelDefaultError202NoneOptionalParams,
  MultipleResponsesGet200Model204NoModelDefaultError202NoneResponse,
  MultipleResponsesGet200Model204NoModelDefaultError400ValidOptionalParams,
  MultipleResponsesGet200Model204NoModelDefaultError400ValidResponse,
  MultipleResponsesGet200Model201ModelDefaultError200ValidOptionalParams,
  MultipleResponsesGet200Model201ModelDefaultError200ValidResponse,
  MultipleResponsesGet200Model201ModelDefaultError201ValidOptionalParams,
  MultipleResponsesGet200Model201ModelDefaultError201ValidResponse,
  MultipleResponsesGet200Model201ModelDefaultError400ValidOptionalParams,
  MultipleResponsesGet200Model201ModelDefaultError400ValidResponse,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValidOptionalParams,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValidResponse,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValidOptionalParams,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValidResponse,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValidOptionalParams,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValidResponse,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValidOptionalParams,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValidResponse,
  MultipleResponsesGet202None204NoneDefaultError202NoneOptionalParams,
  MultipleResponsesGet202None204NoneDefaultError204NoneOptionalParams,
  MultipleResponsesGet202None204NoneDefaultError400ValidOptionalParams,
  MultipleResponsesGet202None204NoneDefaultNone202InvalidOptionalParams,
  MultipleResponsesGet202None204NoneDefaultNone204NoneOptionalParams,
  MultipleResponsesGet202None204NoneDefaultNone400NoneOptionalParams,
  MultipleResponsesGet202None204NoneDefaultNone400InvalidOptionalParams,
  MultipleResponsesGetDefaultModelA200ValidOptionalParams,
  MultipleResponsesGetDefaultModelA200ValidResponse,
  MultipleResponsesGetDefaultModelA200NoneOptionalParams,
  MultipleResponsesGetDefaultModelA200NoneResponse,
  MultipleResponsesGetDefaultModelA400ValidOptionalParams,
  MultipleResponsesGetDefaultModelA400NoneOptionalParams,
  MultipleResponsesGetDefaultNone200InvalidOptionalParams,
  MultipleResponsesGetDefaultNone200NoneOptionalParams,
  MultipleResponsesGetDefaultNone400InvalidOptionalParams,
  MultipleResponsesGetDefaultNone400NoneOptionalParams,
  MultipleResponsesGet200ModelA200NoneOptionalParams,
  MultipleResponsesGet200ModelA200NoneResponse,
  MultipleResponsesGet200ModelA200ValidOptionalParams,
  MultipleResponsesGet200ModelA200ValidResponse,
  MultipleResponsesGet200ModelA200InvalidOptionalParams,
  MultipleResponsesGet200ModelA200InvalidResponse,
  MultipleResponsesGet200ModelA400NoneOptionalParams,
  MultipleResponsesGet200ModelA400NoneResponse,
  MultipleResponsesGet200ModelA400ValidOptionalParams,
  MultipleResponsesGet200ModelA400ValidResponse,
  MultipleResponsesGet200ModelA400InvalidOptionalParams,
  MultipleResponsesGet200ModelA400InvalidResponse,
  MultipleResponsesGet200ModelA202ValidOptionalParams,
  MultipleResponsesGet200ModelA202ValidResponse
} from "../models";

/** Class containing MultipleResponses operations. */
export class MultipleResponsesImpl implements MultipleResponses {
  private readonly client: HttpInfrastructureClient;

  /**
   * Initialize a new instance of the class MultipleResponses class.
   * @param client Reference to the service client
   */
  constructor(client: HttpInfrastructureClient) {
    this.client = client;
  }

  /**
   * Send a 200 response with valid payload: {'statusCode': '200'}
   * @param options The options parameters.
   */
  get200Model204NoModelDefaultError200Valid(
    options?: MultipleResponsesGet200Model204NoModelDefaultError200ValidOptionalParams
  ): Promise<
    MultipleResponsesGet200Model204NoModelDefaultError200ValidResponse
  > {
    return this.client.sendOperationRequest(
      { options },
      get200Model204NoModelDefaultError200ValidOperationSpec
    );
  }

  /**
   * Send a 204 response with no payload
   * @param options The options parameters.
   */
  get200Model204NoModelDefaultError204Valid(
    options?: MultipleResponsesGet200Model204NoModelDefaultError204ValidOptionalParams
  ): Promise<
    MultipleResponsesGet200Model204NoModelDefaultError204ValidResponse
  > {
    return this.client.sendOperationRequest(
      { options },
      get200Model204NoModelDefaultError204ValidOperationSpec
    );
  }

  /**
   * Send a 201 response with valid payload: {'statusCode': '201'}
   * @param options The options parameters.
   */
  get200Model204NoModelDefaultError201Invalid(
    options?: MultipleResponsesGet200Model204NoModelDefaultError201InvalidOptionalParams
  ): Promise<
    MultipleResponsesGet200Model204NoModelDefaultError201InvalidResponse
  > {
    return this.client.sendOperationRequest(
      { options },
      get200Model204NoModelDefaultError201InvalidOperationSpec
    );
  }

  /**
   * Send a 202 response with no payload:
   * @param options The options parameters.
   */
  get200Model204NoModelDefaultError202None(
    options?: MultipleResponsesGet200Model204NoModelDefaultError202NoneOptionalParams
  ): Promise<
    MultipleResponsesGet200Model204NoModelDefaultError202NoneResponse
  > {
    return this.client.sendOperationRequest(
      { options },
      get200Model204NoModelDefaultError202NoneOperationSpec
    );
  }

  /**
   * Send a 400 response with valid error payload: {'status': 400, 'message': 'client error'}
   * @param options The options parameters.
   */
  get200Model204NoModelDefaultError400Valid(
    options?: MultipleResponsesGet200Model204NoModelDefaultError400ValidOptionalParams
  ): Promise<
    MultipleResponsesGet200Model204NoModelDefaultError400ValidResponse
  > {
    return this.client.sendOperationRequest(
      { options },
      get200Model204NoModelDefaultError400ValidOperationSpec
    );
  }

  /**
   * Send a 200 response with valid payload: {'statusCode': '200'}
   * @param options The options parameters.
   */
  get200Model201ModelDefaultError200Valid(
    options?: MultipleResponsesGet200Model201ModelDefaultError200ValidOptionalParams
  ): Promise<MultipleResponsesGet200Model201ModelDefaultError200ValidResponse> {
    return this.client.sendOperationRequest(
      { options },
      get200Model201ModelDefaultError200ValidOperationSpec
    );
  }

  /**
   * Send a 201 response with valid payload: {'statusCode': '201', 'textStatusCode': 'Created'}
   * @param options The options parameters.
   */
  get200Model201ModelDefaultError201Valid(
    options?: MultipleResponsesGet200Model201ModelDefaultError201ValidOptionalParams
  ): Promise<MultipleResponsesGet200Model201ModelDefaultError201ValidResponse> {
    return this.client.sendOperationRequest(
      { options },
      get200Model201ModelDefaultError201ValidOperationSpec
    );
  }

  /**
   * Send a 400 response with valid payload: {'code': '400', 'message': 'client error'}
   * @param options The options parameters.
   */
  get200Model201ModelDefaultError400Valid(
    options?: MultipleResponsesGet200Model201ModelDefaultError400ValidOptionalParams
  ): Promise<MultipleResponsesGet200Model201ModelDefaultError400ValidResponse> {
    return this.client.sendOperationRequest(
      { options },
      get200Model201ModelDefaultError400ValidOperationSpec
    );
  }

  /**
   * Send a 200 response with valid payload: {'statusCode': '200'}
   * @param options The options parameters.
   */
  get200ModelA201ModelC404ModelDDefaultError200Valid(
    options?: MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValidOptionalParams
  ): Promise<
    MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValidResponse
  > {
    return this.client.sendOperationRequest(
      { options },
      get200ModelA201ModelC404ModelDDefaultError200ValidOperationSpec
    );
  }

  /**
   * Send a 200 response with valid payload: {'httpCode': '201'}
   * @param options The options parameters.
   */
  get200ModelA201ModelC404ModelDDefaultError201Valid(
    options?: MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValidOptionalParams
  ): Promise<
    MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValidResponse
  > {
    return this.client.sendOperationRequest(
      { options },
      get200ModelA201ModelC404ModelDDefaultError201ValidOperationSpec
    );
  }

  /**
   * Send a 200 response with valid payload: {'httpStatusCode': '404'}
   * @param options The options parameters.
   */
  get200ModelA201ModelC404ModelDDefaultError404Valid(
    options?: MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValidOptionalParams
  ): Promise<
    MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValidResponse
  > {
    return this.client.sendOperationRequest(
      { options },
      get200ModelA201ModelC404ModelDDefaultError404ValidOperationSpec
    );
  }

  /**
   * Send a 400 response with valid payload: {'code': '400', 'message': 'client error'}
   * @param options The options parameters.
   */
  get200ModelA201ModelC404ModelDDefaultError400Valid(
    options?: MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValidOptionalParams
  ): Promise<
    MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValidResponse
  > {
    return this.client.sendOperationRequest(
      { options },
      get200ModelA201ModelC404ModelDDefaultError400ValidOperationSpec
    );
  }

  /**
   * Send a 202 response with no payload
   * @param options The options parameters.
   */
  get202None204NoneDefaultError202None(
    options?: MultipleResponsesGet202None204NoneDefaultError202NoneOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      get202None204NoneDefaultError202NoneOperationSpec
    );
  }

  /**
   * Send a 204 response with no payload
   * @param options The options parameters.
   */
  get202None204NoneDefaultError204None(
    options?: MultipleResponsesGet202None204NoneDefaultError204NoneOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      get202None204NoneDefaultError204NoneOperationSpec
    );
  }

  /**
   * Send a 400 response with valid payload: {'code': '400', 'message': 'client error'}
   * @param options The options parameters.
   */
  get202None204NoneDefaultError400Valid(
    options?: MultipleResponsesGet202None204NoneDefaultError400ValidOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      get202None204NoneDefaultError400ValidOperationSpec
    );
  }

  /**
   * Send a 202 response with an unexpected payload {'property': 'value'}
   * @param options The options parameters.
   */
  get202None204NoneDefaultNone202Invalid(
    options?: MultipleResponsesGet202None204NoneDefaultNone202InvalidOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      get202None204NoneDefaultNone202InvalidOperationSpec
    );
  }

  /**
   * Send a 204 response with no payload
   * @param options The options parameters.
   */
  get202None204NoneDefaultNone204None(
    options?: MultipleResponsesGet202None204NoneDefaultNone204NoneOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      get202None204NoneDefaultNone204NoneOperationSpec
    );
  }

  /**
   * Send a 400 response with no payload
   * @param options The options parameters.
   */
  get202None204NoneDefaultNone400None(
    options?: MultipleResponsesGet202None204NoneDefaultNone400NoneOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      get202None204NoneDefaultNone400NoneOperationSpec
    );
  }

  /**
   * Send a 400 response with an unexpected payload {'property': 'value'}
   * @param options The options parameters.
   */
  get202None204NoneDefaultNone400Invalid(
    options?: MultipleResponsesGet202None204NoneDefaultNone400InvalidOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      get202None204NoneDefaultNone400InvalidOperationSpec
    );
  }

  /**
   * Send a 200 response with valid payload: {'statusCode': '200'}
   * @param options The options parameters.
   */
  getDefaultModelA200Valid(
    options?: MultipleResponsesGetDefaultModelA200ValidOptionalParams
  ): Promise<MultipleResponsesGetDefaultModelA200ValidResponse> {
    return this.client.sendOperationRequest(
      { options },
      getDefaultModelA200ValidOperationSpec
    );
  }

  /**
   * Send a 200 response with no payload
   * @param options The options parameters.
   */
  getDefaultModelA200None(
    options?: MultipleResponsesGetDefaultModelA200NoneOptionalParams
  ): Promise<MultipleResponsesGetDefaultModelA200NoneResponse> {
    return this.client.sendOperationRequest(
      { options },
      getDefaultModelA200NoneOperationSpec
    );
  }

  /**
   * Send a 400 response with valid payload: {'statusCode': '400'}
   * @param options The options parameters.
   */
  getDefaultModelA400Valid(
    options?: MultipleResponsesGetDefaultModelA400ValidOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      getDefaultModelA400ValidOperationSpec
    );
  }

  /**
   * Send a 400 response with no payload
   * @param options The options parameters.
   */
  getDefaultModelA400None(
    options?: MultipleResponsesGetDefaultModelA400NoneOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      getDefaultModelA400NoneOperationSpec
    );
  }

  /**
   * Send a 200 response with invalid payload: {'statusCode': '200'}
   * @param options The options parameters.
   */
  getDefaultNone200Invalid(
    options?: MultipleResponsesGetDefaultNone200InvalidOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      getDefaultNone200InvalidOperationSpec
    );
  }

  /**
   * Send a 200 response with no payload
   * @param options The options parameters.
   */
  getDefaultNone200None(
    options?: MultipleResponsesGetDefaultNone200NoneOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      getDefaultNone200NoneOperationSpec
    );
  }

  /**
   * Send a 400 response with valid payload: {'statusCode': '400'}
   * @param options The options parameters.
   */
  getDefaultNone400Invalid(
    options?: MultipleResponsesGetDefaultNone400InvalidOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      getDefaultNone400InvalidOperationSpec
    );
  }

  /**
   * Send a 400 response with no payload
   * @param options The options parameters.
   */
  getDefaultNone400None(
    options?: MultipleResponsesGetDefaultNone400NoneOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      getDefaultNone400NoneOperationSpec
    );
  }

  /**
   * Send a 200 response with no payload, when a payload is expected - client should return a null object
   * of thde type for model A
   * @param options The options parameters.
   */
  get200ModelA200None(
    options?: MultipleResponsesGet200ModelA200NoneOptionalParams
  ): Promise<MultipleResponsesGet200ModelA200NoneResponse> {
    return this.client.sendOperationRequest(
      { options },
      get200ModelA200NoneOperationSpec
    );
  }

  /**
   * Send a 200 response with payload {'statusCode': '200'}
   * @param options The options parameters.
   */
  get200ModelA200Valid(
    options?: MultipleResponsesGet200ModelA200ValidOptionalParams
  ): Promise<MultipleResponsesGet200ModelA200ValidResponse> {
    return this.client.sendOperationRequest(
      { options },
      get200ModelA200ValidOperationSpec
    );
  }

  /**
   * Send a 200 response with invalid payload {'statusCodeInvalid': '200'}
   * @param options The options parameters.
   */
  get200ModelA200Invalid(
    options?: MultipleResponsesGet200ModelA200InvalidOptionalParams
  ): Promise<MultipleResponsesGet200ModelA200InvalidResponse> {
    return this.client.sendOperationRequest(
      { options },
      get200ModelA200InvalidOperationSpec
    );
  }

  /**
   * Send a 400 response with no payload client should treat as an http error with no error model
   * @param options The options parameters.
   */
  get200ModelA400None(
    options?: MultipleResponsesGet200ModelA400NoneOptionalParams
  ): Promise<MultipleResponsesGet200ModelA400NoneResponse> {
    return this.client.sendOperationRequest(
      { options },
      get200ModelA400NoneOperationSpec
    );
  }

  /**
   * Send a 200 response with payload {'statusCode': '400'}
   * @param options The options parameters.
   */
  get200ModelA400Valid(
    options?: MultipleResponsesGet200ModelA400ValidOptionalParams
  ): Promise<MultipleResponsesGet200ModelA400ValidResponse> {
    return this.client.sendOperationRequest(
      { options },
      get200ModelA400ValidOperationSpec
    );
  }

  /**
   * Send a 200 response with invalid payload {'statusCodeInvalid': '400'}
   * @param options The options parameters.
   */
  get200ModelA400Invalid(
    options?: MultipleResponsesGet200ModelA400InvalidOptionalParams
  ): Promise<MultipleResponsesGet200ModelA400InvalidResponse> {
    return this.client.sendOperationRequest(
      { options },
      get200ModelA400InvalidOperationSpec
    );
  }

  /**
   * Send a 202 response with payload {'statusCode': '202'}
   * @param options The options parameters.
   */
  get200ModelA202Valid(
    options?: MultipleResponsesGet200ModelA202ValidOptionalParams
  ): Promise<MultipleResponsesGet200ModelA202ValidResponse> {
    return this.client.sendOperationRequest(
      { options },
      get200ModelA202ValidOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const get200Model204NoModelDefaultError200ValidOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/200/A/204/none/default/Error/response/200/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    },
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200Model204NoModelDefaultError204ValidOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/200/A/204/none/default/Error/response/204/none",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    },
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200Model204NoModelDefaultError201InvalidOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/200/A/204/none/default/Error/response/201/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    },
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200Model204NoModelDefaultError202NoneOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/200/A/204/none/default/Error/response/202/none",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    },
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200Model204NoModelDefaultError400ValidOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/200/A/204/none/default/Error/response/400/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    },
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200Model201ModelDefaultError200ValidOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/200/A/201/B/default/Error/response/200/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    },
    201: {
      bodyMapper: Mappers.B
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200Model201ModelDefaultError201ValidOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/200/A/201/B/default/Error/response/201/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    },
    201: {
      bodyMapper: Mappers.B
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200Model201ModelDefaultError400ValidOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/200/A/201/B/default/Error/response/400/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    },
    201: {
      bodyMapper: Mappers.B
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200ModelA201ModelC404ModelDDefaultError200ValidOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/200/A/201/C/404/D/default/Error/response/200/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    },
    201: {
      bodyMapper: Mappers.C
    },
    404: {
      bodyMapper: Mappers.D
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200ModelA201ModelC404ModelDDefaultError201ValidOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/200/A/201/C/404/D/default/Error/response/201/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    },
    201: {
      bodyMapper: Mappers.C
    },
    404: {
      bodyMapper: Mappers.D
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200ModelA201ModelC404ModelDDefaultError404ValidOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/200/A/201/C/404/D/default/Error/response/404/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    },
    201: {
      bodyMapper: Mappers.C
    },
    404: {
      bodyMapper: Mappers.D
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200ModelA201ModelC404ModelDDefaultError400ValidOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/200/A/201/C/404/D/default/Error/response/400/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    },
    201: {
      bodyMapper: Mappers.C
    },
    404: {
      bodyMapper: Mappers.D
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get202None204NoneDefaultError202NoneOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/202/none/204/none/default/Error/response/202/none",
  httpMethod: "GET",
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get202None204NoneDefaultError204NoneOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/202/none/204/none/default/Error/response/204/none",
  httpMethod: "GET",
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get202None204NoneDefaultError400ValidOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/202/none/204/none/default/Error/response/400/valid",
  httpMethod: "GET",
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get202None204NoneDefaultNone202InvalidOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/202/none/204/none/default/none/response/202/invalid",
  httpMethod: "GET",
  responses: { 202: {}, 204: {}, default: {} },
  urlParameters: [Parameters.$host],
  serializer
};
const get202None204NoneDefaultNone204NoneOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/202/none/204/none/default/none/response/204/none",
  httpMethod: "GET",
  responses: { 202: {}, 204: {}, default: {} },
  urlParameters: [Parameters.$host],
  serializer
};
const get202None204NoneDefaultNone400NoneOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/202/none/204/none/default/none/response/400/none",
  httpMethod: "GET",
  responses: { 202: {}, 204: {}, default: {} },
  urlParameters: [Parameters.$host],
  serializer
};
const get202None204NoneDefaultNone400InvalidOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/202/none/204/none/default/none/response/400/invalid",
  httpMethod: "GET",
  responses: { 202: {}, 204: {}, default: {} },
  urlParameters: [Parameters.$host],
  serializer
};
const getDefaultModelA200ValidOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/default/A/response/200/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getDefaultModelA200NoneOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/default/A/response/200/none",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getDefaultModelA400ValidOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/default/A/response/400/valid",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.MyException
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getDefaultModelA400NoneOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/default/A/response/400/none",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.MyException
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getDefaultNone200InvalidOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/default/none/response/200/invalid",
  httpMethod: "GET",
  responses: { 200: {} },
  urlParameters: [Parameters.$host],
  serializer
};
const getDefaultNone200NoneOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/default/none/response/200/none",
  httpMethod: "GET",
  responses: { 200: {} },
  urlParameters: [Parameters.$host],
  serializer
};
const getDefaultNone400InvalidOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/default/none/response/400/invalid",
  httpMethod: "GET",
  responses: { 200: {}, default: {} },
  urlParameters: [Parameters.$host],
  serializer
};
const getDefaultNone400NoneOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/default/none/response/400/none",
  httpMethod: "GET",
  responses: { 200: {}, default: {} },
  urlParameters: [Parameters.$host],
  serializer
};
const get200ModelA200NoneOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/200/A/response/200/none",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200ModelA200ValidOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/200/A/response/200/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200ModelA200InvalidOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/200/A/response/200/invalid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200ModelA400NoneOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/200/A/response/400/none",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200ModelA400ValidOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/200/A/response/400/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200ModelA400InvalidOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/200/A/response/400/invalid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200ModelA202ValidOperationSpec: coreClient.OperationSpec = {
  path: "/http/payloads/200/A/response/202/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
