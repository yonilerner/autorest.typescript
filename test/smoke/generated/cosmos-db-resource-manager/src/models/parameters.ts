/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  DatabaseAccountUpdateParameters as DatabaseAccountUpdateParametersMapper,
  DatabaseAccountCreateUpdateParameters as DatabaseAccountCreateUpdateParametersMapper,
  FailoverPolicies as FailoverPoliciesMapper,
  RegionForOnlineOffline as RegionForOnlineOfflineMapper,
  DatabaseAccountRegenerateKeyParameters as DatabaseAccountRegenerateKeyParametersMapper,
  SqlDatabaseCreateUpdateParameters as SqlDatabaseCreateUpdateParametersMapper,
  ThroughputSettingsUpdateParameters as ThroughputSettingsUpdateParametersMapper,
  SqlContainerCreateUpdateParameters as SqlContainerCreateUpdateParametersMapper,
  SqlStoredProcedureCreateUpdateParameters as SqlStoredProcedureCreateUpdateParametersMapper,
  SqlUserDefinedFunctionCreateUpdateParameters as SqlUserDefinedFunctionCreateUpdateParametersMapper,
  SqlTriggerCreateUpdateParameters as SqlTriggerCreateUpdateParametersMapper,
  MongoDBDatabaseCreateUpdateParameters as MongoDBDatabaseCreateUpdateParametersMapper,
  MongoDBCollectionCreateUpdateParameters as MongoDBCollectionCreateUpdateParametersMapper,
  TableCreateUpdateParameters as TableCreateUpdateParametersMapper,
  CassandraKeyspaceCreateUpdateParameters as CassandraKeyspaceCreateUpdateParametersMapper,
  CassandraTableCreateUpdateParameters as CassandraTableCreateUpdateParametersMapper,
  GremlinDatabaseCreateUpdateParameters as GremlinDatabaseCreateUpdateParametersMapper,
  GremlinGraphCreateUpdateParameters as GremlinGraphCreateUpdateParametersMapper,
  NotebookWorkspaceCreateUpdateParameters as NotebookWorkspaceCreateUpdateParametersMapper,
  PrivateEndpointConnectionAutoGenerated as PrivateEndpointConnectionAutoGeneratedMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
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

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$"),
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const accountName: OperationURLParameter = {
  parameterPath: "accountName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-z0-9]+(-[a-z0-9]+)*"),
      MaxLength: 50,
      MinLength: 3
    },
    serializedName: "accountName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-03-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
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

export const updateParameters: OperationParameter = {
  parameterPath: "updateParameters",
  mapper: DatabaseAccountUpdateParametersMapper
};

export const createUpdateParameters: OperationParameter = {
  parameterPath: "createUpdateParameters",
  mapper: DatabaseAccountCreateUpdateParametersMapper
};

export const failoverParameters: OperationParameter = {
  parameterPath: "failoverParameters",
  mapper: FailoverPoliciesMapper
};

export const regionParameterForOffline: OperationParameter = {
  parameterPath: "regionParameterForOffline",
  mapper: RegionForOnlineOfflineMapper
};

export const regionParameterForOnline: OperationParameter = {
  parameterPath: "regionParameterForOnline",
  mapper: RegionForOnlineOfflineMapper
};

export const keyToRegenerate: OperationParameter = {
  parameterPath: "keyToRegenerate",
  mapper: DatabaseAccountRegenerateKeyParametersMapper
};

