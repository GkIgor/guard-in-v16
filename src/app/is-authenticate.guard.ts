import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Injectable({ providedIn: "root" })
export class IsAuthenticateGuard implements CanActivate {
	constructor(
		private cookies: CookieService,
		private router: Router,
	) {}
	canActivate() {
		const token = this.cookies.get("_AUTH_TOKEN");
		const reqFakeHttp = (): Promise<boolean> =>
			new Promise((resolve) => {
				setTimeout(() => {
					if (!token) {
						this.router.navigate(["/auth"]);
						resolve(false);
					}
					resolve(true);
				}, 2000);
			});
		return reqFakeHttp();
	}
}
