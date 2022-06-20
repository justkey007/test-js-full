import { Route } from '@angular/router';
import { TimeoutResolver } from './pages/timeout/timeout.resolver';

export const appRoutes: Route[] = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'timeout',
    resolve: { data: TimeoutResolver },
    loadChildren: () =>
      import('./pages/timeout/timeout.module').then((m) => m.TimeoutModule),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];
