import { Route } from '@angular/router';

import { DashboardComponent } from './../dashboard/dashboard.component';

export const fallbackRoute: Route = {
  path: '**', component: DashboardComponent
};
