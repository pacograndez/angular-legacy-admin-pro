import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { GraficaComponent } from "./grafica/grafica.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromiseComponent } from "./promise/promise.component";
import { RxjsComponent } from "./rxjs/rxjs.component";

const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data: {title: 'Dashboard'} },
            { path: 'progress', component: ProgressComponent, data: {title: 'ProgressBar'} },
            { path: 'grafica', component: GraficaComponent, data: {title: 'Grafica'} },
            { path: 'account-settings', component: AccountSettingsComponent, data: {title: 'Account Settings'} },
            { path: 'promise', component: PromiseComponent, data: {title: 'Promises'} },
            { path: 'rxjs', component: RxjsComponent, data: {title: 'RxJs'} }
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule { }