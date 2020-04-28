/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";

export const $host: coreHttp.OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const boolPath: coreHttp.OperationURLParameter = {
  parameterPath: "boolPath",
  mapper: {
    defaultValue: true,
    isConstant: true,
    serializedName: "boolPath",
    type: {
      name: "Boolean"
    }
  }
};

export const boolPath1: coreHttp.OperationURLParameter = {
  parameterPath: "boolPath",
  mapper: {
    defaultValue: false,
    isConstant: true,
    serializedName: "boolPath",
    type: {
      name: "Boolean"
    }
  }
};

export const intPath: coreHttp.OperationURLParameter = {
  parameterPath: "intPath",
  mapper: {
    defaultValue: 1000000,
    isConstant: true,
    serializedName: "intPath",
    type: {
      name: "Number"
    }
  }
};

export const intPath1: coreHttp.OperationURLParameter = {
  parameterPath: "intPath",
  mapper: {
    defaultValue: -1000000,
    isConstant: true,
    serializedName: "intPath",
    type: {
      name: "Number"
    }
  }
};

export const longPath: coreHttp.OperationURLParameter = {
  parameterPath: "longPath",
  mapper: {
    defaultValue: 10000000000,
    isConstant: true,
    serializedName: "longPath",
    type: {
      name: "Number"
    }
  }
};

export const longPath1: coreHttp.OperationURLParameter = {
  parameterPath: "longPath",
  mapper: {
    defaultValue: -10000000000,
    isConstant: true,
    serializedName: "longPath",
    type: {
      name: "Number"
    }
  }
};

export const floatPath: coreHttp.OperationURLParameter = {
  parameterPath: "floatPath",
  mapper: {
    defaultValue: 103400000000000000000,
    isConstant: true,
    serializedName: "floatPath",
    type: {
      name: "Number"
    }
  }
};

export const floatPath1: coreHttp.OperationURLParameter = {
  parameterPath: "floatPath",
  mapper: {
    defaultValue: -1.034e-20,
    isConstant: true,
    serializedName: "floatPath",
    type: {
      name: "Number"
    }
  }
};

export const doublePath: coreHttp.OperationURLParameter = {
  parameterPath: "doublePath",
  mapper: {
    defaultValue: 9999999.999,
    isConstant: true,
    serializedName: "doublePath",
    type: {
      name: "Number"
    }
  }
};

export const doublePath1: coreHttp.OperationURLParameter = {
  parameterPath: "doublePath",
  mapper: {
    defaultValue: -9999999.999,
    isConstant: true,
    serializedName: "doublePath",
    type: {
      name: "Number"
    }
  }
};

export const stringPath: coreHttp.OperationURLParameter = {
  parameterPath: "stringPath",
  mapper: {
    defaultValue: "啊齄丂狛狜隣郎隣兀﨩",
    isConstant: true,
    serializedName: "stringPath",
    type: {
      name: "String"
    }
  }
};

export const stringPath1: coreHttp.OperationURLParameter = {
  parameterPath: "stringPath",
  mapper: {
    defaultValue: "begin!*'();:@ &=+$,/?#[]end",
    isConstant: true,
    serializedName: "stringPath",
    type: {
      name: "String"
    }
  }
};

