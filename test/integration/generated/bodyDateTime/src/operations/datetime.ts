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
import { BodyDateTimeClient } from "../bodyDateTimeClient";
import {
  DatetimeGetNullResponse,
  DatetimeGetInvalidResponse,
  DatetimeGetOverflowResponse,
  DatetimeGetUnderflowResponse,
  DatetimeGetUtcLowercaseMaxDateTimeResponse,
  DatetimeGetUtcUppercaseMaxDateTimeResponse,
  DatetimeGetUtcUppercaseMaxDateTime7DigitsResponse,
  DatetimeGetLocalPositiveOffsetLowercaseMaxDateTimeResponse,
  DatetimeGetLocalPositiveOffsetUppercaseMaxDateTimeResponse,
  DatetimeGetLocalNegativeOffsetUppercaseMaxDateTimeResponse,
  DatetimeGetLocalNegativeOffsetLowercaseMaxDateTimeResponse,
  DatetimeGetUtcMinDateTimeResponse,
  DatetimeGetLocalPositiveOffsetMinDateTimeResponse,
  DatetimeGetLocalNegativeOffsetMinDateTimeResponse
} from "../models";

/**
 * Class representing a Datetime.
 */
export class Datetime {
  private readonly client: BodyDateTimeClient;

  /**
   * Initialize a new instance of the class Datetime class.
   * @param client Reference to the service client
   */
  constructor(client: BodyDateTimeClient) {
    this.client = client;
  }

