import { Config } from '@stencil/core';
import { getStencilConfig } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import * as jestConfig from './jest.config';

const args = process.argv.slice(2);

export const config: Config = {
  ...getStencilConfig({
    namespace: 'osds-radio-button',
    args,
    jestConfig: jestConfig.default,
    reactOutput: {
      componentCorePackage: '@ovhcloud/ods-stencil/components/radio-button',
      // exclude peer dependencies that corresponds to www usage
      excludeComponents: []
    },
    vueOutput: {
      componentCorePackage: '@ovhcloud/ods-stencil/components/radio-button',
      excludeComponents: []
    },
    dev: {
      globalScript: 'src/global.dev.ts',
    },
    prod: {
      globalScript: 'src/global.prod.ts'
    }
  }),
};