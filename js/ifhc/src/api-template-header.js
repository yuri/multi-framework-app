/**
 * @description
 * ifhc Library
 * The library that allows different Single Page Applications (SPAs) to be able to reside in harmony on a single browser window via
 * I--F--R--A--M--E--S!!!.
 */
var ifhc = (function (window) {

  'use strict';

  /**
   * TODO need to write base64 encoder for browsers < IE 10
   */
  if (typeof(window.btoa) === 'undefined') {
    console.error('cannot instantiate ifhc: base64 encoder not available');
    return;
  }

  /**
   * The public API object to be hoisted to the global scope / window
   * @type {null}
   */
  var api = null;

  /**
   * Check if global scoped API is defined
   */
  if (typeof (ifhc) !== 'undefined') {
    api = ifhc;
  }

  /**
   * Otherwise assign window scoped API
   */
  else if (typeof (window.ifhc) !== 'undefined') {
    api = window.ifhc;
  }

  /**
   * No brainer, define a new object if all fails :-)
   */
  api = api || {};

  /**
   * Version (DUH)
   * @type {string}
   */
  api.version = "1.0.1";

  /**
   * Either
   */
  ifhc = window.ifhc = api;

  /**
   * Base64 encoder that is used in the API
   * @type {Function}
   */
  var base64Encoder = window.btoa;