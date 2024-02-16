import { Component } from "@angular/core";
import { initFlowbite } from "flowbite";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
})
export class AppComponent {
	title = "guard-in-v16";

	ngOnInit(): void {
		initFlowbite();
	}
}
