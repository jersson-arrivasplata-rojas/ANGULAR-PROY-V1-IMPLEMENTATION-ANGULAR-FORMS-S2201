import { IUserProfile } from './../../interfaces/user-profile.interface';
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
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      phones: new FormArray([new FormControl('')]),
      address: new FormGroup({
        country: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        street: new FormControl(''),
        zip: new FormControl('')
      })
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.userProfileForm.value);
  }
  addPhone() {
    (this.userProfileForm.controls['phones'] as FormArray).push(new FormControl(''));
  }

  removePhone(pos: number) {
    (this.userProfileForm.controls['phones'] as FormArray).removeAt(pos);
  }

  get phones() {
    return this.userProfileForm.controls['phones'] as FormArray;
  }

  get address() {
    return this.userProfileForm.controls['address'] as FormGroup;
  }

  setProfileValues() {

    const userProfileJson: IUserProfile = {
      firstName: 'Jersson',
      lastName: 'Arrivasplata',
      phones: ['987347691'],
      address: {
        country: 'Perú',
        city: 'Lima',
        state: 'Cercado de Lima',
        street: 'Jr. Zorritos 1134',
        zip: '15082'
      }
    };

    this.userProfileForm.setValue(userProfileJson);
  }

  clear(){
    this.userProfileForm.reset();
  }
}
