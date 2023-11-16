import {menus} from './menus'
export default {
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none', 
    exclude: [],
  },
  history: { type: 'hash' },
  extraBabelPlugins: [ // 添加babel配置
    [
      'babel-plugin-import', // 实现按需加载 
      {
        libraryName: '@alifd/next', // 按需加载的组件库的名称 
        style: false, // 不加载组件相关的css
      },
      'fusion', // 一个ui组件库
    ],
  ],
  mode: 'site',
  dynamicImport: {},
  manifest: {},
  hash: true,
  alias: {// 别名
    // cassieHooks: process.cwd() + '/packages/hooks/src/index.ts',
    // ['cassie-hooks']: process.cwd() + '/packages/hooks/src/index.ts',
  },
  resolve: { // 需要引入站点的内容：docs和packages/hooks/src
    includes: ['docs', 'packages/hooks/src'],
  },
  navs: [ // 右上导航
    { title: '指南', path: '/guide' }, // 约定式路由，对应 doc/guide/index.md 
    { title: 'Hooks', path: '/hooks' }, 
  ],
  menus: {// 左侧菜单
    '/': [
      {
        title: '首页',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: '介绍',
        path: '/guide',
      },
    ],
    '/hooks': menus,
  },
}