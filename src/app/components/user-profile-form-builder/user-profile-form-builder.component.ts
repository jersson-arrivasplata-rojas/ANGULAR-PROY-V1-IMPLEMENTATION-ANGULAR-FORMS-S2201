import { IUserProfile } from './../../interfaces/user-profile.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-user-profile-form-builder',
  templateUrl: './user-profile-form-builder.component.html',
  styleUrls: ['./user-profile-form-builder.component.css']
})
export class UserProfileFormBuilderComponent implements OnInit {

  userProfileForm: FormGroup = this.fb.group({
    firstName: '',
    lastName: '',
    phones: this.fb.array([
      this.fb.control('')
    ]),
    address: this.fb.group({
      country: this.fb.control(''),
      city: this.fb.control(''),
      state: this.fb.control(''),
      street: this.fb.control(''),
      zip: this.fb.control('')
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

  setProfileValues() {

    const userProfileJson: IUserProfile = {
      firstName: 'Jersson',
      lastName: 'Arrivasplata',
      phones: ['987347691'],
      address: {
        country: 'Perú',
        city: 'Lima',
        state: 'Cercado de Lima',
        street: 'Jr. Zorritos 1134'
      }
    };

    this.userProfileForm.patchValue(userProfileJson);
  }

  clear(){
    this.userProfileForm.reset();
  }
}
