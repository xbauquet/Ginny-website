import {Component} from '@angular/core';
import {ThemeService} from "./theme.service";

export enum App {
  CI = "CI",
  COMPANION = "COMPANION"
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  App = App;

  theme: "light" | "dark" = "light";
  selectedApp = App.CI;

  constructor(private themeService: ThemeService) {
    this.themeService.theme.subscribe(t => this.theme = t);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