export const stringPath2: coreHttp.OperationURLParameter = {
  parameterPath: "stringPath",
  mapper: {
    defaultValue: "begin!*'();:@&=+$,end",
    isConstant: true,
    serializedName: "stringPath",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const stringPath3: coreHttp.OperationURLParameter = {
  parameterPath: "stringPath",
  mapper: {
    defaultValue: "",
    isConstant: true,
    serializedName: "stringPath",
    type: {
      name: "String"
    }
  }
};

export const stringPath4: coreHttp.OperationURLParameter = {
  parameterPath: "stringPath",
  mapper: {
    serializedName: "stringPath",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const enumPath: coreHttp.OperationURLParameter = {
  parameterPath: "enumPath",
  mapper: {
    serializedName: "enumPath",
    required: true,
    type: {
      name: "Enum",
      allowedValues: ["red color", "green color", "blue color"]
    }
  }
};

export const enumPath1: coreHttp.OperationURLParameter = {
  parameterPath: "enumPath",
  mapper: {
    serializedName: "enumPath",
    required: true,
    type: {
      name: "Enum",
      allowedValues: ["red color", "green color", "blue color"]
    }
  }
};

export const bytePath: coreHttp.OperationURLParameter = {
  parameterPath: "bytePath",
  mapper: {
    serializedName: "bytePath",
    required: true,
    type: {
      name: "ByteArray"
    }
  }
};

export const bytePath1: coreHttp.OperationURLParameter = {
  parameterPath: "bytePath",
  mapper: {
    defaultValue: new Uint8Array(0),
    isConstant: true,
    serializedName: "bytePath",
    type: {
      name: "ByteArray"
    }
  }
};

export const bytePath2: coreHttp.OperationURLParameter = {
  parameterPath: "bytePath",
  mapper: {
    serializedName: "bytePath",
    required: true,
    type: {
      name: "ByteArray"
    }
  }
};

export const datePath: coreHttp.OperationURLParameter = {
  parameterPath: "datePath",
  mapper: {
    defaultValue: "2012-01-01",
    isConstant: true,
    serializedName: "datePath",
    type: {
      name: "Date"
    }
  }
};

export const datePath1: coreHttp.OperationURLParameter = {
  parameterPath: "datePath",
  mapper: {
    serializedName: "datePath",
    required: true,
    type: {
      name: "Date"
    }
  }
};

export const dateTimePath: coreHttp.OperationURLParameter = {
  parameterPath: "dateTimePath",
  mapper: {
    defaultValue: "2012-01-01T01:01:01Z",
    isConstant: true,
    serializedName: "dateTimePath",
    type: {
      name: "DateTime"
    }
  }
};

export const dateTimePath1: coreHttp.OperationURLParameter = {
  parameterPath: "dateTimePath",
  mapper: {
    serializedName: "dateTimePath",
    required: true,
    type: {
      name: "DateTime"
    }
  }
};

export const base64UrlPath: coreHttp.OperationURLParameter = {
  parameterPath: "base64UrlPath",
  mapper: {
    serializedName: "base64UrlPath",
    required: true,
    type: {
      name: "Base64Url"
    }
  }
};

export const arrayPath: coreHttp.OperationURLParameter = {
  parameterPath: "arrayPath",
  mapper: {
    serializedName: "arrayPath",
    required: true,
    type: {
      name: "Sequence",
      element: { type: { name: "String" } }
    }
  }
};

export const unixTimeUrlPath: coreHttp.OperationURLParameter = {
  parameterPath: "unixTimeUrlPath",
  mapper: {
    serializedName: "unixTimeUrlPath",
    required: true,
    type: {
      name: "UnixTime"
    }
  }
};

export const boolQuery: coreHttp.OperationQueryParameter = {
  parameterPath: "boolQuery",
  mapper: {
    defaultValue: true,
    isConstant: true,
    serializedName: "boolQuery",
    type: {
      name: "Boolean"
    }
  }
};

export const boolQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: "boolQuery",
  mapper: {
    defaultValue: false,
    isConstant: true,
    serializedName: "boolQuery",
    type: {
      name: "Boolean"
    }
  }
};

export const boolQuery2: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "boolQuery"],
  mapper: {
    serializedName: "boolQuery",
    type: {
      name: "Boolean"
    }
  }
};

export const intQuery: coreHttp.OperationQueryParameter = {
  parameterPath: "intQuery",
  mapper: {
    defaultValue: 1000000,
    isConstant: true,
    serializedName: "intQuery",
    type: {
      name: "Number"
    }
  }
};

export const intQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: "intQuery",
  mapper: {
    defaultValue: -1000000,
    isConstant: true,
    serializedName: "intQuery",
    type: {
      name: "Number"
    }
  }
};

