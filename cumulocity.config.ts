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
        name: gettext('Dashboards: Reports'),
        module: 'ReportDashboardModule',
        path: '@c8y/ngx-components/report-dashboard',
        description: gettext('Reports list and navigator items reports'),
        scope: 'self'
      },
      {
        name: gettext('Cockpit alarms'),
        module: 'CockpitAlarmsModule',
        path: '@c8y/ngx-components/alarms/cockpit',
        description: gettext('Alarms functionality in cockpit application.'),
        scope: 'self'
      },
      {
        name: gettext('Sensor phone'),
        module: 'SensorPhoneModule',
        path: '@c8y/ngx-components/sensor-phone',
        description: gettext('Dialogs to connect smartphone to platform.'),
        scope: 'self'
      },
      {
        name: gettext('Child devices'),
        module: 'ChildDevicesModule',
        path: '@c8y/ngx-components/child-devices',
        description: gettext('View listing children of devices.'),
        scope: 'self'
      },
      {
        name: gettext('Assets navigator'),
        module: 'AssetsNavigatorModule',
        path: '@c8y/ngx-components/module-federation-exports/assets-navigator',
        description: gettext(
          '"Groups" navigation entry, allowing to navigate through asset hierarchy.'
        ),
        scope: 'self'
      },
      {
        name: gettext('Data point library'),
        module: 'DatapointLibraryModule',
        path: '@c8y/ngx-components/datapoint-library',
        description: gettext('Allows to define certain features of data points.'),
        scope: 'self'
      },
      {
        name: gettext('Bookmarks'),
        module: 'BookmarksModule',
        path: '@c8y/ngx-components/bookmarks',
        description: gettext('Allows to bookmark views.'),
        scope: 'self'
      },
      {
        name: gettext('Location'),
        module: 'LocationTabModule',
        path: '@c8y/ngx-components/location',
        description: gettext('View the location of devices and assets.'),
        scope: 'self'
      },
      {
        name: gettext('Add location'),
        module: 'AddLocationModule',
        path: '@c8y/ngx-components/location',
        description: gettext(
          'Assign a location to devices and assets that currently do not have any location.'
        ),
        scope: 'self-optional'
      },
      {
        name: gettext('Search'),
        module: 'SearchModule',
        path: '@c8y/ngx-components/search',
        description: gettext('Allows to search for assets.'),
        scope: 'self'
      },
      {
        name: gettext('Data point explorer'),
        module: 'DatapointExplorerModule',
        path: '@c8y/ngx-components/datapoint-explorer',
        description: gettext('Enables visualization of data points'),
        scope: 'self'
      },
      {
        name: gettext('Dashboards: Dashboard manager'),
        module: 'DashboardManagerModule',
        path: '@c8y/ngx-components/dashboard-manager',
        description: gettext('Type dashboards manager.'),
        scope: 'self'
      },
      {
        name: gettext('Dashboards: Add device dashboards'),
        module: 'AddDeviceContextDashboardModule',
        path: '@c8y/ngx-components/context-dashboard/device/add',
        description: gettext('Allows to add dashboards on device level.'),
        scope: 'self'
      },
      {
        name: gettext('Dashboards: View device dashboards'),
        module: 'ViewDeviceContextDashboardModule',
        path: '@c8y/ngx-components/context-dashboard/device/view',
        description: gettext('Allows to view dashboards on device level.'),
        scope: 'self'
      },
      {
        name: gettext('Dashboards: Add asset/group dashboards'),
        module: 'AddAssetContextDashboardModule',
        path: '@c8y/ngx-components/context-dashboard/asset/add',
        description: gettext('Allows to add dashboards on asset/group level.'),
        scope: 'self'
      },
      {
        name: gettext('Dashboards: View asset/group dashboards'),
        module: 'ViewAssetContextDashboardModule',
        path: '@c8y/ngx-components/context-dashboard/asset/view',
        description: gettext('Allows to view dashboards on asset/group level.'),
        scope: 'self'
      },
      {
        name: gettext('Dashboards: Cockpit home dashboard'),
        module: 'CockpitDashboardModule',
        path: '@c8y/ngx-components/context-dashboard/cockpit-home-dashboard',
        description: gettext(
          'The home dashboard of the cockpit app, shown when cockpit is opened.'
        ),
        scope: 'self'
      },
      {
        name: gettext('Dashboard details advanced tab'),
        module: 'DashboardDetailsAdvancedTabModule',
        path: '@c8y/ngx-components/dashboard-details-advanced-tab',
        description: gettext('Dashboard details tab for advanced settings.'),
        scope: 'self'
      },
      {
        name: gettext('Exports'),
        module: 'exportsProviders',
        path: '@c8y/ngx-components/exports',
        description: gettext('Exports'),
        scope: 'self'
      },
      {
        name: gettext('Computed asset properties'),
        module: 'computedAssetPropertiesProviders',
        path: '@c8y/ngx-components/computed-asset-properties',
        description: gettext('Set of predefined computed asset properties.'),
        scope: 'self'
      },
      {
        name: gettext('Group breadcrumbs'),
        module: 'groupBreadcrumbsProviders',
        path: '@c8y/ngx-components/group-breadcrumbs',
        description: gettext('Breadcrumbs extension to enhance navigation between groups.'),
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
