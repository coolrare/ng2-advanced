import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, Route,  Routes,  RouterModule} from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';

import { fallbackRoute } from './shared/fallback-route';

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cards/:type', component: CardsComponent },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      fallbackRoute
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