export const intQuery2: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "intQuery"],
  mapper: {
    serializedName: "intQuery",
    type: {
      name: "Number"
    }
  }
};

export const longQuery: coreHttp.OperationQueryParameter = {
  parameterPath: "longQuery",
  mapper: {
    defaultValue: 10000000000,
    isConstant: true,
    serializedName: "longQuery",
    type: {
      name: "Number"
    }
  }
};

export const longQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: "longQuery",
  mapper: {
    defaultValue: -10000000000,
    isConstant: true,
    serializedName: "longQuery",
    type: {
      name: "Number"
    }
  }
};

export const longQuery2: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "longQuery"],
  mapper: {
    serializedName: "longQuery",
    type: {
      name: "Number"
    }
  }
};

export const floatQuery: coreHttp.OperationQueryParameter = {
  parameterPath: "floatQuery",
  mapper: {
    defaultValue: 103400000000000000000,
    isConstant: true,
    serializedName: "floatQuery",
    type: {
      name: "Number"
    }
  }
};

export const floatQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: "floatQuery",
  mapper: {
    defaultValue: -1.034e-20,
    isConstant: true,
    serializedName: "floatQuery",
    type: {
      name: "Number"
    }
  }
};

export const floatQuery2: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "floatQuery"],
  mapper: {
    serializedName: "floatQuery",
    type: {
      name: "Number"
    }
  }
};

export const doubleQuery: coreHttp.OperationQueryParameter = {
  parameterPath: "doubleQuery",
  mapper: {
    defaultValue: 9999999.999,
    isConstant: true,
    serializedName: "doubleQuery",
    type: {
      name: "Number"
    }
  }
};

export const doubleQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: "doubleQuery",
  mapper: {
    defaultValue: -9999999.999,
    isConstant: true,
    serializedName: "doubleQuery",
    type: {
      name: "Number"
    }
  }
};

export const doubleQuery2: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "doubleQuery"],
  mapper: {
    serializedName: "doubleQuery",
    type: {
      name: "Number"
    }
  }
};

export const stringQuery: coreHttp.OperationQueryParameter = {
  parameterPath: "stringQuery",
  mapper: {
    defaultValue: "啊齄丂狛狜隣郎隣兀﨩",
    isConstant: true,
    serializedName: "stringQuery",
    type: {
      name: "String"
    }
  }
};

export const stringQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: "stringQuery",
  mapper: {
    defaultValue: "begin!*'();:@ &=+$,/?#[]end",
    isConstant: true,
    serializedName: "stringQuery",
    type: {
      name: "String"
    }
  }
};

export const stringQuery2: coreHttp.OperationQueryParameter = {
  parameterPath: "stringQuery",
  mapper: {
    defaultValue: "",
    isConstant: true,
    serializedName: "stringQuery",
    type: {
      name: "String"
    }
  }
};

export const stringQuery3: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "stringQuery"],
  mapper: {
    serializedName: "stringQuery",
    type: {
      name: "String"
    }
  }
};

export const enumQuery: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "enumQuery"],
  mapper: {
    serializedName: "enumQuery",
    type: {
      name: "Enum",
      allowedValues: ["red color", "green color", "blue color"]
    }
  }
};

export const enumQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "enumQuery"],
  mapper: {
    serializedName: "enumQuery",
    type: {
      name: "Enum",
      allowedValues: ["red color", "green color", "blue color"]
    }
  }
};

export const byteQuery: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "byteQuery"],
  mapper: {
    serializedName: "byteQuery",
    type: {
      name: "ByteArray"
    }
  }
};

export const byteQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: "byteQuery",
  mapper: {
    defaultValue: new Uint8Array(0),
    isConstant: true,
    serializedName: "byteQuery",
    type: {
      name: "ByteArray"
    }
  }
};

export const byteQuery2: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "byteQuery"],
  mapper: {
    serializedName: "byteQuery",
    type: {
      name: "ByteArray"
    }
  }
};

