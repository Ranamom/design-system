import * as jestConfig from './jest.config';
import { Config } from '@stencil/core';
import { getStencilConfig } from '@ovhcloud/ods-stencil/libraries/stencil-core';

const args = process.argv.slice(2);

const config: Config = getStencilConfig({
  namespace: 'osds-flag',
  args,
  jestConfig: jestConfig.default,
  reactOutput: {
    componentCorePackage: '@ovhcloud/ods-stencil/components/flag',
    // exclude peer dependencies that corresponds to www usage
    excludeComponents: []
  },
  vueOutput: {
    componentCorePackage: '@ovhcloud/ods-stencil/components/flag',
    excludeComponents: []
  },
  dev: {
    globalScript: 'src/global.dev.ts',
  },
  prod: {
    globalScript: 'src/global.prod.ts'
  }
});

config.outputTargets?.forEach(output => {
  if (output.type === 'dist-custom-elements' || output.type === 'www') {
    output.copy = output.copy || [];
    output.copy.push(
      {
        src: '../../../../../node_modules/flag-icons/flags/4x3/',
        dest: `${output.type === 'dist-custom-elements' ? 'dist/' : ''}flags/flags-4x3/`,
      }
    );
  }
  if (output.type === 'www') {
    output.copy = output.copy || [];
    output.copy.push({
      src: '../../../../../node_modules/flag-icons/flags/4x3/',
      dest: 'flags-custom-path/'
    });
  }
});

export { config };