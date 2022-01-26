import { defineConfig } from 'umi';
export default defineConfig({
  title: '商鼎云',
  base: '/',
  publicPath: '/',
  outputPath: '/dist/',
  hash: true,
  history: {
    type: 'browser',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  // 在dev环境使用webpack5新模式提升热更新速度(如果开启需要注释:16代码)
  // mfsu: {},
  extraBabelIncludes: [
    '@nftstorage/ipfs-cluster',
    'ipfs-http-client',
    'web3.storage',
    'ipfs-car/blockstore/memory',
    'ipfs-car/pack',
    'ipfs-car/unpack'],
  forkTSChecker: {
    typescript: true,
  },
  // fastRefresh: {},
  ignoreMomentLocale: true,
  dva: {
    immer: true,
  },
  dynamicImport: {
    loading: '@/components/Loading/index',
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    // umi 官方bug, 开启会导致报错查找不到国际化文件
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  antd: {
    dark: false,
    compact: true,
  },
  cssLoader: {
    localsConvention: 'camelCase',
  },
  chainWebpack(config: any) {
    // 过滤掉moment中不使用的国际化文件
    config
      .plugin('replace')
      .use(require('webpack').ContextReplacementPlugin)
      .tap(() => {
        return [/^\.\/locale$/, /moment$/];
      });
  },
});
