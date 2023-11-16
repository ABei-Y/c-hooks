// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!/Users/hxadmin/Desktop/my-hooks/packages/hooks/src/useToggle/demo/demo1.tsx?dumi-raw-code';

export default {
  'usetoggle-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/hxadmin/Desktop/my-hooks/packages/hooks/src/useToggle/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"cassie-hooks":{"version":"0.1.0"}},"identifier":"usetoggle-demo1"},
  },
};
