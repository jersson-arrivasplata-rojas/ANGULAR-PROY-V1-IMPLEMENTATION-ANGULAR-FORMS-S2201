import { UserProfileFormGroupComponent } from './components/user-profile-form-group/user-profile-form-group.component';
import { UserProfileFormBuilderComponent } from './components/user-profile-form-builder/user-profile-form-builder.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'user-profile-form-builder', pathMatch: 'full' },
  { path: 'user-profile-form-builder', component: UserProfileFormBuilderComponent },
  { path: 'user-profile-form-group', component: UserProfileFormGroupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
