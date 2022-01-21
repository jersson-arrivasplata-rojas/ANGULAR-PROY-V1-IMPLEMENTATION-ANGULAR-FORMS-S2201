import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-form-group',
  templateUrl: './user-profile-form-group.component.html',
  styleUrls: ['./user-profile-form-group.component.css']
})
export class UserProfileFormGroupComponent implements OnInit {

  userProfileForm: FormGroup;

  constructor() {
    this.userProfileForm = new FormGroup({
      firstName: new FormControl('Jersson'),
      lastName: new FormControl('Arrivasplata'),
      phones: new FormArray([new FormControl('')]),
      address: new FormControl('Jr. Zorritos 1134 - Cercado de Lima')
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.userProfileForm.value);
  }
}
