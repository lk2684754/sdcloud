import { setElectronLocalStorage } from './utils/common';

// 应用render到dom之前触发
export function render(oldRender: any) {
  return oldRender();
}

// 运行时修改路由
export function patchRoutes(routes: any) {
  return routes;
}

// 在初始加载和路由切换时做一些事情
export async function onRouteChange(arg: any) {
  let { routes, matchedRoutes, location, action } = arg;
  setElectronLocalStorage();
  // 根据路由配置动态设置页面标题
  if (matchedRoutes.length) {
    let pageTitle = matchedRoutes[matchedRoutes.length - 1].route.title;
    if (pageTitle) {
      document.title = pageTitle;
    }
  }
}
