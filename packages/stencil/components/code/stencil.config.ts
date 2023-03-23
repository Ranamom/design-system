import { Config } from '@stencil/core';
import { getStencilConfig } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import * as jestConfig from './jest.config';

const args = process.argv.slice(2);

export const config: Config = getStencilConfig({
  namespace: 'osds-code',
  args,
  jestConfig: jestConfig.default,
  reactOutput: {
    componentCorePackage: '@ovhcloud/ods-stencil/components/code',
    // exclude peer dependencies that corresponds to www usage
    excludeComponents: ['osds-button', 'osds-icon']
  },
  vueOutput: {
    componentCorePackage: '@ovhcloud/ods-stencil/components/code',
    excludeComponents: ['osds-button', 'osds-icon']
  },
  dev: {
    globalScript: 'src/global.dev.ts',
  },
  prod: {
    globalScript: 'src/global.prod.ts'
  }
});