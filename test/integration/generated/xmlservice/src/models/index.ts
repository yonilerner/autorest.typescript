/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

/**
 * I am root, and I ref a model with no meta
 */
export interface RootWithRefAndNoMeta {
  /**
   * XML will use RefToModel
   */
  refToModel?: ComplexTypeNoMeta;
  /**
   * Something else (just to avoid flattening)
   */
  something?: string;
}

/**
 * I am a complex type with no XML node
 */
export interface ComplexTypeNoMeta {
  /**
   * The id of the res
   */
  id?: string;
}

/**
 * I am root, and I ref a model WITH meta
 */
export interface RootWithRefAndMeta {
  /**
   * XML will use XMLComplexTypeWithMeta
   */
  refToModel?: ComplexTypeWithMeta;
  /**
   * Something else (just to avoid flattening)
   */
  something?: string;
}

/**
 * I am a complex type with XML node
 */
export interface ComplexTypeWithMeta {
  /**
   * The id of the res
   */
  id?: string;
}

/**
 * Data about a slideshow
 */
export interface Slideshow {
  title?: string;
  date?: string;
  author?: string;
  slides?: Slide[];
}

/**
 * A slide in a slideshow
 */
export interface Slide {
  type?: string;
  title?: string;
  items?: string[];
}

export interface ErrorModel {
  status?: number;
  message?: string;
}

/**
 * A barrel of apples.
 */
export interface AppleBarrel {
  goodApples?: string[];
  badApples?: string[];
}

/**
 * A banana.
 */
export interface Banana {
  name?: string;
  flavor?: string;
  /**
   * The time at which you should reconsider eating this banana
   */
  expiration?: Date;
}

/**
 * An enumeration of containers
 */
export interface ListContainersResponse {
  serviceEndpoint: string;
  prefix: string;
  marker?: string;
  maxResults: number;
  containers?: Container[];
  nextMarker: string;
}

/**
 * An Azure Storage container
 */
export interface Container {
  name: string;
  /**
   * Properties of a container
   */
  properties: ContainerProperties;
  /**
   * Dictionary of <string>
   */
  metadata?: { [propertyName: string]: string };
}

/**
 * Properties of a container
 */
export interface ContainerProperties {
  lastModified: Date;
  etag: string;
  leaseStatus?: LeaseStatusType;
  leaseState?: LeaseStateType;
  leaseDuration?: LeaseDurationType;
  publicAccess?: PublicAccessType;
}

/**
 * Storage Service Properties.
 */
export interface StorageServiceProperties {
  /**
   * Azure Analytics Logging settings
   */
  logging?: Logging;
  /**
   * A summary of request statistics grouped by API in hourly aggregates for blobs
   */
  hourMetrics?: Metrics;
  /**
   * a summary of request statistics grouped by API in minute aggregates for blobs
   */
  minuteMetrics?: Metrics;
  /**
   * The set of CORS rules.
   */
  cors?: CorsRule[];
  /**
   * The default version to use for requests to the Blob service if an incoming request's version is not specified. Possible values include version 2008-10-27 and all more recent versions
   */
  defaultServiceVersion?: string;
  /**
   * The Delete Retention Policy for the service
   */
  deleteRetentionPolicy?: RetentionPolicy;
}

/**
 * Azure Analytics Logging settings.
 */
export interface Logging {
  /**
   * The version of Storage Analytics to configure.
   */
  version: string;
  /**
   * Indicates whether all delete requests should be logged.
   */
  delete: boolean;
  /**
   * Indicates whether all read requests should be logged.
   */
  read: boolean;
  /**
   * Indicates whether all write requests should be logged.
   */
  write: boolean;
  /**
   * the retention policy
   */
  retentionPolicy: RetentionPolicy;
}

/**
 * the retention policy
 */
export interface RetentionPolicy {
  /**
   * Indicates whether a retention policy is enabled for the storage service
   */
  enabled: boolean;
  /**
   * Indicates the number of days that metrics or logging or soft-deleted data should be retained. All data older than this value will be deleted
   */
  days?: number;
}

