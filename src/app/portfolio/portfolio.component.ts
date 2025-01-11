import { Component } from '@angular/core';
import { DarkstarComponent } from '../darkstar/darkstar.component';

@Component({
  selector: 'app-portfolio',
  imports: [DarkstarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})

export class PortfolioComponent {
imgSrc:any = ''
isClicked:boolean = false
open(myImg:any){
  this.imgSrc = myImg
  this.isClicked = true
}
close(){
  document.querySelector('.layer')?.classList.add('d-none')
  this.isClicked = false
}
}
