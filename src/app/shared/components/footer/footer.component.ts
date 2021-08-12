import { Component, OnInit } from '@angular/core';
import {FormControl, Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  emailField:FormControl; //emailField de tipo FormControl

  constructor() {
    this.emailField = new FormControl('alejandro',[
      Validators.required,
      //Validators.minLength(4),
      //Validators.maxLength(10)
      Validators.email

    ]);
    //***** permite escuchar los cambios que sucedan ****
    //this.emailField.valueChanges.subscribe(value=> {
    //  console.log(value);
    //});
    //***** frin de permite escuchar los cambios que sucedan ****
   }

  ngOnInit(): void {
  }

  sendMail(){
    //valido si el campo es valido que imprima el valor
    if(this.emailField.valid){
      console.log(this.emailField.value); //imprimo el valor sin la necesidad de suscribirme
    }
  }

}
