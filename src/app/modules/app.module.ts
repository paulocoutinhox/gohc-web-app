import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppMainComponent } from "../components/app-main/app-main.component";
import { GlobalService } from "../services/GlobalService";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { AppHeaderComponent } from "../components/app-header/app-header.component";
import { AppFooterComponent } from "../components/app-footer/app-footer.component";
import { NotFoundComponent } from "../components/not-found/not-found.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { TimestampFormat } from "../components/pipes/timestampFormat";
import { ChartsModule } from "ng2-charts/ng2-charts";
import { AppRoutingModule } from "./app-routing.module";
import { ProgressService } from "../services/ProgressService";
import { HealthcheckListComponent } from "../components/healthcheck-list/healthcheck-list.component";
import { HealthcheckService } from "../services/HealthcheckService";
import { PingFormat } from "../components/pipes/pingFormat";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { AboutComponent } from "../components/about/about.component";
import { SystemSettingsComponent } from "../components/system-settings/system-settings.component";
import { SystemkService } from "../services/SystemService";

toastr.options = {timeOut: 5000, progressBar: true, hideDuration: 300, positionClass: 'toast-top-center'};

@NgModule({
	declarations: [
		AppMainComponent,
		HomeComponent,
		AppHeaderComponent,
		AppFooterComponent,
		HealthcheckListComponent,
		NotFoundComponent,
		DashboardComponent,
		AboutComponent,
		SystemSettingsComponent,
		TimestampFormat,
		PingFormat
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule,
		ChartsModule,
		AppRoutingModule
	],
	bootstrap: [
		AppMainComponent
	],
	providers: [
		GlobalService,
		ProgressService,
		HealthcheckService,
		SystemkService
	]
})

export class AppModule {
}
