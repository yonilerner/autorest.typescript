/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";

/**
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  status?: number;
  message?: string;
}

/**
 * An interface representing AutoRestSwaggerBATFileServiceOptions.
 */
export interface AutoRestSwaggerBATFileServiceOptions extends ServiceClientOptions {
  baseUri?: string;
}

/**
 * Contains response data for the getFile operation.
 */
export type FilesGetFileResponse = {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always undefined in node.js.
   */
  blobBody?: Promise<Blob>;

  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always undefined in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse;
};

/**
 * Contains response data for the getFileLarge operation.
 */
export type FilesGetFileLargeResponse = {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always undefined in node.js.
   */
  blobBody?: Promise<Blob>;

  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always undefined in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse;
};

/**
 * Contains response data for the getEmptyFile operation.
 */
export type FilesGetEmptyFileResponse = {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always undefined in node.js.
   */
  blobBody?: Promise<Blob>;

  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always undefined in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse;
};
