/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as JsonImport } from './routes/json'
import { Route as AboutImport } from './routes/about'
import { Route as DynamicImport } from './routes/_dynamic'
import { Route as IndexImport } from './routes/index'
import { Route as DynamicParamImport } from './routes/dynamic/$param'

// Create/Update Routes

const JsonRoute = JsonImport.update({
  path: '/json',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const DynamicRoute = DynamicImport.update({
  id: '/_dynamic',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DynamicParamRoute = DynamicParamImport.update({
  path: '/dynamic/$param',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_dynamic': {
      id: '/_dynamic'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof DynamicImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/json': {
      id: '/json'
      path: '/json'
      fullPath: '/json'
      preLoaderRoute: typeof JsonImport
      parentRoute: typeof rootRoute
    }
    '/dynamic/$param': {
      id: '/dynamic/$param'
      path: '/dynamic/$param'
      fullPath: '/dynamic/$param'
      preLoaderRoute: typeof DynamicParamImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof DynamicRoute
  '/about': typeof AboutRoute
  '/json': typeof JsonRoute
  '/dynamic/$param': typeof DynamicParamRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof DynamicRoute
  '/about': typeof AboutRoute
  '/json': typeof JsonRoute
  '/dynamic/$param': typeof DynamicParamRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_dynamic': typeof DynamicRoute
  '/about': typeof AboutRoute
  '/json': typeof JsonRoute
  '/dynamic/$param': typeof DynamicParamRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '' | '/about' | '/json' | '/dynamic/$param'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '' | '/about' | '/json' | '/dynamic/$param'
  id: '__root__' | '/' | '/_dynamic' | '/about' | '/json' | '/dynamic/$param'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DynamicRoute: typeof DynamicRoute
  AboutRoute: typeof AboutRoute
  JsonRoute: typeof JsonRoute
  DynamicParamRoute: typeof DynamicParamRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DynamicRoute: DynamicRoute,
  AboutRoute: AboutRoute,
  JsonRoute: JsonRoute,
  DynamicParamRoute: DynamicParamRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_dynamic",
        "/about",
        "/json",
        "/dynamic/$param"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_dynamic": {
      "filePath": "_dynamic.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/json": {
      "filePath": "json.tsx"
    },
    "/dynamic/$param": {
      "filePath": "dynamic/$param.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
