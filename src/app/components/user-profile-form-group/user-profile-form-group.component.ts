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

  userProfileJson: IUserProfile = {
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

  constructor() {
    this.userProfileForm = new FormGroup({
      firstName: new FormControl(this.userProfileJson.firstName),
      lastName: new FormControl(this.userProfileJson.lastName),
      phones: new FormArray([new FormControl(this.userProfileJson.phones.pop())]),
      address: new FormGroup({
        country: new FormControl(this.userProfileJson.address.country),
        city: new FormControl(this.userProfileJson.address.city),
        state: new FormControl(this.userProfileJson.address.state),
        street: new FormControl(this.userProfileJson.address.street),
        zip: new FormControl(this.userProfileJson.address.zip)
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
}
