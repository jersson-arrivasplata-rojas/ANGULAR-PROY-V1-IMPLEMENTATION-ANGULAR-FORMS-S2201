import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileFormGroupComponent } from './user-profile-form-group.component';

describe('UserProfileFormGroupComponent', () => {
  let component: UserProfileFormGroupComponent;
  let fixture: ComponentFixture<UserProfileFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileFormGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
