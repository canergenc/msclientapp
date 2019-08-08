import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-instant',
  templateUrl: './instant.component.html',
  styleUrls: ['./instant.component.scss']
})
export class InstantComponent implements OnInit {
  
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  mailModuleSelectStatus:any;
  smsModuleSelectStatus:string;
  
  public query3 = '';
  public staticList = [
    "guitar",
    "drums",
    "bass",
    "electric guitars",
    "keyboards",
    "mic",
    "bass guitars",
    "trumpet",
    "horns",
    "guitar workshops",
    "pedals"
  ];

  constructor(private fb: FormBuilder) { }  

  ngOnInit() {
    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });
  }
  public handleStaticResultSelected (result) {
    this.query3 = result;
  }
  firstStepClickAction(){
    this.mailModuleSelectStatus = '<i class="checkmark"></i>';
  }
  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }

}
