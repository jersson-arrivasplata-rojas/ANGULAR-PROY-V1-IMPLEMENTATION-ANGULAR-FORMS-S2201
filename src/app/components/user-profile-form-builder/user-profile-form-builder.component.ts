import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile-form-builder',
  templateUrl: './user-profile-form-builder.component.html',
  styleUrls: ['./user-profile-form-builder.component.css']
})
export class UserProfileFormBuilderComponent implements OnInit {

  userProfileForm: FormGroup = this.fb.group({
    firstName: 'Jersson',
    lastName: 'Arrivasplata',
    phones: this.fb.array([
      this.fb.control('')
    ]),
    address: 'Jr. Zorritos 1134 - Cercado de Lima'
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.userProfileForm.value);
  }

}