export interface Metrics {
  /**
   * The version of Storage Analytics to configure.
   */
  version?: string;
  /**
   * Indicates whether metrics are enabled for the Blob service.
   */
  enabled: boolean;
  /**
   * Indicates whether metrics should generate summary statistics for called API operations.
   */
  includeAPIs?: boolean;
  /**
   * the retention policy
   */
  retentionPolicy?: RetentionPolicy;
}

/**
 * CORS is an HTTP feature that enables a web application running under one domain to access resources in another domain. Web browsers implement a security restriction known as same-origin policy that prevents a web page from calling APIs in a different domain; CORS provides a secure way to allow one domain (the origin domain) to call APIs in another domain
 */
export interface CorsRule {
  /**
   * The origin domains that are permitted to make a request against the storage service via CORS. The origin domain is the domain from which the request originates. Note that the origin must be an exact case-sensitive match with the origin that the user age sends to the service. You can also use the wildcard character '*' to allow all origin domains to make requests via CORS.
   */
  allowedOrigins: string;
  /**
   * The methods (HTTP request verbs) that the origin domain may use for a CORS request. (comma separated)
   */
  allowedMethods: string;
  /**
   * the request headers that the origin domain may specify on the CORS request.
   */
  allowedHeaders: string;
  /**
   * The response headers that may be sent in the response to the CORS request and exposed by the browser to the request issuer
   */
  exposedHeaders: string;
  /**
   * The maximum amount time that a browser should cache the preflight OPTIONS request.
   */
  maxAgeInSeconds: number;
}

/**
 * signed identifier
 */
export interface SignedIdentifier {
  /**
   * a unique id
   */
  id: string;
  /**
   * The access policy
   */
  accessPolicy: AccessPolicy;
}

/**
 * An Access policy
 */
export interface AccessPolicy {
  /**
   * the date-time the policy is active
   */
  start: Date;
  /**
   * the date-time the policy expires
   */
  expiry: Date;
  /**
   * the permissions for the acl policy
   */
  permission: string;
}

/**
 * An enumeration of blobs
 */
export interface ListBlobsResponse {
  serviceEndpoint?: string;
  containerName: string;
  prefix: string;
  marker: string;
  maxResults: number;
  delimiter: string;
  blobs: Blobs;
  nextMarker: string;
}

export interface Blobs {
  blobPrefix?: BlobPrefix[];
  blob?: Blob[];
}

export interface BlobPrefix {
  name: string;
}

/**
 * An Azure Storage blob
 */
export interface Blob {
  name: string;
  deleted: boolean;
  snapshot: string;
  /**
   * Properties of a blob
   */
  properties: BlobProperties;
  /**
   * Dictionary of <string>
   */
  metadata?: { [propertyName: string]: string };
}

/**
 * Properties of a blob
 */
export interface BlobProperties {
  lastModified: Date;
  etag: string;
  /**
   * Size in bytes
   */
  contentLength?: number;
  contentType?: string;
  contentEncoding?: string;
  contentLanguage?: string;
  contentMD5?: string;
  contentDisposition?: string;
  cacheControl?: string;
  blobSequenceNumber?: number;
  blobType?: BlobType;
  leaseStatus?: LeaseStatusType;
  leaseState?: LeaseStateType;
  leaseDuration?: LeaseDurationType;
  copyId?: string;
  copyStatus?: CopyStatusType;
  copySource?: string;
  copyProgress?: string;
  copyCompletionTime?: Date;
  copyStatusDescription?: string;
  serverEncrypted?: boolean;
  incrementalCopy?: boolean;
  destinationSnapshot?: string;
  deletedTime?: Date;
  remainingRetentionDays?: number;
  accessTier?: AccessTier;
  accessTierInferred?: boolean;
  archiveStatus?: ArchiveStatus;
}

export interface JsonInput {
  id?: number;
}

export interface JsonOutput {
  id?: number;
}

/**
 * Defines headers for Xml_getHeaders operation.
 */
export interface XmlGetHeadersHeaders {
  customHeader?: string;
}

/**
 * Defines values for PublicAccessType.
 */
