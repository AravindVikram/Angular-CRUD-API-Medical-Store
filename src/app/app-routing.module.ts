import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './auth.guard';
import { MedicineAddComponent } from './medicine-add/medicine-add.component';
import { MedicineEditComponent } from './medicine-edit/medicine-edit.component';

const routes: Routes = [
 { path: 'register', component: RegistrationComponent},
 { path: 'login', component: LoginComponent },
 { path: 'medicine-list', component: MedicineListComponent,canActivate: [AuthGuard] },
 { path: 'medicine-add', component: MedicineAddComponent,canActivate: [AuthGuard] },
 { path: 'medicine-edit/:id', component: MedicineEditComponent,canActivate: [AuthGuard] },
 { path: '**', redirectTo: 'medicine-list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
