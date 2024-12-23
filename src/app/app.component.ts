import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GraficasTerrenoComponent } from "./graficas-terreno/graficas-terreno.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GraficasTerrenoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'WMTest';
}
