import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileFormGroupComponent } from './components/user-profile-form-group/user-profile-form-group.component';
import { UserProfileFormBuilderComponent } from './components/user-profile-form-builder/user-profile-form-builder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF, CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileFormGroupComponent,
    UserProfileFormBuilderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
