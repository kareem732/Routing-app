import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DarkstarComponent } from '../darkstar/darkstar.component';

@Component({
  selector: 'app-contact',
  imports: [DarkstarComponent,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
 data!:string ;
 data2!:string ;
 data3!:string ;
 data4!:string ;
}