export const dateQuery: coreHttp.OperationQueryParameter = {
  parameterPath: "dateQuery",
  mapper: {
    defaultValue: "2012-01-01",
    isConstant: true,
    serializedName: "dateQuery",
    type: {
      name: "Date"
    }
  }
};

export const dateQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "dateQuery"],
  mapper: {
    serializedName: "dateQuery",
    type: {
      name: "Date"
    }
  }
};

export const dateTimeQuery: coreHttp.OperationQueryParameter = {
  parameterPath: "dateTimeQuery",
  mapper: {
    defaultValue: "2012-01-01T01:01:01Z",
    isConstant: true,
    serializedName: "dateTimeQuery",
    type: {
      name: "DateTime"
    }
  }
};

export const dateTimeQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "dateTimeQuery"],
  mapper: {
    serializedName: "dateTimeQuery",
    type: {
      name: "DateTime"
    }
  }
};

export const arrayQuery: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "arrayQuery"],
  mapper: {
    serializedName: "arrayQuery",
    type: {
      name: "Sequence",
      element: { type: { name: "String" } }
    }
  },
  collectionFormat: coreHttp.QueryCollectionFormat.Csv
};

export const arrayQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "arrayQuery"],
  mapper: {
    serializedName: "arrayQuery",
    type: {
      name: "Sequence",
      element: { type: { name: "String" } }
    }
  },
  collectionFormat: coreHttp.QueryCollectionFormat.Csv
};

export const arrayQuery2: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "arrayQuery"],
  mapper: {
    serializedName: "arrayQuery",
    type: {
      name: "Sequence",
      element: { type: { name: "String" } }
    }
  },
  collectionFormat: coreHttp.QueryCollectionFormat.Csv
};

export const arrayQuery3: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "arrayQuery"],
  mapper: {
    serializedName: "arrayQuery",
    type: {
      name: "Sequence",
      element: { type: { name: "String" } }
    }
  },
  collectionFormat: coreHttp.QueryCollectionFormat.Ssv
};

export const arrayQuery4: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "arrayQuery"],
  mapper: {
    serializedName: "arrayQuery",
    type: {
      name: "Sequence",
      element: { type: { name: "String" } }
    }
  },
  collectionFormat: coreHttp.QueryCollectionFormat.Tsv
};

export const arrayQuery5: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "arrayQuery"],
  mapper: {
    serializedName: "arrayQuery",
    type: {
      name: "Sequence",
      element: { type: { name: "String" } }
    }
  },
  collectionFormat: coreHttp.QueryCollectionFormat.Pipes
};

export const pathItemStringPath: coreHttp.OperationURLParameter = {
  parameterPath: "pathItemStringPath",
  mapper: {
    serializedName: "pathItemStringPath",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const pathItemStringQuery: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "pathItemStringQuery"],
  mapper: {
    serializedName: "pathItemStringQuery",
    type: {
      name: "String"
    }
  }
};

export const globalStringPath: coreHttp.OperationURLParameter = {
  parameterPath: "globalStringPath",
  mapper: {
    serializedName: "globalStringPath",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const globalStringQuery: coreHttp.OperationQueryParameter = {
  parameterPath: "globalStringQuery",
  mapper: {
    serializedName: "globalStringQuery",
    type: {
      name: "String"
    }
  }
};

export const localStringPath: coreHttp.OperationURLParameter = {
  parameterPath: "localStringPath",
  mapper: {
    serializedName: "localStringPath",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const localStringQuery: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "localStringQuery"],
  mapper: {
    serializedName: "localStringQuery",
    type: {
      name: "String"
    }
  }
};

export const localStringQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "localStringQuery"],
  mapper: {
    serializedName: "localStringQuery",
    type: {
      name: "String"
    }
  }
};

export const pathItemStringQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "pathItemStringQuery"],
  mapper: {
    serializedName: "pathItemStringQuery",
    type: {
      name: "String"
    }
  }
};

export const localStringQuery2: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "localStringQuery"],
  mapper: {
    serializedName: "localStringQuery",
    type: {
      name: "String"
    }
  }
};
