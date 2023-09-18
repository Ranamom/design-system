import { Config } from '@stencil/core';
import { getStencilConfig } from '@ovhcloud/ods-common-stencil';
import * as jestConfig from './jest.config';

const args = process.argv.slice(2);

export const config: Config = getStencilConfig({
  namespace: 'osds-datepicker',
  args,
  jestConfig: jestConfig.default,
  reactOutput: {
    componentCorePackage: '@ovhcloud/ods-component-datepicker',
    excludeComponents: [
      'osds-input',
      'osds-icon',
      'osds-spinner',
      'osds-textarea',
      'osds-link',
      'osds-tooltip',
      'osds-text',
    ]
  },
  vueOutput: {
    componentCorePackage: '@ovhcloud/ods-component-datepicker',
    excludeComponents: [
      'osds-input',
      'osds-icon',
      'osds-spinner',
      'osds-textarea',
      'osds-link',
      'osds-tooltip',
      'osds-text',
    ]
  },
  dev: {
    globalScript: 'src/global.dev.ts',
  },
  prod: {
    globalScript: 'src/global.prod.ts'
  },
  test: {
    globalScript: 'src/global.test.ts'
  }
});