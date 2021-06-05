import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'agua-frontend';
  items = ['bryan','alejandro','sandoval','illicachi'];
  power =10;

  additem(){
    this.items.push('nuevo item');
  }

  deleteItem(index: number){
    this.items.splice(index,1);
  }

}
