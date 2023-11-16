// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/hxadmin/Desktop/my-hooks/node_modules/.pnpm/@umijs+runtime@3.5.41_react@16.14.0/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')})],
    "component": ((props) => dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ '/Users/hxadmin/Desktop/my-hooks/node_modules/.pnpm/@umijs+preset-dumi@1.1.54_react-dom@18.2.0_react-router@6.18.0_react@18.2.0_typescript@5.2.2_umi@3.5.41/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { usePrefersColor, context } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          },
          loading: () => null,
        }))()
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/hxadmin/Desktop/my-hooks/node_modules/.pnpm/dumi-theme-default@1.1.24_@umijs+preset-dumi@1.1.54_react-dom@18.2.0_react@18.2.0/node_modules/dumi-theme-default/es/layout.js')})],
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__index.md' */'/Users/hxadmin/Desktop/my-hooks/docs/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1700059304114,
          "title": "首页",
          "hero": {
            "image": "/short-logo.png",
            "desc": "<div class=\"markdown\"><p>印客学院 React 业务 Hooks</p></div>",
            "actions": [
              {
                "text": "指南",
                "link": "/guide"
              },
              {
                "text": "Hooks 列表",
                "link": "/hooks"
              }
            ]
          },
          "footer": "<div class=\"markdown\"><p>Copyright (c) © 2023 by encode studio, All Rights Reserved</p></div>",
          "slugs": []
        },
        "title": "首页 - my-hooks"
      },
      {
        "path": "/guide",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__guide__index.md' */'/Users/hxadmin/Desktop/my-hooks/docs/guide/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/guide/index.md",
          "updatedTime": 1700059960391,
          "slugs": [
            {
              "depth": 1,
              "value": "guide",
              "heading": "guide"
            }
          ],
          "title": "guide",
          "nav": {
            "path": "/guide",
            "title": "Guide"
          }
        },
        "title": "guide - my-hooks"
      },
      {
        "path": "/hooks/use-toggle",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useToggle__index.md' */'/Users/hxadmin/Desktop/my-hooks/packages/hooks/src/useToggle/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useToggle/index.md",
          "updatedTime": 1700061347095,
          "nav": {
            "path": "/hooks",
            "title": "UseToggle"
          },
          "slugs": [],
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-toggle",
            "title": "UseToggle"
          },
          "title": "UseToggle"
        },
        "title": "UseToggle - my-hooks"
      },
      {
        "path": "/hooks",
        "meta": {},
        "exact": true,
        "redirect": "/hooks/use-toggle"
      }
    ],
    "title": "my-hooks",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
