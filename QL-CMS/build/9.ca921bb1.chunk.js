(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{2332:function(e,t,n){"use strict";var a=n(5),u=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n(6)),r=a(n(1)),c=n(24),i=n(7),o=u(n(269)),s=(0,r.lazy)((function(){return Promise.all([n.e(1),n.e(2)]).then(n.t.bind(null,2421,7))})),d=(0,r.lazy)((function(){return n.e(0).then(n.t.bind(null,2330,7))})),f=function(e){var t=(0,c.useRouteMatch)().url,n=(0,c.useParams)().slug;return r.default.createElement(r.Suspense,{fallback:r.default.createElement(i.LoadingIndicatorPage,null)},r.default.createElement(c.Switch,null,r.default.createElement(c.Route,{path:"".concat(t,"/ctm-configurations/edit-settings/:type"),render:function(t){return r.default.createElement(i.CheckPagePermissions,{permissions:o.default.singleTypesConfigurations},r.default.createElement(d,(0,l.default)({},e,t,{slug:n})))}}),r.default.createElement(c.Route,{path:"".concat(t),render:function(t){return r.default.createElement(s,(0,l.default)({},e,t,{slug:n}))}})))};t.default=f}}]);