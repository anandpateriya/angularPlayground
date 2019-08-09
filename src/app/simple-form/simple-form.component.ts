import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {

 
  searchFormGroup: FormGroup;
  constructor() { }
  onSubmit(){
    console.log("Validation Status - "+this.searchFormGroup.valid);
  };
  ngOnInit() {
    this.searchFormGroup = new FormGroup({
      fromStation : new FormControl('',[Validators.minLength(10), Validators.maxLength(25)]),
      toStation  : new FormControl(''), 
    });
    this.onFormChanges();
  }

  onFormChanges(): void{
    this.searchFormGroup.get('toStation').valueChanges.subscribe(val => {
      console.log("tostation value changes - "+val);
    });

    this.searchFormGroup.get('fromStation').valueChanges.subscribe(val => {
      console.log("fromStation value changes - "+val);
    });
  }
  get f() { return this.searchFormGroup.controls; }

}
