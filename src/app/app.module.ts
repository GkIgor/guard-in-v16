import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthComponent } from "./pages/auth/auth.component";
import { HomeComponent } from "./pages/home/home.component";

import { CookieService } from "ngx-cookie-service";
import { NavbarComponent } from './pages/home/navbar/navbar.component';

@NgModule({
	declarations: [AppComponent, AuthComponent, HomeComponent, NavbarComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [CookieService],
	bootstrap: [AppComponent],
})
export class AppModule {}
