import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileFormBuilderComponent } from './user-profile-form-builder.component';

describe('UserProfileFormBuilderComponent', () => {
  let component: UserProfileFormBuilderComponent;
  let fixture: ComponentFixture<UserProfileFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileFormBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