export const filter: OperationQueryParameter = {
  parameterPath: "filter",
  mapper: {
    serializedName: "$filter",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const filter1: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const databaseRid: OperationURLParameter = {
  parameterPath: "databaseRid",
  mapper: {
    serializedName: "databaseRid",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const collectionRid: OperationURLParameter = {
  parameterPath: "collectionRid",
  mapper: {
    serializedName: "collectionRid",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const region: OperationURLParameter = {
  parameterPath: "region",
  mapper: {
    serializedName: "region",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const sourceRegion: OperationURLParameter = {
  parameterPath: "sourceRegion",
  mapper: {
    serializedName: "sourceRegion",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const targetRegion: OperationURLParameter = {
  parameterPath: "targetRegion",
  mapper: {
    serializedName: "targetRegion",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const partitionKeyRangeId: OperationURLParameter = {
  parameterPath: "partitionKeyRangeId",
  mapper: {
    serializedName: "partitionKeyRangeId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const databaseName: OperationURLParameter = {
  parameterPath: "databaseName",
  mapper: {
    serializedName: "databaseName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createUpdateSqlDatabaseParameters: OperationParameter = {
  parameterPath: "createUpdateSqlDatabaseParameters",
  mapper: SqlDatabaseCreateUpdateParametersMapper
};

export const updateThroughputParameters: OperationParameter = {
  parameterPath: "updateThroughputParameters",
  mapper: ThroughputSettingsUpdateParametersMapper
};

export const containerName: OperationURLParameter = {
  parameterPath: "containerName",
  mapper: {
    serializedName: "containerName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createUpdateSqlContainerParameters: OperationParameter = {
  parameterPath: "createUpdateSqlContainerParameters",
  mapper: SqlContainerCreateUpdateParametersMapper
};

export const storedProcedureName: OperationURLParameter = {
  parameterPath: "storedProcedureName",
  mapper: {
    serializedName: "storedProcedureName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createUpdateSqlStoredProcedureParameters: OperationParameter = {
  parameterPath: "createUpdateSqlStoredProcedureParameters",
  mapper: SqlStoredProcedureCreateUpdateParametersMapper
};

export const userDefinedFunctionName: OperationURLParameter = {
  parameterPath: "userDefinedFunctionName",
  mapper: {
    serializedName: "userDefinedFunctionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createUpdateSqlUserDefinedFunctionParameters: OperationParameter = {
  parameterPath: "createUpdateSqlUserDefinedFunctionParameters",
  mapper: SqlUserDefinedFunctionCreateUpdateParametersMapper
};

export const triggerName: OperationURLParameter = {
  parameterPath: "triggerName",
  mapper: {
    serializedName: "triggerName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createUpdateSqlTriggerParameters: OperationParameter = {
  parameterPath: "createUpdateSqlTriggerParameters",
  mapper: SqlTriggerCreateUpdateParametersMapper
};

export const createUpdateMongoDBDatabaseParameters: OperationParameter = {
  parameterPath: "createUpdateMongoDBDatabaseParameters",
  mapper: MongoDBDatabaseCreateUpdateParametersMapper
};

export const collectionName: OperationURLParameter = {
  parameterPath: "collectionName",
  mapper: {
    serializedName: "collectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createUpdateMongoDBCollectionParameters: OperationParameter = {
  parameterPath: "createUpdateMongoDBCollectionParameters",
  mapper: MongoDBCollectionCreateUpdateParametersMapper
};

export const tableName: OperationURLParameter = {
  parameterPath: "tableName",
  mapper: {
    serializedName: "tableName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createUpdateTableParameters: OperationParameter = {
  parameterPath: "createUpdateTableParameters",
  mapper: TableCreateUpdateParametersMapper
};

export const keyspaceName: OperationURLParameter = {
  parameterPath: "keyspaceName",
  mapper: {
    serializedName: "keyspaceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createUpdateCassandraKeyspaceParameters: OperationParameter = {
  parameterPath: "createUpdateCassandraKeyspaceParameters",
  mapper: CassandraKeyspaceCreateUpdateParametersMapper
};

export const createUpdateCassandraTableParameters: OperationParameter = {
  parameterPath: "createUpdateCassandraTableParameters",
  mapper: CassandraTableCreateUpdateParametersMapper
};

export const createUpdateGremlinDatabaseParameters: OperationParameter = {
  parameterPath: "createUpdateGremlinDatabaseParameters",
  mapper: GremlinDatabaseCreateUpdateParametersMapper
};

export const graphName: OperationURLParameter = {
  parameterPath: "graphName",
  mapper: {
    serializedName: "graphName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createUpdateGremlinGraphParameters: OperationParameter = {
  parameterPath: "createUpdateGremlinGraphParameters",
  mapper: GremlinGraphCreateUpdateParametersMapper
};

export const apiVersion1: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2019-08-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const notebookWorkspaceName: OperationURLParameter = {
  parameterPath: "notebookWorkspaceName",
  mapper: {
    serializedName: "notebookWorkspaceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const notebookCreateUpdateParameters: OperationParameter = {
  parameterPath: "notebookCreateUpdateParameters",
  mapper: NotebookWorkspaceCreateUpdateParametersMapper
};

export const apiVersion2: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2019-08-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const groupName: OperationURLParameter = {
  parameterPath: "groupName",
  mapper: {
    serializedName: "groupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: PrivateEndpointConnectionAutoGeneratedMapper
};
