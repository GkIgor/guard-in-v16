import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IsAuthenticateGuard } from "./is-authenticate.guard";
import { AuthComponent } from "./pages/auth/auth.component";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
	{
		path: "",
		redirectTo: "home",
		pathMatch: "full",
	},
	{
		path: "home",
		component: HomeComponent,
		canActivate: [IsAuthenticateGuard],
	},
	{
		path: "auth",
		children: [
			{
				path: "login",
				component: AuthComponent,
			},
			{
				path: "",
				redirectTo: "login",
				pathMatch: "full",
			},
		],
	},
	{
		path: "**",
		redirectTo: "home",
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
