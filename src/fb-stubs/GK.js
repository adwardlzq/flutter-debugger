/**
 * Copyright 2018-present Facebook.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @format
 */

export type GKID = string;

export const TEST_PASSING_GK = 'TEST_PASSING_GK';
export const TEST_FAILING_GK = 'TEST_FAILING_GK';
const whitelistedGKs: Array<GKID> = ['flipper_crash_reporter_plugin'];

export default class GK {
  static init() {}

  static get(id: GKID): boolean {
    if (process.env.NODE_ENV === 'test' && id === TEST_PASSING_GK) {
      return true;
    }
    if (whitelistedGKs.includes(id)) {
      return true;
    }
    return false;
  }

  static serializeGKs() {
    return '';
  }
}
