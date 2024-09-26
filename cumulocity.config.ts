import type { ConfigurationOptions } from '@c8y/devkit';
import { version, description, author, name } from './package.json';
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
      "base-uri 'none'; default-src 'self' 'unsafe-inline' http: https: ws: wss:; connect-src 'self' http: https: ws: wss: data:;  script-src 'self' *.bugherd.com *.twitter.com *.twimg.com *.aptrinsic.com 'unsafe-inline' 'unsafe-eval' data:; style-src * 'unsafe-inline' blob:; img-src * data: blob:; font-src * data:; frame-src *; worker-src 'self' blob:;",
    dynamicOptionsUrl: true,
    contextHelp: true,
    upgrade: true,
    exports: [
      ...cockpitWidgetsExports,
      {
        name: 'Reports',
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
      }
    ]
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
