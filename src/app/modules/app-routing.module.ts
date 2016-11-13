import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { NotFoundComponent } from "../components/not-found/not-found.component";
import { HealthcheckListComponent } from "../components/healthcheck-list/healthcheck-list.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { AboutComponent } from "../components/about/about.component";
import { SystemSettingsComponent } from "../components/system-settings/system-settings.component";

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'home', component: HomeComponent
	},
	{
		path: 'about', component: AboutComponent
	},
	{
		path: 'healthcheck/list', component: HealthcheckListComponent
	},
	{
		path: 'dashboard', component: DashboardComponent
	},
	{
		path: 'system/settings', component: SystemSettingsComponent
	},
	{
		path: '**',
		component: NotFoundComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule {
}