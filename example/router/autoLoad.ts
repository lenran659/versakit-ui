/*
 * @Author: Jannik
 * @Email: Jannik@1337741710@qq.com
 * @Date: 2024-08-02 07:27:02
 * @Last Modified time: 2024-08-02 07:27:02
 * @Description: 自动加载路由
 */
import { type RouteRecordRaw } from 'vue-router'

const layouts = import.meta.glob('../layout/*.vue', { eager: true })
const views = import.meta.glob('../views/**/*.vue', { eager: true })

function autoLoad() {
  const lauyoutRoutes = [] as RouteRecordRaw[]

  Object.entries(layouts).forEach(([file, module]: any) => {
    const routes = getRouteByModule(file, module)

    routes.children = getChildrenRoutes()

    lauyoutRoutes.push(routes)
  })

  return lauyoutRoutes
}

function getChildrenRoutes() {
  const allRoutes = [] as RouteRecordRaw[]

  Object.entries(views).forEach(([file, module]: any) => {
    const routes = getRouteByModule(file, module)
    allRoutes.push(routes)
  })

  return allRoutes
}

function getRouteByModule(file: string, module: any) {
  const name = file.replace(/.+layout|.+views|\.vue/gi, '')

  const route = {
    path: `${name}`,
    component: module.default,
  } as RouteRecordRaw

  return route
}

export default autoLoad()