export type PublicAccessType = "container" | "blob";
/**
 * Defines values for AccessTier.
 */
export type AccessTier =
  | "P4"
  | "P6"
  | "P10"
  | "P20"
  | "P30"
  | "P40"
  | "P50"
  | "Hot"
  | "Cool"
  | "Archive";
/**
 * Defines values for ArchiveStatus.
 */
export type ArchiveStatus =
  | "rehydrate-pending-to-hot"
  | "rehydrate-pending-to-cool";
/**
 * Defines values for LeaseStatusType.
 */
export type LeaseStatusType = "locked" | "unlocked";
/**
 * Defines values for LeaseStateType.
 */
export type LeaseStateType =
  | "available"
  | "leased"
  | "expired"
  | "breaking"
  | "broken";
/**
 * Defines values for LeaseDurationType.
 */
export type LeaseDurationType = "infinite" | "fixed";
/**
 * Defines values for BlobType.
 */
export type BlobType = "BlockBlob" | "PageBlob" | "AppendBlob";
/**
 * Defines values for CopyStatusType.
 */
export type CopyStatusType = "pending" | "success" | "aborted" | "failed";

/**
 * Contains response data for the getComplexTypeRefNoMeta operation.
 */
export type XmlGetComplexTypeRefNoMetaResponse = RootWithRefAndNoMeta & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: RootWithRefAndNoMeta;
  };
};

/**
 * Contains response data for the getComplexTypeRefWithMeta operation.
 */
export type XmlGetComplexTypeRefWithMetaResponse = RootWithRefAndMeta & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: RootWithRefAndMeta;
  };
};

/**
 * Contains response data for the getSimple operation.
 */
export type XmlGetSimpleResponse = Slideshow & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Slideshow;
  };
};

/**
 * Contains response data for the getWrappedLists operation.
 */
export type XmlGetWrappedListsResponse = AppleBarrel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: AppleBarrel;
  };
};

/**
 * Contains response data for the getHeaders operation.
 */
export type XmlGetHeadersResponse = XmlGetHeadersHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The parsed HTTP response headers.
     */
    parsedHeaders: XmlGetHeadersHeaders;
  };
};

/**
 * Contains response data for the getEmptyList operation.
 */
export type XmlGetEmptyListResponse = Slideshow & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Slideshow;
  };
};

/**
 * Contains response data for the getEmptyWrappedLists operation.
 */
export type XmlGetEmptyWrappedListsResponse = AppleBarrel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: AppleBarrel;
  };
};

/**
 * Contains response data for the getRootList operation.
 */
export type XmlGetRootListResponse = Banana[] & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Banana[];
  };
};

/**
 * Contains response data for the getRootListSingleItem operation.
 */
export type XmlGetRootListSingleItemResponse = Banana[] & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Banana[];
  };
};

/**
 * Contains response data for the getEmptyRootList operation.
 */
export type XmlGetEmptyRootListResponse = Banana[] & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Banana[];
  };
};

/**
 * Contains response data for the getEmptyChildElement operation.
 */
export type XmlGetEmptyChildElementResponse = Banana & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Banana;
  };
};

/**
 * Contains response data for the listContainers operation.
 */
export type XmlListContainersResponse = ListContainersResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ListContainersResponse;
  };
};

/**
 * Contains response data for the getServiceProperties operation.
 */
export type XmlGetServicePropertiesResponse = StorageServiceProperties & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: StorageServiceProperties;
  };
};

/**
 * Contains response data for the getAcls operation.
 */
export type XmlGetAclsResponse = SignedIdentifier[] & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: SignedIdentifier[];
  };
};

/**
 * Contains response data for the listBlobs operation.
 */
export type XmlListBlobsResponse = ListBlobsResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ListBlobsResponse;
  };
};

/**
 * Contains response data for the jsonOutput operation.
 */
export type XmlJsonOutputResponse = JsonOutput & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: JsonOutput;
  };
};

/**
 * Optional parameters.
 */
export interface XmlServiceClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /**
   * server parameter
   */
  $host?: string;
  /**
   * Overrides client endpoint.
   */
  endpoint?: string;
}
