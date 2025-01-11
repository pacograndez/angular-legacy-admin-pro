import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageRoutingModule } from './pages/page.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

const routes: Routes = [
  // path: '/auth' AuthRoutingModule
  // path: '/dashboard' PageRoutingModule
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PageRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