  /**
   * Get null datetime value
   * @param options The options parameters.
   */
  getNull(
    options?: coreHttp.OperationOptions
  ): Promise<DatetimeGetNullResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getNullOperationSpec
    ) as Promise<DatetimeGetNullResponse>;
  }

  /**
   * Get invalid datetime value
   * @param options The options parameters.
   */
  getInvalid(
    options?: coreHttp.OperationOptions
  ): Promise<DatetimeGetInvalidResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getInvalidOperationSpec
    ) as Promise<DatetimeGetInvalidResponse>;
  }

  /**
   * Get overflow datetime value
   * @param options The options parameters.
   */
  getOverflow(
    options?: coreHttp.OperationOptions
  ): Promise<DatetimeGetOverflowResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getOverflowOperationSpec
    ) as Promise<DatetimeGetOverflowResponse>;
  }

  /**
   * Get underflow datetime value
   * @param options The options parameters.
   */
  getUnderflow(
    options?: coreHttp.OperationOptions
  ): Promise<DatetimeGetUnderflowResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getUnderflowOperationSpec
    ) as Promise<DatetimeGetUnderflowResponse>;
  }

  /**
   * Put max datetime value 9999-12-31T23:59:59.999Z
   * @param datetimeBody
   * @param options The options parameters.
   */
  putUtcMaxDateTime(
    datetimeBody: Date,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { datetimeBody, options: operationOptions },
      putUtcMaxDateTimeOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Put max datetime value 9999-12-31T23:59:59.9999999Z
   * @param datetimeBody
   * @param options The options parameters.
   */
  putUtcMaxDateTime7Digits(
    datetimeBody: Date,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { datetimeBody, options: operationOptions },
      putUtcMaxDateTime7DigitsOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get max datetime value 9999-12-31t23:59:59.999z
   * @param options The options parameters.
   */
  getUtcLowercaseMaxDateTime(
    options?: coreHttp.OperationOptions
  ): Promise<DatetimeGetUtcLowercaseMaxDateTimeResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getUtcLowercaseMaxDateTimeOperationSpec
    ) as Promise<DatetimeGetUtcLowercaseMaxDateTimeResponse>;
  }

  /**
   * Get max datetime value 9999-12-31T23:59:59.999Z
   * @param options The options parameters.
   */
  getUtcUppercaseMaxDateTime(
    options?: coreHttp.OperationOptions
  ): Promise<DatetimeGetUtcUppercaseMaxDateTimeResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getUtcUppercaseMaxDateTimeOperationSpec
    ) as Promise<DatetimeGetUtcUppercaseMaxDateTimeResponse>;
  }

  /**
   * Get max datetime value 9999-12-31T23:59:59.9999999Z
   * @param options The options parameters.
   */
  getUtcUppercaseMaxDateTime7Digits(
    options?: coreHttp.OperationOptions
  ): Promise<DatetimeGetUtcUppercaseMaxDateTime7DigitsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getUtcUppercaseMaxDateTime7DigitsOperationSpec
    ) as Promise<DatetimeGetUtcUppercaseMaxDateTime7DigitsResponse>;
  }

  /**
   * Put max datetime value with positive numoffset 9999-12-31t23:59:59.999+14:00
   * @param datetimeBody
   * @param options The options parameters.
   */
  putLocalPositiveOffsetMaxDateTime(
    datetimeBody: Date,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { datetimeBody, options: operationOptions },
      putLocalPositiveOffsetMaxDateTimeOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get max datetime value with positive num offset 9999-12-31t23:59:59.999+14:00
   * @param options The options parameters.
   */
  getLocalPositiveOffsetLowercaseMaxDateTime(
    options?: coreHttp.OperationOptions
  ): Promise<DatetimeGetLocalPositiveOffsetLowercaseMaxDateTimeResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getLocalPositiveOffsetLowercaseMaxDateTimeOperationSpec
    ) as Promise<DatetimeGetLocalPositiveOffsetLowercaseMaxDateTimeResponse>;
  }

  /**
   * Get max datetime value with positive num offset 9999-12-31T23:59:59.999+14:00
   * @param options The options parameters.
   */
  getLocalPositiveOffsetUppercaseMaxDateTime(
    options?: coreHttp.OperationOptions
  ): Promise<DatetimeGetLocalPositiveOffsetUppercaseMaxDateTimeResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getLocalPositiveOffsetUppercaseMaxDateTimeOperationSpec
    ) as Promise<DatetimeGetLocalPositiveOffsetUppercaseMaxDateTimeResponse>;
  }

  /**
   * Put max datetime value with positive numoffset 9999-12-31t23:59:59.999-14:00
   * @param datetimeBody
   * @param options The options parameters.
   */
  putLocalNegativeOffsetMaxDateTime(
    datetimeBody: Date,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { datetimeBody, options: operationOptions },
      putLocalNegativeOffsetMaxDateTimeOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get max datetime value with positive num offset 9999-12-31T23:59:59.999-14:00
   * @param options The options parameters.
   */
  getLocalNegativeOffsetUppercaseMaxDateTime(
    options?: coreHttp.OperationOptions
  ): Promise<DatetimeGetLocalNegativeOffsetUppercaseMaxDateTimeResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getLocalNegativeOffsetUppercaseMaxDateTimeOperationSpec
    ) as Promise<DatetimeGetLocalNegativeOffsetUppercaseMaxDateTimeResponse>;
  }

  /**
   * Get max datetime value with positive num offset 9999-12-31t23:59:59.999-14:00
   * @param options The options parameters.
   */
  getLocalNegativeOffsetLowercaseMaxDateTime(
    options?: coreHttp.OperationOptions
  ): Promise<DatetimeGetLocalNegativeOffsetLowercaseMaxDateTimeResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getLocalNegativeOffsetLowercaseMaxDateTimeOperationSpec
    ) as Promise<DatetimeGetLocalNegativeOffsetLowercaseMaxDateTimeResponse>;
  }

  /**
   * Put min datetime value 0001-01-01T00:00:00Z
   * @param datetimeBody
   * @param options The options parameters.
   */
  putUtcMinDateTime(
    datetimeBody: Date,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { datetimeBody, options: operationOptions },
      putUtcMinDateTimeOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get min datetime value 0001-01-01T00:00:00Z
   * @param options The options parameters.
   */
  getUtcMinDateTime(
    options?: coreHttp.OperationOptions
  ): Promise<DatetimeGetUtcMinDateTimeResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getUtcMinDateTimeOperationSpec
    ) as Promise<DatetimeGetUtcMinDateTimeResponse>;
  }

  /**
   * Put min datetime value 0001-01-01T00:00:00+14:00
   * @param datetimeBody
   * @param options The options parameters.
   */
  putLocalPositiveOffsetMinDateTime(
    datetimeBody: Date,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { datetimeBody, options: operationOptions },
      putLocalPositiveOffsetMinDateTimeOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get min datetime value 0001-01-01T00:00:00+14:00
   * @param options The options parameters.
   */
  getLocalPositiveOffsetMinDateTime(
    options?: coreHttp.OperationOptions
  ): Promise<DatetimeGetLocalPositiveOffsetMinDateTimeResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getLocalPositiveOffsetMinDateTimeOperationSpec
    ) as Promise<DatetimeGetLocalPositiveOffsetMinDateTimeResponse>;
  }

  /**
   * Put min datetime value 0001-01-01T00:00:00-14:00
   * @param datetimeBody
   * @param options The options parameters.
   */
  putLocalNegativeOffsetMinDateTime(
    datetimeBody: Date,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { datetimeBody, options: operationOptions },
      putLocalNegativeOffsetMinDateTimeOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get min datetime value 0001-01-01T00:00:00-14:00
   * @param options The options parameters.
   */
  getLocalNegativeOffsetMinDateTime(
    options?: coreHttp.OperationOptions
  ): Promise<DatetimeGetLocalNegativeOffsetMinDateTimeResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getLocalNegativeOffsetMinDateTimeOperationSpec
    ) as Promise<DatetimeGetLocalNegativeOffsetMinDateTimeResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getNullOperationSpec: coreHttp.OperationSpec = {
  path: "/datetime/null",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const getInvalidOperationSpec: coreHttp.OperationSpec = {
  path: "/datetime/invalid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const getOverflowOperationSpec: coreHttp.OperationSpec = {
  path: "/datetime/overflow",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const getUnderflowOperationSpec: coreHttp.OperationSpec = {
  path: "/datetime/underflow",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putUtcMaxDateTimeOperationSpec: coreHttp.OperationSpec = {
  path: "/datetime/max/utc",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.datetimeBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  serializer
};
const putUtcMaxDateTime7DigitsOperationSpec: coreHttp.OperationSpec = {
  path: "/datetime/max/utc7ms",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.datetimeBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  serializer
};
const getUtcLowercaseMaxDateTimeOperationSpec: coreHttp.OperationSpec = {
  path: "/datetime/max/utc/lowercase",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const getUtcUppercaseMaxDateTimeOperationSpec: coreHttp.OperationSpec = {
  path: "/datetime/max/utc/uppercase",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const getUtcUppercaseMaxDateTime7DigitsOperationSpec: coreHttp.OperationSpec = {
  path: "/datetime/max/utc7ms/uppercase",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putLocalPositiveOffsetMaxDateTimeOperationSpec: coreHttp.OperationSpec = {
  path: "/datetime/max/localpositiveoffset",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.datetimeBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  serializer
};
const getLocalPositiveOffsetLowercaseMaxDateTimeOperationSpec: coreHttp.OperationSpec = {
  path: "/datetime/max/localpositiveoffset/lowercase",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const getLocalPositiveOffsetUppercaseMaxDateTimeOperationSpec: coreHttp.OperationSpec = {
  path: "/datetime/max/localpositiveoffset/uppercase",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putLocalNegativeOffsetMaxDateTimeOperationSpec: coreHttp.OperationSpec = {
  path: "/datetime/max/localnegativeoffset",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.datetimeBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  serializer
};
const getLocalNegativeOffsetUppercaseMaxDateTimeOperationSpec: coreHttp.OperationSpec = {
  path: "/datetime/max/localnegativeoffset/uppercase",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const getLocalNegativeOffsetLowercaseMaxDateTimeOperationSpec: coreHttp.OperationSpec = {
  path: "/datetime/max/localnegativeoffset/lowercase",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putUtcMinDateTimeOperationSpec: coreHttp.OperationSpec = {
  path: "/datetime/min/utc",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.datetimeBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  serializer
};
const getUtcMinDateTimeOperationSpec: coreHttp.OperationSpec = {
  path: "/datetime/min/utc",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putLocalPositiveOffsetMinDateTimeOperationSpec: coreHttp.OperationSpec = {
  path: "/datetime/min/localpositiveoffset",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.datetimeBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  serializer
};
const getLocalPositiveOffsetMinDateTimeOperationSpec: coreHttp.OperationSpec = {
  path: "/datetime/min/localpositiveoffset",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putLocalNegativeOffsetMinDateTimeOperationSpec: coreHttp.OperationSpec = {
  path: "/datetime/min/localnegativeoffset",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.datetimeBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  serializer
};
const getLocalNegativeOffsetMinDateTimeOperationSpec: coreHttp.OperationSpec = {
  path: "/datetime/min/localnegativeoffset",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
