import { IUserProfile } from './../../interfaces/user-profile.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-user-profile-form-builder',
  templateUrl: './user-profile-form-builder.component.html',
  styleUrls: ['./user-profile-form-builder.component.css']
})
export class UserProfileFormBuilderComponent implements OnInit {

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

  userProfileForm: FormGroup = this.fb.group({
    firstName: this.userProfileJson.firstName,
    lastName: this.userProfileJson.lastName,
    phones: this.fb.array([
      this.fb.control(this.userProfileJson.phones.pop())
    ]),
    address: this.fb.group({
      country: this.fb.control(this.userProfileJson.address.country),
      city: this.fb.control(this.userProfileJson.address.city),
      state: this.fb.control(this.userProfileJson.address.state),
      street: this.fb.control(this.userProfileJson.address.street),
      zip: this.fb.control(this.userProfileJson.address.zip)
    })
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.userProfileForm.value);
  }

  addPhone() {
    (this.userProfileForm.controls['phones'] as FormArray).push(this.fb.control(''));
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
