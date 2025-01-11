import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-about',
  imports: [NavComponent, StarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
