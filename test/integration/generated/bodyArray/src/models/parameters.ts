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

export const contentType: coreHttp.OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const arrayBody: coreHttp.OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Sequence",
      element: { type: { name: "String" } }
    }
  }
};

export const arrayBody1: coreHttp.OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Sequence",
      element: { type: { name: "Boolean" } }
    }
  }
};

export const arrayBody2: coreHttp.OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Sequence",
      element: { type: { name: "Number" } }
    }
  }
};

export const arrayBody3: coreHttp.OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Sequence",
      element: { type: { name: "Number" } }
    }
  }
};

export const arrayBody4: coreHttp.OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Sequence",
      element: { type: { name: "Number" } }
    }
  }
};

export const arrayBody5: coreHttp.OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Sequence",
      element: { type: { name: "Number" } }
    }
  }
};

export const arrayBody6: coreHttp.OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Sequence",
      element: { type: { name: "String" } }
    }
  }
};

export const arrayBody7: coreHttp.OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Sequence",
      element: {
        type: { name: "Enum", allowedValues: ["foo1", "foo2", "foo3"] }
      }
    }
  }
};

export const arrayBody8: coreHttp.OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Sequence",
      element: { type: { name: "String" } }
    }
  }
};

export const arrayBody9: coreHttp.OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Sequence",
      element: { type: { name: "Uuid" } }
    }
  }
};

export const arrayBody10: coreHttp.OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Sequence",
      element: { type: { name: "Date" } }
    }
  }
};

export const arrayBody11: coreHttp.OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Sequence",
      element: { type: { name: "DateTime" } }
    }
  }
};

export const arrayBody12: coreHttp.OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Sequence",
      element: { type: { name: "DateTimeRfc1123" } }
    }
  }
};

export const arrayBody13: coreHttp.OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Sequence",
      element: { type: { name: "TimeSpan" } }
    }
  }
};

export const arrayBody14: coreHttp.OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Sequence",
      element: { type: { name: "ByteArray" } }
    }
  }
};

export const arrayBody15: coreHttp.OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Sequence",
      element: { type: { name: "Composite", className: "Product" } }
    }
  }
};

export const arrayBody16: coreHttp.OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Sequence",
      element: {
        type: { name: "Sequence", element: { type: { name: "String" } } }
      }
    }
  }
};

export const arrayBody17: coreHttp.OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Sequence",
      element: {
        type: { name: "Dictionary", value: { type: { name: "String" } } }
      }
    }
  }
};
