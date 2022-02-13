import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms"

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  form = new FormGroup({
    "name": new FormControl("", Validators.required),
    "email": new FormControl("", Validators.required),
    "subject": new FormControl("", Validators.required),
    "message": new FormControl("", Validators.required),
  });

  message: string = "";

  constructor() {
  }

  onSubmit() {
    console.log("we are here")
  }

  ngOnInit(): void {
  }

}
