import type { ConfigurationOptions } from '@c8y/devkit';
import { version, description, author, name, license } from './package.json';
import { gettext } from '@c8y/ngx-components/gettext';
import { cockpitWidgetsExports } from '@c8y/ngx-components/widgets/cockpit-exports';

const defaultDescription = gettext(
  'The Cockpit application provides you with options to manage and monitor Internet of Things (IoT) assets and data from a business perspective.'
);

export default {
  runTime: {
    author,
    description: description || defaultDescription,
    version,
    name,
    globalTitle: 'Cumulocity',
    tabsHorizontal: true,
    rightDrawer: true,
    breadcrumbs: false,
    sensorAppOneLink: 'http://onelink.to/pca6qe',
    sensorPhone: true,
    contentSecurityPolicy:
      "base-uri 'none'; default-src 'self' 'unsafe-inline' http: https: ws: wss:; connect-src 'self' http: https: ws: wss: data:;  script-src 'self' *.bugherd.com *.twitter.com *.twimg.com *.aptrinsic.com 'unsafe-inline' 'unsafe-eval' data: blob:; style-src * 'unsafe-inline' blob:; img-src * data: blob:; font-src * data:; frame-src *; worker-src 'self' blob:;",
    dynamicOptionsUrl: true,
    contextHelp: true,
    license,
    upgrade: true,
    importMap: {
      lit: '@c8y/html-repo/lit',
      leaflet: '@c8y/html-repo/leaflet',
      echarts: '@c8y/html-repo/echarts',
      angular: '@c8y/html-repo/angular',
      styles: '@c8y/html-repo/styles',
      fetch: '@c8y/html-repo/fetch'
    },
    exports: [
      ...cockpitWidgetsExports,
      {
        name: 'Dashboards: Reports',
        module: 'ReportDashboardModule',
        path: '@c8y/ngx-components/report-dashboard',
        description: 'Reports list and navigator items reports',
        scope: 'self'
      },
      {
        name: 'Cockpit alarms',
        module: 'CockpitAlarmsModule',
        path: '@c8y/ngx-components/alarms/cockpit',
        description: 'Alarms functionality in cockpit application.',
        scope: 'self'
      },
      {
        name: 'Sensor phone',
        module: 'SensorPhoneModule',
        path: '@c8y/ngx-components/sensor-phone',
        description: 'Dialogs to connect smartphone to platform.',
        scope: 'self'
      },
      {
        name: 'Child devices',
        module: 'ChildDevicesModule',
        path: '@c8y/ngx-components/child-devices',
        description: 'View listing children of devices.',
        scope: 'self'
      },
      {
        name: 'Assets navigator',
        module: 'AssetsNavigatorModule',
        path: '@c8y/ngx-components/assets-navigator',
        description: '"Groups" navigation entry, allowing to navigate through asset hierarchy.',
        scope: 'self'
      },
      {
        name: 'Data point library',
        module: 'DatapointLibraryModule',
        path: '@c8y/ngx-components/datapoint-library',
        description: 'Allows to define certain features of data points.',
        scope: 'self'
      },
      {
        name: 'Bookmarks',
        module: 'BookmarksModule',
        path: '@c8y/ngx-components/bookmarks',
        description: 'Allows to bookmark views.',
        scope: 'self'
      },
      {
        name: 'Location',
        module: 'LocationTabModule',
        path: '@c8y/ngx-components/location',
        description: 'View the location of devices and assets.',
        scope: 'self'
      },
      {
        name: 'Add location',
        module: 'AddLocationModule',
        path: '@c8y/ngx-components/location',
        description:
          'Assign a location to devices and assets that currently do not have any location.',
        scope: 'self-optional'
      },
      {
        name: 'Search',
        module: 'SearchModule',
        path: '@c8y/ngx-components/search',
        description: 'Allows to search for assets.',
        scope: 'self'
      },
      {
        name: 'Data point explorer',
        module: 'DatapointExplorerModule',
        path: '@c8y/ngx-components/datapoint-explorer',
        description: 'Enables visualization of data points',
        scope: 'self'
      },
      {
        name: 'Dashboards: Dashboard manager',
        module: 'DashboardManagerModule',
        path: '@c8y/ngx-components/dashboard-manager',
        description: 'Type dashboards manager.',
        scope: 'self'
      },
      {
        name: 'Dashboards: Add device dashboards',
        module: 'AddDeviceContextDashboardModule',
        path: '@c8y/ngx-components/context-dashboard/device/add',
        description: 'Allows to add dashboards on device level.',
        scope: 'self'
      },
      {
        name: 'Dashboards: View device dashboards',
        module: 'ViewDeviceContextDashboardModule',
        path: '@c8y/ngx-components/context-dashboard/device/view',
        description: 'Allows to view dashboards on device level.',
        scope: 'self'
      },
      {
        name: 'Dashboards: Add asset/group dashboards',
        module: 'AddAssetContextDashboardModule',
        path: '@c8y/ngx-components/context-dashboard/asset/add',
        description: 'Allows to add dashboards on asset/group level.',
        scope: 'self'
      },
      {
        name: 'Dashboards: View asset/group dashboards',
        module: 'ViewAssetContextDashboardModule',
        path: '@c8y/ngx-components/context-dashboard/asset/view',
        description: 'Allows to view dashboards on asset/group level.',
        scope: 'self'
      },
      {
        name: 'Dashboards: Cockpit home dashboard',
        module: 'CockpitDashboardModule',
        path: '@c8y/ngx-components/context-dashboard/cockpit-home-dashboard',
        description: 'The home dashboard of the cockpit app, shown when cockpit is opened.',
        scope: 'self'
      },
      {
        name: 'Dashboard details advanced tab',
        module: 'DashboardDetailsAdvancedTabModule',
        path: '@c8y/ngx-components/dashboard-details-advanced-tab',
        description: 'Dashboard details tab for advanced settings.',
        scope: 'self'
      },
      {
        name: 'Exports',
        module: 'exportsProviders',
        path: '@c8y/ngx-components/exports',
        description: 'Exports',
        scope: 'self'
      }
    ],
    remotes: {
      [`smart-rules@${version.split('.')[0]}-stable`]: ['AnalyticsInstanceModule']
    }
  },
  buildTime: {
    federation: [
      '@angular/animations',
      '@angular/cdk',
      '@angular/common',
      '@angular/compiler',
      '@angular/core',
      '@angular/forms',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/router',
      '@angular/upgrade',
      '@c8y/client',
      '@c8y/ngx-components',
      'angular',
      'ngx-bootstrap',
      '@ngx-translate/core',
      '@ngx-formly/core'
    ]
  }
} as const satisfies ConfigurationOptions;
